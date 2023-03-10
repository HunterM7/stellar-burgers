export function dataConverter(initialDate: string) {
  const currentDate = new Date()
  const consideredDate = new Date(initialDate)
  const dayDifference = Math.abs(currentDate.getDay() - consideredDate.getDay())
  const timeDifference = Math.abs(
    currentDate.getTime() - consideredDate.getTime(),
  )
  const fullFormatDate =
    `${dateFormat(consideredDate.getDate())}.` +
    `${dateFormat(consideredDate.getMonth() + 1)}.` +
    `${consideredDate.getFullYear()}`

  let date = ''

  if (timeDifference < 259200000) {
    switch (dayDifference) {
      case 0:
        date = 'Сегодня'
        break
      case 1:
        date = 'Вчера'
        break
      case 2:
        date = '2 дня назад'
        break

      default:
        date = fullFormatDate
    }
  } else {
    date = fullFormatDate
  }

  const time =
    `${dateFormat(consideredDate.getHours())}:` +
    `${dateFormat(consideredDate.getMinutes())}`

  return `${date}, ${time}`
}

function dateFormat(sample: string | number): string {
  return `${+sample > 9 ? '' : 0}${sample}`
}
