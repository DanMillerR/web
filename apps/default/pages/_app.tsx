import { Layout } from "ui"
import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    {/* todo */}
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </Layout>
)

export default App
