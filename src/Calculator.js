import { useState } from 'react';
import './Calculator.css';

export default function Calculator(){
    const[input,setInput] = useState('');

    const reset = () =>{
        setInput('');
    };

    const buttonClick = (value) => {
        setInput(input + value)
    };
    
    const calculate =() =>{
        try{
            setInput(eval(input).toString());
        }
        catch(error){
            setInput('Syntax Error');
        }
        };
    return (
      <>
      <div className='calculator'>
        <form className='container'>
            <input type="text" className='display' value={input} readonly="txt"/>
            <span className= 'clear' onClick={reset}><div>C</div></span>
            <span onClick={() =>buttonClick('/')}><div>/</div></span>
            <span onClick={() =>buttonClick('*')}><div>*</div></span>
            <span onClick={() => buttonClick('7')}><div>7</div></span>
            <span onClick={() => buttonClick('8')}><div>8</div></span>
            <span onClick={() => buttonClick('9')}><div>9</div></span>
            <span onClick={() => buttonClick('-')}><div>-</div></span>
            <span onClick={() => buttonClick('4')}><div>4</div></span>
            <span onClick={() => buttonClick('5')}><div>5</div></span>
            <span onClick={() => buttonClick('6')}><div>6</div></span>
            <span onClick={() => buttonClick('+')}><div>+</div></span>
            <span onClick={() => buttonClick('1')}><div>1</div></span>
            <span onClick={() => buttonClick('2')}><div>2</div></span>
            <span onClick={() => buttonClick('3')}><div>3</div></span>
            <span className='equal' onClick={calculate}><div>=</div></span>
            <span onClick={() => buttonClick('0')}><div>0</div></span>
            <span onClick={() => buttonClick('00')}><div>00</div></span>
            <span onClick={() => buttonClick('.')}><div>.</div></span>      
        </form>
      </div>
      </>
    );
};