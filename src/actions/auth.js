import { googleAuthProvider, auth, signInWithPopup ,signOut } from '../firebase/firebaseConfig'


export const login = () => {
    return signInWithPopup(auth,googleAuthProvider);
}

export const loginAction = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => {
    return signOut(auth);
}

export const logoutAction = () => ({
    type: 'LOGOUT'
})