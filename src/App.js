import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './App.css'
import Password from './Components/Password'

class App extends Component {
  state = {
    websiteName: '',
    username: '',
    password: '',
    isChecked: false,
    passwordsList: [],
    searchInput: '',
  }

  onDeletePass = id => {
    const {passwordsList} = this.state
    const filteredPassword = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordsList: filteredPassword})
  }

  onChangeWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()

    const {websiteName, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      websiteName,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteName: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      websiteName,
      username,
      password,
      isChecked,
      searchInput,
      passwordsList,
    } = this.state

    // Filter passwords based on search input
    const searchResults = passwordsList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-manager-container">
          <form
            className="add-password-container"
            onSubmit={this.onAddPassword}
          >
            <h1 className="add-new-password">Add New Password</h1>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-input-logo"
              />
              <hr />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-area"
                onChange={this.onChangeWebsiteName}
                value={websiteName}
              />
            </div>
            <div className="username-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="username-input-logo"
              />
              <hr />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-area"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="password-input-logo"
              />
              <hr />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-area"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="your-passwords-container">
          <div className="password-length-and-search-container">
            <p className="your-password">
              Your Passwords
              <span className="password-length">{searchResults.length}</span>
            </p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <hr />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr />
          <div className="check-box-label-container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={this.onCheckCheckbox}
              checked={isChecked}
            />
            <label className="show-passwords" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {searchResults.length > 0 ? (
            <ul className="passwords-list">
              {searchResults.map(eachPassword => (
                <Password
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  isChecked={isChecked}
                  onDeletePass={this.onDeletePass}
                />
              ))}
            </ul>
          ) : (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no password"
                className="no-password-image"
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
