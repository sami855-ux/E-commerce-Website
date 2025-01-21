import { useLocation } from "react-router-dom"
import { Footer, Header } from "../../components"
import Main from "./Main"
import { useEffect } from "react"

export default function Store() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
