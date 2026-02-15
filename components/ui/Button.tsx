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
    'bg-wood text-white hover:bg-wood-warm shadow-lg shadow-wood/15 hover:shadow-xl hover:shadow-wood/25',
  secondary:
    'bg-white text-wood border border-cream-dark/30 hover:bg-cream hover:border-gold/30 shadow-sm',
  outline:
    'border border-white/25 text-white hover:bg-white/[0.08] hover:border-white/40',
  gold:
    'bg-gold text-bark font-bold hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25',
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
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer min-h-[44px] min-w-[44px]'

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
