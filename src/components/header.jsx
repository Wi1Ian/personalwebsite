import './header.css'
import 'bulma/css/bulma.css';

export default function Header() {

    return (

        <div className="header-container">
            <div className="dropdown is-right is-hoverable">
                <div className="dropdown-trigger">
                    {/*<button className="button" aria-haspopup="true" aria-controls="dropdown-menu6">*/}
                        <span className="words">≡</span>
                        <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
                    {/*</button>*/}
                </div>
                <div className="dropdown-menu" id="dropdown-menu6" role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
