/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { MotionBox } from '../Components';
import { SplashHeading } from './SplashHeading';


export const Splash = () => {

  return (
    <>
      <MotionBox
        data-comp={Splash.displayName}
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            y: 0,
          },
          visible: {
            y: '-100%',
            // y: '0',
            transition: {
              duration: 0.7,
              delay: 1.7,
            }
          }
        }}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          bg: 'tertiary',
          // zIndex: 4,
        }}
      />
      <SplashHeading />
    </>
  )
}

Splash.displayName = 'Splash';