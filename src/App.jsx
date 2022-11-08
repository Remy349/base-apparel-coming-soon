import React from 'react'

import logo from './images/logo.svg'
import arrowIcon from './images/icon-arrow.svg'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
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
                  type='text'
                  placeholder='Email Address'
                  className='base__content-info_form_input'
                  autoComplete='off'
                  id='email'
                />
                <label
                  className='base__content-info_form_label'
                  htmlFor='email'
                />
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
