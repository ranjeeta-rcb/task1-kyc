"use client"
import React from 'react'
import styles from "@/styles/ForgotPwd.module.css"
import { useRouter } from 'next/navigation'


const ForgotPwd = () => {
    const router=useRouter();

    const handleForgotPwd=()=>{
        router.push("/login");
    }

  return (
 <div className={styles.container}>
    <div className={styles.card}>
        <h2>Forgot Password</h2>
        <p>Please enter the registered phone number</p>

        <div className={styles.inputGroup}>
            <input type="text" placeholder="Enter Mobile number/Email ID"
             />
        </div>
        <div className={styles.captchaBox}>
            <div className={styles.captcha}>
                I'm not a robot
            </div>
        </div>

        <div className={styles.btnGroup}>
            <button className={styles.cancel}>Cancel</button>
            <button className={styles.continue}>Continue</button>
        </div>

        <p className={styles.back} onClick={handleForgotPwd}>Go Back</p>
    </div>
 </div>
  )
}

export default ForgotPwd