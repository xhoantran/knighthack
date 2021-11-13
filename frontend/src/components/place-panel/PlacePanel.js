import { CityHeading } from "./CityHeading";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";
import { Box } from "@mui/material";

export const PlacePanel = () => {
  return (
    <>
      <PlacePanelControl />
      <CityHeading city="Orlando" from="13 Nov" to="17 Nov" />
      <PlaceCard name="Olive's Garden" time="13:00 - 14:00" type="Food" />
      <PlaceCard name="Disney World" time="15:00 - 15:30" type="Amusement" />
      <PlaceCard name="Winter Park" time="17:00 - 19:00" type="Amusement" />
      <CityHeading city="Tampa" from="18 Nov" to="22 Nov" />
      <PlaceCard name="Beach" time="09:00 - 13:30" type="Amusement" />
      <PlaceCard name="Hanna Sushi" time="17:00 - 18:00" type="Food" />
    </>
  );
};
