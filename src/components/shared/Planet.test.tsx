import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Planet, { PLANET_TEST_ID } from '@components/shared/Planet';
import { AppContext } from '@components/shared/AppContext';
import { CACHE_VERSION } from '@root/tailwind.config';

jest.mock('next/image', () => (props: { alt: string }) => {
  return <img {...props} alt={props.alt} />;
});

const mockContextValue = {
  topSectionRefs: { current: [] },
  currentTopSection: '',
  onChange: () => null,
};

describe('Planet component', () => {
  it('renders correctly without rotation class', () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <Planet />
      </AppContext.Provider>
    );

    const planetElement = screen.getByTestId(PLANET_TEST_ID);
    expect(planetElement).toBeInTheDocument();
    expect(planetElement).toHaveAttribute(
      'src',
      `/planet.webp?cacheVersion=${CACHE_VERSION}`
    );

    const divElement = planetElement.parentElement;
    expect(divElement).not.toHaveClass('rotate-90');
    expect(divElement).not.toHaveClass('rotate-180');
    expect(divElement).not.toHaveClass('rotate-270');
  });

  it('applies the correct rotation class based on currentTopSection', () => {
    const testCases = [
      { section: 'skills', expectedClass: 'rotate-90' },
      { section: 'projects', expectedClass: 'rotate-180' },
      { section: 'experience', expectedClass: 'rotate-270' },
    ];

    testCases.forEach(({ section, expectedClass }) => {
      render(
        <AppContext.Provider
          value={{
            topSectionRefs: { current: [] },
            onChange: () => null,
            currentTopSection: section,
          }}
        >
          <Planet />
        </AppContext.Provider>
      );

      const planetElement = screen.getByTestId(PLANET_TEST_ID);
      const divElement = planetElement.parentElement;
      expect(divElement).toHaveClass(expectedClass);
      cleanup();
    });
  });
});
