import React from 'react';
import { SCROLLABLE_ITEM_TEST_ID } from '@components/shared/scrollableSection/ScrollableSubsectionItem';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollableSubsection, {
  LEFT_BUTTON_TEST_ID,
  RIGHT_BUTTON_TEST_ID,
} from '@components/shared/scrollableSection/ScrollableSubsection';

beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect,
  })) as any;
});

beforeEach(() => {
  global.HTMLDivElement.prototype.scrollTo = jest.fn();
});

describe('ScrollableSubsection', () => {
  test('renders children properly', () => {
    render(
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <div>Item 1</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 2</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 3</div>
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  test('Initially the left button is disabled and the right button is enabled', () => {
    render(
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <div>Item 1</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 2</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 3</div>
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    );

    const leftButton = screen.getByTestId(LEFT_BUTTON_TEST_ID);
    const rightButton = screen.getByTestId(RIGHT_BUTTON_TEST_ID);

    expect(leftButton).toBeDisabled();
    expect(rightButton).not.toBeDisabled();
  });

  test('updates selected subsection when clicking the right button and the left button is enabled', () => {
    render(
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <div>Item 1</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 2</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 3</div>
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    );

    const rightButton = screen.getByTestId(RIGHT_BUTTON_TEST_ID);
    fireEvent.click(rightButton);

    expect(screen.getByTestId(LEFT_BUTTON_TEST_ID)).not.toBeDisabled();
  });

  test('right button is enabled when clicking the left button and it updates the selected subsection', () => {
    render(
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <div>Item 1</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 2</div>
        </ScrollableSubsection.Item>
        <ScrollableSubsection.Item>
          <div>Item 3</div>
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    );

    const rightButton = screen.getByTestId(RIGHT_BUTTON_TEST_ID);
    fireEvent.click(rightButton);

    const leftButton = screen.getByTestId(LEFT_BUTTON_TEST_ID);
    fireEvent.click(leftButton);

    expect(leftButton).toBeDisabled();
  });

  test('ScrollableSubsectionItem renders properly', () => {
    render(
      <ScrollableSubsection>
        <ScrollableSubsection.Item>Item 1</ScrollableSubsection.Item>
      </ScrollableSubsection>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    const item = screen.getByTestId(SCROLLABLE_ITEM_TEST_ID);
    expect(item).toHaveClass(
      'h-full snap-center min-w-full flex items-center justify-start flex-col gap-24'
    );
  });
});
