import { useRef, useState } from "react"
//import { AiOutlineCaretDown } from "react-icons/ai"
// import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../hooks/useOnclickOutside"
import { logout } from "../../services/operation/authApi"
import use from '../../asset/icon/profile.svg'
import down from '../../asset/icon/down.svg'
import pay from '../../asset/icon/subs.svg'
import log from '../../asset/icon/logout.svg'
import image from '../../asset/icon/photos.svg'

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        {/* <AiOutlineCaretDown className="text-sm text-richblack-100" /> */}
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute w-[165px] text-[#8C8888] font-bold text-center top-[118%] right-[-40px] z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-[#535352] bg-[#3B3B3A]"
          ref={ref}
        >
          <Link to="/profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center justify-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <img src={use}/>
              Profile
            </div>
          </Link>
          <Link to="/profile/my-subscription" onClick={() => setOpen(false)}>
            <div className="flex w-full justify-center items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <img src={pay}/>
              My Subscription
            </div>
          </Link>
          <Link to="/profile" onClick={() => setOpen(false)}>
            <div className="flex w-full justify-center items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <img src={down}/>
              Download
            </div>
          </Link>
          <Link to="/photos" onClick={() => setOpen(false)}>
            <div className="flex w-full justify-center items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <img src={image}/>
              Photos
            </div>
          </Link>
           

         
          <div
          
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 justify-center py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <img src={log}/>
            Sign out
          </div>
        </div>
      )}
    </button>
  )
}
