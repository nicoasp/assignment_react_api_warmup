import React from 'react'
import JumbotronFluid from './elements/JumbotronFluid'
import UserList from './UserList'
import UserForm from './UserForm'
import Modal from './Modal'

const App = ({users, isFetching, error, onAddUser, onDeleteUser, onEditUser, userToEdit}) => (
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations in React Applications"
    />
    <UserList
      users={users}
      isFetching={isFetching}
      onDeleteUser={onDeleteUser}
      onEditUser={onEditUser}
    />
    <br />
    <UserForm
      onSubmit={onAddUser}
      error={error}
    />
    <Modal userToEdit={userToEdit}/>
  </div>
)

export default App

