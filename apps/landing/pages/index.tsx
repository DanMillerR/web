import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ContactUs } from '../components/ContactUs'
import { FirstScreen } from '../components/FirstScreen'
import { Products } from '../components/Products'

const Index = () => {
    return (
        <>
            <FirstScreen />
            <Products />
            <ContactUs />
        </>
    )
}

export default Index
export const getStaticProps = async () => ({
    props: await serverSideTranslations('en'),
})
