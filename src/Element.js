import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, ListItemText, Paper } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const colors = ['white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black'];

export default function Element({index, value}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState(value);
  const [clickNumber, setClickNumber] = useState(0);

  const handleElementClick = (event) => {
    setClickNumber(clickNumber + 1);
  };

  // Función para actualizar el estado con el valor del input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    handleMenuClose();
  };

  return (
    <div>
      <div className='index'>{index}</div>
      <Paper style={{'background-color': colors[clickNumber % colors.length]}} aria-controls="simple-menu" aria-haspopup="true" className='element' onClick={handleElementClick}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </Paper>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleMenuItemClick('create-array-elements')}>
          <ListItemIcon>
            <AddCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('create-random-array')}>
          Crear arreglo aleatorio
        </MenuItem>
      </Menu>
    </div>
  );
}
