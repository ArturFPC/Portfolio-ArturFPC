import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências" title="Professional Experience" />
        <p className="text-gray-400 mt-6 text-justify">
          Recently graduated in Computer Engineering, I currently work as a
          Junior Full Stack Developer at a software factory. I have strong
          programming skills and experience with Web and Mobile development,
          APIs, and databases. My journey as a programmer began during my
          technical high school program in IT, where I quickly developed a
          passion for the field. Throughout my undergraduate studies, I was able
          to improve my development skills both inside and outside the
          classroom. I’m always seeking opportunities to apply my knowledge and
          grow professionally.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem
          item={{
            name: 'Dacta',
            start: 'sep 2024',
            end: 'now',
            src: 'https://drive.google.com/uc?id=1f4-zDaNbPBMM5yL2rimqGLfqmV1qf1f_',
            job: 'Junior Full Stack Developer',
            about:
              'I work with Web development using React and TypeScript, Mobile development with Flutter, and backend development with two APIs — one in Java and the other using NestJS — connected to a PostgreSQL database.',
            techs: [
              'TypeScript',
              'Flutter',
              'React',
              'Java',
              'NestJs',
              'PostgreSql',
            ],
            link: 'https://www.linkedin.com/company/dacta-tecnologias-personalizadas/',
            alt: 'Logo Dacta',
          }}
        />
        <ExperienceItem
          item={{
            name: 'NegocIA',
            start: 'mar 2024',
            end: 'jan 2025',
            src: 'https://drive.google.com/uc?id=124Vsv_bpnz_ExA3PKBtXphI9nWmFx24n',
            job: 'Data Analytics and AI Intern',
            about:
              'I participated in a project focused on applying Artificial Intelligence to financial data analysis, in collaboration with EMBRAPII and the company NegocIA. My work involved data preprocessing and labeling, as well as training and evaluating models based on decision trees (Random Forest, Gradient Boosting) and neural networks, particularly the Transformer model. I also implemented the POCID metric for performance evaluation. The project used the Darts library and provided in-depth experience with time series and the financial market.',
            techs: ['Python'],
            link: 'https://www.linkedin.com/company/polo-de-inova%C3%A7%C3%A3o-ifmg/',
            alt: 'NegocIA SINAL project logo',
          }}
        />
        <ExperienceItem
          item={{
            name: 'Realtec',
            start: 'jul 2018',
            end: 'jul 2018',
            src: 'https://drive.google.com/uc?id=1cPV5MZFK7xXgvxpsH0gxeGNW_7wAfqYp',
            job: 'Intern in the development team',
            about:
              'During the internship, a parallel project was developed to that of the development team, based on the systems made by the company. The tools Delphi, MySQL and Firebird were used to develop this project.',
            techs: ['Pascal', 'MySQL'],
            link: 'https://www.linkedin.com/company/realtecsolucaoemgestao/',
            alt: 'Logo Realtec',
          }}
        />
        <ExperienceItem
          item={{
            name: 'IFMG - Reitoria',
            start: 'jan 2019',
            end: 'fev 2019',
            src: 'https://drive.google.com/uc?id=1u5HMdLTOBEytD4cj3i3L1EgwNU7SCnc2',
            job: 'Intern in the support and maintenance team',
            about:
              'Work in the support and maintenance sector, within the various activities related to the maintenance of computers linked to the IFMG, Rectory servers.',
            techs: ['Computer maintenance'],
            link: 'https://www.linkedin.com/school/ifmgnarede/',
            alt: 'Logo IFMG',
          }}
        />
      </div>
    </section>
  )
}
