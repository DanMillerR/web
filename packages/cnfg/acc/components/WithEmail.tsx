import { Flex, TabPanel } from 'ui'
import { useData } from 'form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useState, SyntheticEvent } from 'react'
import { useLoadings } from 'loadings'
import { signIn, signUp } from 'acc'

export const WithEmail = ({
  value,
  index,
}: {
  value: number
  index: number
}) => {
  const { t } = useTranslation('sign-in', { keyPrefix: 'withEmail' })
  const [{ email, password, name }, control] = useData(
    'email',
    'password',
    'name'
  )
  const { loading, cancelLoading, error, success } = useLoadings()
  const [signInFailed, setSignedInFailed] = useState(false)

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()

    loading()
    if (signInFailed)
      signUp(
        {
          email,
          password,
          name,
        },
        () => success('(T) SIGNED UP'),
        error
      )
    else
      signIn(
        email,
        password,
        () => success('(T) SIGNED IN'),
        (err) => {
          if (err.code == 'auth/user-not-found') {
            cancelLoading()
            setSignedInFailed(true)
          } else error(err)
        }
      )
  }

  const signInDisabled = !name && !password
  const signUpDisabled = signInFailed && !name
  const disabled = signInDisabled || signUpDisabled

  return (
    <TabPanel value={value} index={index}>
      <form onSubmit={handleSubmit}>
        <Flex clmn>
          <TextField {...control('email')} placeholder={t('email')} />
          <TextField {...control('password')} placeholder={t('password')} />
          {signInFailed && (
            <TextField {...control('name')} placeholder={t('name')} />
          )}
          <Button disabled={disabled} type="submit">
            {t('submit')}
          </Button>
        </Flex>
      </form>
    </TabPanel>
  )
}
