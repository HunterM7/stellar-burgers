import { useEffect } from 'react'

const useKeyPress = (key: string, func: () => void) => {
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === key) {
			func()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress)

		return () => {
			document.removeEventListener(
				'keydown',
				handleKeyPress,
			)
		}
	}, [])
}

export default useKeyPress
