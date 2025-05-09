import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export default function MyDisplayGrid(props) {

  console.log(props);


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },

    {
      field: '',
      headerName: '',
      width: 250,
      renderCell: (params) => {
          console.log(params);
        return (
      
          <>
              <Button variant="contained" size="small" onClick={() => {}}>
                Edit
              </Button>
              <Button variant="outlined" size="small" color="error" onClick={() => {props.handleDelete(params.row.id)}}>
                Delete
              </Button>
              </>
          )
      } 
    },
   
  ];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
