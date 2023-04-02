import React from 'react'
import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/Online';

const Rightbar = ({profile}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src={`../../assets/gift.png`} className='birthdayImg' alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>2 other friends</b> have a birthday today</span>
        </div>
        <img src={`../../assets/ad.png`} className='rightbarAd' alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u)=>(
            <Online user = {u} key ={u.id} />
          ))}
        </ul></>
    )
  }
  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className='rightbarTitle'> User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoKey">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoKey">Madrif</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoKey">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'> User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar