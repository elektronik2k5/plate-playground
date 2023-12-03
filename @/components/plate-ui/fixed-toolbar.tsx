import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

import { Toolbar, ToolbarProps } from './toolbar'

export const FixedToolbar = forwardRef<HTMLDivElement, ToolbarProps>(function FixedToolbar(
  { className, ...props },
  ref,
) {
  return (
    <Toolbar
      ref={ref}
      className={cn(
        'supports-backdrop-blur:bg-background/60 sticky left-0 top-[57px] z-50 w-full justify-between overflow-x-auto rounded-t-lg border-b border-b-border bg-background/95 backdrop-blur',
        className,
      )}
      {...props}
    />
  )
})
FixedToolbar.displayName = 'FixedToolbar'
