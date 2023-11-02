export const toTitleCase = (string: string): string => {
  if (!string) {
    return '';
  }
  return string.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
};
