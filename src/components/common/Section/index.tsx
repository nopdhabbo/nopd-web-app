import React from 'react'

// style sheet
import style from './section.module.css'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Index: React.FC<Props> = ({ className, children, ...restProps }) => {
  return (
    <section className={`${className}`} {...restProps}>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Index