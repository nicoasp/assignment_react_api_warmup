export function deleteThisUser(users, userId) {
	let newUsers = users.filter((user) => {
		return user.id != userId;
	})
	return newUsers;
}