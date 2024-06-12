import React, { useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useScroll } from '@hooks/useScroll';

const MockComponent = () => {
  const sectionRef = useRef(null);
  const handleScroll = useScroll();

  return (
    <>
      <button
        onClick={() => handleScroll({ sectionRef })}
        data-testid='scrollButton'
      >
        Scroll to Section
      </button>
      <div ref={sectionRef} data-testid='section'>
        Section Content
      </div>
    </>
  );
};

describe('useScroll', () => {
  test('scrolls with the correct behavior to the section', () => {
    const scrollIntoViewMock = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    render(<MockComponent />);

    const button = screen.getByTestId('scrollButton');
    fireEvent.click(button);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  });
});
