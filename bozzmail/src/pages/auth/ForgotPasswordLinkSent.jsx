import { NavLink } from "react-router"
import FooterPage from "../../components/FooterPage"

const ForgotPasswordLinkSent = () => {
  return (
    <div className="min-h-screen bg-light-gray space-y p-16 flex flex-col justify-between items-center">

      {/* logo */}
      <div className="flex justify-center items-center pb-96">
        <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38" />
      </div>

      {/* form */}
      <div className="max-w-form mx-auto bg-white p-30 rounded-20px">

        <div className="flex justify-center items-center p-8">
          <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-38" />
        </div>
        <p className="text-center font-semibold text-xl pt-10 text-main-text">Check your Inbox</p>
        <p className="text-sm font-medium text-center pt-10 text-main-text-shaded">We’ve emailed you a link to reset your password.</p>

      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  )

}

export default ForgotPasswordLinkSent
