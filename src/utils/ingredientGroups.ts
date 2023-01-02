interface IngredientGroupType {
	id: number
	title: string
	type: string
}

export const ingredientGroups: IngredientGroupType[] = [
	{
		id: 1,
		title: 'Булки',
		type: 'bun',
	},
	{
		id: 2,
		title: 'Соусы',
		type: 'sauce',
	},
	{
		id: 3,
		title: 'Начинки',
		type: 'main',
	},
]
