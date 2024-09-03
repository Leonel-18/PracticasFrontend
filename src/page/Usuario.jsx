import { useEffect, useState } from "react";
import { getUsuarios } from "../api/getUsuarios.js";

export const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsuarios();
        setUsuarios(res);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h1>Clientes</h1>
      {usuarios.map((user, index) => (
        <div key={index} className="w-[500px]">
          <table  className="w-[500px]">
            <thead className="bg-blue-500 w-[1000px]">
              <th>Nombre</th>
              <th>Email</th>
            </thead>
            <tbody className="bg-blue-900 w-[1000px]">
              <td>{user.nombre}</td>
              <td>{user.email}</td>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};
