import Country from "./Country";
import { CountryCode } from "../data/codes";

interface AnswersProps {
  countries: CountryCode[];
}

export default function Answers({ countries }: AnswersProps) {
  return (
    <div className="flex flex-col justify-items-start gap-4">
      {countries.map((c) => (
          <Country key={c.code} country={c} />
        ))}
    </div>
  );
}
