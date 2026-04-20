"use client";
import { useState } from "react";
import styles from "@/styles/ProfileHeader.module.css";

export default function ProfileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.header}>

      <h2 className={styles.title}>Dashboard</h2>

       
      <div className={styles.right}>

        <div className={styles.icon}>
            <i className="fa-regular fa-bell"></i>
        </div>

         
        <div className={styles.profile}>
          <div className={styles.avatar}>
           <i className="fa-solid fa-circle-user"></i>
          </div>
          <span className={styles.name}>Unocoiner</span>

            <span 
              className={`${styles.arrow} ${open ? styles.rotate : ""}`}
              onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-caret-down"></i>                             
            </span>  
        

          {open && (
            <div className={styles.dropdown}>

              <div className={styles.top}>
                <div className={styles.bigAvatar}>
                    <i className="fa-solid fa-circle-user"></i>
                </div>
             
              
              <p><strong className={styles.userInfo}>User ID:</strong> </p>
              <p><strong className={styles.userInfo}>Email:</strong>  </p>

              <p>
                <strong className={styles.userInfo}>Verification Status:</strong>{" "}
                <span className={styles.unverified}>Unverified</span>
              </p>

              <button className={styles.verifyBtn}>
                Get Verified
              </button>
               </div>

              <div className={styles.menu}>

                <div className= {styles.menuItem}> 
                  <i className="fa-solid fa-user"></i>Profile
                </div>

               <div className={styles.menuItem}>
                <i className="fa-solid fa-indian-rupee-sign"></i>Deductions
               </div>
               
               <div className={styles.menuItem}>
              <i className="fa-solid fa-right-from-bracket"></i>Logout
              </div>
            </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}