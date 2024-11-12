const OverviewComponent = () => {
  return (
    <div className="flex items-center p-4 bg-dark-text">
      <div className="flex flex-col items-center p-5">
        <h2 className="font-bold text-2xl text-green-teal mb-3 ">Applied</h2>
        <p className="font-medium text-xl ">100</p>
      </div>
      <div className="flex flex-col items-center p-5">
        <h2 className="font-bold text-2xl text-green-teal mb-3 ">Response</h2>
        <p className="font-medium text-xl ">20</p>
      </div>

      <div className="flex flex-col items-center p-5">
        <h2 className="font-bold text-2xl text-green-teal mb-3 ">Interview</h2>
        <p className="font-medium text-xl ">3</p>
      </div>

      <div className="flex flex-col items-center p-5">
        <h2 className="font-bold text-2xl text-green-teal mb-3 ">Offers</h2>
        <p className="font-medium text-xl ">0</p>
      </div>
    </div>
  )
}

export default OverviewComponent
