import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => <></>

export default Index
export const getStaticProps = async () => ({
    props: await serverSideTranslations('en'),
})
