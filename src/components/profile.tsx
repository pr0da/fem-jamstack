import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

interface Props {
  onLogout: () => void
}

const Profile: React.FC<Props> = props => {
  const { onLogout } = props
  const identity = useIdentityContext()
  const { isLoggedIn, user } = identity

  if (!isLoggedIn) {
    return null
  }

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
        Logged in as {user?.user_metadata?.full_name}
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </span>
    </div>
  )
}

export default Profile
