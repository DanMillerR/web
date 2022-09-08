import { useData } from 'form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { SyntheticEvent } from 'react'
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from 'fb'
import { doc, setDoc } from 'firebase/firestore'
import { useLoadings } from 'loadings'
import { Flex } from 'ui'

const Up = () => {
  const { t } = useTranslation('sign-up', { keyPrefix: 'with-email' })
  const [{ name, email, password }, control] = useData(
    'email',
    'name',
    'password'
  )
  const { loading, success, error } = useLoadings()

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()

    loading()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await setDoc(doc(db, 'users/' + user.uid), {
          email,
          password,
          name,
        }).catch(error)

        await updateProfile(user, { displayName: name })
          .then(() => success('(T) SUCCESS'))
          .catch(error)
      })
      .catch(error)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex clmn>
        <TextField required {...control('name')} placeholder={t('name')} />
        <TextField required {...control('email')} placeholder={t('email')} />
        <TextField
          required
          {...control('password')}
          placeholder={t('password')}
        />
        <Button type="submit">{t('submit')}</Button>
      </Flex>
    </form>
  )
}

export default Up
