import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { PetsSelection } from "../components/PetsSelection/PetsSelection";
import { RandomPet } from "../components/RandomPet/RandomPet";

export const MainScreen = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col pb-20">
      <RandomPet />
      <PetsSelection />
      </div>
      <Footer/>
    </div>
  );
};
