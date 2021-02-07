var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var FormattedNumbersPage = function FormattedNumbersPage() {
  var numberStyles = ["decimal", "currency", "percent"];

  if (isStyleUnitSupported()) {
    numberStyles.push("unit");
  }

  var units = ["acre", "bit", "byte", "celsius", "centimeter", "day", "degree", "fahrenheit", "fluid-ounce", "foot", "gallon", "gigabit", "gigabyte", "gram", "hectare", "hour", "inch", "kilobit", "kilobyte", "kilogram", "kilometer", "liter", "megabit", "megabyte", "meter", "mile", "mile-scandinavian", "millimeter", "milliliter", "millisecond", "minute", "month", "ounce", "percent", "petabyte", "pound", "second", "stone", "terabit", "terabyte", "week", "yard", "year"];

  var unitDisplays = ["short", "long", "narrow"];

  var locales = ["en-US", "en-GB", "en-IN", "fr-FR", "fr-CA", "fr-CH", "it-IT", "it-CH", "de-DE", "de-AT", "de-CH", "tr-TR", "zh-CN", "zh-HK", "ja-JP", "ko-KR", "es-ES", "es-MX", "pt-BR", "pt-PT"];

  var currencies = ["USD", "CAD", "GBP", "EUR", "JPY", "HKD", "CNY", "KRW", "BRL", "TRY"];

  var currencyDisplays = ["symbol", "narrowSymbol", "code", "name"];

  var defaultUnit = units[0];
  var defaultUnitDisplay = unitDisplays[0];
  var defaultNumberStyle = numberStyles[0];
  var defaultCurrency = currencies[0];
  var defaultCurrencyDisplay = currencyDisplays[0];

  var _React$useState = React.useState(defaultUnit),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      unit = _React$useState2[0],
      setUnit = _React$useState2[1];

  var _React$useState3 = React.useState(defaultUnitDisplay),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      unitDisplay = _React$useState4[0],
      setUnitDisplay = _React$useState4[1];

  var _React$useState5 = React.useState(defaultNumberStyle),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      numberStyle = _React$useState6[0],
      setNumberStyle = _React$useState6[1];

  var _React$useState7 = React.useState(defaultCurrency),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      currency = _React$useState8[0],
      setCurrency = _React$useState8[1];

  var _React$useState9 = React.useState(defaultCurrencyDisplay),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      currencyDisplay = _React$useState10[0],
      setCurrencyDisplay = _React$useState10[1];

  var _React$useState11 = React.useState('none'),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      currencyUI = _React$useState12[0],
      setCurrencyUI = _React$useState12[1];

  var _React$useState13 = React.useState('none'),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      unitUI = _React$useState14[0],
      setUnitUI = _React$useState14[1];

  var uiStateTable = {
    currency: {
      currencyUI: 'block',
      unitUI: 'none'
    },
    unit: {
      currencyUI: 'none',
      unitUI: 'block'
    },
    fallback: {
      currencyUI: 'none',
      unitUI: 'none'
    }
  };

  var handleNumberStyleChange = function handleNumberStyleChange(event) {
    console.debug("handle change!", event.target.value);
    setNumberStyle(event.target.value);

    if (uiStateTable.hasOwnProperty(event.target.value)) {
      setCurrencyUI(uiStateTable[event.target.value].currencyUI);
      setUnitUI(uiStateTable[event.target.value].unitUI);
    } else {
      setCurrencyUI(uiStateTable["fallback"].currencyUI);
      setUnitUI(uiStateTable["fallback"].unitUI);
    }
  };

  var handleUnitChange = function handleUnitChange(event) {
    console.debug("handle change!", event.target.value);
    setUnit(event.target.value);
  };

  var handleUnitDisplayChange = function handleUnitDisplayChange(event) {
    console.debug("handle change!", event.target.value);
    setUnitDisplay(event.target.value);
  };

  var handleCurrencyChange = function handleCurrencyChange(event) {
    console.debug("handle change!", event.target.value);
    setCurrency(event.target.value);
  };

  var handleCurrencyDisplayChange = function handleCurrencyDisplayChange(event) {
    console.debug("handle change!", event.target.value);
    setCurrencyDisplay(event.target.value);
  };

  return React.createElement(
    "div",
    { className: "container mt-5" },
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-4" },
      React.createElement(Banner, { text: "Formatted Numbers" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row mb-3" },
          React.createElement(
            "div",
            { className: "col-4" },
            "Number Style:"
          ),
          React.createElement(
            "div",
            { className: "col-5" },
            React.createElement(ItemSelector, {
              items: numberStyles,
              onChange: handleNumberStyleChange
            })
          )
        ),
        React.createElement(
          "div",
          { style: { display: currencyUI }, className: "mb-3" },
          React.createElement(
            "div",
            { className: "row mb-1" },
            React.createElement(
              "div",
              { className: "col-4" },
              "Currency:"
            ),
            React.createElement(
              "div",
              { className: "col-5" },
              React.createElement(ItemSelector, { items: currencies, onChange: handleCurrencyChange })
            )
          ),
          React.createElement(
            "div",
            { className: "row mb-1" },
            React.createElement(
              "div",
              { className: "col-4" },
              "Currency Display:"
            ),
            React.createElement(
              "div",
              { className: "col-5" },
              React.createElement(ItemSelector, {
                items: currencyDisplays,
                onChange: handleCurrencyDisplayChange
              })
            )
          )
        ),
        React.createElement(
          "div",
          { style: { display: unitUI }, className: "mb-3" },
          React.createElement(
            "div",
            { className: "row mb-1" },
            React.createElement(
              "div",
              { className: "col-4" },
              "Unit:"
            ),
            React.createElement(
              "div",
              { className: "col-5" },
              React.createElement(ItemSelector, { items: units, onChange: handleUnitChange })
            )
          ),
          React.createElement(
            "div",
            { className: "row mb-1" },
            React.createElement(
              "div",
              { className: "col-4" },
              "Unit Display:"
            ),
            React.createElement(
              "div",
              { className: "col-5" },
              React.createElement(ItemSelector, { items: unitDisplays, onChange: handleUnitDisplayChange })
            )
          )
        )
      )
    ),
    React.createElement(Examples, {
      locales: locales,
      numberStyle: numberStyle,
      unit: unit,
      unitDisplay: unitDisplay,
      currency: currency,
      currencyDisplay: currencyDisplay
    })
  );
};

