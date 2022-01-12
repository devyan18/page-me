import { onAuthStateChanged } from 'firebase_client/client'
import { useEffect, useState } from 'react'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATES.NOT_KNOW)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return user
}
