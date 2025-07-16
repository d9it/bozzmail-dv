import { NavLink } from "react-router"
import FooterPage from "../../components/FooterPage"

const ForgotPasswordPage = () => {
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

        <p className="text-center font-semibold text-xl pt-10 text-main-text">Create new Password</p>

        <form action="" className="pt-20 space-y-20">

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="password" className="label-text">New Password</label>
            <div className="relative">
              <input type="password" name="password" id="password" placeholder="•••••••••••••••••••••••••"
                className="form-input" />
            

              <div className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center">
                <img src="/asset/icons/eye.svg" alt="icon" />
              </div>
            </div>
          </div>

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="cpassword" className="label-text">Confirm New Password</label>
            <div className="relative">
              <input type="password" name="cpassword" id="cpassword" placeholder="•••••••••••••••••••••••••"
                className="form-input" />

              <div className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center">
                <img src="/asset/icons/eye.svg" alt="icon" />
              </div>
            </div>
          </div>

          <button className="primary-btn w-full">Confirm</button>
        </form>

      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  )

}

export default ForgotPasswordPage
