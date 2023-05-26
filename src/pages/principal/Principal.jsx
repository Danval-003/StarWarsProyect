import React from 'react'
import {
  top,
  mediumPr,
  mediumPr2,
  topMedium,
  bottomMedium,
  bottom,
  vision1,
} from '@images'
import imagesTotry from '@imageCardsMedium'
import { StarwarsCard, Carousel, Header, RadButton } from '@components'
import {
  containCarouselMediumBotton,
  complement,
  containsTop,
  topCss,
  mediumCss,
  mediumBottomCss,
  textIntro,
  textIntro2,
  buttonArrow,
  iconsContainer,
  otherSocial,
  twitter,
  youtube,
  instagram,
  facebook,
  ulIcons,
  footer,
  visionsSquare,
} from './Principal.module.css'

const imagesBottom = () => {
  const size = bottom.length - 1
  const listImg = []

  for (let i = 0; i < size; i += 3) {
    listImg.push(
      <div className={containCarouselMediumBotton}>
        <div className={complement} />
        <StarwarsCard imagen={bottom[i]} text='' />
        <StarwarsCard imagen={bottom[i + 1]} text='' />
        <StarwarsCard imagen={bottom[i + 2]} text='' />
      </div>,
    )
  }
  listImg.push(
    <div className={containCarouselMediumBotton}>
      <div className={complement} />
      <StarwarsCard imagen={bottom[size]} text='' />
    </div>,
  )

  return listImg
}

const imagesBottomMedium = () => {
  const size = bottomMedium.length
  const listImg = []

  for (let i = 0; i < size; i += 3) {
    listImg.push(
      <div className={containCarouselMediumBotton}>
        <div className={complement} />
        <StarwarsCard
          imagen={bottomMedium[i].img}
          text={bottomMedium[i].text}
        />
        <StarwarsCard
          imagen={bottomMedium[i + 1].img}
          text={bottomMedium[i + 1].text}
        />
        <StarwarsCard
          imagen={bottomMedium[i + 2].img}
          text={bottomMedium[i + 2].text}
        />
      </div>,
    )
  }
  return listImg
}

const imagesMedium = () => {
  const size = imagesTotry.length
  const listImg = []

  for (let i = 0; i < size; i += 3) {
    listImg.push(
      <div className={containCarouselMediumBotton}>
        <div className={complement} />
        <StarwarsCard imagen={imagesTotry[i].img} text={imagesTotry[i].text} />
        <StarwarsCard
          imagen={imagesTotry[i + 1].img}
          text={imagesTotry[i + 1].text}
        />
        <StarwarsCard
          imagen={imagesTotry[i + 2].img}
          text={imagesTotry[i + 2].text}
        />
      </div>,
    )
  }
  return listImg
}

const imagesTopMedium = () => {
  const size = topMedium.length
  const listImg = []

  for (let i = 0; i < size; i += 3) {
    listImg.push(
      <div className={containCarouselMediumBotton}>
        <div className={complement} />
        <StarwarsCard imagen={topMedium[i].img} text={topMedium[i].text} />
        <StarwarsCard
          imagen={topMedium[i + 1].img}
          text={topMedium[i + 1].text}
        />
        <StarwarsCard
          imagen={topMedium[i + 2].img}
          text={topMedium[i + 2].text}
        />
      </div>,
    )
  }
  return listImg
}

