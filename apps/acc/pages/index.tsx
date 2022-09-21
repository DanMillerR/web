// SIGN IN

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SyntheticEvent, useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { signInVariants } from 'cnfg/acc'
import { ACCOUNT_ENTRY, LOADINGS, UI } from 'cnfg/namespaces'

const Variants = ({
  value,
  onChange,
}: {
  value: number
  onChange: (ev: SyntheticEvent, newValue: number) => void
}) => {
  const { t } = useTranslation(ACCOUNT_ENTRY)

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

const Screens = ({ value }: { value: number }) => (
  <>
    {signInVariants.map(({ index, Component }) => (
      <Component value={value} index={index} key={index} />
    ))}
  </>
)

const Index = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_: SyntheticEvent, newValue: number) =>
    setValue(newValue)

  return (
    <>
      <Variants value={value} onChange={handleChange} />
      <Screens value={value} />
    </>
  )
}

export default Index
export const getStaticProps = async () => ({
  props: await serverSideTranslations('en', [ACCOUNT_ENTRY, LOADINGS, UI]),
})
