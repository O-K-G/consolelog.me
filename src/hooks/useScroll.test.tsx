import React, { useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useScroll } from '@hooks/useScroll';

const SCROLL_BUTTON_TEST_ID = 'scrollButton';

const MockComponent = () => {
  const sectionRef = useRef(null);
  const handleScroll = useScroll();

  return (
    <>
      <button
        onClick={() => handleScroll({ sectionRef })}
        data-testid={SCROLL_BUTTON_TEST_ID}
      >
        Scroll to Section
      </button>
      <div ref={sectionRef}>Section Content</div>
    </>
  );
};

describe('useScroll', () => {
  test('scrolls with the correct behavior to the section', () => {
    const scrollIntoViewMock = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    render(<MockComponent />);

    const button = screen.getByTestId(SCROLL_BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  });
});
