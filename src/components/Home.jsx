import Autos from "./Autos.jsx";
import sol from "../assets/images/sol-de-mayo.png"


function Home() {
return (
    <div className="bg-gradient-to-br from-celeste from-5% to-blanco w-full">
        <div className="flex justify-center items-center bg-gradient-to-br from-blanco from-5% to-blanco/50 to-80% w-full h-1/3 absolute top-40 ">
            <img src={sol} alt="Sol de Mayo" className="opacity-90 absolute w-56 h-56 " />
        </div>
        <Autos />
    </div>
);
}

export default Home;