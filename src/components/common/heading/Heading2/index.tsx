import React from 'react'

// import style
import style from './heading.module.css'

interface Props {
  children: React.ReactNode;
}

const Index: React.FC<Props> = ({ children }) => {
  return (
    <h1 className={style.heading}>{children}</h1>
  )
}

export default Index