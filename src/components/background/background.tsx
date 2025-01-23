import { useState, useEffect } from "react";

export default function Background() {
  const [grid, setGrid] = useState({ rows: 0, columns: 0 });

  const hexagonWidth = 110; // Ancho del hexágono en px
  const hexagonHeight = 100; // Alto del hexágono en px

  useEffect(() => {
    // Calcular el tamaño de la pantalla
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Ajustar columnas y filas para llenar la pantalla
    const columns = Math.ceil((width + hexagonWidth / 2) / hexagonWidth);
    const rows = Math.ceil((height + hexagonHeight / 4) / (hexagonHeight * 0.75));

    setGrid({ rows, columns });
  }, []);

  return (
    <div className=" bg-primary h-screen w-screen fixed z-10 ">
    <div className="grid z-0 ">
      {Array.from({ length: grid.rows }).map((_, rowIndex) => (
        <div
          className="row flex"
          key={`row-${rowIndex}`}
          
        >
          {Array.from({ length: grid.columns }).map((_, colIndex) => (
            <div key={`col-${colIndex}`} className="hexagon"></div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
