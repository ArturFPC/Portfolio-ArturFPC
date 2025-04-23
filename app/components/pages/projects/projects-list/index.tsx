import Link from 'next/link'
import { ProjectCard } from './project-card'

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <a href="https://github.com/ArturFPC/tyPython">
        <ProjectCard
          project={{
            name: 'TyPython',
            alt: 'Thumbnail TyPython',
            img: 'https://raw.githubusercontent.com/ArturFPC/tyPython/master/logo-TyPython.png',
            text: 'This was a project carried out during the compilers course in the eighth semester of the Computer Engineering course at IFMG, Bambuí campus. I carried out this project together with two colleagues, Deivison Oliveira Costa and Mickael Osvaldo Oliveira, and through this we created a programming language inspired by Python, through the creation of three analyzers, a lexical, a syntactic and a semantic one.',
            techs: 'Python',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/nlw-eSports">
        <ProjectCard
          project={{
            name: 'NLW eSports',
            alt: 'Thumbnail NLW eSports',
            img: 'https://raw.githubusercontent.com/ArturFPC/nlw-eSports/main/nlweSports.png',
            text: 'Project created during one of the NLW provided by the company RocketSeat, through this project I was able to have greater experience with WEB and Mobile development, through experiences with the main technologies that were demonstrated at this event, which in this case were React, React Native and TypeScript.',
            techs: 'React, JavaScript, HTML, CSS',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/NLW-IA">
        <ProjectCard
          project={{
            name: 'NLW IA',
            alt: 'Thumbnail NLW IA',
            img: 'https://raw.githubusercontent.com/ArturFPC/NLW-IA/main/nlw-ia.jpg',
            text: "Project that I developed during Rocketseat's NLW-IA, the initial objective of the project is to create a web application that summarizes YouTube Shorts through artificial intelligence, for this purpose several technologies were used, mainly Node.js. Two AI models were used during development, one to generate text from the Shorts audio and the other to summarize the generated text.",
            techs: 'React, Node.js, Artificial Inteligence',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/Wavelets">
        <ProjectCard
          project={{
            name: 'Wavelets',
            alt: 'Thumbnail Wavelets',
            img: 'https://raw.githubusercontent.com/ArturFPC/Wavelets/main/wavelets.jpg',
            text: 'Project developed during the digital image processing discipline in the eighth period of the Computer Engineering course, through this project I was able to learn several concepts about Wavelets and I was also able to program some software that makes use of them, software that is useful in pre-processing, image compression, among other things.',
            techs: 'Python, Wavelets',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/Beecrowd">
        <ProjectCard
          project={{
            name: 'Beecrowd',
            alt: 'Thumbnail Beecrowd',
            img: 'https://raw.githubusercontent.com/ArturFPC/Beecrowd/main/beecrowd.png',
            text: 'This project is a set of resolutions to solved problems on the Beecrowd platform. In the repository that includes the resolutions, there are only some of the most basic ones. If you are interested in more resolutions, check out my profile on the Beecrowd website.',
            techs: 'C++',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC?tab=repositories">
        <ProjectCard
          project={{
            name: 'Grafos',
            alt: 'Thumbnail Grafos',
            img: 'https://raw.githubusercontent.com/ArturFPC/Grafo-Algoritmo-Floyd-Warshall/main/grafos.jpeg',
            text: 'This section is dedicated to the graph resolution algorithms that I developed during the Programming Techniques course in the sixth period, it includes the following algorithms: Djikstra, Prim, Floyd-Warshall and Breadth-First Search.',
            techs: 'C++',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/DiskBTree-SerialCurrency">
        <ProjectCard
          project={{
            name: 'Disk B-Tree',
            alt: 'Thumbnail Disk B-Tree',
            img: 'https://raw.githubusercontent.com/ArturFPC/DiskBTree-SerialCurrency/main/arvoreB.jpeg',
            text: 'This is a B-tree implementation designed to be used on disk, made using a typed file, where the values ​​inserted into this structure must be of type serialCurrency. The code is written in C++ and includes detailed documentation and comments to aid in understanding and implementation.',
            techs: 'C++',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/Socket-HTTP-Multithreaded">
        <ProjectCard
          project={{
            name: 'Socket HTTP Multithread',
            alt: 'Thumbnail Socket',
            img: 'https://raw.githubusercontent.com/ArturFPC/Socket-HTTP-Multithreaded/main/socket.jpeg',
            text: "Implementation of a multithreaded web server, capable of responding to requests from a web browser. Its use is based on running the socket on the desktop, and making an HTTP request through the browser to the computer's address on port 3000.",
            techs: 'C++',
          }}
        />
      </a>
      <a href="https://github.com/ArturFPC/SnakeGame">
        <ProjectCard
          project={{
            name: 'Snake Game',
            alt: 'Thumbnail Snake Game',
            img: 'https://raw.githubusercontent.com/ArturFPC/SnakeGame/main/snakegame.jpeg',
            text: 'Game developed in Java during the object-oriented programming course, the objective of creating this game was to absorb the content of the course and be able to practice programming skills.',
            techs: 'Java',
          }}
        />
      </a>
    </section>
  )
}
