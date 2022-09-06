import Country from "./Country";
import { useGameStore } from "../store";

export default function Answers() {
  const countries = useGameStore((state) => state.answers);
  const correctAnswer = useGameStore((state) => state.correctAnswer);

  return (
    <div className="flex flex-col justify-items-start gap-4">
      {countries.map((c, i) => (
        <Country key={i} country={c} />
      ))}
    </div>
  );
}
