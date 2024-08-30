import React from "react";
import carrerasRestantes from "../data/calendario";
import Cards from "./Cards";
import CardPrincipal from "./CardPrincipal";

function Calendar() {
return (
    <div className="bg-gradient-to-br from-celeste/75 from-10% via-blanco via-50% to-celeste to-98% w-full min-h-screen">
    {React.Children.toArray(
        carrerasRestantes.map(({ ronda, fecha, nombre, circuito }, index) =>
        index === 0 ? (
            <CardPrincipal
            ronda={ronda}
            fecha={fecha}
            nombre={nombre}
            circuito={circuito}
            />
        ) : null
        )
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 sm:px-8 lg:px-24 py-10">
        {React.Children.toArray(
        carrerasRestantes.map(({ ronda, fecha, nombre, circuito }, index) =>
            index !== 0 ? (
            <Cards
                key={index}
                ronda={ronda}
                fecha={fecha}
                nombre={nombre}
                circuito={circuito}
            />
            ) : null
        )
        )}
    </div>

    <footer className="flex flex-col sm:flex-row justify-center items-center font-semibold text-sm sm:text-lg py-4">
        <p className="text-black text-center">
        Diseñado y Desarrollado por{" "}
        <a
            href="https://www.linkedin.com/in/francisco-santiago-pardo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800"
        >
            Francisco Pardo
        </a>
        </p>
    </footer>
    </div>
);
}

export default Calendar;
