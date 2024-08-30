/* eslint-disable react/prop-types */

function Cards({ ronda, fecha, nombre, circuito }) {
    return (
    <div className="w-80 sm:w-96 h-auto p-4 border-4 hover:shadow-2xl rounded-t-3xl rounded-l-3xl mt-10 border-black bg-black bg-opacity-45 text-white">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 font-medium text-lg sm:text-xl text-center">
            <p className="bg-yellow-500 w-fit rounded-md p-1 text-black">Ronda {ronda}</p>
            <p>{fecha}</p>
        </div>
        <div className="flex flex-col text-start font-bold text-xl sm:text-2xl mt-6 gap-2 sm:gap-4">
            <h2>{nombre}</h2>
            <h2>{circuito}</h2>
        </div>
    </div>
    );
}

export default Cards;
