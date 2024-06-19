import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DialogBackdrop from '@components/shared/DialogBackdrop';
import ErrorDialog from '@components/shared/ErrorDialog';

jest.mock('../../hooks/useText', () => ({
  useText: () => (key: string | number, obj: { [x: string]: any }) => obj[key],
}));

jest.mock('../../hooks/useDisableScroll', () => {
  const handleDisableScroll = jest.fn();
  return {
    useDisableScroll: () => ({
      handleDisableScroll,
    }),
    __esModule: true,
  };
});

const errorDetails = 'Detailed error.';

HTMLDialogElement.prototype.showModal = jest.fn();
HTMLDialogElement.prototype.close = jest.fn();

describe('DialogBackdrop and ErrorDialog components', () => {
  test('renders DialogBackdrop when open is true', () => {
    render(
      <DialogBackdrop
        open={true}
        onClose={jest.fn()}
        errorDetails={errorDetails}
      />
    );
    expect(screen.getByTestId('test-error-dialog')).toBeInTheDocument();
  });

  test('should not render DialogBackdrop when open is false', () => {
    const { container } = render(
      <DialogBackdrop
        open={false}
        onClose={jest.fn()}
        errorDetails={errorDetails}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  test('should handle click event to close the dialog', async () => {
    const onClose = jest.fn();
    render(
      <DialogBackdrop
        open={true}
        onClose={onClose}
        errorDetails={errorDetails}
      />
    );

    const dialogBackdrop = screen.getByRole('presentation');
    fireEvent.click(dialogBackdrop);
    fireEvent.animationEnd(dialogBackdrop);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  test("Displays ErrorDialog's error details correctly", () => {
    render(
      <ErrorDialog
        ref={React.createRef()}
        isFade={true}
        onClick={jest.fn()}
        errorDetails={errorDetails}
      />
    );
    expect(screen.getByTestId('error-details-test')).toHaveTextContent(
      errorDetails
    );
  });

  test('Default message displayed by ErrorDialog when no error details are provided', () => {
    render(
      <ErrorDialog
        ref={React.createRef()}
        isFade={true}
        onClick={jest.fn()}
        errorDetails=''
      />
    );
    expect(screen.getByTestId('error-details-test')).toHaveTextContent(
      'No error details found.'
    );
  });

  test('calls handleDisableScroll on open and close', async () => {
    const { useDisableScroll } = require('../../hooks/useDisableScroll');
    const { handleDisableScroll } = useDisableScroll();
    const onClose = jest.fn();

    render(
      <DialogBackdrop
        open={true}
        onClose={onClose}
        errorDetails={errorDetails}
      />
    );
    expect(handleDisableScroll).toHaveBeenCalledWith(true);

    const dialogBackdrop = screen.getByRole('presentation');
    fireEvent.click(dialogBackdrop);
    fireEvent.animationEnd(dialogBackdrop);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
    expect(handleDisableScroll).toHaveBeenCalledWith(false);
  });
});
