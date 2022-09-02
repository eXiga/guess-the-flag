import { CountryCode } from "../data/codes";

interface FlagProps {
  country: CountryCode;
}

export default function Flag({ country }: FlagProps) {
  const flagUrl = `https://countryflagsapi.com/svg/${country.code}`;
  console.log(flagUrl);

  return (
      <img
        className="object-contain h-full w-full"
        src={flagUrl}
        alt="flag image"
      />
  );
}
