import rocket from './assets/rocket.svg'
import './Header.css'

export const Header = () => {
  return (
    <>
    <header className='header__header'>
        <div className="header__logos">
        <img src={rocket} alt='logo de uma fogete'/>
        <strong>to</strong><span>do</span>
        </div>
    </header>
    </>
  )
}
