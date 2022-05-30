import { useAppSelector } from './app/hooks'
import Auth from './components/Auth'
import Counter from './components/Counter'
import './App.css'

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated)

  return (
    <div className='App-header'>
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </div>
  )
}

export default App
