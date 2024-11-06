import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen width-screen p-10">
      <div className="m-auto max-w-[600px] text-center">
        <h1 className="text-6xl text-green-teal mb-3 ">JobQuest</h1>
        <p className="text-2xl mb-3">
          Are you tired of tracking jobs by using excel sheet? Let us track all
          the jobs we applied to.{' '}
        </p>

        <Link href={'/job-list'}>
          <button className="cursor-pointer hover:bg-teal-400  bg-green-teal text-dark-text py-2 px-6 rounded-lg text-xl">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  )
}
