import React from 'react'
import QZone from './QZone'
import FindUs from './FindUs'
import SocialLogin from './SocialLogin'

export const RightSide = () => {
  return (
    <div className="space-y-8">
    <SocialLogin></SocialLogin>
    <FindUs></FindUs>
    <QZone></QZone>
  </div>
  )
}
