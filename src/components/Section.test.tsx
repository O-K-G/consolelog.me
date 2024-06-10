'use client';

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';
import { usePathname } from 'next/navigation';
import { AppContext } from './AppContext';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockSetCurrentTopSection = jest.fn();

describe('Section component', () => {
  it('displays the Section component on the screen', () => {
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
          <div>Content</div>
        </Section>
      </AppContext.Provider>
    );

    const sectionElement = screen.getByTestId('section-about');
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass('bg-about-background bg-custom');
    expect(sectionElement).not.toHaveAttribute('aria-hidden', 'true');
  });
});
