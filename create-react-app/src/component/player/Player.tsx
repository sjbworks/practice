import React from 'react'

import { usePlayer } from '.'

const Player = () => {
  usePlayer()
  return <video id="video" />
}

export default Player
