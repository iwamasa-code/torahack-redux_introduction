export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
//アプリからユーザーのデータを初期化すればいいから引数は取らない。決まった値が入るから。
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
    },
  };
};

//1, Action typeを定義してexport
//2, typeとpayloadを記述する
//3, プレーンなオブジェクトを返す
