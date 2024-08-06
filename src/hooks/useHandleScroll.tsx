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

/** These functions must be on a module scope,
 * or they create more instances and the events aren't removed (at least on Chrome Dev Tools - mobile resolution). */
const handleDefault = (e: TouchEvent | WheelEvent) => e.preventDefault();

const handleKeys = (e: { key: string; preventDefault: () => void }) => {
  const { key, target } = (e as KeyboardEvent) || {};
  const { tagName } = (target as HTMLElement) || {};

  if (KEYS_MAP.includes(key)) {
    if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  }
};

export default function useHandleScroll() {
  const passive = {
    passive: false,
  } as EventListenerOptions;

  const disableScroll = () => {
    window.addEventListener('wheel', handleDefault, passive);
    window.addEventListener('touchmove', handleDefault, passive);
    window.addEventListener('keydown', handleKeys, false);
  };

  const enableScroll = () => {
    window.removeEventListener('wheel', handleDefault, passive);
    window.removeEventListener('touchmove', handleDefault, passive);
    window.removeEventListener('keydown', handleKeys, false);
  };

  return { disableScroll, enableScroll };
}
