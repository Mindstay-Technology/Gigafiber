import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Bandwidth from './Bandwidth';
import MonthlyPlan from './MonthlyPlan';
import Moredetail from './Moredetail';
import  DataUsage from './Datausage';
import Logout from './Logout';
import Agreement from './Agreement';
import Setting from './Setting';
import Setnotification from './Setnotification';
import Speed from './Speed';
import Payment from './Payment';
import Referal from './Referal';
import Msidebar from './Msidebar';
import BandwidthM from './BandwidthM';
import ReferM from './ReferM';
import LogoutM from './LogoutM';
// import "./Style.css"
function RoutesCompo() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/bandwidth' element={<Bandwidth />}/>
                <Route path='/monthly' element={<MonthlyPlan/>}/>
                <Route path='/moredetail' element={<Moredetail/>}/>
                <Route path='/datausage' element={<DataUsage/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/agreement' element={<Agreement/>}/>
                <Route path='/setting' element={<Setting/>}/>
                <Route path='/setnotification' element={<Setnotification/>}/>
                <Route path='/speed' element={<Speed/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/referm' element={<ReferM/>}/>
                <Route path='/bandwidthm' element={<BandwidthM/>}/>
                <Route path='logoutm' element={<LogoutM/>}/>
                {/* <Route path='/msidebar' element={<Msidebar/>}/> */}
            
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default RoutesCompo;