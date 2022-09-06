import Answers from "./components/Answers";
import Flag from "./components/Flag";
import Results from "./components/Results";
import Welcome from "./components/Welcome";
import { useGameStore } from "./store";

export default function App() {
  const answers = useGameStore((state) => state.answers);

  if (!answers.length) {
    return <Welcome />;
  }

  return (
    <div className="bg-[#FAF7F5] w-screen h-screen">
      <div className="flex flex-col justify-center items-center gap-6 pt-20">
        <Results />
        <div className="w-80 h-64">
          <Flag />
        </div>
        <div className="w-96">
          <Answers />
        </div>
      </div>
    </div>
  );
}
