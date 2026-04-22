"use client";

import styles from  "@/styles/Personal.module.css"

export default function ProfilePage() {
  return (
    <div className={styles.container}>

       
      <div className={styles.profileRow}>
        <i className="fa-solid fa-arrow-left"></i>

        <div className={styles.profileTitle}>
          <i className="fa-solid fa-user"></i>
          <span>Profile</span>
        </div>

        <i className="fa-solid fa-chevron-right"></i>
      </div>

     
      <div className={styles.section}>
        <p className={styles.label}>Select Account Type</p>

        <div className={styles.radioGroup}>
          <label>
            <input type="radio" name="accountType" defaultChecked />
            <span>Personal</span>
          </label>

          <label>
            <input type="radio" name="accountType" />
            <span>Business</span>
          </label>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* EMAIL */}
      <div className={styles.section}>
        <p className={styles.label}>Email</p>
        <input
          className={styles.email}
          value="Ranjeeta@unocoin.com"
          readOnly
        />
      </div>

      {/* UPLOAD */}
      <div className={styles.section}>
        <p className={styles.label}>
          Upload your recent professional photo / passport size photo.
        </p>

        <p className={styles.subText}>
          Image should be clear and decent. <br />
          Invalid images/group photos NOT accepted.
        </p>

        <div className={styles.uploadRow}>

          <div className={styles.box}>
            <i className="fa-solid fa-upload"></i>
            <p>Click To Upload A Photo</p>
          </div>

          <span className={styles.or}>OR</span>

          <div className={styles.box}>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <p>Click To Continue On Phone</p>
          </div>

        </div>
      </div>

      <button className={styles.button}>Proceed</button>
    </div>
  );
}