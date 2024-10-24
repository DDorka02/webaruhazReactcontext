import { createContext, useState } from "react";
export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
    const [lista, setlista] = useState([]);
    const [db, setdb] = useState(0);
    const [ar, setar] = useState(0);

    function katt(adat) {
      const kosarLista = [...lista];
      kosarLista.push(adat);
      setlista([...kosarLista]);
      let d = db;
      d++;
      setdb(d);
     
      let a = ar;
      a= a + adat.ar;
      setar(a);
     
  return (
    <KattContext.Provider value={{ lista, katt }}>
      {children}
    </KattContext.Provider>
  );
}}