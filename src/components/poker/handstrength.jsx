"use client";
import React from "react";

export default function HandStrength({ showdown,strength }) {
  if (!strength) return null;

  return (
    <main className="hand-strength-overlay">
      <h2 className="hand-strength-title">Strength Of Hand</h2>
    
    <section  className="hand-strength-list">
    {strength.map(p => (
            <p key={p.id}>
            <span className="player-name">{p.name}</span>
            <span className="hand-name">{p.hand_name}</span>
            </p>
          ))}
      </section>
    </main>
  );
}
