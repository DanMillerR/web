import { auth } from 'fb'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const signIn = (
  email: string,
  password: string,
  successFn: () => void,
  catchFn: (err: FirebaseError) => void
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(successFn)
    .catch(catchFn)
}
