import { imagepoints} from "../apis";
import {toast} from "react-hot-toast";
import { useDispatch, useSelector} from "react-redux"
import { apiConnector } from "../apiConnector";

const {FETCH_IMG}=imagepoints;

export function fetchimage() {
    return new Promise(async (resolve, reject) => {
      const toastId = toast.loading("Loading...");
      try {
        const response = await apiConnector("GET", FETCH_IMG);
        //console.log("FETCH IMAGE RESPONSE...........", response);
        // if(!response.data.successs){
        //     throw new Error(response.data.message)
        // }
  
        //toast.success("Image fetch successfully");
        resolve(response.data); // Resolve the promise with the response data
      } catch (err) {
        console.log("FETCH IMAGE API ERROR...........", err);
        toast.error("images fetching failed");
        reject(err); // Reject the promise with the error
      } finally {
        toast.dismiss(toastId);
      }
    });
  }
  