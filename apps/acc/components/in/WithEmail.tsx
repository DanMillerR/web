import { Flex, TabPanel } from 'ui'
import { useData } from 'form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { SyntheticEvent } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'fb'
import { useLoadings } from 'loadings'

export const WithEmail = ({
  value,
  index,
}: {
  value: number
  index: number
}) => {
  const { t } = useTranslation('sign-in', { keyPrefix: 'withEmail' })
  const [{ email, password }, control] = useData('email', 'password')
  const { loading, error, success } = useLoadings()

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()

    loading()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => success('(T) SUCCESS'))
      .catch(error)
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
