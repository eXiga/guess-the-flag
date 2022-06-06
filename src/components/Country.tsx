import { CountryCode } from "../data/codes";

interface CountryProps {
  country: CountryCode;
}

export default function Country({ country }: CountryProps) {
  return (
    <div>
      <p className="text-bold text-2xl">{country.name}</p>
    </div>
  );
}
