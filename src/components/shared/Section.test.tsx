import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '@components/shared/Section';
import { usePathname } from 'next/navigation';
import { AppContext } from '@components/shared/AppContext';

const CHILD_TEST_ID = 'child-test';
const SECTION_ABOUT_TEST_ID = 'section-about';

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
      topSectionRefs: { current: [] },
      currentTopSection: 'about',
      onChange: mockSetCurrentTopSection,
    };

    render(
      <AppContext.Provider value={mockContextValue}>
        <Section currentSection='about'>
          <div data-testid={CHILD_TEST_ID}>Content</div>
        </Section>
      </AppContext.Provider>
    );
  });
  it('displays the Section component on the screen', () => {
    const sectionElement = screen.getByTestId(SECTION_ABOUT_TEST_ID);
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).not.toHaveAttribute('aria-hidden', 'true');
    expect(sectionElement).toHaveClass(
      'bg-black flex flex-col items-center justify-start w-full overflow-x-hidden overflow-y-auto px-4 pb-4'
    );
  });

  it('displays the child component on the screen', () => {
    const sectionElement = screen.getByTestId(CHILD_TEST_ID);
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveTextContent('Content');
    expect(sectionElement).not.toHaveTextContent('content');
  });
});
