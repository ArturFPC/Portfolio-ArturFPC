import { SectionTitle } from '@/app/components/section-title'
import { HorizontalSplitter } from '@/app/components/splitter/horizontal'
import { Card } from './card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const TopProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Highlights" title="Featured Projects" />
      <HorizontalSplitter className="mb-16" />
      <div>
        <Card
          project={{
            name: 'TyPython',
            src: 'https://drive.google.com/uc?id=1sVETj5kTTznqoZAvZ-yRXQH57KYfPh6L',
            text: 'This was a project carried out during the compilers course in the eighth semester of the Computer Engineering course at IFMG, Bambuí campus. I carried out this project together with two colleagues, Deivison Oliveira Costa and Mickael Osvaldo Oliveira, and through this we created a programming language inspired by Python, through the creation of three analyzers, a lexical, a syntactic and a semantic one.',
            alt: 'Thumbnail do projeto TyPython',
            link: 'https://github.com/ArturFPC/tyPython',
            techs: ['Python'],
          }}
        />
        <HorizontalSplitter className="my-16" />
        <Card
          project={{
            name: 'NLW eSports',
            src: 'https://drive.google.com/uc?id=1Iy6IV0yxv_kgTvDAMeVGphgjB-3zTZky',
            text: 'Project created during one of the NLW provided by the company RocketSeat, through this project I was able to have greater experience with WEB and Mobile development, through experiences with the main technologies that were demonstrated at this event, which in this case were React, React Native and TypeScript.',
            alt: 'Thumbnail do projeto NLW eSports',
            link: 'https://github.com/ArturFPC/nlw-eSports',
            techs: ['React', 'TypeScript'],
          }}
        />
        <HorizontalSplitter className="my-16" />
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Are you interested?</span>
          <Link href="/projects" className="inline-flex">
            See all projects
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
