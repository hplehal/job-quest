import OverviewComponent from '@/app/components/Overview'

const JobListPage = () => {
  return (
    <div className="flex">
      <OverviewComponent />
      <div>
        <table className="bg-dark-text">
          <tr className="mb-5">
            <th>Company</th>
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
        </table>
      </div>
    </div>
  )
}

export default JobListPage
