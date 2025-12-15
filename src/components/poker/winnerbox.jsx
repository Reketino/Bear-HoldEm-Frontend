import React from 'react'

export default function WinnerBox({ winner, hand }) {
  return (
   
    <main className="winner-box">
      <h3>Winner</h3>
      <p>🏆 {winner}</p>
       <span>{hand}</span> 
    </main>
  )
}
