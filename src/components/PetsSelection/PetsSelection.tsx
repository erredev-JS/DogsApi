import { useEffect, useState } from "react";
import { getBreeds, getRandomPet } from "../../crud/crudDogs";

export const PetsSelection = () => {
  const [dogUrl, setDogUrl] = useState("");
  const [breds, setBreds] = useState<string[]>([])

    const handleBreds =  async () => {
        const response = await getBreeds()
        console.log(response)
        setBreds(response)
        console.log(breds)
    }   
 
    useEffect(() => {
        handleBreds()
        console.log(breds)
    }, 
    [])

   const handleClick = async () => {
     const response = await getRandomPet();
     setDogUrl(response);
   };
 
   return (
     <div className="w-4/5 m-auto flex justify-center flex-col gap-5 bg-gray-300 p-10 rounded-2xl shadow-2xl border-2 mt-10">
       <h1 className="text-center text-3xl">Dog Selection</h1>
       <div className="w-[400px] h-[300px] m-auto">
         <img src={dogUrl.length > 0 ? dogUrl : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg"} alt="" className="w-full h-full" />
       </div>
       <button onClick={handleClick} className="bg-blue-900 rounded px-4 py-1 hover:bg-blue-500 cursor-pointer text-white font-bold w-1/2 m-auto">
         Get a dog!!!
       </button>
     </div>
   );
};