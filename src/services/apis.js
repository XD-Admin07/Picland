

const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  CLOGIN_API:BASE_URL +"/auth/clogin",
  CSIGNUP_API:BASE_URL +"/auth/csignup",
  GOOGLE_API:BASE_URL +"/auth/google",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


//PROFILE ENDPOINTS
export const profilepoints={
  UPLOAD_IMG: BASE_URL+"/auth/imageadd",
  GET_USER_DETAILS: BASE_URL+"/profile/getuserdetails"
}

//IMAGE ENDPOINTS
export const imagepoints={
  FETCH_IMG: BASE_URL+"/stock/fetchimages",
}

//MISLLENEOUS
export const others={
  FETCH_CON:BASE_URL+"/details/contributordetails"
}

//PAYMENT
export const payment={
  CAP_PAY:BASE_URL+"/payment/capture-payment",
  VER_PAY:BASE_URL+"/payment/verify-payment"
}