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
  streak: number;
  best: number;
}

interface GameActions {
  createPuzzle: (shouldResetState: boolean) => void;
  setGuess: (guess: number) => void;
}

const initialState: GameState = {
  correctAnswer: -1,
  answers: [],
  guess: -1,
  isPickedCorrectly: false,
  streak: 0,
  best: 0,
};

export const useGameStore = create<GameState & GameActions>()(
  devtools((set) => ({
    ...initialState,

    createPuzzle: (shouldResetState) =>
      set((state) => {
        const countries = fetchRandomCountries();
        const answer = pickOneCountry(countries);

        return {
          ...initialState,
          streak: shouldResetState ? 0 : state.streak,
          best: shouldResetState ? 0 : state.best,
          answers: countries,
          correctAnswer: countries.indexOf(answer),
        };
      }),
    setGuess: (guess) =>
      set((state) => {
        const isCorrect = guess === state.correctAnswer;
        const nextStreakValue = state.streak + 1;

        return {
          streak: isCorrect ? nextStreakValue : 0,
          best:
            isCorrect && nextStreakValue > state.best
              ? nextStreakValue
              : state.best,
          guess: guess,
          isPickedCorrectly: isCorrect,
        };
      }),
  }))
);
