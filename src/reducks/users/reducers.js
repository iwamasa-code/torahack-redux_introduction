//* as ~ ・・・全てのActionsの名前がついたモジュールをimportする。
import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
        // isSignedIn: action.payload.isSignedIn,
        // uid: action.payload.uid,
        // username: action.payload.username
      };
    default:
      return state;
  }
};

//Reducersの役割
/**
 * ・Actionsからデータを受け取る
 * ・Storeのstateをどう変更するのか決める
 */
