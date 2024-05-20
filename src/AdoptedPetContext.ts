import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
  {
    id: 0,
    name: "Fido",
    animal: "dog",
    breed: "Shepherd",
    images: [],
    description: "",
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
