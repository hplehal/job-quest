const UserPage = () => {
  return (
    <div className="flex justify-center items-center  mx-auto ">
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
          <h2 className="font-bold text-2xl text-green-teal mb-3 ">
            Interview
          </h2>
          <p className="font-medium text-xl ">3</p>
        </div>

        <div className="flex flex-col items-center p-5">
          <h2 className="font-bold text-2xl text-green-teal mb-3 ">Offers</h2>
          <p className="font-medium text-xl ">0</p>
        </div>
      </div>
      {/* <table className="bg-dark-text">
        <tr className="mb-5">
          <th>Applied</th>
          <th>Response</th>
          <th>Interviews</th>
          <th>Offers</th>
        </tr>
        <tr className="p-6">
          <td>100</td>
          <td>6</td>
          <td>2</td>
          <td>0</td>
        </tr>
      </table> */}
    </div>
  )
}

export default UserPage
