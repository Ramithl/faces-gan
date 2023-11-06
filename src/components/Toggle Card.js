import * as React from 'react';
import './Elements.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';




function ToggleCard() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div class="toggle-card">
            <div class="input-title">Hair</div>
            <ToggleButtonGroup
                color="secondary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                // fullWidth={true}
                size='small'
            >
                <ToggleButton value="web">Black</ToggleButton>
                <ToggleButton value="android">Blonde</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default ToggleCard;
