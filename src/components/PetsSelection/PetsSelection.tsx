import { useEffect, useState } from "react";

import { getBreeds, getRandomPet, getRandomPetByBreed } from "../../crud/crudDogs";

export const PetsSelection = () => {
    const [dogUrl, setDogUrl] = useState("");

    const [breeds, setBreeds] = useState<string[]>([])

    const [selectedBred, setSelectedBred] = useState("")

    const [loading, setLoading] = useState(false)

    const handleBreeds =  async () => {

        const response = await getBreeds()
        
        setBreeds(response)

    }   
 
    useEffect(() => {

        handleBreeds()
        
    },
    [])

 useEffect(() => {
    (async() => {
      try {
        setLoading(true)
        const response  = await getRandomPet()
        setDogUrl(response)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])


   const handleClick = async () => {
    setLoading(true)
     const response = await getRandomPetByBreed(selectedBred);
     setDogUrl(response);
     setLoading(false)
   };

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBred(e.target.value)
    console.log(e.target.value)
   } 
 
   return (

     <div className="w-4/5 m-auto flex justify-center flex-col gap-5 bg-gray-300 p-10 rounded-2xl shadow-2xl border-2 mt-10 max-w-[500px]">

       <h1 className="text-center text-3xl">Dog Selection</h1>

       <div className="w-4/5 h-[300px] m-auto">

          {loading ? <img src="https://endlessicons.com/wp-content/uploads/2012/11/loading-icon-614x460.png" className="animate-spin"/> :  <img src={dogUrl.length > 0 ? dogUrl : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg"} alt="" className="w-full h-full" />}
       </div>

       <div className="flex">

      <select  onChange={handleSelectChange} className="bg-white text-center border w-1/2 cursor-pointer">
      <option value="">Select a breed</option>
        {breeds.map((breed, i) => (<option value={breed} key={i}>{breed}</option>))}
      </select>

       <button
  onClick={handleClick}
  disabled={selectedBred.length <= 1}
  className={`rounded px-4 py-1 text-white font-bold w-1/2 m-auto 
    ${selectedBred.length > 1 
      ? 'bg-blue-900 hover:bg-blue-500 cursor-pointer' 
      : 'bg-slate-900 cursor-not-allowed'}`}
>
       {selectedBred.length <= 1 ? 'Select a breed' : `Get a ${selectedBred}`}
       </button>

       </div>

     </div>
   );
};