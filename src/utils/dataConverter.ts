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
    if (timeDifference < 86400000)
      return dayDifference === 0 ? 'Сегодня' : 'Вчера'

    if (timeDifference < 172800000)
      return dayDifference === 1 ? 'Вчера' : '2 дня назад'

    if (timeDifference < 259200000)
      return dayDifference === 2 ? '2 дня назад' : fullFormatDate

    return fullFormatDate
  })()

  const time =
    `${dateFormat(consideredDate.getHours())}:` +
    `${dateFormat(consideredDate.getMinutes())}`

  return `${date}, ${time}`
}

function dateFormat(sample: string | number): string {
  return `${+sample > 9 ? '' : 0}${sample}`
}
