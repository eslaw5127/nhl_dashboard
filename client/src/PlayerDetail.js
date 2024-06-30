import * as React from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import starsLogo from './assets/dallas_stars_logo.png';

function PlayerDetail() {
  const { name } = useParams();
  const [playerData, setPlayerData] = React.useState(null);

  React.useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(`/api/player/${encodeURIComponent(name)}`);
        setPlayerData(response.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [name]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Details for {playerData.name}</h2>
      <Stack direction="row" spacing={2}>
        <Avatar alt={playerData.name} src={starsLogo} sx={{ width: 56, height: 56 }} />
      </Stack>
      <div>
        <p>Position: {playerData.position}</p>
        <p>Games Played: {playerData.gp}</p>
        <p>Goals: {playerData.g}</p>
        <p>Assists: {playerData.a}</p>
        {/* Add more player details as needed */}
      </div>
    </div>
  );
}

export default PlayerDetail;