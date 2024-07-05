import React, { type ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dialog, { DIALOG_TEST_ID } from '@components/shared/dialog/Dialog';
import { AppContext } from '@components/shared/AppContext';

const MODAL_CONTENT = 'Mock Modal Content';
const ROLE = 'dialog';

const mockContextValue = {
  currentTopSection: 'about',
  onChange: jest.fn(),
  onModalContentChange: jest.fn(),
  onCloseModal: jest.fn(),
  contactSectionRef: { current: null },
  modalRef: { current: null },
  modalContent: <div>{MODAL_CONTENT}</div>,
};

function renderWithContext(component: ReactNode) {
  return render(
    <AppContext.Provider value={mockContextValue}>
      {component}
    </AppContext.Provider>
  );
}

describe('Dialog Component', () => {
  it('renders <Modal /> content when a content is provided', () => {
    renderWithContext(<Dialog />);

    const modal = screen.getByTestId(DIALOG_TEST_ID);
    expect(modal).toBeInTheDocument();
    expect(screen.getByText(MODAL_CONTENT)).toBeInTheDocument();
  });

  it('does not render if modalContent is null', () => {
    const mockContextValueWithNullContent = {
      ...mockContextValue,
      modalContent: null,
    };

    render(
      <AppContext.Provider value={mockContextValueWithNullContent}>
        <Dialog />
      </AppContext.Provider>
    );

    expect(screen.queryByRole(ROLE)).not.toBeInTheDocument();
  });
});
