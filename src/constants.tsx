import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import OfflineBoltTwoToneIcon from "@mui/icons-material/OfflineBoltTwoTone";
import ChaletTwoToneIcon from "@mui/icons-material/ChaletTwoTone";
import BuildCircleTwoToneIcon from "@mui/icons-material/BuildCircleTwoTone";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import SolarPowerTwoToneIcon from "@mui/icons-material/SolarPowerTwoTone";
import WorkspacePremiumTwoToneIcon from "@mui/icons-material/WorkspacePremiumTwoTone";
import FloodTwoToneIcon from "@mui/icons-material/FloodTwoTone";
import BathroomTwoToneIcon from "@mui/icons-material/BathroomTwoTone";
import SpaTwoToneIcon from "@mui/icons-material/SpaTwoTone";
import {Characteristic} from "./views/Dashboard.tsx";

export const characteristics: Characteristic[] = [
  {
    Icon: HomeTwoToneIcon,
    title: 'Housing quality',
    reportDate: 'Established in 2023',
    characteristic: 'Serious defects'
  },
  {
    Icon: OfflineBoltTwoToneIcon,
    title: 'Energy',
    characteristic: 'Enough',
    reportDate: 'Established in 2023',
  },
  {
    Icon: ChaletTwoToneIcon,
    title: 'Insulation',
    characteristic: 'Mediocre',
    reportDate: 'Established in 2023',
  },
  {
    Icon: BuildCircleTwoToneIcon,
    title: 'Installations',
    characteristic: 'All inspected',
    reportDate: 'Established in 2023',
  },
  {
    Icon: PublicTwoToneIcon,
    title: 'Soil',
    characteristic: 'Included in register',
    reportDate: 'Established in 2023',
  },
  {
    Icon: SolarPowerTwoToneIcon,
    title: 'Solar potential',
    characteristic: 'Usable',
    reportDate: 'Established in 2023',
  },
  {
    Icon: WorkspacePremiumTwoToneIcon,
    title: 'Permits',
    characteristic: null,
    reportDate: null,
  },
  {
    Icon: FloodTwoToneIcon,
    title: 'Flood risk',
    characteristic: 'Small chance',
    reportDate: 'Established in 2023',
  },
  {
    Icon: BathroomTwoToneIcon,
    title: 'Water and sewerage',
    characteristic: 'Sewerage available',
    reportDate: null,
  },
  {
    Icon: SpaTwoToneIcon,
    title: 'Teal level',
    characteristic: 'Not known',
    reportDate: null,
  },
]