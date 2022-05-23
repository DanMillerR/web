import { Button, Grid, Typography } from '@mui/material'
import { SocialNetworkProps, socials } from 'cnfg'
import { useTranslation } from 'next-i18next'

const SocialNetworkLink = ({ text, href, Icon }: SocialNetworkProps) => {
    return (
        <Grid item>
            <Button
                sx={{
                    flexDirection: 'column',
                    '& .text': {
                        overflow: 'hidden',
                        transition: '100ms linear',
                        height: 0,
                    },
                    '&:hover .text': { height: '1em' },
                }}
            >
                <Icon />
                <Typography className="text">{text}</Typography>
            </Button>
        </Grid>
    )
}

export const InSocials = () => {
    const { t } = useTranslation('landing', { keyPrefix: 'contactUs' })

    return (
        <>
            <Typography textAlign="center" variant="subtitle1">
                {t('inSocials')}
            </Typography>
            <Grid spacing={1} justifyContent="center" container>
                {socials.map((props) => (
                    <SocialNetworkLink {...props} />
                ))}
            </Grid>
        </>
    )
}
