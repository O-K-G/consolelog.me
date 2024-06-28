import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DialogBackdrop from '@components/shared/DialogBackdrop';
import DialogComponent from '@components/shared/DialogComponent';
import ErrorDialogMeesage from '@components/shared/ErrorDialogMessage';

const TITLE = 'Error';
const DIALOG_DATA_TEST_ID = 'dialog-backdrop-test';
const ERROR_DETAILS_DATA_TEST_ID = 'error-details-test';
const NO_ERROR_DETAILS_FOUND = 'No error details found.';

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

const details = 'Detailed error.';

HTMLDialogElement.prototype.showModal = jest.fn();
HTMLDialogElement.prototype.close = jest.fn();

describe('DialogBackdrop and DialogComponent components', () => {
  test('renders DialogBackdrop when open is true', () => {
    render(
      <DialogBackdrop
        open={true}
        onClose={jest.fn()}
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details={details} />}
      />
    );
    expect(screen.getByTestId(DIALOG_DATA_TEST_ID)).toBeInTheDocument();
  });

  test('should not render DialogBackdrop when open is false', () => {
    const { container } = render(
      <DialogBackdrop
        open={false}
        onClose={jest.fn()}
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details={details} />}
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
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details={details} />}
      />
    );

    const dialogBackdrop = screen.getByRole('presentation');
    fireEvent.click(dialogBackdrop);
    fireEvent.animationEnd(dialogBackdrop);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  test('should close the dialog when Escape key is pressed', async () => {
    const onClose = jest.fn();
    render(
      <DialogBackdrop
        open={true}
        onClose={onClose}
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details={details} />}
      />
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    fireEvent.animationEnd(screen.getByRole('presentation'));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  test("Displays ErrorDialog's error details correctly", () => {
    render(
      <DialogComponent
        ref={React.createRef()}
        isFade={true}
        onClick={jest.fn()}
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details={details} />}
      />
    );
    expect(screen.getByTestId(ERROR_DETAILS_DATA_TEST_ID)).toHaveTextContent(
      details
    );
  });

  test('Default message displayed by ErrorDialog when no error details are provided', () => {
    render(
      <DialogComponent
        ref={React.createRef()}
        isFade={true}
        onClick={jest.fn()}
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details='' />}
      />
    );
    expect(screen.getByTestId(ERROR_DETAILS_DATA_TEST_ID)).toHaveTextContent(
      NO_ERROR_DETAILS_FOUND
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
        title={TITLE}
        contentSlot={<ErrorDialogMeesage details={details} />}
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
