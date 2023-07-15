import { useState } from 'react'

export const Form = () => {
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const submitHandle = (e) => {
    if (error) {
      e.preventDefault()
    } else {
      console.log('Submit')
    }
  }

  const handleEmailChange = (event) => {
    const char: string = event.target.value
    setEmail(char)
    console.log(email)
  }

  const checkHandle = () => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
    const check: boolean = regex.test(email)
    setError(!check)
  }

  return (
    <form onSubmit={submitHandle}>
      <div className="input-container">
        <input
          name="email"
          type="text"
          className="input-container__text max-w"
          placeholder="email@example.com"
          onChange={handleEmailChange}
        />
        {error && (
          <p className="input_container__error">
            Error, please check your email
          </p>
        )}
      </div>
      <button className="btn text-14" type="submit" onClick={checkHandle}>
        Get Started For Free
      </button>
    </form>
  )
}
