import './App.css'
import personalPhoto from './assets/introphoto.png'
import westernLogo from './assets/Western-University-Logo.png'
function App() {

  return (
    <>
      <div className="body">
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
              <p>filler</p>
          </div>
      </div>
    </>
  )
}

export default App
