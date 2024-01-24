import React, { Fragment } from 'react';
import Offer from './Offer';
import banner from '../Assets/banner.png'

const Banner = ()=>{
    return(
        <Fragment>
            <img src={banner} alt='banner' style={{
                width: '100%',
            }}/>
            <Offer />
        </Fragment>
    )
}

export default Banner;