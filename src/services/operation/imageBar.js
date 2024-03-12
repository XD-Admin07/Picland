import {profilepoints} from "../apis";
import {toast} from "react-hot-toast";
import { useDispatch, useSelector} from "react-redux"
import { apiConnector } from "../apiConnector";


const {UPLOAD_IMG} =profilepoints;
export function Addimage(
    formDataToSend,token,userId
)

{
  
//const {user} =useSelector((state)=>state.profile)
   return async()=>{
     
    const toastId=toast.loading("Loading...")
      try{
        const response=await apiConnector("POST",UPLOAD_IMG,
            formDataToSend,userId,{
              Authorization: `Bearer ${token}`,
            },
            {
                "Content-Type": "multipart/form-data",
            }
            
        )

        //console.log("ADD IMAGE RESPONSE...........",response);
        // if(!response.data.successs){
        //     throw new Error(response.data.message)
        // }

        toast.success("Image added successfully");


      }catch(err)
      {
        console.log("ADD IMAGE API ERROR...........",err);
        toast.error("image upload failed");

      }
      toast.dismiss(toastId);
   }
}