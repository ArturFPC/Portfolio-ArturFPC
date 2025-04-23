import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { ReactNode } from 'react'

type KnownTechProps = {
  tech: {
    icon: ReactNode
    name: string
    years: string
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-teal-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>{tech.years} years of experience</span>
    </div>
  )
}
