import React from 'react'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="prfile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileColor">
                <img src={`../../assets/post/3.jpeg`} alt='' className='profileCoverImg'/>
                <img src={`../../assets/person/7.jpeg`} alt='' className='profileUserImg'/>

                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>User Name</h4>
                    <span className='profileInfoDesc'>Hello My Friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
            </div>


        </div>
      </div>
    </>
  )
}

export default Profile