import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/main/Login'
import Signup from './component/main/Signup';
import Clogin from './component/main/Clogin';
import Csignup from './component/main/Csignup';
import OpenRoute from './component/core/openRoute';
import Searched from './component/core/searched';
import Profile from './pages/Myprofile';
import Upload from './pages/Upload';
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from './services/operation/profileAPI';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Error from './pages/Error'
import Imageview from './component/core/Imageview'
import Pricing from './pages/Pricing'
import ForgetPassword from './component/main/ForgotPassword';
import UpdatePassword from './component/main/UpdatePassword';
import MySubscription from './pages/MySubscription';
function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      // console.log(token);
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App bg-white w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="/csignup"
          element={
            <OpenRoute>
              <Csignup />
            </OpenRoute>
          }
        />

        <Route
          path="/clogin"
          element={
            <OpenRoute>
              <Clogin />
            </OpenRoute>
          }
        />

        <Route 
        path="/login/forgot-password"
        element={
            <ForgetPassword/>
        }/>

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
        path='/photos'
        element={<Searched/>}
         />

         {user && <Route
         path="/profile"
         element={<Profile/>}
         />}

         {user && <Route
         path="/profile/my-subscription"
         element={<MySubscription/>}
         />}
         {user && user?.role==="Contributor" && (
            <Route
            path="/profile/upload"
            element={<Upload/>}
            />
         )
         }

         <Route
         path='/photos/:id'
         element={<Imageview/>}
         />

         {(!user || user?.Plan==="false") && <Route
         path='/pricing'
         element={<Pricing/>}
         />}
         {/* 404 Page */}
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
