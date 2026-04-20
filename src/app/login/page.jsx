 
"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "@/styles/Login.module.css"
import { useRouter } from "next/navigation"

export default function Login() {

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isFormValid = email.trim() !== "" && password.trim() !== ""

  const router= useRouter();

  const handleLogin=()=>{
    router.push("/profile");
  }

  const handleForgotPwd=()=>{
    router.push("/forgotPassword");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Log in</h2>

        <div className={styles.inputGroup}>
          <label>Email/Phone</label>
          <input 
            type="text" 
            placeholder="Enter your Email/phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className={styles.forgot} onClick={handleForgotPwd}>Forgot your password?</p>

        <button onClick={handleLogin}
          className={`${styles.btn} ${isFormValid ? styles.activeBtn : ""}`}
          disabled={!isFormValid}
        >
          Sign in
        </button>

        <p className={styles.bottomText}>
          Don't have an account?{" "}
          <Link href="/register">Register now</Link>
        </p>

        <p className={styles.back}>Go back</p>
      </div>
    </div>
  )
}