import React from 'react'
import Image from 'next/image'

// import style
import style from './style.module.css'

import NopdImage from '@/../public/assets/nopd/nopd.png'

const index = () => {
  return (
    <div>
      <Image src={NopdImage} alt='NopdImage' width={50} height={50} />
    </div>
  )
}

export default index