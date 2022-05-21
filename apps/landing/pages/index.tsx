import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FirstScreen } from '../components/FirstScreen'
import { Products } from '../components/Products'

const Index = () => {
    return (
        <>
            <FirstScreen />
            <Products />
        </>
    )
}

export default Index
export const getStaticProps = async () => ({
    props: await serverSideTranslations('en'),
})
