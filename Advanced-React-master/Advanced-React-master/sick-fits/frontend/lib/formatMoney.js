export default function formatMoney(amount = 0) {
  const opitons = {
    style: 'currency',
    currency: 'BGN',
    minimumFractionDigits: 2,
  };

  const formatter = Intl.NumberFormat(`en-US`, opitons);

  return formatter.format(amount / 100);
}
