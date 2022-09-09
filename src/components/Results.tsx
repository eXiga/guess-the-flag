import { useGameStore } from "../store";

export default function Results() {
  const streak = useGameStore((state) => state.streak);
  const best = useGameStore((state) => state.best);

  return (
    <div>
      <p className="h-12 text-xl font-mono">
        🎯 Streak: {streak}, 🔥 Best: {best}
      </p>
    </div>
  );
}
