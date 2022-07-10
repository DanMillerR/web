import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export const Link = ({
  href,
  next,
  ...props
}: MuiLinkProps & {
  href: NextLinkProps['href']
  next: Omit<NextLinkProps, 'href'>
}) => (
  <NextLink passHref {...{ ...next, href }}>
    <MuiLink {...props}>{props.children}</MuiLink>
  </NextLink>
)
