import Country from "./Country";
import { useGameStore } from "../store";

export default function Answers() {
  const countries = useGameStore((state) => state.answers);
  const createPuzzle = useGameStore((state) => state.createPuzzle);
  const setGuess = useGameStore((state) => state.setGuess);

  return (
    <div className="flex flex-col justify-items-start gap-4">
      {countries.map((c, i) => (
        <Country
          key={i}
          index={i}
          country={c}
          onClick={() => {
            setTimeout(() => {
              createPuzzle();
            }, 2000);
            return setGuess(i);
          }}
        />
      ))}
    </div>
  );
}