const imagenTop = () => {
  const listImg = []
  listImg.push(
    <div className={containsTop}>
      <img src={top[0]} alt='top1' style={{ width: '100%', height: '41vw' }} />
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '36vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p
          style={{
            fontSize: '40px',
            lineHeight: '50px',
            textTransform: 'uppercase',
          }}
        >
          Lucasfilm&apos;s LeAndre Thomas On His Journey to Direct &quot;The
          Pit&quot;
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '38vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p style={{ fontSize: '20px' }}>
          The filmmaker discusses fulfilling a dream with his new short,
          featured in Star Wars: Visions Volume 2.
        </p>
      </div>
      <div style={{ position: 'relative', bottom: '93%', left: '7%' }}>
        <RadButton label='READ MORE' type='yellow' />
      </div>
    </div>,
  )
  listImg.push(
    <div className={containsTop}>
      <img src={top[1]} alt='top2' style={{ width: '100%', height: '41vw' }} />
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '36vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p style={{ fontSize: '38px' }}>
          THIS STAR WARS DAY, CARRIE FISHER HONORED WITH STAR ON HOLLYWOOD WALK
          OF FAME
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '38vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p style={{ fontSize: '20px' }}>To us, she is royalty</p>
      </div>
      <div style={{ position: 'relative', bottom: '93%', left: '7%' }}>
        <RadButton label='READ MORE' type='yellow' />
      </div>
    </div>,
  )
  listImg.push(
    <div className={containsTop}>
      <img src={top[2]} alt='top3' style={{ width: '100%', height: '41vw' }} />
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '36vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p
          style={{
            fontSize: '40px',
            lineHeight: '50px',
            textTransform: 'uppercase',
          }}
        >
          <em style={{ fontStyle: 'oblique' }}>Star Wars:</em>
          <br />
          Visions &nbsp;Volume 2 Is Here!
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '38vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p style={{ fontSize: '20px' }}>
          The filmmaker discusses fulfilling a dream with his new short,
          featured in Star Wars: Visions Volume 2.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          bottom: '93%',
          left: '7%',
          display: 'flex',
          flexDirection: 'row',
          gap: '1%',
        }}
      >
        <RadButton label='STREAM NOW' type='yellow' />
        <RadButton label='READ MORE' type='' />
      </div>
    </div>,
  )
  listImg.push(
    <div className={containsTop}>
      <img src={top[3]} alt='top4' style={{ width: '100%', height: '41vw' }} />
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '36vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p
          style={{
            fontSize: '45px',
            lineHeight: '50px',
            textTransform: 'uppercase',
          }}
        >
          Star Wars: Young Jedi Adventures Is Here!
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'block',
          width: '31vw',
          height: 'fit-content',
          zIndex: '1',
          left: '7vw',
          bottom: '38vw',
          textAlign: 'left',
          color: 'white',
          margin: '0 0',
        }}
      >
        <p style={{ fontSize: '25px' }}>
          Young Jedi blast off on adventures across the galaxy! Plus, a
          conversation with the new series&apos; showrunner and producers.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          bottom: '93%',
          left: '7%',
          display: 'flex',
          flexDirection: 'row',
          gap: '1%',
        }}
      >
        <RadButton label='NOW AVAILABLE' type='yellow' />
        <RadButton label='READ MORE' type='' />
      </div>
    </div>,
  )
  return listImg
}

