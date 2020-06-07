import React from "react"
import { Link } from "gatsby"

const Profile: React.FC = () => {
  return (
    <div className="bg-moon-gray flex pa2 justify-between items-center">
      <nav className="flex">
        <Link
          className="link mh2 pa1 dark-gray"
          activeClassName="bg-dark-gray white"
          to="/dashboard/secret"
        >
          Secret Stuff
        </Link>
        <Link
          className="link mh2 pa1 dark-gray"
          activeClassName="bg-dark-gray white"
          to="/dashboard/base"
        >
          See Your Base
        </Link>
      </nav>
      <span>show login status</span>
    </div>
  )
}

export default Profile
