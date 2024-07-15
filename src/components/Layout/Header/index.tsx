import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

// import header.module.css
import style from './header.module.css'

// import images
import NOPDLogo from '@/../public/assets/nopd/nopd.png'

import navigationMenuData from '@/data/components/layout/header'


const index = () => {
  return (
    <div className={style.navigationContainer}>
      <div className={style.navigationWrapper}>

        {/* NOPD Logo */}
        <div className={style.navigationLogo}>
          <Image src={NOPDLogo} alt="Nopd Logo" />
          <h1>NOPD</h1>
        </div>

        {/* Navigation Menu */}
        <div className={style.navigationMenu}>

          {navigationMenuData.map((menuItem, index) => (
            <Link className={style.navigationMenuText} key={index} href={menuItem.value}> {/* Use Link component and specify the URL */}
              <span>{menuItem.name}</span> {/* Wrap the menu item text in an anchor tag */}
            </Link>
          ))}
        </div>

        {/* Navigaiton Buttons */}
        <div className={style.navigationButtons}>
          {/* Security Button */}
          <div className={style.navigationMenuTextSecurity}>
            <span >Security</span>
          </div>
          {/* Login Button */}
          <button className={style.loginButton}>
            Log in
          </button>
        </div>

      </div>
    </div>
  )
}

export default index