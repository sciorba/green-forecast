import Grid from '@mui/material/Grid';
import {CharacteristicCard} from "../components/CharacteristicCard.tsx";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import {characteristics} from "../constants.tsx";

export interface Characteristic {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  title: string;
  reportDate: string | null;
  characteristic: string | null;
}

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