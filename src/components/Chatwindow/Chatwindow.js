import React from 'react'
import styles from "./Chatwindow.module.css"

export default function ChatWindow() {
  return (
    <div className={styles.main}>

        <div className={styles.chatSupport}>
            <div className={styles.reciever}>Hello !</div>
            <div className={styles.reciever}>How may I help you?</div>
            <div className={styles.sender}>Hi</div>
            <div className={styles.sender}>I require some help to register as a tour guide.</div>
            <div className={styles.reciever}>Hello !</div>
            <div className={styles.reciever}>How may I help you?</div>
            <div className={styles.sender}>Hi</div>
            <div className={styles.sender}>I require some help to register as a tour guide.</div>
            <div className={styles.reciever}>Hello !</div>
            <div className={styles.reciever}>How may I help you?</div>
            <div className={styles.sender}>Hi</div>
            <div className={styles.sender}>I require some help to register as a tour guide.</div>
        </div>

        <div>
        <input type="text" className={styles.inputField} placeholder="Enter text to send ..."></input>
            <button className={styles.sendBtn}>Send</button>
        </div>

    </div>
  )
}