import React, { type MutableRefObject } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '@components/shared/AppContext';
import ContactMeButton, {
  CONTACT_ME_BUTTON_TEST_ID,
} from '@components/shared/ContactMeButton';

// Mocking the useScroll hook
jest.mock('../../hooks/useScroll', () => ({
  useScroll: jest.fn(),
}));

// Mocking the useText hook
jest.mock('../../hooks/useText', () => ({
  useText: jest.fn(),
}));

describe('ContactMeButton', () => {
  const mockHandleScroll = jest.fn();
  const mockUseScroll = require('../../hooks/useScroll').useScroll;
  const mockUseText = require('../../hooks/useText').useText;

  beforeEach(() => {
    mockHandleScroll.mockClear();
    mockUseScroll.mockReturnValue(mockHandleScroll);
    mockUseText.mockReturnValue((key: string) => key);
  });

  test('calls handleScroll with the correct ref when clicked', () => {
    const contactSectionRef = {
      current: document.createElement('div'),
    } as MutableRefObject<HTMLElement | null>;

    render(
      <AppContext.Provider
        value={{
          onChange: () => null,
          currentTopSection: 'about',
          contactSectionRef,
        }}
      >
        <ContactMeButton />
      </AppContext.Provider>
    );

    const button = screen.getByTestId(CONTACT_ME_BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(mockHandleScroll).toHaveBeenCalledWith({
      sectionRef: contactSectionRef.current,
    });
  });
});
