const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-screen z-2000 bg-model-bg main-loader overflow-hidden">
        <div className="absolute animate-spin rounded-full w-90 h-90 border-t-4 border-b-4 border-primary"></div>
        <div className='w-80 h-80 flex items-center justify-center'>
            <img src="/asset/images/logo/logo-icon.svg" alt="BozzMail Logo" title="BozzMail Logo" className="h-32" />
        </div>
    </div>
  )
}

export default Loader