interface ingredientGroupType {
	id: number
	title: string
	type: string
}

export const ingredientGroups: ingredientGroupType[] = [
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
