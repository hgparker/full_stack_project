

export const currentUser = (state) => state.session.user.currentUserId;

export const loggedIn = (state) => Boolean(state.session.user.currentUserId);