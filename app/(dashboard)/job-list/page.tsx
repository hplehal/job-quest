import JobListComponent from '@/app/components/List'
import OverviewComponent from '@/app/components/Overview'
import { jobApplications } from '@/utils/data/data'

const JobListPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  mx-auto ">
      <OverviewComponent />
      <JobListComponent jobApplications={jobApplications} />
    </div>
  )
}

export default JobListPage
