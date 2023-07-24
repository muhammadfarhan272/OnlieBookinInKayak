export function incrementDateByDays(days: number): string {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = `"${currentDate.toLocaleDateString('en-US', options).replace(',', '')}"`;
  return formattedDate;
}

  