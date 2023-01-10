interface IngredientGroupType {
  title: string
  type: string
}

export const ingredientGroups: IngredientGroupType[] = [
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
