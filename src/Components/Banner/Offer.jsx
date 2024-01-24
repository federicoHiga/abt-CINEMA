import React from 'react';

const Offer = () => {
    return (
        <div style={{
            zIndex: 5,
            position: 'absolute',
            top: '50%',
            right: '65%',
            }}>
            <div style={{
                fontSize: '80px',
                color: 'white',
                padding: '5px'
                }}>Limited Offer</div>
            <div style={{
                fontSize: '40px', 
                color: 'white', 
                padding: '5px'
                }}>Discount on selected products!</div>
            <button style={{
                margin: 5, 
                fontFamily: 'Nunito', 
                width: '157px', 
                height: '58px', 
                fontSize: '20px', 
                borderRadius: '15px'
                }}>See offers</button>
        </div>
    )
}

export default Offer;