import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Planet from '@components/shared/Planet';
import { AppContext } from '@components/shared/AppContext';
import { CACHE_VERSION } from '@root/tailwind.config';

const PLANET_TEST_ID = 'planet-test';

jest.mock('next/image', () => (props: { alt: string }) => {
  return <img {...props} alt={props.alt} />;
});

const mockContextValue = {
  currentTopSection: '',
  onChange: () => null,
  contactSectionRef: { current: null },
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
    expect(divElement).not.toHaveClass('-rotate-90');
    expect(divElement).not.toHaveClass('-rotate-180');
  });

  it('applies the correct rotation class based on currentTopSection', () => {
    const testCases = [
      { section: 'contact', expectedClass: 'rotate-90' },
      { section: 'projects', expectedClass: 'rotate-180' },
      { section: 'skills', expectedClass: '-rotate-90' },
      { section: 'experience', expectedClass: '-rotate-180' },
    ];

    testCases.forEach(({ section, expectedClass }) => {
      render(
        <AppContext.Provider
          value={{
            onChange: () => null,
            currentTopSection: section,
            contactSectionRef: { current: null },
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
