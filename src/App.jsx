import React, { useState } from 'react'

import logo from './images/logo.svg'
import arrowIcon from './images/icon-arrow.svg'
import errorIcon from './images/icon-error.svg'

function App() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const emailValidation = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (email === '') {
      setMessage('E-mail address field must not be empty')
    } else if (!emailRegex.test(email)) {
      setMessage('Please provide a valid email')
    } else {
      window.alert('Thanks for subscribing 👻')

      setMessage('')
      setEmail('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailValidation()
  }

  return (
    <main className='base'>
      <section className='base__content'>
        <div className='base__content-logo'>
          <img className='base__content-logo_img' src={logo} alt='Logo' />
        </div>
        <div className='base__content-info'>
          <div>
            <h1 className='base__content-info_title'>
              We're
              <br />
              <span>coming soon</span>
            </h1>
            <p className='base__content-info_desc'>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className='base__content-info_form'>
              <div className='base__content-info_form_container'>
                <input
                  onChange={handleEmailChange}
                  value={email}
                  type='text'
                  placeholder='Email Address'
                  className='base__content-info_form_input'
                  autoComplete='off'
                  id='email'
                />
                <img
                  className={
                    message === ''
                      ? 'base__content-info_form_error hide'
                      : 'base__content-info_form_error show'
                  }
                  src={errorIcon}
                  alt='Error icon'
                />
                <label
                  className={
                    message === ''
                      ? 'base__content-info_form_label hide'
                      : 'base__content-info_form_label show'
                  }
                  htmlFor='email'
                >
                  {message}
                </label>
              </div>
              <button className='base__content-info_form_btn' type='submit'>
                <img
                  className='base__content-info_form_btn_icon'
                  src={arrowIcon}
                  alt='Arrow icon'
                />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className='base__image' />
    </main>
  )
}

export default App