const Principal = () => (
  <div style={{ width: '100%', overflowX: '-moz-hidden-unscrollable' }}>
    <Header />
    <div className={topCss}>
      <Carousel infinite invert timer>
        {imagenTop().map(value => value)}
      </Carousel>
    </div>
    <div className={visionsSquare}>
      <img
        style={{
          width: '76%',
        }}
        src={vision1}
        alt='Visions temporada 2'
      />
      <p
        style={{
          width: '100%',
          color: 'white',
          fontSize: '24px',
        }}
      >
        An anthology series celebrating Star Wars
        <br />
        through the lens of some of the world&apos;s best
        <br />
        animation studios
      </p>
      <div>
        <RadButton type='red' label='Explore' />
      </div>
    </div>
    <div className={mediumCss}>
      <img
        src={mediumPr}
        alt='Visions'
        style={{ width: '100vw', margin: '0px' }}
      />
      <img
        src={mediumPr2}
        alt='Visions'
        style={{ width: '100vw', position: 'relative', bottom: '8px' }}
      />
      <div
        style={{
          width: '90vw',
          height: 'fit-content',
          position: 'absolute',
          left: '50px',
          margin: '0px',
          top: '35.4vw',
        }}
      >
        <Carousel>{imagesTopMedium().map(value => value)}</Carousel>
      </div>
      <div className={mediumBottomCss}>
        <span className={textIntro}>Lastest News + Features</span>
        <span className={textIntro2}>View all</span>
        <button aria-label='View all' type='button' className={buttonArrow}>
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.863078 0.672557C0.602729 0.932907 0.602729 1.35502 0.863078 1.61537L6.3916 7.14388L4.16022
               9.37045C3.89987 9.6308 3.89987 10.0529 4.16022 10.3133C4.42057
                10.5736 4.84268 10.5736 5.10303 10.3133L7.80581 7.61529C8.06616 
                7.35494 8.06616 6.93283 7.80581 6.67248L1.80589 0.672557C1.54554 
                0.412208 1.12343 0.412208 0.863078 0.672557Z'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M2.74494 
              11.7328C2.48459 11.4724
               2.06248 11.4724 1.80213 11.7328L0.859325 12.6756C0.598976 12.9359 
               0.598976 13.358 0.859325 13.6184C1.11967 13.8787 1.54178 13.8787 1.80213 13.6184L2.74494
                12.6756C3.00529 12.4152 3.00529 11.9931 2.74494 11.7328Z'
            />
          </svg>
        </button>
      </div>
      <div
        style={{
          width: '90vw',
          height: 'fit-content',
          position: 'absolute',
          left: '50px',
          margin: '0px',
          top: '68.4vw',
        }}
      >
        <Carousel>{imagesMedium().map(value => value)}</Carousel>
      </div>
    </div>
    <div>
      <div
        className={mediumBottomCss}
        style={{
          position: 'absolute',
          top: '150vw',
          left: '0vw',
        }}
      >
        <span className={textIntro}>Lastest Video</span>
        <span className={textIntro2}>View all</span>
        <button aria-label='View all' type='button' className={buttonArrow}>
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.863078 0.672557C0.602729 0.932907 0.602729 1.35502 0.863078 1.61537L6.3916 7.14388L4.16022
               9.37045C3.89987 9.6308 3.89987 10.0529 4.16022 10.3133C4.42057
                10.5736 4.84268 10.5736 5.10303 10.3133L7.80581 7.61529C8.06616 
                7.35494 8.06616 6.93283 7.80581 6.67248L1.80589 0.672557C1.54554 
                0.412208 1.12343 0.412208 0.863078 0.672557Z'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M2.74494 
              11.7328C2.48459 11.4724
               2.06248 11.4724 1.80213 11.7328L0.859325 12.6756C0.598976 12.9359 
               0.598976 13.358 0.859325 13.6184C1.11967 13.8787 1.54178 13.8787 1.80213 13.6184L2.74494
                12.6756C3.00529 12.4152 3.00529 11.9931 2.74494 11.7328Z'
            />
          </svg>
        </button>
      </div>
      <div
        style={{
          width: '90vw',
          height: 'fit-content',
          position: 'absolute',
          left: '50px',
          margin: '0px',
          top: '155.4vw',
        }}
      >
        <Carousel>{imagesBottomMedium().map(value => value)}</Carousel>
      </div>
    </div>
    <div>
      <div
        className={mediumBottomCss}
        style={{
          position: 'absolute',
          top: '179vw',
          left: '0vw',
        }}
      >
        <span className={textIntro}>Explore More</span>
      </div>
      <div
        style={{
          width: '90vw',
          height: 'fit-content',
          position: 'absolute',
          left: '50px',
          margin: '0px',
          top: '185.4vw',
        }}
      >
        <Carousel>{imagesBottom().map(value => value)}</Carousel>
      </div>
      <div
        style={{
          width: '90vw',
          height: 'fit-content',
          position: 'absolute',
          left: '50px',
          margin: '0px',
          top: '214.4vw',
          display: 'block',
        }}
      >
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <svg
            width='52'
            height='49'
            viewBox='0 0 52 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 0L10 -5.99169e-08L10 44C10 46.7614 
            7.76143 49 5 49C2.23858 49 -3.00796e-07 46.7614 -2.83033e-07 44L0 0Z'
              fill='#1D1E1F'
            />
            <path
              d='M21 0L31 -5.9917e-08L31 15C31 17.7614 28.7614 20 26 20C23.2386 20 21 17.7614 21 15L21 0Z'
              fill='#1D1E1F'
            />
            <path
              d='M21 34C21 31.2386 23.2386 29 26 29C28.7614 
            29 31 31.2386 31 34L31 44C31 46.7614 28.7614 49 26 49C23.2386 49 21 46.7614 21 44L21 34Z'
              fill='#1D1E1F'
            />
            <path
              d='M42 0L52 -5.99169e-08L52 44C52 46.7614 49.7614 49 47 49C44.2386 49 42 46.7614 42 44L42 0Z'
              fill='#1D1E1F'
            />
          </svg>
        </div>

        <p style={{ position: 'relative', top: '-2vw', fontSize: '15px' }}>
          {' '}
          More From Star Wars:
        </p>
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
        <p style={{ position: 'relative', top: '0vw', fontSize: '14px' }}>
          {' '}
          TM & © Lucasfilm Ltd. All Rights Reserved
        </p>

        <div
          style={{
            position: 'relative',
            top: '0vw',
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          className={footer}
        >
          <p>Terms of Use</p> <p>Additional Content Information</p>{' '}
          <p>Privacy Policy</p> <p>Children&apos;s Online Privacy Policy</p>
          <p>Your California Privacy Rights</p> <p>Star Wars at shopDisney</p>
          <p>Star Wars Helpdesk</p> <p>Interest-Based Ads</p>
          <p>Do Not Sell My Personal Information</p>
        </div>
      </div>
    </div>
  </div>
)

export default Principal
