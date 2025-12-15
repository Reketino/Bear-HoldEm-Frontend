"use client";
import React, { useState } from 'react'
import Card from './card';
import Hand from './hand';
import HandStrength from './handstrength';

export default function BearPoker() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);


    async function startGame() {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/start`, {
        method: "POST",
      });
      const data = await res.json();
      setState(data);
      setLoading(false);
    }


    async function sendAction(action, amount = 0) {
      if (!state) return;
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/action?player_id=0&action=${action}&amount=${amount}`,
        { method: "POST" }
      );

      const data = await res.json();
      setState(data);
      setLoading(false);
    }


  return (
    <main className='poker-container'>
      <header className='poker-header'>
         <h1 className='poker-title'>Bear HoldEm VIP</h1>        
      </header>


      <section className='poker-button'>
        <button onClick={startGame} disabled={loading} className=''>
            {loading ? "Starter..." : "Start Game"}
        </button>
      </section>
    
    {state && (
        <article className='poker-box'>

          <header className='dealer-chip'>
            D
          </header>

            <section className='player you-seat'>
                <Hand cards={state.players[0].hand} />
            </section>


            <section className='ai-seat'>
                <Hand
                cards={
                  state.street === "showdown"
                  ? state.players[1].hand
                  : ["back", "back"]
                }
                />
            </section>


            <section className='board-center'>
                <Hand cards={state.board} />
                <p className='pot-text'>{state.pot}</p>
            </section>


            <section>
                <h2>Street</h2>
                <p>{state.street}</p>
            </section>

            
          {state.street !== "showdown" && ( 
            <section className='action-row'>
              <button onClick={() => sendAction("check")}>Check</button>
              <button onClick={() => sendAction("call")}>Call</button>
              <button onClick={() => sendAction("raise", 40)}>Raise</button>
              <button onClick={() => sendAction("fold")}>Fold</button>
            </section>
          )}


          {state.street === "showdown" && (
            <>
              <HandStrength
              showdown={state.showdown}
              strength={state.showdown.hand_strength}
              />

            <footer className='winner-box'>
              <h2>Pot</h2>
                <p>{state.showdown?.pot ?? state.pot}</p>
            </footer>
           </>
            )}  
        </article>
        )}
    </main>
  );
}
