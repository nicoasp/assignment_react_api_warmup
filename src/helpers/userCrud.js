export function deleteThisUser(users, userId) {
	return users.filter((user) => {
		return user.id != userId;
	})
}

export function findThisUser(users, userId) {
	return users.filter((user) => {
		return user.id == userId;
	})[0]
}

export function updateThisUser(users, newUser) {
  return users.map( (user) => {
    if(user.id == newUser.id) {
      return newUser
    } else {
      return user
    }
  })
}