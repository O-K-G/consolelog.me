import { renderHook, act } from '@testing-library/react';
import useHandleScroll from '@hooks/useHandleScroll';

const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

describe('useHandleScroll', () => {
  beforeEach(() => jest.clearAllMocks());

  test('when disableScroll is called it should disable scroll events ', () => {
    const { result } = renderHook(() => useHandleScroll());

    act(() => {
      result.current.disableScroll();
    });

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'wheel',
      expect.any(Function),
      { passive: false }
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'touchmove',
      expect.any(Function),
      { passive: false }
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
      false
    );
  });

  test('when enableScroll is called it should enable scroll events', () => {
    const { result } = renderHook(() => useHandleScroll());

    act(() => {
      result.current.enableScroll();
    });

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'wheel',
      expect.any(Function),
      { passive: false }
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'touchmove',
      expect.any(Function),
      { passive: false }
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
      false
    );
  });

  test('should prevent scrolling when disableScroll is active', () => {
    const { result } = renderHook(() => useHandleScroll());

    const wheelEvent = new Event('wheel', { bubbles: true, cancelable: true });
    const touchMoveEvent = new Event('touchmove', {
      bubbles: true,
      cancelable: true,
    });
    const keydownEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'ArrowDown',
    });

    const preventDefaultSpy = jest.spyOn(wheelEvent, 'preventDefault');
    const preventDefaultTouchSpy = jest.spyOn(touchMoveEvent, 'preventDefault');
    const preventDefaultKeySpy = jest.spyOn(keydownEvent, 'preventDefault');

    act(() => {
      result.current.disableScroll();
    });

    window.dispatchEvent(wheelEvent);
    window.dispatchEvent(touchMoveEvent);
    window.dispatchEvent(keydownEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(preventDefaultTouchSpy).toHaveBeenCalled();
    expect(preventDefaultKeySpy).toHaveBeenCalled();
  });

  test('when enableScroll is called after disableScroll it should allow scrolling', () => {
    const { result } = renderHook(() => useHandleScroll());

    const wheelEvent = new Event('wheel', { bubbles: true, cancelable: true });
    const touchMoveEvent = new Event('touchmove', {
      bubbles: true,
      cancelable: true,
    });
    const keydownEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'ArrowDown',
    });

    const preventDefaultSpy = jest.spyOn(wheelEvent, 'preventDefault');
    const preventDefaultTouchSpy = jest.spyOn(touchMoveEvent, 'preventDefault');
    const preventDefaultKeySpy = jest.spyOn(keydownEvent, 'preventDefault');

    act(() => {
      result.current.disableScroll();
    });

    window.dispatchEvent(wheelEvent);
    window.dispatchEvent(touchMoveEvent);
    window.dispatchEvent(keydownEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(preventDefaultTouchSpy).toHaveBeenCalled();
    expect(preventDefaultKeySpy).toHaveBeenCalled();

    preventDefaultSpy.mockClear();
    preventDefaultTouchSpy.mockClear();
    preventDefaultKeySpy.mockClear();

    act(() => {
      result.current.enableScroll();
    });

    window.dispatchEvent(wheelEvent);
    window.dispatchEvent(touchMoveEvent);
    window.dispatchEvent(keydownEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(preventDefaultTouchSpy).not.toHaveBeenCalled();
    expect(preventDefaultKeySpy).not.toHaveBeenCalled();
  });
});
