import { googleAuthProvider, auth, signInWithPopup ,signOut } from '../firebase/firebaseConfig'


export const login = () => {
    return signInWithPopup(auth,googleAuthProvider);
}

export const logout = () => {
    return signOut(auth);
}