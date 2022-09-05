import Answers from "./components/Answers";
import Flag from "./components/Flag";
import Results from "./components/Results";
import Welcome from "./components/Welcome";
import { useGameStore } from "./store";

export default function App() {
  const { answers, correctAnswer } = useGameStore();

  if (answers.length === 0) {
    return <Welcome />;
  }

  return (
    <div className="bg-[#FAF7F5] w-screen h-screen">
      <div className="flex flex-col justify-center items-center gap-6 pt-20">
        <Results />
        <div className="w-80 h-64">
          <Flag country={correctAnswer} />
        </div>
        <div className="w-96">
          <Answers countries={answers} />
        </div>
      </div>
    </div>
  );
}
