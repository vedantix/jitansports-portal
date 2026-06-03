export function cn(...inputs) {
  const classes = [];

  const append = (value) => {
    if (!value) return;

    if (typeof value === 'string' || typeof value === 'number') {
      classes.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(append);
      return;
    }

    if (typeof value === 'object') {
      Object.entries(value).forEach(([className, enabled]) => {
        if (enabled) classes.push(className);
      });
    }
  };

  inputs.forEach(append);
  return classes.join(' ');
}


export const isIframe = window.self !== window.top;
