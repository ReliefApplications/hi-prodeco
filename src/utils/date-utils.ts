export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const getDayMonthYear = (date: Date) => {
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};
