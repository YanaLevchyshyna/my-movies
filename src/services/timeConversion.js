export const timeConversion = minutes => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60; //  обчислюємо залишок хвилин, які не ввійшли в години

  return `${hours}h ${remainingMinutes}m`;
};
