import { Layout } from 'ui'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout useBlockCover={false}>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(App)
