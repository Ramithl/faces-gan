import * as React from 'react';
import './Elements.css';
import ToggleCard from './Toggle Card';
import Button from '@mui/material/Button';





function InputCard() {
    return (
        <div class="input-box">
            <div class="input-box-title">Set Appearence</div>
            <ToggleCard value1={'Male'} value2={'Female'} title={'Sex'}/>
            <ToggleCard value1={'Young'} value2={'Old'} title={'Age'}/>
            <ToggleCard value1={'Black'} value2={'Blonde'} title={'Hair'}/>
            <div class="gen-btn"><Button variant="contained" color='secondary' fullWidth={true}>Generate a Face</Button></div>

        </div>
    );
}

export default InputCard;
