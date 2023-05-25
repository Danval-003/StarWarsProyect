import React from 'react'
import { logos } from '@images'
import {
  headerContainer,
  logoC,
  logoContainer,
  iconsContainer,
  ulIcons,
  facebook,
  instagram,
  youtube,
  twitter,
  otherSocial,
  buttonsContainer,
  searchButton,
  searchContainer,
  searchText,
  singButton,
  bottomContainer,
  ulTextBottom,
  ilTexted,
  lastTextContainer,
} from './Header.module.css'

const Header = () => (
  <div>
    <div className={headerContainer}>
      <div className={iconsContainer}>
        <ul className={ulIcons}>
          <li className={facebook} />
          <li className={instagram} />
          <li className={youtube} />
          <li className={twitter} />
          <li className={otherSocial}>
            <img
              src='https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15'
              alt='kids'
            />
          </li>
        </ul>
      </div>
      <div className={logoContainer}>
        <img src={logos[0]} alt='Hello' className={logoC} />
      </div>
      <div className={buttonsContainer}>
        <div className={searchContainer}>
          <button className={searchButton} type='button' aria-label='submit' />
          <p className={searchText}>Search</p>
        </div>
        <div className={searchContainer}>
          <button className={singButton} type='button' aria-label='submit' />
          <p className={searchText}>Sign in</p>
        </div>
      </div>
    </div>
    <div className={bottomContainer}>
      <ul className={ulTextBottom}>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>news + Features</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>video</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>films</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>series</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>interactive</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>Community</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>databank</a>
        </li>
        <li className={ilTexted}>
          <a href='https://www.starwars.com/news'>disney+</a>
        </li>
      </ul>
    </div>
    <div className={lastTextContainer}>
      <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
    </div>
  </div>
)

export default Header
