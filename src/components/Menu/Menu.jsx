import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu" + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#Intro"> Home </a>
            </li>
            <li>
                <a href="#Portfolio"> Projects </a>
            </li>
            <li>
                <a href="#Contacts"> Contacts </a>
            </li>
        </ul>
    </div>
  )
}
