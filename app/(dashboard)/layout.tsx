import React from 'react'
import SideBarComponent from '../components/Sidebar'
import { createClient } from '@/utils/supabase/server'
import JobButton from '../components/JobButton'

const DashboardPage = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <div className="flex w-100vw">
      <SideBarComponent />
      <div className="w-[calc(100vw-250px)]">
        <div className="flex justify-around items-center">
          {user ? (
            <h2 className="text--foreground font-bold text-3xl p-10">
              Hello! <span className="text-green-teal">{user.email}</span>
            </h2>
          ) : (
            <h2 className="text--foreground text-3xl">Hello!</h2>
          )}

          <JobButton />
        </div>

        {children}
      </div>
    </div>
  )
}

export default DashboardPage
