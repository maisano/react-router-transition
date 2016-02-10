import { spring } from 'react-motion';

export default function ensureSpring(styles) {
  return Object.keys(styles).reduce((acc, key) => {
    const value = styles[key];
    acc[key] = typeof value === 'number'
      ? spring(value)
      : value;
    return acc;
  }, {});
}
