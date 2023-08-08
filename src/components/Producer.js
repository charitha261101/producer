import '../App.css';
import b from './barbie.jpg';
import o from './oh1.jpg';
import React from 'react';
import { Typography,Button } from '@mui/material';
function Producer(){
    return(
        <>
        <div className="pro">
            <Typography variant='h5' align='center'>Productions</Typography>
            <Typography variant='body1' align='center'>Exsisting Productions</Typography>
        </div>
        <div className='Tile'>
            <div className='tile'>
            <img src={b} alt='tile1'/>
            </div>
            <div className='tile'>
            <img src={o} alt='tile2'/>
            </div>
        </div>
        <div className='but'>
        <Button variant='outlined' color='primary'>Add New Production</Button>
        </div>
        </>
    )
}
export default Producer;