import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import assign from 'object-assign-deep'
import { DEFAULT_LOCALE } from 'cnfg'

export const translation: (
  namespaces: string[],
  getStaticProps?: GetStaticProps
) => GetStaticProps = (namespaces, getStaticProps) => async (ctx) =>
  assign(
    {
      props: await serverSideTranslations(
        ctx.locale || DEFAULT_LOCALE,
        namespaces
      ),
    },
    getStaticProps && getStaticProps(ctx)
  )
