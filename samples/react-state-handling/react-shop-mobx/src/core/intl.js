export function toCurrency(amount) {
  if (!amount) {
    return amount;
  }
  const numberFormat = Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
  });
  return numberFormat.format(amount);
}

export function toPercentage(amount) {
  if (!amount) {
    return amount;
  }
  const numberFormat = Intl.NumberFormat('nl-BE', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${numberFormat.format(amount)}`;
}
