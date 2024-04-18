import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

// import footer.module.css
import style from './footer.module.css'

// import images
import NOPDLogo from '@/../public/assets/nopd/nopd.png'

// import footerMenuData
import footerMenuData from '@/data/components/layout/footer'

const index = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerWrapper}>
        {/* Footer Left */}
        <div className={style.footerLeft}>
          {/* NOPD Logo */}
          <div className={style.nopdLogo}>
            <Image src={NOPDLogo} alt="Nopd Logo" />
            <h1>NOPD</h1>
          </div>
          {/* NOPD Disclaimer */}
          <div className={style.disclaimer}>
            <span>
              © 2024 - NOPDHabbo.com is not affiliated with, endorsed, sponsored, or specifically approved by Sulake Corporation or its Affiliates. NOPDHabbo.com may use the trademarks and other intellectual property of Habbo, which is permitted under Habbo Fan Site Policy. NOPDHabbo.com is not affiliated with, endorsed, sponsored, or specifically approved by the NOPD or any of its child agencies or branches. All official crests, logos, seals, and relevant imagery are the property of the NOPD.
            </span>
          </div>
        </div>

        {/* Footer Right */}
        <div className={style.footerRight}>

          <div className={style.footerRightMenu}>
            <div>
              <h1>menu</h1>
            </div>
            {footerMenuData.menuItems.map((menuItem, index) => (
              <div key={index}>
                <Link href={menuItem.value}>
                  <span>{menuItem.name}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className='footerRightSocial'>
            <div>
              <h1>social media</h1>
            </div>
            {footerMenuData.socialMenuItems.map((menuItem, index) => (
              <div key={index}>
                <Link href={menuItem.value}>
                  <span>{menuItem.name}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className='footerRightLegal'>
            <div>
              <h1>legal</h1>
            </div>
            {footerMenuData.legalMenuItems.map((menuItem, index) => (
              <div key={index}>
                <Link href={menuItem.value}>
                  <span>{menuItem.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default index;