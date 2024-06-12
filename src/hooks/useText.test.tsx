import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useText } from '@hooks/useText';

const MockComponent = ({ val }: { val: string }) => {
  const translations = {
    hello: 'Hello',
    goodbye: 'Goodbye',
  };
  const t = useText();
  return <div data-testid='translation'>{t(val, translations)}</div>;
};

describe('useText', () => {
  test('returns the correct text for a key', () => {
    render(<MockComponent val='hello' />);
    expect(screen.getByTestId('translation')).toHaveTextContent('Hello');
  });

  test("returns a key and logs an error if it's invalid", () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<MockComponent val='invalidKey' />);
    expect(screen.getByTestId('translation')).toHaveTextContent('invalidKey');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "No 'invalidKey' translation key found."
    );

    consoleErrorSpy.mockRestore();
  });
});
