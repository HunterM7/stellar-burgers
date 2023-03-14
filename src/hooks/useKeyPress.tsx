import { useEffect } from 'react'

const useKeyPress = (key: string, func: () => void) => {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === key) {
        func()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [key, func])
}

export default useKeyPress
