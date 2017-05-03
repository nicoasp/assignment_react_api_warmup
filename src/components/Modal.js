import React from 'react'
import Input from './elements/Input'
import InputGroup from './elements/InputGroup'
import Button from './elements/Button'
import Alert from './elements/Alert'
import Showable from './elements/Showable'

const Modal = ({onSubmit, error, userToEdit, onSaveChanges}) => {
  const display = userToEdit ? "block" : "none";
  return (
    
    <div className="modal" style={{ display }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <form className="container" onSubmit={onSaveChanges} >
            <h1>Edit User</h1>
            <Showable show={error}>
              <Alert type="danger">
                Oops, there was a problem...
              </Alert>
            </Showable>
            <InputGroup name="first_name" labelText="First Name">
              <Input name="first_name" defaultValue={userToEdit.first_name ? userToEdit.first_name : ''} />
            </InputGroup>
            <InputGroup name="last_name" labelText="Last Name">
              <Input name="last_name" defaultValue={userToEdit.last_name ? userToEdit.last_name : ''} />
            </InputGroup>
            <InputGroup name="avatar" labelText="Photo Link">
              <Input name="avatar" defaultValue={userToEdit.avatar ? userToEdit.avatar : ''}/>
            </InputGroup>
            <Button type="submit" color="primary" >Save Changes</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal