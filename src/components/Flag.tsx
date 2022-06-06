import { CountryCode } from "../data/codes";

interface FlagProps {
  country: CountryCode;
}

export default function Flag({ country }: FlagProps) {
  return (
    <div className="w-80">
      <img
        className="w-full h-full"
        src={`https://countryflagsapi.com/svg/${country.code}`}
        alt="flag image"
      />
    </div>
  );
}
