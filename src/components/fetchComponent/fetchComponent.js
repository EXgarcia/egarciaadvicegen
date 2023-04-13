import { getData } from "../../DataServices/DataServices";
import React,{useState} from 'react';
import dice from '../../assets/icon-dice.svg';
import line from '../../assets/pattern-divider-desktop.svg'
import '../../style.css';


export default function GetAdvice(){
    const [advice, setAdvice] = useState('');

    async function fetchData(){
        const any = await getData();
        setAdvice(any);
    }

    

    return(
        <main>
      
      <p className="advice-no">Advice #{advice.id}</p>
       <h3 className="advice-text">"Click the button below for advice.{advice.advice}"</h3>
       <div ><img src={line} alt='icon of dice' /></div>
       <button onClick={fetchData} class="btn"><img src={dice} alt='icon of dice' /></button>
      
    </main>
    )
} 