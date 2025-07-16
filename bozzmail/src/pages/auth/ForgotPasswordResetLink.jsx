import { NavLink } from "react-router"
import FooterPage from "../../components/FooterPage"

const ForgotPasswordResetLink = () => {
  return (
    <div className="min-h-screen bg-light-gray space-y p-16">

      {/* logo */}
      <div className="flex justify-center items-center pb-96">
        <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38" />
      </div>

      {/* form */}
      <div className="max-w-form mx-auto bg-white p-30 rounded-20px">

        <div className="flex justify-center items-center p-8">
          <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-38" />
        </div>
        <p className="text-center font-semibold text-xl pt-10 text-main-text">Forgot Password</p>
        <p className="text-sm font-medium text-center pt-10 text-main-text-shaded">Please provide your Email so we can send you the reset password link</p>

        <form action="" className="pt-20 space-y-20">

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="email" className="label-text">Email</label>
            <input type="email" name="email" id="email" placeholder="hello@company.com"
              className="form-input" />
          </div>

          <NavLink to={"/forgot-password-link-sent"} className="primary-btn block w-full">Send Reset Link</NavLink>
        </form>

        <NavLink to={"/"} className="text-link text-center block pt-20">Go back to Login</NavLink>
      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  )

}

export default ForgotPasswordResetLink
