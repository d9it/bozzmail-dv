
import { NavLink } from "react-router"

const FooterPage = () => {
  return (

    <footer className="flex flex-col gap-11 pt-96">
      <div className="flex flex-col gap-2">
        <p className="footer-text">© 2025 BozzMail</p>
        <p className="footer-text">All rights reserved.</p>
      </div>

      <div className="flex flex-col gap-2">
        <NavLink to={"#"} className="footer-text-link">Terms & Conditions</NavLink>
        <NavLink to={"#"} className="footer-text-link">Privacy Policy</NavLink>
      </div>
    </footer>

  )

}

export default FooterPage
