import styles from "./Loader.module.css"

export default function Loader() {
  return (
    <div className={`${styles.newtons_cradle}`}>
      <div className={styles.newtonscradle__dot}></div>
      <div className={styles.newtons_cradle__dot}></div>
      <div className={styles.newtons_cradle__do}></div>
      <div className={styles.newtons_cradle__dot}></div>
    </div>
  )
}
