
"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "@/styles/Register.module.css"
import { useRouter } from "next/navigation"

export default function Register() {

  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [coupon, setCoupon] = useState("")
  const [referral, setReferral] = useState("")
  const [agree, setAgree] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router=useRouter();

  const handleLogin=()=>{
    router.push("/login")
  }

  const isValid =
    mobile.trim() !== "" &&
    password.trim() !== "" &&
    agree

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Get Started</h2>

         
        <div className={styles.inputGroup}>
          <label>Mobile number</label>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
 
        <div className={styles.inputGroup}>
          <label>Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>
          <p className={styles.hint}>
            Min 8-15 characters, one capital letter and special character
          </p>
        </div>

         
        <div className={styles.inputGroup}>
          <label>Coupon code (Optional)</label>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </div>
 
        <div className={styles.inputGroup}>
          <label>Referral code (Optional)</label>
          <input
            type="text"
            placeholder="Enter referral code"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />
        </div>

      <div className={styles.row}>
  <label className={styles.checkbox}>
    <input
      type="checkbox"
      checked={agree}
      onChange={() => setAgree(!agree)}
    />
    I agree to <span>Terms and Conditions</span>
  </label>

  <div className={styles.captchaBox}>
    
    I'm not a robot
  </div>
</div>
 
        <button
          className={`${styles.btn} ${isValid ? styles.activeBtn : ""}`}
          disabled={!isValid} onClick={handleLogin}
        >
          Sign up
        </button>

         
        <p className={styles.bottomText}>
          Already have an account?{" "}
          <Link href="/login">Sign in</Link>
        </p>

        <p className={styles.back}>Go Back</p>
      </div>
    </div>
  )
}