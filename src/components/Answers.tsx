import Country from "./Country";
import { useGameStore } from "../store";

export default function Answers() {
  const countries = useGameStore((state) => state.answers);
  const createPuzzle = useGameStore((state) => state.createPuzzle);
  const setGuess = useGameStore((state) => state.setGuess);
  const isPickedCorrectly = useGameStore((state) => state.isPickedCorrectly);
  const guessIndex = useGameStore((state) => state.guess);
  const correctAnswerIndex = useGameStore((state) => state.correctAnswer);

  return (
    <div className="flex flex-col justify-items-start gap-4">
      {countries.map((c, i) => (
        <Country
          key={i}
          country={c}
          isPickedCorrectly={isPickedCorrectly}
          currentIndex={i}
          guessIndex={guessIndex}
          correctAnswerIndex={correctAnswerIndex}
          onClick={() => {
            setTimeout(() => {
              createPuzzle(false);
            }, 2000);
            setGuess(i);
          }}
        />
      ))}
    </div>
  );
}
