import { Button } from '@mui/material'

export type ButtonProps = {
    variant: 'contained' | 'outlined' | 'text' // two styling options
    disabled?: boolean // make the button disabled or not
    text: string
    size?: 'small' | 'medium' | 'large' //button sizes
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    fullWidth?: boolean
}

export const ButtonComponent = ({
    variant,
    text,
    disabled = false,
    size = 'medium',
    color = 'primary',
    fullWidth = false,
}: ButtonProps) => (
    <Button
        variant={variant}
        disabled={disabled}
        size={size}
        color={color}
        fullWidth={fullWidth}
    >
        {text}
    </Button>
)