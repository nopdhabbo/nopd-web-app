import React from 'react'

// import style
import style from './style.module.css'

// import components
import Main from '@/components/common/Main'
import Section from '@/components/common/Section'
import Heading1 from '@/components/common/heading/Heading1'


import RankCard from '@/components/app/ranks/RankCard'
// import images

import Ranks from '@/data/app/ranks/Ranks'


const page = () => {
  return (
    <Main className={style.rankMain}>
      <Section >
        <Heading1>About NOPD</Heading1>
      </Section>
      <Section >

        <div className={style.rankCardContainer}>
          {Ranks.map((rank, index) => (
            <div key={index} >
              <RankCard
                image={rank.badgeImage}
                badgeName={rank.badgeName}
                duration={rank.duration}
              >
                {/* Iterate over ranks and display them */}
                {rank.ranks.map((individualRank, rankIndex) => (
                  <div key={rankIndex}>{individualRank}</div>
                ))}
              </RankCard>
            </div>
          ))}
        </div>
      </Section>
    </Main>
  )
}

export default page