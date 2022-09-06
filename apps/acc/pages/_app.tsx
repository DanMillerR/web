import { Layout } from 'ui'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { SnackbarProvider } from 'notistack'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  </Layout>
)

export default appWithTranslation(App)
