

export const currentUser = (state) => state.session.currentUserId;

export const loggedIn = (state) => Boolean(state.session.currentUserId);