var PluralRulesPage = function PluralRulesPage() {
  var selection = [{ language: "en", maximum: "199" }, { language: "fr", maximum: "199" }, { language: "zh", maximum: "199" }, { language: "ja", maximum: "199" }, { language: "ko", maximum: "199" }, { language: "tr", maximum: "40" }, { language: "cs", maximum: "100" }, { language: "ar", maximum: "203" }, { language: "he", maximum: "41" }, { language: "ru", maximum: "41" }, { language: "pl", maximum: "42" }];

  var display = selection.map(function (entry) {
    return React.createElement(
      "div",
      { className: "mb-4" },
      React.createElement(PluralRulesLayout, { language: entry.language, numbers: entry.maximum })
    );
  });

  return React.createElement(
    "div",
    { className: "pb-5 mb-5" },
    React.createElement(
      "h1",
      { className: "mt-5 mb-5" },
      React.createElement(
        "span",
        { className: "text-muted" },
        "Here are "
      ),
      "Plural Rules for several languages"
    ),
    React.createElement(
      "div",
      null,
      display
    )
  );
};

var getPluralRules = function getPluralRules(locale, options, numbers) {
  var localePluralRules = new Intl.PluralRules(locale, options);

  // Map values of an array to a table
  var pluralRules = numbers.reduce(function (accumulator, key) {
    accumulator[key] = localePluralRules.select(key);
    return accumulator;
  }, {});

  return pluralRules;
};

var shrinkRules = function shrinkRules(rules) {
  var compacted = [];
  var index = 0;

  // initialize
  compacted.push({
    range: { start: 0, end: 0 },
    rule: rules[0]
  });

  for (var i = 1; i < Object.keys(rules).length; i++) {
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

var PluralRulesLayout = function PluralRulesLayout(_ref) {
  var language = _ref.language,
      numbers = _ref.numbers;

  console.time(language);

  var arrayOfZeros = new Array(parseInt(numbers)).fill(0);
  var enPluralRules = getPluralRules(language, { type: "cardinal" }, Object.keys(arrayOfZeros));

  console.debug(enPluralRules);

  var compactRules = shrinkRules(enPluralRules);
  // ^^^^ should really save this somewhere
  // ^^^^ time saver

  var items = compactRules.map(function (entry) {
    var _entry$range = entry.range,
        start = _entry$range.start,
        end = _entry$range.end;

    var NDASH = "\u2013";
    var text = start !== end ? start + " " + NDASH + " " + end : "" + start;

    var name = "badge badge-pill";
    if (entry.rule === "many") {
      name = name + " badge-secondary";
    } else if (entry.rule === "other") {
      name = name + " badge-info";
    }

    console.timeEnd(language);

    return React.createElement(
      "div",
      { className: "flex-item" },
      React.createElement(
        "p",
        { className: "language" },
        language
      ),
      React.createElement(
        "p",
        { className: name },
        entry.rule
      ),
      React.createElement(
        "p",
        null,
        text
      )
    );
  });

  return React.createElement(
    "div",
    { className: "flex-container" },
    items
  );
};