import { useTranslation } from 'next-i18next'
import { SnackbarKey, useSnackbar } from 'notistack'

export const useLoadings = () => {
  const { t } = useTranslation('loadings')
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  let key: SnackbarKey

  const cancelLoading = () => closeSnackbar(key)

  return {
    cancelLoading,
    loading: () => {
      key = enqueueSnackbar(t('loading'), {
        persist: true,
        variant: 'info',
      })
    },
    success: (msg: string) => {
      cancelLoading()
      enqueueSnackbar(msg, { variant: 'success' })
    },
    error: (err: Error, msg?: string) => {
      cancelLoading()
      enqueueSnackbar(msg || err.message, { variant: 'error' })
    },
  }
}
