import { Card, Grid, Typography } from '@mui/material'
import { LANDING } from 'cnfg/namespaces'
import { useTranslation } from 'next-i18next'
import { BlockCover } from 'ui'

export const Products = () => {
  const { t } = useTranslation(LANDING)

  const products: {
    [K in string]: {
      title: string
      description: string
    }
  } = t('products', { returnObjects: true })

  return (
    <BlockCover sx={{ p: 1 }}>
      <Typography textAlign="center" variant="h3">
        {t('productsTitle')}
      </Typography>
      <Grid container spacing={2}>
        {Object.values(products).map((product) => (
          <Grid xs key={product.title} item>
            <Card sx={{ p: 1 }}>
              <Typography variant="h4">{product.title}</Typography>
              <Typography variant="h6">{product.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </BlockCover>
  )
}
