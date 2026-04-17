import React from 'react'
import styles from "@/styles/Register.module.css"
import Link from 'next/link'
const Register = () => {
  return (
    <div className={styles.container}> 
    <div className={styles.card}>
      <h2>Get Started</h2>

      <div className={styles.inputGroup}>
        <label>Mobile number</label>
        <input type="number" placeholder="Enter mobile number" />
      </div>

       <div className={styles.inputGroup}>
        <label>Password</label>
        <input type="password" placeholder="Create a password" />
        <p className={styles.hint}>  Min 8-15 characters, one capital letter & special character</p>
      </div>

       <div className={styles.inputGroup}>
        <label>Coupon Code (Optional)</label>
        <input type="text" placeholder="Enter coupon code" />
      </div>

       <div className={styles.inputGroup}>
        <label>Referral Code (Optional)</label>
        <input type="text" placeholder="Enter referral code" />
      </div>

 <div className={styles.checkbox}>
      
        <input type="checkbox"/>
        <span>I agree to Terms and Conditions</span>
      </div>

      <button className={styles.btn}>Sign up</button>

<p className="btnText">Already have an account?
  {" "}
  <Link href="/login">Sign in</Link>
</p>

<p className={styles.back}>Go back</p>
    </div>
    </div>
  )
}

export default Register