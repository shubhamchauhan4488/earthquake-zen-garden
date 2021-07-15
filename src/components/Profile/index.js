import React, { useContext } from 'react';
import './profile.css';
import { SourceContext } from '../../context/sourceContext';

const Profile = () => {
  const { profileData } = useContext(SourceContext);
  const { firstName, lastName, avatarImage, phone, email, bio } = profileData;
  return (
    <div className='profile-container'>
      <div>Profile</div>

      <div className='profile-content-wrapper'>
        <img src={avatarImage} width='80px' height='100px' />
        <table >
          <tbody>
            <tr className='profile-content-row'>
              <td><b>First name</b></td>
              <td>{firstName}</td>
            </tr>
            <tr className='profile-content-row'>
              <td><b>Last name</b></td>
              <td>{lastName}</td>
            </tr>
            <tr className='profile-content-row'>
              <td><b>Phone</b></td>
              <td>{phone}</td>
            </tr>
            <tr className='profile-content-row'>
              <td><b>Email</b></td>
              <td>{email}</td>
            </tr>
            <tr className='profile-content-row'>
              <td><b>Bio</b></td>
              <td>{bio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;