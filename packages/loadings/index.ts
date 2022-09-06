import { useTranslation } from 'next-i18next'
import { SnackbarKey, useSnackbar } from 'notistack'

export const useLoadings = () => {
  const { t } = useTranslation('loadings')
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  let key: SnackbarKey

  return {
    loading: () => {
      key = enqueueSnackbar(t('loading'), {
        persist: true,
        variant: 'info',
      })
    },
    success: (msg: string) => {
      closeSnackbar(key)
      enqueueSnackbar(msg, { variant: 'success' })
    },
    error: (err: Error, msg?: string) => {
      closeSnackbar(key)
      enqueueSnackbar(msg || err.message, { variant: 'error' })
    },
  }
}
