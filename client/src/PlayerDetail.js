import * as React from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';
import starsLogo from './assets/dallas_stars_logo.png';

function convertTimeToFloat(timeString) {
    const [minutesStr, secondsStr] = timeString.split(':');
  
    const minutes = parseInt(minutesStr, 10);
    const seconds = parseInt(secondsStr, 10);
  
    const totalTimeInSeconds = minutes * 60 + seconds;
  
    const totalTimeInMinutes = totalTimeInSeconds / 60.0; 
  
    return totalTimeInMinutes;
}

function PlayerDetail() {
  const { name } = useParams();
  const [playerData, setPlayerData] = React.useState(null);
  const [playerDataPost, setPlayerDataPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(`/api/player/${encodeURIComponent(name)}`);
        setPlayerData(response.data);
        const postResponse = await axios.get(`/api/player_post/${encodeURIComponent(name)}`);
        setPlayerDataPost(postResponse.data);
        console.log(playerDataPost)
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [name]);

  if (!playerData) {
    return <div>No Data Available</div>;
  }

  return (
    <div>
      <h2>Details for {playerData.name}</h2>
      <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: '#006847' , width: 150, height: 150 }}>{playerData.name}</Avatar>
      </Stack>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <h3>Regular Season</h3>
          <p>Position: {playerData.position}</p>
          <p>Games Played: {playerData.gp}</p>
          <p>Goals: {playerData.g}</p>
          <p>Assists: {playerData.a}</p>
          <p>Points: {playerData.pts}</p>
          <p>+/-: {playerData.plus_minus}</p>
          <p>Penalties in Minutes: {playerData.pim}</p>
          <p>Even Strength Goals: {playerData.ev}</p>
          <p>Power Play Goals: {playerData.pp}</p>
          <p>Short-Handed Goals: {playerData.sh}</p>
          <p>Game-Winning Goals: {playerData.gw}</p>
          <p>Even Strength Assists: {playerData.eva}</p>
          <p>Power Play Assists: {playerData.ppa}</p>
          <p>Short-Handed Assists: {playerData.sha}</p>
          <p>Shots on Goal: {playerData.s}</p>
          <p>Shooting Percentage: {playerData.sper}</p>
          <p>Time on Ice: {playerData.toi}</p>
          <p>Average Time on Ice: {playerData.atoi}</p>
          <p>Offensive Point Shares: {playerData.ops}</p>
          <p>Defensive Point Shares: {playerData.dps}</p>
          <p>Point Shares: {playerData.ps}</p>
          <p>Blocks: {playerData.blk}</p>
          <p>Hits: {playerData.hit}</p>
          <p>Faceoff Wins: {playerData.fow}</p>
          <p>Faceoff Losses: {playerData.fol}</p>
          <p>Faceoff Percentage: {playerData.foper}</p>
          <PieChart
            series={[
              {
                data: [
                    { id: 0, value: convertTimeToFloat(playerData.atoi), label: 'Average Time on Ice (Reg)' },
                    { id: 1, value: 60 - convertTimeToFloat(playerData.atoi), label: 'Remaining Time (Reg)' },
                  ],
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              },
            ]}
            height={200}
          />
        </div>
        <div style={{ flex: 1, marginLeft: '10px' }}>
        <h3>Post Season</h3>
        {playerDataPost ? (
            <>
            <p>Position: {playerDataPost.position}</p>
            <p>Games Played: {playerDataPost.gp}</p>
            <p>Goals: {playerDataPost.g}</p>
            <p>Assists: {playerDataPost.a}</p>
            <p>Points: {playerDataPost.pts}</p>
            <p>+/-: {playerDataPost.plus_minus}</p>
            <p>Penalties in Minutes: {playerDataPost.pim}</p>
            <p>Even Strength Goals: {playerDataPost.ev}</p>
            <p>Power Play Goals: {playerDataPost.pp}</p>
            <p>Short-Handed Goals: {playerDataPost.sh}</p>
            <p>Game-Winning Goals: {playerDataPost.gw}</p>
            <p>Even Strength Assists: {playerDataPost.eva}</p>
            <p>Power Play Assists: {playerDataPost.ppa}</p>
            <p>Short-Handed Assists: {playerDataPost.sha}</p>
            <p>Shots on Goal: {playerDataPost.s}</p>
            <p>Shooting Percentage: {playerDataPost.sper}</p>
            <p>Time on Ice: {playerDataPost.toi}</p>
            <p>Average Time on Ice: {playerDataPost.atoi}</p>
            <PieChart
            series={[
              {
                data: [
                    { id: 0, value: convertTimeToFloat(playerDataPost.atoi), label: 'Average Time on Ice (Post)' },
                    { id: 1, value: 60 - convertTimeToFloat(playerDataPost.atoi), label: 'Remaining Time (Post)' },
                  ],
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              },
            ]}
            height={200}
          />
            </>
        ) : (
            <p>No Post Season Data Available</p>
        )}
        </div>
    </div>
    </div>
  );
}

export default PlayerDetail;