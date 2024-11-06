import Link from 'next/link'
import React from 'react'

const SideBarComponent = () => {
  return (
    <aside className="h-[calc(100vh-57px)] flex flex-col justify-between items-center w-[200px]">
      <div>
        <Link href={'/user'}>
          <h3>JobQuest</h3>
        </Link>
        <ul>
          <Link href={'/user'}>
            <li>User</li>
          </Link>
          <Link href={'/job-list'}>
            <li>List</li>
          </Link>
        </ul>
      </div>
      <div>Log out</div>
    </aside>
  )
}

export default SideBarComponent
