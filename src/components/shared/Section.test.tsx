import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '@components/shared/Section';
import { usePathname } from 'next/navigation';
import { AppContext } from '@components/shared/AppContext';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockSetCurrentTopSection = jest.fn();

describe('Section component', () => {
  beforeEach(() => {
    const mockUsePathname = usePathname;

    // @ts-ignore
    mockUsePathname.mockReturnValue('/about');

    window.HTMLElement.prototype.scrollIntoView = function () {};
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    jest.mock('./AppContext', () => ({
      AppContext: React.createContext({
        currentTopSection: '',
        onChange: mockSetCurrentTopSection,
      }),
    }));

    const mockContextValue = {
      currentTopSection: 'about',
      onChange: mockSetCurrentTopSection,
    };

    render(
      <AppContext.Provider value={mockContextValue}>
        <Section currentSection='about' backgroundClassName='bg-custom'>
          <div data-testid='child-test'>Content</div>
        </Section>
      </AppContext.Provider>
    );
  });
  it('displays the Section component on the screen', () => {
    const sectionElement = screen.getByTestId('section-about');
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass('bg-about-background bg-custom');
    expect(sectionElement).not.toHaveAttribute('aria-hidden', 'true');
  });

  it('displays the child component on the screen', () => {
    const sectionElement = screen.getByTestId('child-test');
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveTextContent('Content');
    expect(sectionElement).not.toHaveTextContent('Content');
  });
});
