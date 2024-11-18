const JobListComponent = ({ jobApplications }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">JobQuest Dashboard</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-100">Company</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Position</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Status</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Date Applied
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Location</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Source</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((job: object) => (
            <tr key={job.id}>
              <td className="border border-gray-300 p-2">{job.company}</td>
              <td className="border border-gray-300 p-2">{job.position}</td>
              <td className="border border-gray-300 p-2">{job.status}</td>
              <td className="border border-gray-300 p-2">{job.dateApplied}</td>
              <td className="border border-gray-300 p-2">{job.location}</td>
              <td className="border border-gray-300 p-2">{job.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // { items.map(item => {
    //   return(

    //     <div>
    //       <h1>{item.company}</h1>
    //       <
    //     </div>
    //   )
    // })}
  )
}

export default JobListComponent
