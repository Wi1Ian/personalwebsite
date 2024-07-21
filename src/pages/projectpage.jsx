import './HomePage.css'
import '../components/header.jsx'
import personalPhoto from '../assets/introphoto.png'
import westernLogo from '../assets/Western-University-Logo.png'
import linkedinLogo from '../assets/LinkedIn_logo_initials.png'
import githubLogo from '../assets/Screenshot 2024-07-18 015349.png'
import spotifyLogo from '../assets/images.jpg'
export default function projectpage() {
    return (
        <>
            <header />
            <div className="body">
                <div className="header">
                    <div className="dropdown">
                        <span className="menu">☰</span>
                        <div className="dropdown-content">
                            <h1 className="content">hello</h1>
                        </div>
                    </div>
                </div>
                <div className="row1">
                    <h1 className="intro">Jay Verma </h1>
                </div>
                <div className="row2">
                    <img src={personalPhoto} alt={'image of me'} className={"imageOfJay"}></img>
                </div>
                <div className="row3">
                    <h1 className="school"> Future computer science student at </h1>
                </div>
                <div className="row4">
                    <img src={westernLogo} alt={'UWO'} className={"westernLogo"}></img>
                </div>
                <div className="row5">
                    <a href={"https://www.linkedin.com/in/jay-verma-17762123a/"} target="_blank"><img src={linkedinLogo}
                                                                                                      alt={'Linkdin'}
                                                                                                      className={"Linkdinlogo"}></img></a>
                    <a href={"https://github.com/Wi1Ian"} target="_blank"><img src={githubLogo} alt={'Linkdin'}
                                                                               className={"Linkdinlogo"}></img></a>
                    <a href={"https://open.spotify.com/user/ovqu9cs72wpjbxo85r2hhibw9?si=72e00f01738147a8"} target="_blank"><img
                        src={spotifyLogo} alt={'Linkdin'} className={"Linkdinlogo"}></img></a>
                </div>
            </div>
        </>
    )
}
