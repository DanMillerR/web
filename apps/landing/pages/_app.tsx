import { Layout } from "ui"
import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    {/* todo */}
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(App)
