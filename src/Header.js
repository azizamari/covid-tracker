import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="header_dropdown" >
                <Select variant="outlined" value="abc">
                <MenuItem value="worldwide">Worldwide</MenuItem>
                <MenuItem value="worldwide">Worldwide</MenuItem>
                <MenuItem value="worldwide">Worldwide</MenuItem>
                <MenuItem value="worldwide">yooooo</MenuItem>
                </Select>

            </FormControl>
        </div>
    )
}

export default Header
