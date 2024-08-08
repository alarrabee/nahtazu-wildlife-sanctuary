type FormatDate = (date: Date | string | number) => string;

export const formatDate: FormatDate = (date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};
