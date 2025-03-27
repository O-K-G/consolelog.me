import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputComponent from "@components/contactForm/InputComponent";
import { default as messages } from "@i18nEn/inputComponentText.json";
import { NextIntlClientProvider } from "next-intl";

const PLACEHOLDER_TEST_VALUE = "email - placeholder test value";
const EMAIL_TEST_VALUE = "test@test.test";
const DEFAULT_LOCALE = "en";
const TEST_LABEL = "Test";

describe("InputComponent", () => {
  const defaultProps = {
    id: "email",
    placeholder: PLACEHOLDER_TEST_VALUE,
    minLength: 1,
    maxLength: 100,
    onChange: jest.fn(),
    isError: false,
    bottomSlot: null,
    isReset: false,
    onClick: jest.fn(),
  };

  it("renders InputComponent with the correct placeholder", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </NextIntlClientProvider>
    );
    expect(
      screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE)
    ).toBeInTheDocument();
  });

  it("updates value onChange", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </NextIntlClientProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect((input as HTMLInputElement).value).toBe(EMAIL_TEST_VALUE);
  });

  it("value changes when onChange is called ", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </NextIntlClientProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("isReset being true resets the value", () => {
    const { rerender } = render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </NextIntlClientProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: EMAIL_TEST_VALUE } });
    expect((input as HTMLInputElement).value).toBe(EMAIL_TEST_VALUE);
    rerender(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} isReset={true} />
      </NextIntlClientProvider>
    );
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("displays the correct aria-label based on error state and input length", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </NextIntlClientProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.change(input, { target: { value: "test" } });
    const expectedAriaLabel = "96 characters remain";
    expect(input).toHaveAttribute("aria-label", expectedAriaLabel);
  });

  it("displays an error aria-label if isError is true", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} isError={true} />
      </NextIntlClientProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    const expectedAriaLabel = `Error - email is invalid`;
    expect(input).toHaveAttribute("aria-label", expectedAriaLabel);
  });

  it("fires onClick handler when the user click on an input", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent label={TEST_LABEL} {...defaultProps} />
      </NextIntlClientProvider>
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    fireEvent.click(input);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("renders textarea when InputComponent is textarea", () => {
    render(
      <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
        <InputComponent
          label={TEST_LABEL}
          {...defaultProps}
          component="textarea"
        />
      </NextIntlClientProvider>
    );
    const textarea = screen.getByPlaceholderText(PLACEHOLDER_TEST_VALUE);
    expect(textarea.tagName).toBe("TEXTAREA");
  });
});
