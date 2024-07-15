'use client'
import React, { useState } from 'react';

import style from './style.module.css';

import Link from 'next/link';
import Image from 'next/image';

// import data
import hereSectionData from '@/data/app/home/heroSection'
import secondSectionData from '@/data/app/home/secondSection';
import thirdSectionData from '@/data/app/home/thirdSection';
import fourSectionData from '@/data/app/home/fourSection';
import fiveSectionData from '@/data/app/home/fiveSection';
import sixSectionData from '@/data/app/home/sixSection';

// import image
import fiveSectionImage from '@/../public/assets/nopd/app/home/art_friendstream1.png'
import MinusIcon from '@/../public/assets/nopd/app/home/minusIcon.svg'
import PlusIcon from '@/../public/assets/nopd/app/home/plusIcon.svg'

// components
import Main from '@/components/common/Main'
import Section from '@/components/common/Section'

export default function Home() {

  const [hoveredImages, setHoveredImages] = useState(Array(10).fill(false)); // Assuming you have 10 images

  const handleMouseEnter = (index: number) => {
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = true;
    setHoveredImages(updatedHoveredImages);
  };

  const handleMouseLeave = (index: number) => {
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = false;
    setHoveredImages(updatedHoveredImages);
  };

  return (
    <>
      <div className={style.backgroundRectangle}>
        <div className={style.rectangleOne}></div>
        <div className={style.rectangleTwo}></div>
        <div className={style.rectangleThree}></div>
        <div className={style.rectangleFive}></div>
        <div className={style.rectangleFour}></div>
        <div className={style.rectangleSix}></div>

      </div>
      <Main >
        <Section>
          <div className={style.heroSectionLeft}>
            {/* Hero Section Heading Container */}
            <div className={style.heroSectionHeadingContainer}>
              <h1>Welcome to New Orlean’s City Police Department. </h1>
              <p>Experience nostalgia with NOPD - the top Police Roleplay game on Habbo since 2007. Dive into the action and relive the golden days!</p>
              <button>
                <span>
                  join now
                </span>
              </button>
              <div className={style.heroSectionSocialMedia}>
                {/* Map over social media data and render each platform */}
                {hereSectionData.socialMedia.map((item, index) => (
                  <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.alt} width={40} height={40} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Hero Section Right */}
          <div className={style.heroSectionRight}></div>
        </Section>

        {/* Second Section */}
        <Section >
          {Object.keys(secondSectionData).map((key) => (
            <div className={style.cardContainer} key={key}>
              <Image src={secondSectionData[key as keyof typeof secondSectionData].imgSrc} alt={secondSectionData[key as keyof typeof secondSectionData].title} width={160} height={160} />
              <h2>{secondSectionData[key as keyof typeof secondSectionData].title}</h2>
              <p>{secondSectionData[key as keyof typeof secondSectionData].description}</p>
            </div>
          ))}
        </Section>

        {/* Third Section */}
        <Section className={style.thirdSection}>
          <div className={style.thirdSectionContainer}>
            <div className={style.thirdSectionLeft}>
              {/* <WorldClock /> */}
            </div>
            <div className={style.thirdSectionRight}>
              <h2>{thirdSectionData.title}</h2>
              <p>{thirdSectionData.description}</p>
            </div>
          </div>
        </Section>

        {/* Section Four */}
        <Section className={style.fourSection} >
          <div>
            <h1>our foundation team</h1>
          </div>

          {/* four Section Data */}
          <div className={style.foundationTeam}>
            {fourSectionData.map((item, index) => (
              <div
                key={index}
                className={style.foundationTeamContainer}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Image
                  src={
                    hoveredImages[index]
                      ? `https://www.habbo.com/habbo-imaging/avatarimage?user=${item.habboUserName}&direction=3&head_direction=3&action=wav&gesture=nrm&size=m`
                      : `https://www.habbo.com/habbo-imaging/avatarimage?user=${item.habboUserName}&direction=3&head_direction=3&action=&gesture=nrm&size=m`
                  }
                  alt="habbo avatar"
                  width={130}
                  height={280}
                />
                <div>
                  <h1>{item.habboUserName}</h1>
                  <h2>{item.position}</h2>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Section Five */}
        <Section>
          <div>
            <Image src={fiveSectionImage} alt="art friendstream" width={300} height={200} />
          </div>
          <div className={style.fiveSectionHeadingContainer}>
            <h1>{fiveSectionData.title}</h1>
            <p>{fiveSectionData.description}</p>
          </div>
        </Section>

        {/* Section Six */}
        <Section>
          <div className={style.sixSectionContainer}>
            <div>
              <h1>Frequently Ask Questions</h1>
            </div>
            <div className={style.sixSectionCardsCoontainer}>

              {sixSectionData.faq.map((item, index) => (
                <div key={index} className={style.sixSectionCardContainer}>
                  <div className={style.sixSectionCollapseIcon}>
                    <Image src={MinusIcon} alt="collapse" width={20} height={20} />
                  </div>
                  <div className={style.sixSectionCardContent}>
                    <h1>{item.question}</h1>
                    <p>{item.response}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </Section>

        {/* Section Seven */}
        <Section>
          <div>
            {/* sevenSection */}
          </div>
        </Section>
      </Main>
    </>
  );
}
