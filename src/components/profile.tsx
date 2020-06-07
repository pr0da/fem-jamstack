import React from "react"
import { Link } from "gatsby"
import { useAuth } from "../context/auth-context"
import { useUser } from "../context/user-context"

const Profile: React.FC = () => {
  const { logout } = useAuth()!
  const { full_name } = useUser()!

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
      <span>
        Logged in as {full_name}{" "}
        <button type="button" onClick={logout}>
          Logout
        </button>
      </span>
    </div>
  )
}

export default Profile