var ItemSelector = function ItemSelector(_ref) {
  var items = _ref.items,
      onChange = _ref.onChange;

  var options = items.map(function (item) {
    return React.createElement(
      "option",
      { value: item },
      item
    );
  });

  return React.createElement(
    "select",
    { className: "form-control", onChange: onChange },
    options
  );
};

var Examples = function Examples(_ref2) {
  var locales = _ref2.locales,
      numberStyle = _ref2.numberStyle,
      unit = _ref2.unit,
      unitDisplay = _ref2.unitDisplay,
      currency = _ref2.currency,
      currencyDisplay = _ref2.currencyDisplay;

  var value = 1234567890;
  var labels = ["locale", "formatted number"];

  // Put in css file?
  var columnStyle = { textAlign: "center" };

  var header = labels.map(function (label) {
    return React.createElement(
      "th",
      { style: columnStyle },
      label
    );
  });

  var output = locales.map(function (locale) {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        { style: columnStyle },
        locale
      ),
      React.createElement(
        "td",
        { style: columnStyle },
        React.createElement(FormattedNumber, {
          value: value,
          locale: locale,
          style: numberStyle,
          unit: unit,
          unitDisplay: unitDisplay,
          currency: currency,
          currencyDisplay: currencyDisplay
        })
      )
    );
  });

  // put in css file?
  var tableStyle = { backgroundColor: "AntiqueWhite" };

  return React.createElement(
    "table",
    { className: "table table-hover table-bordered", style: tableStyle },
    React.createElement(
      "thead",
      null,
      header
    ),
    React.createElement(
      "tbody",
      null,
      output
    )
  );
};

var isStyleUnitSupported = function isStyleUnitSupported() {
  try {
    var value = new Intl.NumberFormat(undefined, { style: "unit", unit: "acre" }).format(123);
    console.log(value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};