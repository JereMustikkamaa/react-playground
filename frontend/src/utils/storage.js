const storageKey = 'loggedUser'

export const saveUser = (user) => localStorage.setItem(storageKey, JSON.stringify(user))

export const loadUser = () => JSON.parse(localStorage.getItem(storageKey))

export const logoutUser = () => localStorage.removeItem(storageKey)