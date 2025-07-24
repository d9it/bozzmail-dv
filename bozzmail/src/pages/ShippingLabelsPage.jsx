import { NavLink } from 'react-router';
import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { TbFileExport } from "react-icons/tb";
import BulkImport from '../components/BulkImport';
import { useShipping } from '../hook/useShipping';


const ShippingLabelsPage = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const { 
    shipments, 
    loading, 
    error, 
    stats, 
    loadShipments 
  } = useShipping();

  // Helper functions
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
      case 'completed':
        return 'success-badge';
      case 'shipped':
      case 'in transit':
        return 'info-badge';
      case 'printed':
        return 'schedule-badge';
      case 'paid':
        return 'paid-badge';
      case 'draft':
        return 'draft-badge';
      default:
        return 'info-badge';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
      case 'completed':
        return 'asset/table-image/success-check.svg';
      case 'shipped':
      case 'in transit':
        return 'asset/table-image/badge-delivery.svg';
      case 'printed':
        return 'asset/table-image/print.svg';
      case 'paid':
        return 'asset/table-image/paid.svg';
      case 'draft':
        return 'asset/table-image/draft.svg';
      default:
        return 'asset/table-image/badge-delivery.svg';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isFilterOpen]);

  useEffect(() => {
    loadShipments();
  }, [loadShipments]);

  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();
  const dropdown5 = useDropdown();
  const dropdown9 = useDropdown();

  return (
    <>
      {/*  cards */}
      <div className='py-20 sm:py-30 pr-15 sm:pr-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex gap-15 sm:gap-25 items-center justify-start'>
          <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
          <div className='flex items-center justify-start gap-5 sm:gap-10'>
            <img src="asset/icons/heading_label.svg" alt="icon" />
            <h1 className='font-semibold text-22px sm:text-25px text-main-text'>Shipping Labels</h1>
          </div>
        </div>

        <p className='pr-15 sm:pl-30 text-17px font-medium text-secondary-text pt-5 hidden sm:block'>Create and manage your shipping labels for packages and mail</p>

        {/* cards */}
        <div className='pl-15 sm:pl-30 lg:grid xl:grid-cols-4 lg:grid-cols-2 flex items-center justify-start overflow-x-auto gap-10 sm:gap-20 pt-10 sm:pt-20'>
          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Total Labels</p>
                <p className='font-semibold text-xl text-main-text'>{loading ? '...' : stats.totalLabels}</p>
              </div>
              <img src="asset/icons/bx_label.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Total Spent</p>
                <p className='font-semibold text-xl text-main-text'>${loading ? '...' : stats.totalSpent}</p>
              </div>
              <img src="asset/icons/spent.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Avg. Cost</p>
                <p className='font-semibold text-xl text-main-text'>${loading ? '...' : stats.avgCost}</p>
              </div>
              <img src="asset/icons/cost.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>International</p>
                <p className='font-semibold text-xl text-main-text'>{loading ? '...' : stats.international}</p>
              </div>
              <img src="asset/icons/international.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className='py-20 sm:py-30 px-15 sm:px-30 bg-red-50 border border-red-200 rounded-15px sm:rounded-20px mb-20'>
          <div className='flex items-center gap-10'>
            <div className='w-5 h-5 bg-red-500 rounded-full flex items-center justify-center'>
              <span className='text-white text-xs'>!</span>
            </div>
            <p className='text-red-700 font-medium'>{error}</p>
            <button 
              onClick={() => loadShipments()} 
              className='ml-auto text-red-600 hover:text-red-800 font-medium'
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Recent Labels */}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px sm:space-y-20 space-y-10 w-full'>
        {/* dropdown */}
        <div className='flex justify-between items-center gap-8'>
          <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Recent Labels<span>({shipments.length})</span></h2>
          <div className="flex justify-end gap-8">
            <BulkImport/>
            <NavLink to={"/create-labels"} className='flex items-center justify-between gap-8 button-icon'>
              <img src="asset/icons/white-plus.svg" alt="icon" />
              <span className='sm:block hidden'> Create Label</span>
            </NavLink>
          </div>
        </div>

        {/* search and dropdown */}
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='w-full xl:w-1/3 2xl:w-1/2 relative'>
            <input type="search" name='search' placeholder='Search Labels' className='table-search' />
            <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-13 left-10' />
          </div>

          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className='flex justify-center gap-6 button-border w-full sm:hidden max-xl:mt-10'>
            <img src="asset/icons/filter.svg" alt="icon" />
            <span> Filters</span>
          </button>

          <div className={`filter-toggle ${isFilterOpen ? 'filter-open' : 'filter-close'}`}>
            <div className='filter-menu'>
              <div className='w-full grid sm:grid-cols-3 grid-cols-1 xl:pl-20 gap-10 max-xl:mt-10'>

                <div className='flex justify-between items-center pb-14 sm:hidden'>
                  <div className='flex gap-14 items-center justify-start flex-wrap'>
                    <p className='font-semibold text-17px text-main-text'>Filters</p>
                    <button className='flex justify-between items-center gap-6 filter-btn'>
                      <img src="asset/icons/trash.svg" alt="icon" className='h-15' />
                      <span className=''>Clear all filters</span>
                    </button>
                  </div>

                  <RxCross2 className='h-24 text-main-text cursor-pointer' onClick={() => setIsFilterOpen(false)} />
                </div>

                {/* All Carriers */}
                <div ref={dropdown3.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="carrier" className='label-text block sm:hidden'>Carrier</label>
                    <button onClick={dropdown3.toggle} id='carrier' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Carriers</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown3.isOpen && (
                    <div className="table-dropdown-menu">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>USPS</li>
                        <li className='table-dropdown-title'>DHL</li>
                        <li className='table-dropdown-title'>UPS</li>
                        <li className='table-dropdown-title'>Other</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* All Statuses */}
                <div ref={dropdown4.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="status" className='label-text block sm:hidden'>Status</label>
                    <button onClick={dropdown4.toggle} id='status' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Statuses</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown4.isOpen && (
                    <div className="table-dropdown-menu">
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>Delivered</li>
                        <li className='table-dropdown-title'>Completed</li>
                        <li className='table-dropdown-title'>In transit</li>
                        <li className='table-dropdown-title'>Created</li>
                        <li className='table-dropdown-title'>Paid</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* All Time */}
                <div ref={dropdown5.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="time" className='label-text block sm:hidden'>Time</label>
                    <button onClick={dropdown5.toggle} id='time' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Time</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown5.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown5.isOpen && (
                    <div className="table-dropdown-menu">
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>USPS</li>
                        <li className='table-dropdown-title'>UPS</li>
                        <li className='table-dropdown-title'>DHL</li>
                      </ul>
                    </div>
                  )}
                </div>

                <button className='primary-btn mt-25 sm:!hidden' onClick={() => setIsFilterOpen(false)}>Save Filters</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Shipments table */}
        <div className="relative">

          {checked && (
            <div className='absolute bottom-full pb-10 sm:pb-18 left-0 w-full'>
              <div className='bg-cta-secondary w-full py-5 sm:py-7 rounded-7px px-20 xl:px-20 flex justify-start items-center  gap-20 sm:gap-27 flex-wrap'>

                <div className='export-cross-btn' onClick={() => setChecked(false)}>
                  <RxCross2 />
                </div>
                <p className='text-13px font-medium text-white text-center'><span>1</span> Selected</p>

                {/* export dropdown */}
                <div ref={dropdown9.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown9.toggle} id='time' type='button' className="export-btn group">
                      <TbFileExport className='text-lg' />
                      <p className='text-13px font-medium'>Export</p>
                      <IoChevronDown className={`text-lg transition-transform duration-300 ${dropdown9.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown9.isOpen && (
                    <div className="filter-dropdown-menu w-full">
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>.xslx</li>
                        <li className='table-dropdown-title'>.csv</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="table-content relative">
            <div className='overflow-x-auto main-scrollbar max-xl:mb-10 w-full'>
              <table className='table-auto w-full custom-table'>
                <thead className='bg-table-header'>
                  <tr>
                    <th>
                      <label className="flex items-center cursor-pointer relative w-20 h-20">
                        <input type="checkbox" className='peer peer-checked:border-Outlines' />
                        <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                          <img src="/asset/icons/check.svg" alt="" className='h-19' />
                        </span>
                      </label>
                    </th>
                    <th>ID</th>
                    <th>Recipient</th>
                    <th>Destination</th>
                    <th>Carrier</th>
                    <th>Status</th>
                    <th>Cost</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="9" className="text-center py-20">
                        <div className="flex justify-center items-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                          <span className="ml-10 text-secondary-text">Loading shipments...</span>
                        </div>
                      </td>
                    </tr>
                  ) : shipments.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="text-center py-20">
                        <p className="text-secondary-text">No shipments found</p>
                      </td>
                    </tr>
                  ) : (
                    shipments.map((shipment, index) => (
                      <tr key={shipment._id || index} className={`${checked ? 'bg-table-header-active' : ''}`}>
                        <td>
                          <label className="flex items-center cursor-pointer relative w-20 h-20">
                            <input type="checkbox" className='peer peer-checked:border-Outlines' onChange={(e) => setChecked(e.target.checked)} />
                            <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                              <img src="/asset/icons/check.svg" alt="" className='h-19' />
                            </span>
                          </label>
                        </td>
                        <td>{shipment.shipmentId || shipment._id}</td>
                        <td><p>{shipment.recipientName || 'N/A'}</p></td>
                        <td>
                          <p>{shipment.destinationAddress?.street1 || 'N/A'}</p>
                          <p className='description'>{shipment.destinationAddress?.city}, {shipment.destinationAddress?.state} {shipment.destinationAddress?.zip}</p>
                        </td>
                        <td>
                          <div className='flex gap-6 items-center justify-start'>
                            <img src="asset/table-image/type-1.svg" alt="icon" className='h-29' />
                            <div>
                              <p>{shipment.carrier || 'N/A'}</p>
                              <p className='description'>{shipment.service || 'N/A'}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='inline-block'>
                            <div className={`badge ${getStatusBadgeClass(shipment.status)}`}>
                              <img src={getStatusIcon(shipment.status)} alt="icon" className='h-14' />
                              <p>{shipment.status || 'N/A'}</p>
                            </div>
                          </div>
                        </td>
                        <td>${shipment.cost || '0.00'}</td>
                        <td>{formatDate(shipment.createdAt)}</td>
                        <td>
                          <div className='flex gap-5 justify-start items-center'>
                            {/* eye */}
                            <div className="relative group">
                              <div className="action-btn">
                                <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                              </div>
                              <span className="action-tooltip">
                                <span className='tooltip-label'>
                                  View Label
                                </span>
                                <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                              </span>
                            </div>

                            {/* download */}
                            <div className="relative group">
                              <div className="action-btn">
                                <img src="/asset/icons/download.svg" alt="icon" className="h-19" />
                              </div>
                              <span className="action-tooltip">
                                <span className='tooltip-label'>
                                  Download Label
                                </span>
                                <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                              </span>
                            </div>

                            {/* tracking */}
                            <div className="relative group">
                              <div className="action-btn">
                                <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                              </div>
                              <span className="action-tooltip">
                                <span className='tooltip-label'>
                                  Track
                                </span>
                                <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}



                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShippingLabelsPage
