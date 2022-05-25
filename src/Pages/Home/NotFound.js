import React from 'react';
import notFount from '../../images/notFound/not-found.jpg'

const NotFound = () => {
    return (
      <div>
        <div class="avatar">
          <div class="w-24 rounded">
            <img src={notFount} alt=''/>
          </div>
        </div>
      </div>
    );
};

export default NotFound;