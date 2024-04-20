import React from 'react'
import Image from 'next/image'

// style sheet
import style from './style.module.css'

// data
import firstSectionData from '@/data/app/aboutus/firstSection'
import secondSectionData from '@/data/app/aboutus/secondSection'
import thirdSectionData from '@/data/app/aboutus/thirdSection'

// components
import Main from '@/components/common/Main';
import Section from '@/components/common/Section';
import Heading1 from '@/components/common/heading/Heading1'
import Heading2 from '@/components/common/heading/Heading2'
import Paragraph1 from '@/components/common/paragraph/Paragraph1'

import AvatarRightPose from '@/components/app/aboutus/AvatarRightPose'
import AvatarLeftPose from '@/components/app/aboutus/AvatarLeftPose'

// images
import NOPDBase from '@/../public/assets/nopd/app/home/nopd.png'

const page = () => {
  return (
    <Main>
      {/* First Section */}
      <Section >
        <div className={style.firstSection}>
          <Heading1>About NOPD</Heading1>

          {Object.keys(firstSectionData).map(key => (
            <div key={key} className={style.firstSectionContent}>
              <Heading2>{firstSectionData[key as keyof typeof firstSectionData].title}</Heading2>
              <Paragraph1>{firstSectionData[key as keyof typeof firstSectionData].content}</Paragraph1>
            </div>
          ))}
        </div>

        <div className={style.firstSectionRight}>
          <Image src={NOPDBase} alt="NOPDBase" width={500} height={500} />
        </div>
      </Section>

      {/* Second Section */}
      <Section className={style.secondSectionContainer}>
        <div className={style.secondSectionLeft}>
          <AvatarRightPose userName='jordeboi' position='Founder' width={160} height={20} />
        </div>
        <div className={style.secondSection}>
          {Object.keys(secondSectionData).map(key => (
            <div key={key} className={style.secondSectionContent}>
              <Heading2>{secondSectionData[key as keyof typeof secondSectionData].title}</Heading2>
              <Paragraph1>{secondSectionData[key as keyof typeof secondSectionData].content}</Paragraph1>
            </div>
          ))}
        </div>
      </Section>

      {/* Third Section */}
      <Section className={style.thirdSectionContainer}>
        <div className={style.thirdSection}>
          {Object.keys(thirdSectionData).map(key => (
            <div key={key} className={style.thirdSectionContent}>
              <Heading2>{thirdSectionData[key as keyof typeof thirdSectionData].title}</Heading2>
              <Paragraph1>{thirdSectionData[key as keyof typeof thirdSectionData].content}</Paragraph1>
            </div>
          ))}
        </div>
        <div>
          <AvatarLeftPose userName='jordeboi' position='founder' width={160} height={20} />

        </div>

      </Section>
    </Main>
  )
}

export default page