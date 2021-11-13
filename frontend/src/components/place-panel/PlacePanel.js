import { CityHeading } from "./CityHeading";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";

export const PlacePanel = () => {
  return (
    <>
      <PlacePanelControl />
      <CityHeading />
      <PlaceCard />
      <PlaceCard />
      <PlaceCard />
      <CityHeading />
      <PlaceCard />
      <PlaceCard />
    </>
  );
};
