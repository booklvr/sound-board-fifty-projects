import React, { Fragment, useRef } from 'react'

const SoundBoard = () => {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

  const applause = useRef('')
  const boo = useRef('')
  const gasp = useRef('')
  const tada = useRef('')
  const victory = useRef('')
  const wrong = useRef('')

  const stopSongs = () => {}

  const onClickHandler = (e) => {
    console.log(e.target.innerHTML)
    stopSongs()
  }

  const soundButtons = sounds.map((sound) => (
    <button key={sound} className='btn' onClick={(e) => onClickHandler(e)}>
      {sound}
    </button>
  ))

  return (
    <Fragment>
      <audio ref={applause} id='applause' src='../sounds/applause'></audio>
      <audio ref={boo} id='boo' src='sounds/boo.mp3'></audio>
      <audio ref={gasp} id='gasp' src='sounds/gasp.mp3'></audio>
      <audio ref={tada} id='tada' src='sounds/tada.mp3'></audio>
      <audio ref={victory} id='victory' src='sounds/victory.mp3'></audio>
      <audio ref={wrong} id='wrong' src='sounds/wrong.mp3'></audio>

      <div id='buttons'>{soundButtons}</div>
    </Fragment>
  )
}

export default SoundBoard
