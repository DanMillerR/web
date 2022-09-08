import { Layout } from 'ui'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { SnackbarProvider } from 'notistack'
import { LocalConfig } from 'ctx'

const App = ({ Component, pageProps }: AppProps) => (
  <LocalConfig
    //@ts-ignore
    value={{
      user: {
        additionalRequiredProps: [],
        emailVerificationRequired: false,
        signInRequired: false,
      },
      //@ts-ignore
      CONTAINER_MAX_WIDTH: 'xs',
    }}
  >
    <Layout>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Layout>
  </LocalConfig>
)

export default appWithTranslation(App)
