export const useGenerateLink = (item: any) => {
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = item;

  if (currencies === undefined) return;

  return {
    path: `/countries/${encodeURIComponent(name.split(" ").join("-"))}`,
    query: {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies: JSON.stringify(currencies),
      languages: JSON.stringify(languages),
      borders,
    },
  };
};
