import styles from "./loader.module.css"

export default function Loader() {
  return (
    <div className={styles.loading}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
