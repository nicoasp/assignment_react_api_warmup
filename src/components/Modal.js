import React from 'react'
import Input from './elements/Input'
import InputGroup from './elements/InputGroup'
import Button from './elements/Button'
import Alert from './elements/Alert'
import Showable from './elements/Showable'

const Modal = ({onSubmit, error, user}) => (
  <div className="modal">
    <form className="container" onSubmit={onSubmit} >
      <h1>Edit User</h1>
      <Showable show={error}>
        <Alert type="danger">
          Oops, there was a problem...
        </Alert>
      </Showable>
      <InputGroup name="first_name" labelText="First Name">
        <Input name="first_name" value={user.first_name} />
      </InputGroup>
      <InputGroup name="last_name" labelText="Last Name">
        <Input name="last_name" value={user.last_name} />
      </InputGroup>
      <InputGroup name="avatar" labelText="Photo Link">
        <Input name="avatar" value={user.avatar}/>
      </InputGroup>
      <Button type="submit" color="primary">Save Changes</Button>
    </form>
  </div>
)

export default Modal