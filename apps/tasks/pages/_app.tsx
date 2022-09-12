import { Layout } from 'ui'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { LocalConfig } from 'ctx'

const App = ({ Component, pageProps }: AppProps) => (
  <LocalConfig>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </LocalConfig>
)

export default appWithTranslation(App)
