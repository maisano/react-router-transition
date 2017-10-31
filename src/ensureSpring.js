import spring from './spring';

export default function ensureSpring(styles, springConfig) {
  return Object.keys(styles).reduce((acc, key) => {
    const value = styles[key];
    acc[key] = typeof value === 'number' ? spring(value, springConfig) : value;
    return acc;
  }, {});
}
