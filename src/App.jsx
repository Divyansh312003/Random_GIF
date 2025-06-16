import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  
  return (
    <div className="w-full h-screen flex flex-col background relative items-center">
      
      <h1 className="bg-white rounded-lg w-11/12  text-center mt-[40px]  text-3xl font-bold mx-auto">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full mt-5 ">
        <Random/>
        <Tag/>
      </div>
    </div>
  );

}
