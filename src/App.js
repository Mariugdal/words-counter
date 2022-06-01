import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {
  let [text, changeText] = useState('');
  let [result, setResult] = useState([])
  function setText(evt){
    changeText(evt.target.value)
  }
  function processText(){
    text = text.toLocaleLowerCase();
    let allWords = text.split(' ').filter(i=>i)
    let uniqueWords = [...new Set(allWords)]
    let countedWords = uniqueWords.map(word=>({ 
      word,
      count:allWords.filter(i=>i==word).length
    }))
    let sortedWords = countedWords.sort((a,b)=>b.count-a.count)
    console.log(sortedWords)
    setResult(sortedWords.filter((i,num)=>num<3))
  }
  return (
    <div className="wrapper">
        <textarea value={text} onInput={setText} />
        <button onClick={processText}>
          Process
        </button>
        <div className='result'>
          Result:
          {result.map((i,num)=>(
            <div>{num+1}.{i.word}({i.count} time{i.count>1&&'s'})</div>
          ))}
        </div>
    </div>
  );
}

export default App;
