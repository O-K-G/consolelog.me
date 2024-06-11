/** There is currently no plan for an i18n implementation, but in case there is in the future,
 * the JSON files' base structure should be ready, instead of being hardcoded.
 * Either way it saves long hardcoded text from entering the code itself.
 */

export function useText() {
  const t = (key: string, obj: object) => {
    const objKey = obj[key as keyof typeof obj];

    if (objKey) {
      return objKey;
    } else {
      console.error(`No '${key}' translation key found.`);
      return key;
    }
  };

  return t;
}
