import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';

function Viewers() {
    return (
        <div className='viewers-card'>
            <FontAwesomeIcon icon={faNoteSticky} />
            <div className='viewers-heading'>
                <h3>Compilance Made Simple</h3>
            </div>
            <div className='viewers-para'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovere
            </div>
        </div>
    )
}

export default Viewers
