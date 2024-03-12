import {others} from "../apis";
import {toast} from "react-hot-toast";
import { useDispatch, useSelector} from "react-redux"
import { apiConnector } from "../apiConnector";

const {FETCH_CON}=others;


export function getUserDetails(userId, navigate) {
    return async () => {
      const toastId = toast.loading("Loading...")
      
      try {
        const response = await apiConnector("GET", FETCH_CON, userId,)
        //console.log("GET_CON_DETAILS API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        console.log(response)
 
      } catch (error) {
        //dispatch(logout(navigate))
        console.log("GET_CON_DETAILS API ERROR............", error)
        toast.error("Could Not Get Con Details")
      }
      toast.dismiss(toastId)
      
    }
  }
  