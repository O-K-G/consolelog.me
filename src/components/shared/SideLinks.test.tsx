import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideLinks from '@components/shared/SideLinks';
import { useText } from '@hooks/useText';
import { URLs } from '@constants/urls';

jest.mock('../../hooks/useText');
jest.mock('../../components/GHIcon', () =>
  jest.fn(() => <div>GitHub Icon</div>)
);
jest.mock('../../components/LIIcon', () =>
  jest.fn(() => <div>LinkedIn Icon</div>)
);

describe('SideLinks Component', () => {
  beforeEach(() => {
    (useText as jest.Mock).mockReturnValue((key: string, data: object) => {
      const translations = {
        navAriaLabel: 'Navigation',
        ghLinkAriaLabel: 'GitHub Link',
        liLinkAriaLabel: 'LinkedIn Link',
      };
      return translations[key as keyof typeof translations];
    });
  });

  it('should render the SideLinks component', () => {
    render(<SideLinks />);

    expect(screen.getByRole('navigation')).toHaveAttribute(
      'aria-label',
      'Navigation'
    );
  });

  const baseTest = ({
    labelText,
    url,
    iconName,
  }: {
    labelText: string;
    url: string;
    iconName: string;
  }) => {
    render(<SideLinks />);
    const linkElement = screen.getByLabelText(labelText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', url);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
    expect(linkElement).toContainElement(screen.getByText(iconName));
  };

  it('should render the GitHub link and make sure it has a noreferrer attribute', () => {
    baseTest({
      labelText: 'GitHub Link',
      url: URLs.gitHub,
      iconName: 'GitHub Icon',
    });
  });

  it('should render the LinkedIn link and make sure it has a noreferrer attribute', () => {
    baseTest({
      labelText: 'LinkedIn Link',
      url: URLs.linkedIn,
      iconName: 'LinkedIn Icon',
    });
  });
});
