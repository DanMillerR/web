import { auth, db } from 'fb'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { UserData } from '../types'

export const signUp = (
  data: UserData,
  successFn: () => void,
  catchFn: (err: Error) => void
) => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async ({ user }) => {
      await setDoc(doc(db, 'users/' + user.uid), data).catch(catchFn)

      await updateProfile(user, { displayName: data.name })
        .then(successFn)
        .catch(catchFn)
    })
    .catch(catchFn)
}
