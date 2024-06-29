import React, { LegacyRef, act, useContext, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '@components/shared/AppContext';
import AppContextComponent from '@components/shared/AppContext';

const CURRENT_TOP_SECTION_TEST_ID = 'currentTopSection';
const CONTACT_SECTION_REF_TEST_ID = 'contactSectionRef';

const ContextConsumer = () => {
  const { currentTopSection, onChange, contactSectionRef } =
    useContext(AppContext);

  useEffect(() => {
    if (contactSectionRef.current) {
      contactSectionRef.current.textContent = 'Contact Section Element';
    }
  }, [contactSectionRef]);

  return (
    <>
      <span data-testid={CURRENT_TOP_SECTION_TEST_ID}>{currentTopSection}</span>
      <button type='button' onClick={() => onChange('contact')}>
        Change Section
      </button>
      <div
        ref={contactSectionRef as LegacyRef<HTMLDivElement>}
        data-testid={CONTACT_SECTION_REF_TEST_ID}
      />
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

  test('updates contactSectionRef correctly', () => {
    render(
      <AppContextComponent>
        <ContextConsumer />
      </AppContextComponent>
    );

    const contactSectionElement = screen.getByTestId(
      CONTACT_SECTION_REF_TEST_ID
    );

    expect(contactSectionElement).toHaveTextContent('Contact Section Element');
  });
});
