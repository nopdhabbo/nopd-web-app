import React from 'react'

// import style
import style from './style.module.css'

const index = () => {
  return (
    <div className={style.dotSpinner}>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
      <div className={style.dotSpinnerDot}></div>
    </div>
  )
}

export default index