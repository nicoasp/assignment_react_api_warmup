import React, {Component} from 'react'
import App from '../components/App'
import serialize from 'form-serialize'
import { deleteThisUser } from "../helpers/userCrud";

class AppContainer extends Component {
  constructor() {
    super()

    // Initialize users in state as an empty array and
    // set isFetching to false.
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    }
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})

    // After component mounts, call the API to get the
    // users, then update state which triggers re-render.
    // Add a delay to the URL and reset isFetching upon
    // completion of the request.
    fetch('https://reqres.in/api/users?delay=1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          users: json.data,
          isFetching: false,
        })
      })
  }

  onAddUser = (e) => {
    e.preventDefault()
    const form = e.target
    const body = serialize(form, {hash: true})

    // Create headers to set the content type to json
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(body),
    }

    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})

    fetch('https://reqres.in/api/users', options)
      .then((response) => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }

        // Otherwise, extract the response into json
        return response.json()
      })
      .then((json) => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState({
          isFetching: false,
          users: [
            ...this.state.users,
            json,
          ]
        }, () => { 
          form.reset() })
      })
      .catch((error) => {
        // Set error in state & log to console
        console.log(error)
        this.setState({
          isFetching: false,
          error,
        })
      })
  }

  onDeleteUser = (e) => {
    this.setState({isFetching: true});

    const userToDelete = e.target.name;

    const options = {
      method: 'DELETE'
    }

    fetch(`https://reqres.in/api/users/${userToDelete}`, options)
      .then((response) => {
        if(response.status == 204) {
          this.setState({
            isFetching: false,
            users: deleteThisUser(this.state.users, userToDelete),
          })
        }
      })
      .catch((error) => {
        // Set error in state & log to console
        console.log(error)
        this.setState({
          isFetching: false,
          error,
        })
      })
  }

  render() {
    return (
      <App onAddUser={this.onAddUser} onDeleteUser={this.onDeleteUser} {...this.state} />
    )
  }
}

export default AppContainer
