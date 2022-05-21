import { Box, Card, Grid, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => {
    const { t } = useTranslation('landing')

    const products: {
        [K in string]: {
            title: string
            description: string
        }
    } = t('products', { returnObjects: true })

    return (
        <>
            <Box
                sx={{
                    backgroundSize: 'cover',
                    backgroundImage: "url('/pictures/paris.jpg')",
                }}
            >
                <Typography color="#fff" variant="h1">
                    {t('mainTitle')}
                </Typography>
            </Box>
            <Box>
                <Typography textAlign="center" variant="h3">
                    {t('productsTitle')}
                </Typography>
                <Grid container spacing={2}>
                    {Object.values(products).map((product) => (
                        <Grid xs key={product.title} item>
                            <Card>
                                <Typography variant="h4">
                                    {product.title}
                                </Typography>
                                <Typography variant="h6">
                                    {product.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Index
export const getStaticProps = async () => ({
    props: await serverSideTranslations('en'),
})
