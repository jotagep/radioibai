import { useState, useRef } from "react"

import Draggable from 'react-draggable'; // The default
import Youtube from 'react-youtube'

import styles from '../styles/Home.module.css'

const opts = {
  title: 'Live',
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 1,
    mute: 1,
  },
}

export default function Index() {
  const [showTwitch, setShowTwitch] = useState(true)
  const [showChat, setShowChat] = useState(true)

  let YT = null

  const ytRef = useRef()

  const handleTwitch = () => {
    setShowTwitch(state => !state)
  }
  const handleChat= (e) => {
    setShowChat(state => !state)
  }

 const handleYT = (e) => {
   YT = e.target;
 }

 const handlePause = () => {
   if (YT) {
     const state = YT.getPlayerState()
     if (state == 1) {
       YT.pauseVideo()
     } else {
       YT.playVideo()
     }
   }
 }

 const handleDuration = (number) => (e) => {
  if (YT) {
    const time = YT.getCurrentTime() + number;
    YT.seekTo(time, true);
 }
}

  return (
    <div className={styles.container}>
      <div className={styles.youtube}>
        <Youtube videoId="-CitIBZDc7U" containerClassName={styles.youtubeBox} opts={opts} onReady={handleYT} />
      </div>
      <div className={styles.chat} style={{display: showChat ? 'block':'none'}}>
        <iframe ref={ytRef} src="https://www.twitch.tv/embed/ibai/chat?darkpopout&amp;parent=radioibai.world" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>
      </div>
      <Draggable bounds="parent">
        <div className={styles.twitch} style={{display: showTwitch ? 'block':'none'}}>
          <header className={styles['twitch-header']}>
            twitch.tv/ibai
          </header>
          <iframe src="https://player.twitch.tv/?channel=ibai&amp;parent=radioibai.world&amp;muted=false&amp;autoplay=true" height="100%" width="100%" frameBorder="0"></iframe>
        </div>
      </Draggable>
      <div className={styles.controls}>
        <button onClick={handleTwitch} className={`${styles.btn} ${!showTwitch ? styles.active : ''}`}>Twitch</button>
        <button onClick={handleChat} className={`${styles.btn} ${!showChat ? styles.active : ''}`}>Chat</button>
        <span className="mr">|</span>
        <button onClick={handleDuration(-5)} className={styles.btn}>-5s</button>
        <button onClick={handleDuration(-1)} className={styles.btn}>-1s</button>
        <button onClick={handlePause} className={styles.btn}>
          <img src="/arrow.svg" alt="play/pause" />
        </button>
        <button onClick={handleDuration(1)} className={styles.btn}>+1s</button>
        <button onClick={handleDuration(5)} className={styles.btn}>+5s</button>
      </div>
    </div>
  )
}
