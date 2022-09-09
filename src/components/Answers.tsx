import Country from "./Country";
import { useGameStore } from "../store";

export default function Answers() {
  const countries = useGameStore((state) => state.answers);
  const createPuzzle = useGameStore((state) => state.createPuzzle);
  const setGuess = useGameStore((state) => state.setGuess);
  const increaseStreak = useGameStore((state) => state.increaseStreak);
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
              createPuzzle();
            }, 2000);
            increaseStreak();
            return setGuess(i);
          }}
        />
      ))}
    </div>
  );
}
