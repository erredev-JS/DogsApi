import axios from "axios"
import { IRandomDogResponse } from "../types/IResponses"

export const getRandomPet =  async (): Promise<string> => {
    
  try {
      const response = await axios.get<IRandomDogResponse>("https://dog.ceo/api/breeds/image/random")
  
      return response.data.message
  } catch (error) {
    return 'Error fetching the doggie'
  }

}

export const getBreeds = async (): Promise<string[]> => {
  try {
    const arrayOfBreeds: string[] = [];

    const response = await axios.get<IRandomDogResponse>("https://dog.ceo/api/breeds/list/all");

    for (const [key] of Object.entries(response.data.message)) {
      arrayOfBreeds.push(key);
    }

    return arrayOfBreeds;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return []; // o lanzar error con throw error;
  }
};

export const getRandomPetByBreed = async (breed: string): Promise<string> => {
    // https://dog.ceo/api/breed//images/random
    try {
        const response = await axios.get<IRandomDogResponse>(`https://dog.ceo/api/breed/${breed}/images/random`)
        return response.data.message
    } catch (error) {
        console.error(error)
        return 'Error fetching'
    }

}