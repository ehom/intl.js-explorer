const PluralRulesPage = () => {
  const selection = [
    { language: "en", maximum: "199" },
    { language: "fr", maximum: "199" },
    { language: "zh", maximum: "199" },
    { language: "ja", maximum: "199" },
    { language: "ko", maximum: "199" },
    { language: "tr", maximum: "40" },
    { language: "cs", maximum: "100" },
    { language: "ar", maximum: "203" },
    { language: "he", maximum: "41" },
    { language: "ru", maximum: "41" },
    { language: "pl", maximum: "42" }
  ];

  const display = selection.map((entry) => (
    <div className="mb-4">
      <PluralRulesLayout language={entry.language} numbers={entry.maximum} />
    </div>
  ));

  return (
    <div className="constainer mt-3 pb-5 mb-5">
      <div className="jumbotron pt-4 pb-2">
        <Banner text="Plural Rules for several languages" />
      </div>
      <div>{display}</div>
    </div>
  );
};

const getPluralRules = (locale, options, numbers) => {
  const localePluralRules = new Intl.PluralRules(locale, options);

  // Map values of an array to a table
  const pluralRules = numbers.reduce((accumulator, key) => {
    accumulator[key] = localePluralRules.select(key);
    return accumulator;
  }, {});

  return pluralRules;
};

const shrinkRules = (rules) => {
  let compacted = [];
  let index = 0;

  // initialize
  compacted.push({
    range: { start: 0, end: 0 },
    rule: rules[0]
  });

  for (let i = 1; i < Object.keys(rules).length; i++) {
    if (compacted[index].rule === rules[i]) {
      compacted[index].range.end = i;
    } else {
      index++;
      compacted.push({
        range: { start: i, end: i },
        rule: rules[i]
      });
    }
  }
  return compacted;
};

const PluralRulesLayout = ({ language, numbers }) => {
  console.time(language);

  let arrayOfZeros = new Array(parseInt(numbers)).fill(0);
  const enPluralRules = getPluralRules(
    language,
    { type: "cardinal" },
    Object.keys(arrayOfZeros)
  );

  console.debug(enPluralRules);

  const compactRules = shrinkRules(enPluralRules);
  // ^^^^ should really save this somewhere
  // ^^^^ time saver

  const items = compactRules.map((entry) => {
    const { start, end } = entry.range;
    const NDASH = "\u2013";
    const text = start !== end ? `${start} ${NDASH} ${end}` : `${start}`;

    let name = "badge badge-pill";
    if (entry.rule === "many") {
      name = `${name} badge-secondary`;
    } else if (entry.rule === "other") {
      name = `${name} badge-info`;
    }

    console.timeEnd(language);

    return (
      <div className="flex-item">
        <p className="language">{language}</p>
        <p className={name}>{entry.rule}</p>
        <p>{text}</p>
      </div>
    );
  });

  return <div className="flex-container">{items}</div>;
};
