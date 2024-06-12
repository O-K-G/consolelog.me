import React, { LegacyRef, act, useContext, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '@components/shared/AppContext';
import AppContextComponent from '@components/shared/AppContext';

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
      <span data-testid='currentTopSection'>{currentTopSection}</span>
      <button type='button' onClick={() => onChange('contact')}>
        Change Section
      </button>
      <div
        ref={contactSectionRef as LegacyRef<HTMLDivElement>}
        data-testid='contactSectionRef'
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

    expect(screen.getByTestId('currentTopSection')).toHaveTextContent('about');
  });

  test('updates the context value when onChange is called', () => {
    render(
      <AppContextComponent>
        <ContextConsumer />
      </AppContextComponent>
    );

    const button = screen.getByText('Change Section');
    act(() => button.click());

    expect(screen.getByTestId('currentTopSection')).toHaveTextContent(
      'contact'
    );
  });

  test('updates contactSectionRef correctly', () => {
    render(
      <AppContextComponent>
        <ContextConsumer />
      </AppContextComponent>
    );

    const contactSectionElement = screen.getByTestId('contactSectionRef');

    expect(contactSectionElement).toHaveTextContent('Contact Section Element');
  });
});