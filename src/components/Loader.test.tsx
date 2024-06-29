import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '@components/Loader';

const LOADER_TEST_ID = 'loader-test';

describe('Loader Component - start', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'readyState', {
      value: 'loading',
      writable: true,
    });
  });

  it('should initially show the loader', () => {
    act(() => {
      window.dispatchEvent(new Event('load'));
    });
    render(<Loader />);
    const loader = screen.getByTestId(LOADER_TEST_ID);
    expect(loader).toBeInTheDocument();
    expect(loader.parentElement).toHaveClass('opacity-100');
  });
});

describe('Loader Component - end', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'readyState', {
      value: 'complete',
      writable: true,
    });
  });

  it('should hide the loader after the load event', async () => {
    act(() => {
      window.dispatchEvent(new Event('load'));
    });
    render(<Loader />);
    const loader = screen.getByTestId(LOADER_TEST_ID);

    expect(loader.parentElement).toHaveClass('opacity-0');
  });

  it('should remove the loader from the DOM after the transition ends', async () => {
    act(() => {
      window.dispatchEvent(new Event('load'));
    });
    render(<Loader />);
    const loader = screen.getByTestId(LOADER_TEST_ID);
    fireEvent.transitionEnd(loader.parentElement as HTMLDivElement);
    expect(loader).not.toBeInTheDocument();
  });
});
