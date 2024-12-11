import React from 'react';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../MultipleSelect/MultipleSelect.scss";

const names = [
    "Бойовик",
    "Вестерн",
    "Детектив",
    "Документальний фільм",
    "Драма",
    "Комедія",
    "Мелодрама",
    "Пригоди"
];

export default function MultipleSelect() {
    const [kindName, setKindName] = React.useState([]);
    const handleChange = (event) => {
        setKindName(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setKindName(value);
    };

    return (
        <FormControl className="multi-control">
            <Select
                className="movies-kinds"
                multiple
                displayEmpty
                name="loved-genre"
                value={kindName}
                onChange={handleChange}
                input={<Input />}>

                <MenuItem disabled value="">
                    Оберіть ваші улюблені жанри
                </MenuItem>
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}