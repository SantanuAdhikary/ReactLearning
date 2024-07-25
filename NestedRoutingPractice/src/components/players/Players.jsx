import React, { useState, Fragment } from 'react'
import PLAYER from '../../Player.json'
import { Link, useLocation } from 'react-router-dom'

const Players = () => {
    let [state, setState] = useState(PLAYER)
    let location = useLocation()

    return (
        <main>
            <div className='users'>
                {
                    state.map.length > 0 && state.map(player => (
                        <Fragment key={player.id}>
                            <div className="container">
                                <figure>
                                    <figure>
                                        <picture>
                                            <li className='list-item'><img src={player.photo} alt={player.name} height={150} width={150} /></li>
                                            <li className='list-item'>{player.name}</li>
                                        </picture>
                                        <Link to="">View More</Link>
                                    </figure>
                                </figure>
                            </div>

                        </Fragment>
                    ))
                }
            </div>
        </main>
    )
}

export default Players