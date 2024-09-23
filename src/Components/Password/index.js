import './index.css'

const colorsList = ['blue', 'red', 'green', 'pink', 'black', 'yellow']

const Password = props => {
  const {passwordDetails, isChecked, onDeletePass} = props
  const {websiteName, username, password, id} = passwordDetails
  const initial = websiteName[0].toUpperCase()
  const initialClassName =
    colorsList[Math.ceil(Math.random() * colorsList.length - 1)]

  const onDeletePassword = () => {
    onDeletePass(id)
  }

  return (
    <li className="password-list-item">
      <p className={`initial ${initialClassName}`}>{initial}</p>
      <div className="password-details">
        <p className="website-name">{websiteName}</p>
        <p className="username">{username}</p>
        {isChecked ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDeletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default Password
