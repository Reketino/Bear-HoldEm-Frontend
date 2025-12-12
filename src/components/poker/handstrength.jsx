

export default function HandStrength() {
  return (
    <main className="mt-4 p-4 bg-neutral-900/40 rounded-lg border border-neutral-700">
      <h2 className="text-xl font-bold mb-2">Hånd Styrke</h2>

      {players.map((p) => (
        <section key={p.id} className="mb-2">
            <p className="font-semibold">
                {p.name}:{" "}
            <span className="text-amber-400">{p.hand_name}</span>
            </p>
        </section>
      ))}

    <section className="mt-3 p-3 bg-black/40 rounded-lg">
    <h3 className="font-bold text-green-400">Vinner</h3>
    <p className="text-lg">
       🏆 {showdown.winner_name} -{" "}
       <span className="text-blue-400">{showdown.winner_hand}</span> 
    </p>
    </section>
    </main>
  );
}
