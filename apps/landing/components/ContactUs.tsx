import {
    useTheme,
    Box,
    Button,
    Grid,
    IconButton,
    Typography,
} from '@mui/material'
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

const InSocials = () => {
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

export const ContactUs = () => {
    const { t } = useTranslation('landing', { keyPrefix: 'contactUs' })
    const { palette } = useTheme()
    
    return (
        <Box sx={{ p: 1, backgroundColor: palette.grey[200] }}>
            <Typography textAlign="center" variant="h4">
                {t('title')}
            </Typography>
            <InSocials />
        </Box>
    )
}
