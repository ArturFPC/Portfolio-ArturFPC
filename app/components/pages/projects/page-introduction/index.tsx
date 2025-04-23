import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <div className="bg-sky-950 px-12 py-8 rounded-2xl">
        <SectionTitle
          title="My Projects"
          subtitle="projects"
          className="text-center items-center [&>h3]:text-4xl"
        />
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base ">
            On this page you can see some of the main projects that I developed
            throughout college and technical courses. Feel free to explore the
            projects that are shown below. If you are interested in seeing other
            projects developed by me, access my{' '}
            <a className="text-teal-500" href="https://github.com/ArturFPC">
              GitHub
            </a>
            .
          </p>
          <Link
            href="/"
            className="shadow-button flex flex-row items-center bg-teal-600 py-3 px-4 rounded-lg text-gray-50 justify-center gap-2 hover:bg-teal-500 transition-all disabled:opacity-50 hover:text-gray-50"
          >
            <HiArrowNarrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
