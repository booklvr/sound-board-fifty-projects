import React, { Fragment, useState, useRef } from 'react'

import applauseMp3 from '../assets/audio/applause.mp3'
import booMp3 from '../assets/audio/boo.mp3'
import gaspMp3 from '../assets/audio/gasp.mp3'
// import tada from '../assets/audio/tada'
// import victory from '../assets/audio/victory'
// import wrong from '../assets/audio/applause'

const SoundBoard = () => {
  const applause = new Audio('../assets/audio/applause.mp3')
  const boo = new Audio(booMp3)

  // applause.play()
  // boo.play()
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

  // const applause = useRef(null)

  // const [currentSound, setCurrentSound] = useState()

  // const playApplause = (sound) => {
  //   console.log(sound)
  //   // applause.current.play()
  // }

  const play = () => {
    applauseMp3.play()
  }

  const soundButtons = sounds.map((sound) => (
    <button key={sound} id={sound} className='btn' onClick={(e) => play()}>
      {sound}
    </button>
  ))

  // const audio = <audio id={currentSound} src={`audio/${currentSound}`}></audio>

  return (
    <Fragment>
      {/* {currentSound && audio} */}
      {/* <audio id='applause' src={applauseMp3}></audio> */}
      {/* <audio id='boo' src={booMp3} autoPlay></audio> */}
      {/* <audio id='gasp' src={gaspMp3} autoPlay></audio> */}

      <div id='buttons'>{soundButtons}</div>
    </Fragment>
  )
}

export default SoundBoard

{
  /* <audio ref={applause} id='applause' src='../sounds/applause' {currentSong === 'applause' ? autoPlay : muted}></audio>
      <audio ref={boo} id='boo' src='sounds/boo.mp3'></audio>
      <audio ref={gasp} id='gasp' src='sounds/gasp.mp3'></audio>
      <audio ref={tada} id='tada' src='sounds/tada.mp3'></audio>
      <audio ref={victory} id='victory' src='sounds/victory.mp3'></audio>
      <audio ref={wrong} id='wrong' src='sounds/wrong.mp3'></audio> */
}
