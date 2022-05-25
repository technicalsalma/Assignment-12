
import React from 'react';

import auth from '../../firebase.init';
import ima from '../../images/profile/ima.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {

    const [user] = useAuthState(auth)

    return (
      <div>
        <div class="avatar grid justify-items-center mb-[-90px]">
          <div class="w-44 rounded-full ">
            <img src={user?.photoURL || ima} alt="" />
          </div>
        </div>
        <div className="bg-gray-300 h-[50vh] flex">
          <div className="flex-auto w-2/5 text-center lg:mt-20 text-white-300">
            <p className="text-secondary font-bold">{user?.displayName}</p>
            <p className="text-secondary">{user?.email}</p>
          </div>

          <div className="flex-auto w-2/5 text-center items-center lg:mt-20">
            <button className="btn btn-sm">
              <Link to="updateprofile">Update Your Profile</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;