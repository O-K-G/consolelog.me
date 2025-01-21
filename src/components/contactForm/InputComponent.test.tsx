import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputComponent from '@components/contactForm/InputComponent';
import { IntlProvider } from 'next-intl';
import { default as messages } from '@i18nEn/inputComponentText.json';

const PLACEHOLDER_TEST_VALUE = 'email - placeholder test value';
const EMAIL_TEST_VALUE = 'test@test.test';
const DEFAULT_LOCALE = 'en';
const TEST_LABEL = 'Test';

describe('InputComponent', () => {
  const defaultProps = {
    id: 'email',
    placeholder: PLACEHOLDER_TEST_VALUE,
    minLength: 1,
    maxLength: 100,
    onChange: jest.fn(),
    isError: false,
    bottomSlot: null,
    isReset: false,
    onClick: jest.fn(),
  };

  it('renders InputComponent with the correct placeholder', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </IntlProvider>
    );
    expect(
      screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE)
    ).toBeInTheDocument();
  });

  it('updates value onChange', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </IntlProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect((input as HTMLInputElement).value).toBe(EMAIL_TEST_VALUE);
  });

  it('value changes when onChange is called ', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </IntlProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('isReset being true resets the value', () => {
    const { rerender } = render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </IntlProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect((input as HTMLInputElement).value).toBe(EMAIL_TEST_VALUE);
    rerender(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} isReset={true} />
      </IntlProvider>
    );
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('displays the correct aria-label based on error state and input length', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </IntlProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: 'test' } });
    const expectedAriaLabel = '96 characters remain';
    expect(input).toHaveAttribute('aria-label', expectedAriaLabel);
  });

  it('displays an error aria-label if isError is true', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} isError={true} />
      </IntlProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    const expectedAriaLabel = `Error - email is invalid`;
    expect(input).toHaveAttribute('aria-label', expectedAriaLabel);
  });

  it('fires onClick handler when the user click on an input', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </IntlProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.click(input);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('renders textarea when InputComponent is textarea', () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent
          label={TEST_LABEL}
          {...defaultProps}
          component="textarea"
        />
      </IntlProvider>
    );
    const textarea = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    expect(textarea.tagName).toBe('TEXTAREA');
  });
});
