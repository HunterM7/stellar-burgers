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

  const date = (() => {
    if (timeDifference < 259200000) {
      switch (dayDifference) {
        case 0:
          return 'Сегодня'
        case 1:
          return 'Вчера'
        case 2:
          return '2 дня назад'

        default:
          return fullFormatDate
      }
    } else {
      return fullFormatDate
    }
  })()

  const time =
    `${dateFormat(consideredDate.getHours())}:` +
    `${dateFormat(consideredDate.getMinutes())}`

  return `${date}, ${time}`
}

function dateFormat(sample: string | number): string {
  return `${+sample > 9 ? '' : 0}${sample}`
}
