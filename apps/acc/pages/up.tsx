import { useData } from 'form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { SyntheticEvent } from 'react'
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'fb'
import { doc, setDoc } from 'firebase/firestore'
import { db } from 'fb'

const Up = () => {
    const { t } = useTranslation('sign-up', { keyPrefix: 'with-email' })
    const [{ name, email, password }, control] = useData(
        'email',
        'name',
        'password'
    )

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then(
            async ({ user }) => {
                await setDoc(doc(db, 'users/' + user.uid), {
                    email,
                    password,
                    name,
                })

                await updateProfile(user, { displayName: name })
            }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField required {...control('name')} placeholder={t('name')} />
            <TextField
                required
                {...control('email')}
                placeholder={t('email')}
            />
            <TextField
                required
                {...control('password')}
                placeholder={t('password')}
            />
            <Button type="submit">{t('submit')}</Button>
        </form>
    )
}

export default Up
