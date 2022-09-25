import { LOADINGS } from 'cnfg/namespaces'
import { useTranslation } from 'next-i18next'
import { SnackbarKey, useSnackbar } from 'notistack'

export const useLoadings = (alert = true) => {
  const { t } = useTranslation(LOADINGS)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  let key: SnackbarKey

  const cancelLoading = () => closeSnackbar(key)

  return {
    cancelLoading,
    loading: () => {
      if (alert)
        key = enqueueSnackbar(t('loading'), {
          persist: true,
          variant: 'info',
        })
    },
    success: (msg: string) => {
      cancelLoading()
      if (alert) enqueueSnackbar(msg, { variant: 'success' })
    },
    error: (err: Error, msg?: string) => {
      cancelLoading()
      console.info(err)
      if (alert) enqueueSnackbar(msg || err.message, { variant: 'error' })
    },
  }
}
