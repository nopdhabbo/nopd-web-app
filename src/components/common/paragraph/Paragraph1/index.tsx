import React from 'react'

// import style
import style from './paragraph.module.css'

interface Props {
  children: React.ReactNode;
}

const Index: React.FC<Props> = ({ children }) => {
  return (
    <p className={style.paragraph}>{children}</p>
  )
}

export default Index