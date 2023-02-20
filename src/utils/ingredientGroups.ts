interface IIngredientGroup {
  title: string
  type: string
}

export const ingredientGroups: IIngredientGroup[] = [
  {
    title: 'Булки',
    type: 'bun',
  },
  {
    title: 'Соусы',
    type: 'sauce',
  },
  {
    title: 'Начинки',
    type: 'main',
  },
]
