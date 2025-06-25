import { Header } from "../components/Header/Header";
import { PetsSelection } from "../components/PetsSelection/PetsSelection";
import { RandomPet } from "../components/RandomPet/RandomPet";

export const MainScreen = () => {
  return (
    <div>
      <Header />
      <RandomPet />
      <PetsSelection />
    </div>
  );
};
