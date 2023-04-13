import '../Grid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



const Header = () => {
    return ( 
        <header className='row'>
            <img src="logo.png" alt=""/>
            <h1 className="l-o-2 l-3">Logo</h1>
            <div className="l-7 social-media">
                <ul className='row'>
                   <li className="social-media__icon l-o-6 l-1 "><FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /></li>
                   <li className="social-media__icon l-1">Youtube</li>
                   <li className="social-media__icon l-1">Twitter</li>
                   <li className="social-media__icon l-1">Instargram</li>
                </ul>
            </div>

        </header>
     );
}
 
export default Header;