'use client'
import React from 'react'

// import style
import style from './style.module.css'

// import components
import LoadingImage from '@/components/default/loading/LoadingImage'
import Loader from '@/components/default/loading/Loader'

const loading = () => {
  return (
    <div className={style.Loading}>
      <LoadingImage />
      <Loader />
    </div>
  )
}

export default loading