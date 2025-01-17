import styles from "./loader.module.css"

export default function Loader() {
  return (
    <div className={`${styles.loading} relative left-[440px] top-40`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
