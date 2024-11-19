const JobListComponent = ({ jobApplications }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">JobQuest Dashboard</h1>
      <table className="table-auto w-[calc(90vw-250px)] border-collapse border border-gray-300">
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
            <th className="border border-gray-300 p-2 bg-gray-100"> </th>
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
              <div className="border border-gray-300 p-2">Edit</div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobListComponent
