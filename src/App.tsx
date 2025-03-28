import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import unikoinLogo from './assets/unikoin-logo.png'
import reactLynxLogo from './assets/react-logo.png'

export function App() {

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo'>
          </view>
        </view>
        <view className='Content'>
          <image src={unikoinLogo} className='Arrow' />
          <text className='Description'>Welcome to unikoin!</text>
          <text className='Hint'>
            Efforrtlessly manage events that inspire communities.
          </text>
        </view>
        <view className='Footer'>
          <text class='text-center'>Get Started</text>
        </view>
      </view>
    </view>
  )
}
