import React from 'react'
import HeroTitle from '../../Components/HeroTitle'
import Circle from '../../Components/Circle'
import ProjectCard from '../../Components/ProjectCard'
import HContact from '../../Components/HContact'

function Home() {
  return (
    <div>
        <HeroTitle />
        <Circle />
        <ProjectCard />
        <HContact />
    </div>
  )
}

export default Home