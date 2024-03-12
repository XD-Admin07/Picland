import {toast} from "react-hot-toast";
import rzpLogo from "../../asset/icon/PICLAND.png"
import { apiConnector } from "../apiConnector";
import { payment} from "../apis";

const {
    CAP_PAY,VER_PAY
}=payment;


//Load the Razorpay SDK from the CDN
function loadScript(src){
    return new Promise((resolve)=>{
        const script=document.createElement("script")
        script.src=src
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

//Buy the Subscription

export async function BuySubscription(
    token,sub_type,user_details,navigate,dispatch
){
    const toastId=toast.loading("Loading...")
    try{
        //Laoding the script of Razorpay SDK
        const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            toast.error(
              "Razorpay SDK failed to load. Check your Internet Connection."
            )
            return
          }

          //Initiating the payment in Backend
          const orderResponse = await apiConnector(
            "POST",
            CAP_PAY,
            {
                sub_type,
            },
            {
                Authorization:`Bearer${token}`,
            }
          )
          if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
          }
         
          //console.log("PAYMENT RESPONSE FROM BACKEND............", orderResponse.data)
          
          // Opening the Razorpay SDK
          const options ={
            key:process.env.RAZORPAY_KEY,
            currency:orderResponse.data.data.currency,
            amount:`${orderResponse.data.data.amount}`,
            order_id:orderResponse.data.data.id,
            name:"Picland",
            image:rzpLogo,
            prefill: {
                name: `${user_details.firstName} ${user_details.lastName}`,
                email: user_details.email,
              },

              handler:function(response){
                verifyPayment({...response,sub_type},sub_type,token,navigate,dispatch)
              }
          }
          const paymentObject = new window.Razorpay(options)

    paymentObject.open()
    paymentObject.on("payment.failed", function (response) {
      toast.error("Oops! Payment Failed.")
      console.log(response.error)
    })

    }catch(error){
        console.log("PAYMENT API ERROR............", error)
        toast.error("Could Not make Payment.")
    }
    toast.dismiss(toastId)

}

//Verify the Payment

async function verifyPayment(bodyData,sub_type, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment...")
    // dispatch(setPaymentLoading(true))
    try {
      const response = await apiConnector("POST", VER_PAY, bodyData, {
        Authorization: `Bearer ${token}`,
      },
      {
        sub_type
      })
  
      console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      toast.success("Payment Successful. You are now Studio user ")
      navigate("/profile/my-subscription")
      window.location.reload();
      //dispatch(resetCart())
    } catch (error) {
      console.log("PAYMENT VERIFY ERROR............", error)
      toast.error("Could Not Verify Payment.")
    }
    toast.dismiss(toastId)
    //dispatch(setPaymentLoading(false))
  }
  