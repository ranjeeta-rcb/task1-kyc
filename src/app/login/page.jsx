 
import Link from "next/link"
import styles from "@/styles/Login.module.css" 

 export default function Login(){
    return(
    <div className={styles.container}>
<div className={styles.card}>
<h2>Log in</h2>

<div className={styles.inputGroup}>
<label>Email/Phone</label>
<input type="text" placeholder="Enter your Email/phone" />
</div>

<div className={styles.inputGroup}>
<label>Password</label>
<input type="password" placeholder="Enter your  Password" />
</div>

<p className={styles.forgot}>Forgot your password?</p>

<button className={styles.btn}>Sign in</button>

<p className={styles.bottomText}>Don't have an account?
   {" "} <Link href="/register">Register now</Link>
   </p> 

<p className={styles.back}>Go back</p>
</div>
    </div>
       
    )
 }