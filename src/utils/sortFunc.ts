export function sortFunc<T>(arr: T[], dragIndex: number, hoverIndex: number) {
  const newArr = [...arr]
  const item = arr[dragIndex]

  newArr.splice(dragIndex, 1)
  newArr.splice(hoverIndex, 0, item)

  return newArr
}
