import { TabPanel } from 'ui'
import { useData } from 'form'
import { TextField } from '@mui/material'

export const WithEmail = ({
    value,
    index,
}: {
    value: number
    index: number
}) => {
    const [{ email }, onInput] = useData('email', 'password')

    return (
        <TabPanel value={value} index={index}>
            <TextField value={email} onInput={onInput('email')} />
        </TabPanel>
    )
}
