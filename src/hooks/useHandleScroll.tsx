const KEYS_MAP = [
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
  'ArrowLeft',
  'Home',
  'End',
  'PageUp',
  'PageDown',
];

/** This function must be on a more global scope,
 * or it creates another instance and the event isn't removed (at least on Chrome Dev Tools - mobile resolution). */
const handleDefault = (e: TouchEvent | WheelEvent) => e.preventDefault();

export default function useHandleScroll() {
  const passive = {
    passive: false,
  } as EventListenerOptions;

  const preventDefaultForScrollKeys = (e: {
    key: string;
    preventDefault: () => void;
  }) => {
    const { key } = e || {};

    if (KEYS_MAP.includes(key)) {
      e.preventDefault();
      return false;
    }
  };

  const disableScroll = () => {
    window.addEventListener('wheel', handleDefault, passive);
    window.addEventListener('touchmove', handleDefault, passive);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  };

  const enableScroll = () => {
    window.removeEventListener('wheel', handleDefault, passive);
    window.removeEventListener('touchmove', handleDefault, passive);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  };

  return { disableScroll, enableScroll };
}
