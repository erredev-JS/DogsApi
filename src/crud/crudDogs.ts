import axios from "axios"
import { IRandomDogResponse } from "../types/IResponses"

export const getRandomPet =  async (): Promise<string> => {
    
    const response = await axios.get<IRandomDogResponse>("https://dog.ceo/api/breeds/image/random")

    return response.data.message

}

export const getBreeds = async () : Promise<string[]> => {

    const arrayOfBreds = []

    const response = await axios.get("https://dog.ceo/api/breeds/list/all")



    return response.data.message


}