import { Flex, TabPanel } from 'ui'
import { useData } from 'form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { SyntheticEvent } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'fb'

export const WithEmail = ({
  value,
  index,
}: {
  value: number
  index: number
}) => {
  const { t } = useTranslation('sign-in', { keyPrefix: 'withEmail' })
  const [{ email, password }, control] = useData('email', 'password')

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <TabPanel value={value} index={index}>
      <form onSubmit={handleSubmit}>
        <Flex clmn>
          <TextField {...control('email')} placeholder={t('email')} />
          <TextField {...control('password')} placeholder={t('password')} />
          <Button type="submit">{t('submit')}</Button>
        </Flex>
      </form>
    </TabPanel>
  )
}
