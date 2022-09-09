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
  init: () => void;
  createPuzzle: () => void;
  setGuess: (guess: number) => void;
  increaseStreak: () => void;
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

    init: () =>
      set((state) => {
        const countries = fetchRandomCountries();
        const answer = pickOneCountry(countries);

        return {
          ...initialState,
          answers: countries,
          correctAnswer: countries.indexOf(answer),
        };
      }),

    createPuzzle: () =>
      set((state) => {
        const countries = fetchRandomCountries();
        const answer = pickOneCountry(countries);

        return {
          ...initialState,
          streak: state.streak,
          best: state.best,
          answers: countries,
          correctAnswer: countries.indexOf(answer),
        };
      }),
    setGuess: (guess) =>
      set((state) => {
        const isCorrect = guess === state.correctAnswer;

        return {
          streak: isCorrect ? state.streak + 1 : 0,
          best:
            isCorrect && state.streak + 1 > state.best
              ? state.streak + 1
              : state.best,
          guess: guess,
          isPickedCorrectly: isCorrect,
        };
      }),
    increaseStreak: () =>
      set((state) => ({
        streak: state.streak + 1,
        best: state.streak + 1 > state.best ? state.streak + 1 : state.best,
      })),
  }))
);
