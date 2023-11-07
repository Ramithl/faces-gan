import * as React from 'react';
import './Elements.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';




function ToggleCard({value1, value2, title}) {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div class="toggle-card">
            <div class="input-title">{title}</div>
            <ToggleButtonGroup
                color="secondary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                fullWidth={true}
                size='small'
            >
                <ToggleButton value="web">{value1}</ToggleButton>
                <ToggleButton value="android">{value2}</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default ToggleCard;
