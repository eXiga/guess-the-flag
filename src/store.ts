import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  CountryCode,
  pickOneCountry,
  fetchRandomCountries,
} from "./data/countries";

interface GameState {
  answers: CountryCode[];
  correctAnswer: number;
  guess: number;
  isPickedCorrectly: boolean;
}

interface GameActions {
  createPuzzle: () => void;
  setGuess: (guess: number) => void;
}

const initialState: GameState = {
  correctAnswer: -1,
  answers: [],
  guess: -1,
  isPickedCorrectly: false,
};

export const useGameStore = create<GameState & GameActions>()(
  devtools((set) => ({
    ...initialState,

    createPuzzle: () =>
      set((state) => {
        const countries = fetchRandomCountries();
        const answer = pickOneCountry(countries);

        return {
          ...initialState,
          answers: countries,
          correctAnswer: countries.indexOf(answer),
        };
      }),
    setGuess: (guess) =>
      set((state) => ({
        guess: guess,
        isPickedCorrectly: guess === state.correctAnswer,
      })),
  }))
);
