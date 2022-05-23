import {
    useTheme,
    Box,
    Button,
    Grid,
    IconButton,
    Typography,
} from '@mui/material'
import { emails, SocialNetworkProps, socials } from 'cnfg'
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

const EmailPresent = ({
    category,
    email,
}: {
    category: string
    email: string
}) => (
    <Box sx={{ m: 'auto', display: 'flex', flexDirection: 'column' }}>
        <Typography textAlign="center" variant="subtitle1">
            {category}
        </Typography>
        <Typography textAlign="center" variant="h6">
            {email}
        </Typography>
    </Box>
)

const ViaEmail = () => {
    const { t } = useTranslation('landing', { keyPrefix: 'contactUs' })

    return (
        <>
            <Typography textAlign="center" variant="h5">
                {t('viaEmail.title')}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {Object.entries(emails).map(([category, email]) => (
                    <EmailPresent category={category} email={email} />
                ))}
            </Box>
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
            <ViaEmail />
        </Box>
    )
}
