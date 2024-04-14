import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Characteristic} from "../views/Dashboard.tsx";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Badge} from "@mui/material";

interface CharacteristicCardProps extends Characteristic {}

export const CharacteristicCard = ({ title, characteristic, Icon }: CharacteristicCardProps) => {

  return (
    <Card sx={{ display: 'flex', height: 150, alignItems: 'center' }}>
      <Badge badgeContent={<CheckCircleOutlineIcon sx={{ position: 'absolute' }}/>} color="success" >
        <Icon sx={{ alignSelf: 'center', marginLeft: 2, fontSize: 48}} />
      </Badge>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {characteristic}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}