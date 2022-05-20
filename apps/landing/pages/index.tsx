import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Index = () => {
  return <>LAYOUT</>
}

export default Index
export const getStaticProps = async () => ({
  props: await serverSideTranslations("en"),
})
