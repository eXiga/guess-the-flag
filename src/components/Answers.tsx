import Country from "./Country";
import { CountryCode } from "../data/codes";

interface AnswersProps {
  countries: CountryCode[];
}

export default function Answers({ countries }: AnswersProps) {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      {countries.map((c) => (
        <Country country={c} />
      ))}
    </div>
  );
}
