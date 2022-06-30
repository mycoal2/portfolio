import "./topbar.scss"


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"Topbar" + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#Intro" className="logo"> Michael Hong</a>
            </div>
            <h1>
                Hello
            </h1>
            <div className="right">
                <div className="option">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
