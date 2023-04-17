export function numberFormatter(number: number) {
  return number
    .toString()
    .split(/(?=(?:...)*$)/)
    .join(' ')
}
