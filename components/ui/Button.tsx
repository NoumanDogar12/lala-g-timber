import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'gold'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-wood text-white hover:bg-wood-light',
  secondary:
    'bg-cream text-wood hover:bg-gold-light/30',
  outline:
    'border-2 border-wood text-wood hover:bg-wood hover:text-white',
  gold:
    'bg-gold text-white hover:bg-gold-dark',
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 cursor-pointer min-h-[44px] min-w-[44px]'

  const styles = `${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
