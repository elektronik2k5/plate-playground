import { PlateContent } from '@udecode/plate-common'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

import type { PlateContentProps } from '@udecode/plate-common'
import type { VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const editorVariants = cva(
  cn(
    'relative overflow-x-auto whitespace-pre-wrap break-words',
    'min-h-[80px] w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none',
    '[&_[data-slate-placeholder]]:text-muted-foreground [&_[data-slate-placeholder]]:!opacity-100',
    '[&_[data-slate-placeholder]]:top-[auto_!important]',
    '[&_strong]:font-bold',
  ),
  {
    variants: {
      variant: {
        outline: 'border border-input',
        ghost: '',
      },
      focused: {
        true: 'ring-2 ring-ring ring-offset-2',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      focusRing: {
        true: 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        false: '',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'outline',
      focusRing: true,
      size: 'sm',
    },
  },
)

export type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>

export const Editor = forwardRef<HTMLDivElement, EditorProps>(function Editor(
  { className, disabled, focused, focusRing, readOnly = false, size, variant, ...props },
  ref,
) {
  return (
    // <div ref={ref} className="relative w-full">
    <PlateContent
      className={cn(
        editorVariants({
          disabled,
          focused,
          focusRing,
          size,
          variant,
        }),
        className,
      )}
      disableDefaultStyles
      readOnly={disabled ?? readOnly}
      aria-disabled={disabled}
      ref={ref}
      {...props}
    />
    // </div>
  )
})
