// SIGN IN

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SyntheticEvent, useState } from 'react'
import { WithEmail } from '../components/in/WithEmail'
import { Tabs, Tab } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { signInVariants } from 'cnfg/acc'

const Variants = ({
  value,
  onChange,
}: {
  value: number
  onChange: (ev: SyntheticEvent, newValue: number) => void
}) => {
  const { t } = useTranslation('sign-in')

  return (
    <>
      <Tabs value={value} onChange={onChange}>
        {signInVariants.map(({ labelKey }) => (
          <Tab key={labelKey} label={t(labelKey)} />
        ))}
      </Tabs>
    </>
  )
}

const Screens = ({ value }: { value: number }) => {
  return (
    <>
      {signInVariants.map(({ index, Component, labelKey }) => (
        <Component value={value} index={index} key={index} />
      ))}
    </>
  )
}

const Index = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Variants value={value} onChange={handleChange} />
      <Screens value={value} />
    </>
  )
}

export default Index
export const getStaticProps = async () => ({
  props: await serverSideTranslations('en'),
})
