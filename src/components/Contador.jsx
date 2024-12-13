import { useState } from "react";

function Contador (){ 
    const [ contador,setContador] = useState(0) 
    
    const incrementar = () => {

        setContador(contador+1)
    }

    const descrementar = () =>{
        setContador(contador-1)
    }
    return(
        <>
        <h2>Contador</h2>
        <p>Valor : {contador}</p>
        <button onClick={incrementar}>Incrementar</button> 
        <button onClick={descrementar}>Descrementar</button> 
        </>
    );
}
export default Contador