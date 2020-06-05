import { createSelector } from "reselect";

const selectUser = state => state.user;

const selectCart = state => state.cart;

export const selectCurrentUser = createSelector([selectUser],(user)=> user.selectCurrentUser)

export const selectCartHidden = createSelector([selectCart], cart=> cart.hidden)