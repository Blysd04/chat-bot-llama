//ts-nocheck
import React from 'react'
import ChatSidebar from './ChatSidebar'
import { useChat } from './hooks/useChat'
import ChatMessage from './ChatMessage';
import ChatinputBar from './ChatinputBar';

export default function Chat() {
  const {
    model, 
    setModel, 
    temperature, 
    setTemperature, 
    input, 
    setInput, 
    history, 
    setHistory, 
    boxRef, 
    clearAll, 
    send} = useChat();
  return (
    <div className='container'>
      <ChatSidebar 
        setModel={setModel} 
        model={model} 
        temperature={temperature} 
        setTemperature={setTemperature} 
        clearAll={clearAll}
      />
      <main className='main'>
        <div className='cart chat'>
          <ChatMessage boxRef={boxRef} history={history}/>
          <ChatinputBar send={send} input={input} setInput={setInput}/>
        </div>
      </main>
    </div>
  )
}
