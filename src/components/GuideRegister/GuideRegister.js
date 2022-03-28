
   
import React from 'react'
import { useState } from 'react';
import styles from './GuideRegister.module.css'



export default function GuideRegister() {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [mobileNumber,setMobileNumber] = useState("");
    const [email,setEmail] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");

    function btnClick()
    {
        console.log("btn clicked")
        console.log(firstName);
    }

  return (

    <div className={styles.form}>

            <input type="text" className={styles.inputField} onChange={e=> setFirstName(e.target.value)} placeholder="First Name"></input>
            <input type="text" className={styles.inputField} onChange={e=> setLastName(e.target.value)} placeholder="Last Name"></input>
            <input type="text" className={styles.inputField} onChange={e=> setMobileNumber(e.target.value)} placeholder="Mobile Number"></input>
            <input type="text" className={styles.inputField} onChange={e=> setEmail(e.target.value)} placeholder="E-mail Address"></input>
            <input type="text" className={styles.inputField} onChange={e=> setCurrentLocation(e.target.value)} placeholder="Current Location (eg. Delhi)"></input>

            <button className={styles.submitBtn} onClick={btnClick}>Submit</button>

        </div>

  )
}