import { useEffect, useState } from "react";
import { getRandomPet } from "../../crud/crudDogs";

export const RandomPet = () => {
  const [dogUrl, setDogUrl] = useState("");

  const handleClick = async () => {
    setLoading(true)
    const response = await getRandomPet();
    setDogUrl(response);
    setLoading(false)
  };

  const [loading, setLoading] = useState(false)

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

  return (
      <>
    <div className="w-4/5 m-auto flex justify-center flex-col gap-5 bg-gray-300 p-10 rounded-2xl shadow-2xl border-2 mt-10 max-w-[500px]">
      <h1 className="text-center text-3xl">Dog Randomizer</h1>
      <div className="w-4/5 h-[300px] m-auto">
        {loading ? <img src="https://endlessicons.com/wp-content/uploads/2012/11/loading-icon-614x460.png" className="animate-spin"/> :  <img src={dogUrl.length > 0 ? dogUrl : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg"} alt="" className="w-full h-full" />}
      </div>
      <button onClick={handleClick} className="bg-blue-900 rounded px-4 py-1 hover:bg-blue-500 hover:scale-108 cursor-pointer text-white font-bold w-1/2 m-auto">
        Randomize!!!
      </button>
    </div>
    
    </>

  );
};
