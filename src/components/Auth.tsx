import { SyntheticEvent } from 'react'
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authSlice'
import styles from './Auth.module.css'

const Auth = () => {
  const dispatch = useAppDispatch()

  const loginHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(login())
  }

  return (
    <main>
      <section>
        <form onSubmit={loginHandler}>
          <div className={styles.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
