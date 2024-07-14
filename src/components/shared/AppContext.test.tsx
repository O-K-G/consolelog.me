import React, { act, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '@components/shared/AppContext';
import AppContextComponent from '@components/shared/AppContext';

const CURRENT_TOP_SECTION_TEST_ID = 'currentTopSection';
const BUTTON_TEXT = 'Change Section';
const CONTACT_SECTION_STRING = 'contact';

const ContextConsumer = () => {
  const { currentTopSection, onChange } = useContext(AppContext);

  return (
    <>
      <span data-testid={CURRENT_TOP_SECTION_TEST_ID}>{currentTopSection}</span>
      <button type='button' onClick={() => onChange(CONTACT_SECTION_STRING)}>
        {BUTTON_TEXT}
      </button>
    </>
  );
};

describe('AppContext', () => {
  test('provides the default context value', () => {
    render(
      <AppContextComponent>
        <ContextConsumer />
      </AppContextComponent>
    );

    expect(screen.getByTestId(CURRENT_TOP_SECTION_TEST_ID)).toHaveTextContent(
      'about'
    );
  });

  test('updates the context value when onChange is called', () => {
    render(
      <AppContextComponent>
        <ContextConsumer />
      </AppContextComponent>
    );

    const button = screen.getByText('Change Section');
    act(() => button.click());

    expect(screen.getByTestId(CURRENT_TOP_SECTION_TEST_ID)).toHaveTextContent(
      'contact'
    );
  });
});
