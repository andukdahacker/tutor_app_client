export function debounce(callback: () => void, delay: number) {
  let timeout: number;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(callback, delay);
  };
}
