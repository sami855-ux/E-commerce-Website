import { FiPhoneCall } from "react-icons/fi"
import { IoMailOpenOutline } from "react-icons/io5"
import { CiMap } from "react-icons/ci"
import PropTypes from "prop-types"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

import image from "../../assets/slide11.jpg"
import user from "../../assets/usertwo.png"

export default function Main() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const form = useRef()

  const handleMessage = (e) => {
    e.preventDefault()

    if (!userName || !email || !message) return

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }

  return (
    <main className="w-full min-h-screen ">
      <div className="w-full min-h-[70vh] relative -top-20">
        <section
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="relative z-10 flex flex-col items-center justify-center w-full h-[60vh]"
        >
          <h2 className="text-xl font-bold text-center text-gray-800 uppercase md:text-5xl font-Gluten">
            We are Creating something big <br /> at this moment
          </h2>
        </section>

        <section className="w-full min-h-[75vh] flex justify-center items-center px-40 gap-4 py-16">
          <section className="w-1/2 h-full ">
            <img src={user} alt="User image" className="w-20 h-20" />
            <p className="py-3 text-sm tracking-wider uppercase">Say hello</p>
            <h2 className="text-3xl font-semibold text-gray-700 capitalize">
              Get in touch with us
            </h2>

            <div className="w-full mt-5">
              <List
                icon={<FiPhoneCall color="white" />}
                text="Phone number"
                main="+251978109304"
              />
              <List
                icon={<IoMailOpenOutline color="white" />}
                text="Email"
                main="samitale86@gmail.com"
              />
              <List
                icon={<CiMap color="white" />}
                text="Address"
                main="Debre brihan, Ethiopia"
              />
            </div>
          </section>
          <section className="w-1/2 h-full ">
            <h2 className="py-10 text-2xl font-semibold text-gray-700">
              Contact us
            </h2>
            <form className="w-full pr-10" onSubmit={handleMessage} ref={form}>
              <FormInput
                text="User Name"
                type="text"
                value={userName}
                handler={setUserName}
              />
              <FormInput
                text="Your Email"
                type="email"
                value={email}
                handler={setEmail}
              />
              <div className="w-full">
                <label className="block mb-2 text-sm text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  className="min-w-full max-w-full min-h-[100px] max-h-[100px] w-full h-full p-2 border border-gray-300 rounded-md outline-none text-sm"
                  placeholder="Type something..."
                  value={message}
                  onChange={(e) => {
                    if (!e.target.value) return

                    setMessage(e.target.value)
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleMessage}
                className="h-10 mt-3 text-sm text-white border cursor-pointer w-44 border-lightGreen bg-lightGreen"
              >
                Send
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  )
}

const List = ({ text, icon, main }) => {
  return (
    <div className="flex items-center w-full h-16 gap-4 mb-2">
      <span className="flex items-center justify-center rounded-full w-9 h-9 bg-lightGreen">
        {icon}
      </span>
      <div className="">
        <p className="text-sm text-gray-700">{text}</p>
        <h3 className="text-xl text-lightGreen">{main}</h3>
      </div>
    </div>
  )
}

List.propTypes = {
  text: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

const FormInput = ({ text, type, value, handler }) => {
  return (
    <div className="w-full my-6 ">
      <label className="block mb-2 text-sm text-gray-700">{text}</label>
      <input
        type={type}
        value={value}
        name={value}
        onChange={(e) => {
          if (!e.target.value) return
          handler(e.target.value)
        }}
        className="w-full px-2 py-1 border border-gray-300 rounded-md outline-none"
      />
    </div>
  )
}

FormInput.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
