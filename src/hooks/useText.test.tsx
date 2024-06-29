import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useText } from '@hooks/useText';

const TRANSLATION_TEST_ID = 'translation';

const MockComponent = ({ val }: { val: string }) => {
  const translations = {
    hello: 'Hello',
    goodbye: 'Goodbye',
  };
  const t = useText();
  return <div data-testid={TRANSLATION_TEST_ID}>{t(val, translations)}</div>;
};

describe('useText', () => {
  test('returns the correct text for a key', () => {
    render(<MockComponent val='hello' />);
    expect(screen.getByTestId(TRANSLATION_TEST_ID)).toHaveTextContent('Hello');
  });

  test("returns a key and logs an error if it's invalid", () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<MockComponent val='invalidKey' />);
    expect(screen.getByTestId(TRANSLATION_TEST_ID)).toHaveTextContent(
      'invalidKey'
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "No 'invalidKey' translation key found."
    );

    consoleErrorSpy.mockRestore();
  });
});
