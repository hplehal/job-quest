import React from 'react'
import SideBarComponent from '../components/Sidebar'

const DashboardPage = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex">
      <SideBarComponent />
      <div>
        <h1>Good Morning!</h1>
        {children}
      </div>
    </div>
  )
}

export default DashboardPage
