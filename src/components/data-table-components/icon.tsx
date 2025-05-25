import { cn } from '@/lib/utils'
import { FC } from 'react'

export type Props = {
  /** Provide an icon name from a Phosphor library */
  name: string
  className?: string
}

export const Icon: FC<Props> = ({ name, className }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <i className={cn(`ph-bold ph-${name} leading-none`, className)} />
  )
}
