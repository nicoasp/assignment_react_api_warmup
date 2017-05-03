export function deleteThisUser(users, userId) {
	return users.filter((user) => {
		return user.id != userId;
	})
}