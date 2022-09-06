import create from "zustand";
import { devtools } from "zustand/middleware";
import { CountryCode } from "./data/codes";

interface GameState {
  answers: CountryCode[];
  correctAnswer: CountryCode;
  guess: string;
}

interface GameActions {
  setAnswers: (answers: CountryCode[]) => void;
  setCorrectAnswer: (answer: CountryCode) => void;
  setGuess: (guess: string) => void;
}

const initialState: GameState = {
  correctAnswer: { name: "", code: "" },
  answers: [],
  guess: "",
};

export const useGameStore = create<GameState & GameActions>()(
  devtools((set) => ({
    ...initialState,

    setCorrectAnswer: (answer) => set((state) => ({ correctAnswer: answer })),
    setAnswers: (answers) => set((state) => ({ answers: answers })),
    setGuess: (guess) => set((state) => ({ guess: guess })),
  }))
);
