import { SectionTitle } from '@/app/components/section-title'
import {
  TbBrandReact,
  TbBrandCpp,
  TbBrandCss3,
  TbBrandNextjs,
  TbBrandPython,
  TbHtml,
  TbAssembly,
  TbBrandReactNative,
  TbBrandFlutter,
  TbBrandMysql,
  TbSql,
  TbBrandTypescript,
} from 'react-icons/tb'
import { FaCuttlefish, FaRProject } from 'react-icons/fa'
import { KnownTech } from './known-tech'
export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Skills" title="Knowledge" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        <KnownTech
          tech={{
            icon: <TbBrandTypescript />,
            name: 'TypeScript',
            years: '2',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandReact />,
            name: 'React',
            years: '2',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandFlutter />,
            name: 'Flutter',
            years: '2',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandNextjs />,
            name: 'Next.js',
            years: '2',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandCpp />,
            name: 'C++',
            years: '5',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandPython />,
            name: 'Python',
            years: '5',
          }}
        />
        <KnownTech
          tech={{
            icon: <FaRProject />,
            name: 'R',
            years: '1',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbHtml />,
            name: 'HTML',
            years: '7',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandCss3 />,
            name: 'CSS',
            years: '7',
          }}
        />
        <KnownTech
          tech={{
            icon: <FaCuttlefish />,
            name: 'C',
            years: '1',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandReactNative />,
            name: 'React Native',
            years: '1',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbSql />,
            name: 'SQL',
            years: '7',
          }}
        />
      </div>
    </section>
  )
}
