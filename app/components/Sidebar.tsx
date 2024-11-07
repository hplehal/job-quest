import Link from 'next/link'
import { signOut } from '../login/actions'
import React from 'react'

const SideBarComponent = () => {
  return (
    <aside className="h-svh flex flex-col justify-between bg-dark-text items-center w-[250px]">
      <div>
        <Link href={'/user'}>
          <h3 className="text-green-teal text-xl font-medium mb-5">JobQuest</h3>
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
      <div>
        <button formAction={signOut} className="cursor-pointer">
          Log out
        </button>
      </div>
    </aside>
  )
}

export default SideBarComponent
