import { useGameStore } from "../store";

export default function Flag() {
  const correctAnswer = useGameStore((state) => state.correctAnswer);
  const answers = useGameStore((state) => state.answers);

  return (
    <img
      className="object-contain h-full w-full"
      src={`https://countryflagsapi.com/svg/${answers[correctAnswer].code}`}
      alt="flag image"
    />
  );
}
