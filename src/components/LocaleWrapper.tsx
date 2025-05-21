'use client'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

// English-only: remove locale logic, always use LTR and primary font
export function LocaleWrapper({ children }: Props) {
  return (
    <div className="font-primary" dir="ltr">
      {children}
    </div>
  )
}