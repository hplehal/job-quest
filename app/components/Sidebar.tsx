import Link from 'next/link'
import React from 'react'

const SideBarComponent = () => {
  return (
    <aside>
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
    </aside>
  )
}

export default SideBarComponent
