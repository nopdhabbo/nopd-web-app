import React from 'react'

// style sheet
import style from './main.module.css'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Index: React.FC<Props> = ({ className, children, ...restProps }) => {
  return (
    <main className={`${style.mainContainer} ${className}`} {...restProps}>
      {children}
    </main>
  )
}

export default Index;
