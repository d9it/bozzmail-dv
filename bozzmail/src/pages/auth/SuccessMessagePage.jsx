import { NavLink } from "react-router"
import FooterPage from "../../components/FooterPage"

const SuccessMessagePage = () => {
  return (

    <div className="min-h-screen bg-light-gray space-y p-16 relative">

      {/* success message alert */}
      <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-200">
        <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
          <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-96 xl:pr-80 pl-20">
            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
            <div>
              <p className="text-main-text font-semibold pb-0.5">Login successfull!</p>
              <p className="text-secondary-text text-sm font-medium">Redirecting...</p>
            </div>
          </div>
          <div className="h-3 bg-primary"></div>

          {/* cross alert */}
          <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
        </div>
      </div>

      {/* logo */}
      <div className="flex justify-center items-center pb-96">
        <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38" />
      </div>

      {/* form */}
      <div className="max-w-form mx-auto bg-white p-30 rounded-20px">

        <div className="flex justify-center items-center p-8">
          <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-38" />
        </div>

        <p className="text-center font-semibold text-xl pt-10 text-main-text">Welcome back!</p>

        <form action="" className="pt-20 space-y-20">

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="email" className="label-text">Email</label>
            <input type="email" name="email" id="email" placeholder="hello@company.com"
              className="form-input" />
          </div>

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="password" className="label-text">Password</label>
            <div className="relative">
              <input type="password" name="password" id="password" placeholder="•••••••••••••••••••••••••"
                className="form-input" />

              <div className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center">
                <img src="/asset/icons/eye.svg" alt="icon" />
              </div>

              <NavLink to={"/forgot-password-reset-link"} className="text-link text-right block pt-4">Forgot Password?</NavLink>
            </div>
          </div>

          <NavLink to={"/dashboard"} className="primary-btn w-full">Login</NavLink>
        </form>

        <p className="text-sm font-medium text-main-text text-center pt-20">Don’t have an account? <NavLink to={"/register"} className="text-link">Create an account</NavLink></p>
      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  )

}

export default SuccessMessagePage
