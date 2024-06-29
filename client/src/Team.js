import React, { useState, useEffect } from 'react';
import starsLogo from './assets/dallas_stars_logo.png';
import './Team.css';
import dataGridCols from './Team_Table.js';
import WesternDivision from './western_div.js'

import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';

const tempData = [
  {
    id: 1,
    ESINumber: '12345',
    IntegrationName: 'Integration 1',
    SINumber: 'SIN123',
    IntegrationPattern: 'Pattern 1',
    IntegrationPlatform: 'Platform A',
    PrimarySourceSystem: 'Source A',
    PrimaryTargetSystem: 'Target A',
    SourceProtocol: 'HTTP',
    TargetProtocol: 'HTTPS',
    Region: 'NA',
    Division: 'Div A',
    PRJ: 'PRJ001',
    CHG: 'CHG001',
    MajorProgram: 'Program 1',
    DocURL: 'http://example.com/doc1'
  },
  {
    id: 2,
    ESINumber: '67890',
    IntegrationName: 'Integration 2',
    SINumber: 'SIN456',
    IntegrationPattern: 'Pattern 2',
    IntegrationPlatform: 'Platform B',
    PrimarySourceSystem: 'Source B',
    PrimaryTargetSystem: 'Target B',
    SourceProtocol: 'FTP',
    TargetProtocol: 'SFTP',
    Region: 'EU',
    Division: 'Div B',
    PRJ: 'PRJ002',
    CHG: 'CHG002',
    MajorProgram: 'Program 2',
    DocURL: 'http://example.com/doc2'
  }
  // Add more sample rows as needed
];

function Team() {
  const [checkedRows, setCheckedRows] = useState([]);
  const [response, setResponse] = useState('');
  const [teamData, setTeamData] = useState([]);
  const [data, setData] = useState([]);
  const apiRef = React.useRef(null);

  useEffect(() => {
    axios.get('/api/western')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching team data:', error));
  }, []);

  const compareValue = (teamValue, avgValue) => {
    return parseFloat(teamValue) > parseFloat(avgValue) ? 'green' : 'red';
  };

  const handleShowSelected = async () => {
    const rowMap = apiRef.current.getSelectedRows();
    for (const [key, value] of rowMap) {
        checkedRows.push(value);
    }
    console.log(checkedRows);

  };

  const handleWestern =  async () => {
    axios.get('/api/western')
      .then(response => {
        setData(response.data);
      })
  };

  const handlePacific =  async () => {
    axios.get('/api/pacific')
      .then(response => {
        setData(response.data);
      })
  };

  const handleAtlantic =  async () => {
    axios.get('/api/atlantic')
      .then(response => {
        setData(response.data);
      })
  };

  const handleMetro =  async () => {
    axios.get('/api/metro')
      .then(response => {
        setData(response.data);
      })
  };

  return (
    <div className="team-container">
      <div className="header">
        <img src={starsLogo} className="team-logo" alt="Dallas Stars Logo" />
        <h2>DALLAS STARS HOCKEY</h2>
      </div>
      <p>All information about the team can be found on this page.</p>
      <div className="record">
        <h3>Current Record: 52-21-9</h3>
        <h3>Points: 113</h3>
        <h3>Division Standings: 1st in NHL Central Division</h3>
        <h3>Last Game: L 1-2 vs. EDM</h3>
        <h3>Goals For: 298 (3rd of 32)</h3>
        <h3>Goals Against: 234 (8th of 32)</h3>
      </div>
      <button onClick = {handleWestern}>Central Division</button>
      <button onClick = {handlePacific}>Pacific Division</button>
      <button onClick = {handleMetro}>Metropolitan Division</button>
      <button onClick = {handleAtlantic}>Atlantic Division</button>
      <WesternDivision rows={data}/>
      <div>
        <DataGrid
          rows={tempData}
          columns={dataGridCols}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[15]}
          getRowId={(row) => row.id}
          checkboxSelection
          keepNonExistentRowsSelected
          slots={{ toolbar: GridToolbar }}
          apiRef={apiRef}
        />
      </div>
      <div>
        <button onClick = {handleShowSelected}>Show Selected Rows</button>
      </div>
    </div>
  );
}

export default Team;