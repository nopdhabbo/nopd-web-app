import React from 'react'

// import style
import style from './style.module.css'

import Image from 'next/image';


interface IndexProps {
  image: string;
  duration: string
  badgeName: string;
  children: React.ReactNode;
}


const Index: React.FC<IndexProps> = ({ image, badgeName, duration, children }) => {
  return (
    <div className={style.card}>
      <div className={style.cardHead}>
        <Image src={image} alt="nopd" width={39} height={39} />
        <h1 className={style.cardHeading}>
          {badgeName}
        </h1>
        <h2 className={style.cardHeading2}>
          [Promotion Duration: {duration}]
        </h2>
      </div>
      <div className={style.cardBody}>
        {children}
      </div>
    </div>
  )
}

export default Index