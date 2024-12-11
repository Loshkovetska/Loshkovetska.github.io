import React from 'react';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import "./DefaultSelect.scss";

const sizes = [
    "S",
    "M",
    "L"
];

export default function DefaultSelect(props) {
    const [size, setSize] = React.useState("S");

    const handleChange = (event) => {
        setSize(event.target.value);
        props.selectedVal(event.target.value);
    };

    return (
        <FormControl className="default-select">
            <Select
                className="good-select"
                name="sizes"
                value={size}
                defaultValue=""
                onChange={handleChange}
                input={<Input />}>

                {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                        {size}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}