import React, { Fragment, useState } from 'react'
import USER from '../../data.json'

const AllUsers = () => {
  let [state,setState] = useState(USER)
  return (
    <div className='users'>
      {
        state.map.length > 0 && 
        state.map(user=>(
          <Fragment key={user.id}>
            <div className="container">
              <figure>
                <picture>
                  <img src={user.avatar_url} alt={user.login} height={150} width={150} />
                </picture>
              </figure>
            </div>
          </Fragment>
        ))
      }
    </div>
  )
}

export default AllUsers