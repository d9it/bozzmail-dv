import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { GoPlus } from "react-icons/go";
import { PiWarningCircle } from "react-icons/pi";
import { MdLockOutline } from "react-icons/md";
import TopUpWallet from "../../components/TopUpWallet";

const ImportPdfPaymentTab = () => {

  return (
    <>

      {/* Payment */}
      <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 xl:w-1/2 w-full'>
        <p className='tab-main-heading'>Payment</p>

        <div className='bg-table-header rounded-10px pt-20 sm:pt-30 pb-15 sm:pb-18 px-15 sm:px-30 space-y-12 sm:space-y-20'>
          <div className='flex gap-4 items-center justify-start'>
            <img src="asset/icons/order-summary.svg" alt="icon" />
            <p className='tab-heading'>Order Summary</p>
          </div>

          {/* summary */}
          <table className='text-sm font-medium text-main-text w-full table-auto'>
            <tbody>
              <tr>
                <td className='pb-8'>Shipping Cost:</td>
                <td className='text-right pb-8'>$8.95</td>
              </tr>
              <tr>
                <td className='pb-8'>Pickup Fees:</td>
                <td className='text-right pb-8'>$5.00</td>
              </tr>
              <tr>
                <td className='pb-8'>Taxes:</td>
                <td className='text-right pb-8'>$1.24</td>
              </tr>
              <tr className='border-t border-[#D2DEE2]'>
                <td className='pt-19 text-lg font-semibold text-main-text'>Total</td>
                <td className='text-right pt-19 text-primary font-semibold text-22px'>$10.25</td>
              </tr>
            </tbody>
          </table>

          {/* Pay with your Wallet */}
          <div className='space-y-10'>
            <div className='bg-white rounded-7px space-y-10 p-15 sm:p-25'>
              <div className='flex justify-between flex-wrap items-start sm:items-center w-full gap-7'>
                <div className='flex justify-start items-start sm:items-center gap-7 flex-col sm:flex-row'>
                  <div className='flex items-center justify-start gap-7'>
                    <img src="asset/icons/wallet-black.svg" alt="icon" className='h-19' />
                    <p className='font-semibold text-sm text-black'>Pay with your Wallet</p>
                  </div>
                  {/* for Insufficient balance */}
                  {/* <p className='font-medium text-xs text-negative-warning'>($127.50)</p> */}

                  {/* for sufficient balance */}
                  <p className='font-medium text-xs text-secondary-text'>($127.50)</p>
                </div>

                <TopUpWallet />
              </div>

              {/* for insufficient balance */}
              {/* <div className="warning-message">
                <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none'/>
                <p>Insufficient balance! Please top up your wallet.</p>
              </div> */}

              {/* for Insufficient balance */}
              {/* <button className='disable-primary-btn w-full !py-18'>
                <div className='flex gap-9 items-center justify-center'>
                  <img src="asset/icons/white-wallet.svg" alt="icon" className='h-19'/>
                  Pay With Wallet
                </div>
              </button> */}

              {/* for sufficient balance */}
              <button className='primary-btn w-full !py-18'>
                <div className='flex gap-9 items-center justify-center'>
                  <img src="asset/icons/white-wallet.svg" alt="icon" className='h-19'/>
                  Pay With Wallet
                </div>
              </button>

            </div>

            <div className='bg-white rounded-7px space-y-10 p-15 sm:p-25'>
              <div className='flex justify-between flex-wrap items-center w-full'>
                <div className='flex justify-start items-center gap-7'>
                  <img src="asset/icons/dynopay.svg" alt="icon" className='h-15' />
                  <p className='font-semibold text-sm text-black'>Or use DynoPay</p>
                </div>

                <button className='text-xs font-medium text-secondary-text flex items-center justify-center gap-5 cursor-pointer'>
                  <MdLockOutline className='text-secondary-text text-sm'/>
                  <p>Our trusted partner</p>
                </button>
              </div>

             <button className='payment-btn w-full'>
                <div className='flex gap-9 items-center justify-center'>
                  <img src="asset/icons/bank.svg" alt="icon" className='h-19'/>
                  Pay With Card, Bank Transfer or Crypto
                </div>
              </button>

            </div>
          </div>
        </div>

        <hr className='text-Outlines' />

        {/* buttons */}
        <div className='flex justify-between items-center flex-wrap'>
          <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
            <IoChevronBack className="text-sm transition-transform duration-300 text-main-text" />
            <span> Previous</span>
          </NavLink>

          <NavLink to={"#"} className='flex items-center justify-between gap-8 button-icon'>
            <span> Next</span>
            <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default ImportPdfPaymentTab
