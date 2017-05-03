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