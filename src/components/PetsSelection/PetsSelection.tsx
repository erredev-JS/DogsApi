import { useEffect, useState } from "react";

import { getBreeds, getRandomPetByBreed } from "../../crud/crudDogs";

export const PetsSelection = () => {
    const [dogUrl, setDogUrl] = useState("");

    const [breeds, setBreeds] = useState<string[]>([])

    const [selectedBred, setSelectedBred] = useState("")

    const handleBreeds =  async () => {

        const response = await getBreeds()
        
        setBreeds(response)

    }   
 
    useEffect(() => {

        handleBreeds()
        
    },

    [])

   const handleClick = async () => {
     const response = await getRandomPetByBreed(selectedBred);
     setDogUrl(response);
   };

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBred(e.target.value)
    console.log(e.target.value)
   } 
 
   return (

     <div className="w-4/5 m-auto flex justify-center flex-col gap-5 bg-gray-300 p-10 rounded-2xl shadow-2xl border-2 mt-10 max-w-[500px]">

       <h1 className="text-center text-3xl">Dog Selection</h1>

       <div className="w-4/5 h-[300px] m-auto">

         <img src={dogUrl.length > 0 ? dogUrl : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg"} alt="" className="w-full h-full" />
       </div>

       <div className="flex">

      <select  onChange={handleSelectChange} className="bg-white text-center border w-1/2">
      <option value="">Select a breed</option>
        {breeds.map((breed) => (<option value={breed}>{breed}</option>))}
      </select>

       <button onClick={handleClick} className="bg-blue-900 rounded px-4 py-1 hover:bg-blue-500 cursor-pointer text-white font-bold w-1/2 m-auto">
       {selectedBred.length <= 1 ? 'Select a breed' : `Get a ${selectedBred}`}
       </button>

       </div>

     </div>
   );
};