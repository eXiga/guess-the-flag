import { useGameStore } from "../store";

export default function Flag() {
  const correctAnswer = useGameStore((state) => state.correctAnswer);

  return (
    <img
      className="object-contain h-full w-full"
      src={`https://countryflagsapi.com/svg/${correctAnswer.code}`}
      alt="flag image"
    />
  );
}
