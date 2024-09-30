import React from 'react'
import '../../styles/MainServices.css'
import MainServiceList from './MainServiceList'
function MainServices() {
    return (
        <div className='ms_main'>
            <div className='ms_div'>
                <div className='ms_div1'>
                    <MainServiceList />
                </div>
                <div className='ms_div2'>
                    <div>SERVICES</div>

                </div>

            </div>

        </div>
    )
}

export default MainServices