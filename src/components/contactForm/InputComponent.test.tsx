import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputComponent from '@components/contactForm/InputComponent';
import { handleA11y1000FirstNumbers } from '@utils/handleA11y1000FirstNumbers';

const PLACEHOLDER_TEST_VALUE = 'email - placeholder test value';
const EMAIL_TEST_VALUE = 'test@test.test';

jest.mock('../../hooks/useText', () => ({
  useText: () => (key: string, obj: object) => obj[key as keyof typeof obj],
}));

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
    render(<InputComponent {...defaultProps} />);
    expect(
      screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE)
    ).toBeInTheDocument();
  });

  it('updates value onChange', () => {
    render(<InputComponent {...defaultProps} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect((input as HTMLInputElement).value).toBe(EMAIL_TEST_VALUE);
  });

  it('value changes when onChange is called ', () => {
    render(<InputComponent {...defaultProps} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('isReset being true resets the value', () => {
    const { rerender } = render(<InputComponent {...defaultProps} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect((input as HTMLInputElement).value).toBe(EMAIL_TEST_VALUE);
    rerender(<InputComponent {...defaultProps} isReset={true} />);
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('displays the correct aria-label based on error state and input length', () => {
    render(<InputComponent {...defaultProps} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: 'test' } });
    const expectedAriaLabel = `${handleA11y1000FirstNumbers(
      96
    )} characters remain`;
    expect(input).toHaveAttribute('aria-label', expectedAriaLabel);
  });

  it('displays an error aria-label if isError is true', () => {
    render(<InputComponent {...defaultProps} isError={true} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    const expectedAriaLabel = `Error - email is invalid`;
    expect(input).toHaveAttribute('aria-label', expectedAriaLabel);
  });

  it('fires onClick handler when the user click on an input', () => {
    render(<InputComponent {...defaultProps} />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.click(input);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('renders textarea when InputComponent is textarea', () => {
    render(<InputComponent {...defaultProps} component='textarea' />);
    const textarea = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    expect(textarea.tagName).toBe('TEXTAREA');
  });
});
