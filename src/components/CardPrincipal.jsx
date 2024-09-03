/* eslint-disable react/prop-types */
import mon from "../assets/images/baku-circuito.avif";

function CardPrincipal({ ronda, fecha, nombre, circuito }) {
    return (
        <div className="bg-[url('/src/assets/images/baku.jpeg')] contrast-100 flex flex-col bg-center bg-cover w-full h-auto p-4 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="pl-20">
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-2 mt-4  text-start">
                        <p className="bg-yellow-500 w-fit shadow-xl rounded-md p-1 text-lg sm:text-2xl font-medium text-black">
                        Ronda {ronda}
                        </p>
                        <h1 className="text-start font-bold shadow-xl mt-4 sm:mt-0 sm:ml-6 text-3xl sm:text-4xl text-white">
                        Próxima Carrera
                        </h1>
                    </div>
                    <div className="text-start font-bold mt-4 text-2xl sm:text-3xl text-white ">
                        <h2 className="shadow-xl">{nombre}</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row text-start font-bold mt-4 gap-4 sm:gap-24 text-xl sm:text-2xl text-white">
                        <p className="shadow-xl">{fecha}</p>
                        <p className="shadow-xl">Bakú, Azerbaiyán</p>
                    </div>
                </div>
                <div className="text-center font-bold mt-4 text-xl sm:text-2xl text-white">
                    <h2>{circuito}</h2>
                    <img
                        src={mon}
                        alt="circuito monza"
                        className="w-64 sm:w-80 h-40 sm:h-48 mx-auto mt-4 sm:mt-0"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 text-center font-semibold mt-8 gap-2 text-sm sm:text-lg text-white">
                <p>13 SEP | Práctica 1 | 6:30hs</p>
                <p>13 SEP | Práctica 2 | 10:00hs</p>
                <p>14 SEP | Práctica 3 | 5:30hs</p>
                <p>14 SEP | Clasificación | 09:00hs</p>
                <p>15 SEP | Carrera | 08:00hs</p>
            </div>
        </div>
    );
}

export default CardPrincipal;
