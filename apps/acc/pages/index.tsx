import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SyntheticEvent, useState } from 'react'
import { WithEmail } from '../components/in/WithEmail'
import { Tabs, Tab } from '@mui/material'
import { useTranslation } from 'next-i18next'

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
                <Tab label={t('withEmail')} />
                <Tab label={t('withPhone')} />
            </Tabs>
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
            <WithEmail value={value} index={0} />
        </>
    )
}

export default Index
export const getStaticProps = async () => ({
    props: await serverSideTranslations('en'),
})
