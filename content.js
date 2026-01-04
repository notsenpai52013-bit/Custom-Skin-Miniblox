// Miniblox Custom Skin

(() => {
  'use strict';

  const KEY = 'miniblox_custom_skin_url';
  const skinUrl = localStorage.getItem(KEY);
  if (!skinUrl) return;

  console.log('[Miniblox Skin] Loaded:', skinUrl);

  const original = Object.getOwnPropertyDescriptor(
    HTMLImageElement.prototype,
    'src'
  );

  let applied = false;

  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    set(value) {
      if (
        !applied &&
        typeof value === 'string' &&
        /skin|player|character|avatar/i.test(value)
      ) {
        applied = true;
        console.log('[Miniblox Skin] Applied');
        return original.set.call(this, skinUrl);
      }
      return original.set.call(this, value);
    },
    get() {
      return original.get.call(this);
    }
  });
})();
