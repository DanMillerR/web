import { useUser } from 'acc'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Task } from '../types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Flex } from 'ui'

const Index = () => {
    //@ts-ignore
    const [, { tasks }] = useUser()

    return (
        <>
            {Object.values(tasks as Record<string, Task>).map(
                ({ title, img, text, id }) => (
                    <Card sx={{ display: 'flex' }} key={id}>
                        {img && (
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={img}
                            />
                        )}
                        <CardContent>
                            <Flex clmn>
                                <Typography variant="h4">{title}</Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {text}
                                </Typography>
                            </Flex>
                        </CardContent>{' '}
                    </Card>
                )
            )}
        </>
    )
}

export default Index
export const getStaticProps = async () => ({
    props: await serverSideTranslations('en'),
})
