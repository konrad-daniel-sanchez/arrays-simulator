import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';

const messages = {
  'create-array-elements': 'Crear arreglo con elementos',
  'create-zeroes-array': 'Crear arreglo ceros',
  'create-random-array': 'Crear arreglo aleatorio'
};

export default function SimpleMenu({onCreateArray}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCreate = () => {
    if (inputValue.trim() !== '') {
      let str = inputValue.replace(/{|}/g, '').trim();
      let arr = str.split(',').map(Number);
      
      console.log(arr); // [1, 2, 3, 4]

      onCreateArray(arr);
      setInputValue('');
    }
  };

  const handleRandom = () => {
    if (inputValue.trim() !== '') {
      let arr = Array.from({length: parseInt(inputValue, 10)}, () => 1+Math.floor(Math.random() * 99));
      console.log(arr);

      onCreateArray(arr);
      setInputValue('');
    }
  }

  const handleZeroes = () => {
    if (inputValue.trim() !== '') {
      let arr = Array.from({length: parseInt(inputValue, 10)}, () => 0);
      console.log(arr);

      onCreateArray(arr);
      setInputValue('');
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
        Open Menu
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleMenuItemClick('create-array-elements')}>Crear arreglo con elementos</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('create-zeroes-array')}>Crear arreglo ceros</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('create-random-array')}>Crear arreglo aleatorio</MenuItem>
      </Menu>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{messages[selectedMenuItem]}	</DialogTitle>
        <DialogContent>
          {selectedMenuItem === 'create-array-elements' ? (
            <div>
              <TextField
                label="Ingrese un valor"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
              />
              <Button onClick={handleCreate} variant="contained" style={{marginLeft: 10}}>
                Crear Arreglo
              </Button>
            </div>
          ) : selectedMenuItem === 'create-zeroes-array' ? (
            <div>
              <TextField
                label="Ingresa el tamaño"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
              />
              <Button onClick={handleZeroes} variant="contained" style={{marginLeft: 10}}>
                Crear Arreglo con ceros
              </Button>
            </div>
          ) : (
            <div>
              <TextField
                label="Ingresa el tamaño"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
                width = "10"
              />
              <Button onClick={handleRandom} variant="contained" style={{marginLeft: 10}}>
                Crear Arreglo Aleatorio
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
