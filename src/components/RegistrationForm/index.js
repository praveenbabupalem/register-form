import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isRegistrationSuccess: false,
  }

  onClickReset = () => {
    this.setState({isRegistrationSuccess: false})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isRegistrationSuccess: true, firstName: '', lastName: ''})
    }
    if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
    if (lastName === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  render() {
    const {
      firstName,
      lastName,
      isFirstNameEmpty,
      isLastNameEmpty,
      isRegistrationSuccess,
    } = this.state
    return (
      <div>
        <h1>Registration Form </h1>
        {isRegistrationSuccess && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button onClick={this.onClickReset} type="button">
              Submit Another Response
            </button>
          </div>
        )}
        {!isRegistrationSuccess && (
          <form onSubmit={this.submitForm}>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              onChange={this.onChangeFirstName}
              id="firstName"
              placeholder="First name"
              value={firstName}
            />
            {isFirstNameEmpty && <p>Required</p>}

            <label htmlFor="latName">LAST NAME</label>
            <input
              onChange={this.onChangeLastName}
              id="lastName"
              placeholder="Last name"
              value={lastName}
            />
            {isLastNameEmpty && <p>Required</p>}

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
