import Grid from '@mui/material/Grid';
import {CharacteristicCard} from "../components/CharacteristicCard.tsx";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import OfflineBoltTwoToneIcon from '@mui/icons-material/OfflineBoltTwoTone';
import ChaletTwoToneIcon from '@mui/icons-material/ChaletTwoTone';
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import SolarPowerTwoToneIcon from '@mui/icons-material/SolarPowerTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import FloodTwoToneIcon from '@mui/icons-material/FloodTwoTone';
import BathroomTwoToneIcon from '@mui/icons-material/BathroomTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import {SvgIconTypeMap} from "@mui/material";

export interface Characteristic {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  title: string;
  characteristic: string | null;
}

const characteristics: Characteristic[] = [
  {
    Icon: HomeTwoToneIcon,
    title: 'Housing quality',
    characteristic: 'Serious defects'
  },
  {
    Icon: OfflineBoltTwoToneIcon,
    title: 'Energy',
    characteristic: 'Enough'
  },
  {
    Icon: ChaletTwoToneIcon,
    title: 'Insulation',
    characteristic: 'Mediocre'
  },
  {
    Icon: BuildCircleTwoToneIcon,
    title: 'Installations',
    characteristic: 'All inspected'
  },
  {
    Icon: PublicTwoToneIcon,
    title: 'Soil',
    characteristic: 'Included in register'
  },
  {
    Icon: SolarPowerTwoToneIcon,
    title: 'Solar potential',
    characteristic: 'Usable'
  },
  {
    Icon: WorkspacePremiumTwoToneIcon,
    title: 'Permits',
    characteristic: null
  },
  {
    Icon: FloodTwoToneIcon,
    title: 'Flood risk',
    characteristic: 'Small chance'
  },
  {
    Icon: BathroomTwoToneIcon,
    title: 'Water and sewerage',
    characteristic: 'Sewerage available'
  },
  {
    Icon: SpaTwoToneIcon,
    title: 'Teal level',
    characteristic: 'Not known'
  },
]

export const Dashboard = () => {
  return (
    <Grid container margin={4} spacing={2}>
      {characteristics.map((characteristic) => (
        <Grid item xs={4} key={characteristic.title}>
          <CharacteristicCard {...characteristic}/>
        </Grid>
      ))}
    </Grid>
  );
}