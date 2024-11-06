import React from 'react'
import SideBarComponent from '../components/Sidebar'
import { createClient } from '@/utils/supabase/server'

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
    <div className="flex">
      <SideBarComponent />
      <div>
        {user ? (
          <h2 className="text--foreground font-bold text-3xl">
            Hello! <span className="text-green-teal">{user.email}</span>
          </h2>
        ) : (
          <h2 className="text--foreground text-3xl">Hello!</h2>
        )}

        {children}
      </div>
    </div>
  )
}

export default DashboardPage
