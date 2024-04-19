import React from 'react'

// style sheet
import style from './aboutus.module.css'

// data
import aboutUsData from '@/data/app/aboutus/index'

// components
import Main from '@/components/common/Main';
import Section from '@/components/common/Section';

// images

const page = () => {
  return (
    <Main>
      {/* First Section */}
      <Section >
        <div>left</div>
        <div>right</div>
      </Section>

      {/* Second Section */}
      <Section>
        <div>left</div>
        <div>right</div>
      </Section>

      {/* Third Section */}
      <Section>
        <div>left</div>
        <div>right</div>
      </Section>
    </Main>
  )
}

export default page