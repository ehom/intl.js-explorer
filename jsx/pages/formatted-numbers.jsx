const FormattedNumbersPage = () => {
  let numberStyles = ["decimal", "currency", "percent"];

  if (isStyleUnitSupported()) {
    numberStyles.push("unit");
  }

  const units = [
    "acre",
    "bit",
    "byte",
    "celsius",
    "centimeter",
    "day",
    "degree",
    "fahrenheit",
    "fluid-ounce",
    "foot",
    "gallon",
    "gigabit",
    "gigabyte",
    "gram",
    "hectare",
    "hour",
    "inch",
    "kilobit",
    "kilobyte",
    "kilogram",
    "kilometer",
    "liter",
    "megabit",
    "megabyte",
    "meter",
    "mile",
    "mile-scandinavian",
    "millimeter",
    "milliliter",
    "millisecond",
    "minute",
    "month",
    "ounce",
    "percent",
    "petabyte",
    "pound",
    "second",
    "stone",
    "terabit",
    "terabyte",
    "week",
    "yard",
    "year"
  ];

  const unitDisplays = ["short", "long", "narrow"];

  const locales = [
    "en-US",
    "en-GB",
    "en-IN",
    "fr-FR",
    "fr-CA",
    "fr-CH",
    "it-IT",
    "it-CH",
    "de-DE",
    "de-AT",
    "de-CH",
    "tr-TR",
    "zh-CN",
    "zh-HK",
    "ja-JP",
    "ko-KR",
    "es-ES",
    "es-MX",
    "pt-BR",
    "pt-PT"
  ];

  const currencies = ["USD", "CAD", "GBP", "EUR", "JPY", "HKD", "CNY", "KRW", "BRL", "TRY"];

  let currencyDisplays = ["symbol", "code", "name"];

  if (isNarrowSymbolSupported()) {
    currencyDisplays.push("narrowSymbol");
  }

  console.debug(currencyDisplays);

  const [defaultUnit] = units;
  const [defaultUnitDisplay] = unitDisplays;
  
  const [defaultNumberStyle] = numberStyles;
  const [defaultCurrency] = currencies;
  const [defaultCurrencyDisplay] = currencyDisplays;

  const [unit, setUnit] = React.useState(defaultUnit);
  const [unitDisplay, setUnitDisplay] = React.useState(defaultUnitDisplay);
  const [numberStyle, setNumberStyle] = React.useState(defaultNumberStyle);
  
  const [currency, setCurrency] = React.useState(defaultCurrency);
  const [currencyDisplay, setCurrencyDisplay] = React.useState(
    defaultCurrencyDisplay
  );
  
  const [currencyUI, setCurrencyUI] = React.useState('none');
  const [unitUI, setUnitUI] = React.useState('none');

  const uiStateTable = {
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

  const handleNumberStyleChange = (event) => {
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

  const handleUnitChange = (event) => {
    console.debug("handle change!", event.target.value);
    setUnit(event.target.value);
  };

  const handleUnitDisplayChange = (event) => {
    console.debug("handle change!", event.target.value);
    setUnitDisplay(event.target.value);
  };
  
  const handleCurrencyChange = (event) => {
    console.debug("handle change!", event.target.value);
    setCurrency(event.target.value);
  };

  const handleCurrencyDisplayChange = (event) => {
    console.debug("handle change!", event.target.value);
    setCurrencyDisplay(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron pt-4 pb-4">
        <Banner text="Formatted Numbers" />

        <div className="container">

          <div>Number Style:</div>
          <div className="mb-3">
            <ItemSelector items={numberStyles} onChange={handleNumberStyleChange} />
          </div>
      
          <div style={{display: currencyUI}} className="mb-3">
            <div>Currency:</div>
            <div className="mb-2">
              <ItemSelector items={currencies} onChange={handleCurrencyChange} />
            </div>
            <div>Currency Display:</div>
            <div>
                <ItemSelector
                  items={currencyDisplays}
                  onChange={handleCurrencyDisplayChange}
                />
            </div>
          </div>
      
          <div style={{display: unitUI}} className="mb-3">
            <div>Unit:</div>
            <div className="mb-2">
              <ItemSelector items={units} onChange={handleUnitChange} />
            </div>
            <div>Unit Display:</div>
            <div>
              <ItemSelector items={unitDisplays} onChange={handleUnitDisplayChange} />
            </div>
          </div>

        </div>

      </div>
 
      <Examples
        locales={locales}
        numberStyle={numberStyle}
        unit={unit}
        unitDisplay={unitDisplay}
        currency={currency}
        currencyDisplay={currencyDisplay}
      />
    </div>
  );
};

const ItemSelector = ({ items, onChange }) => {
  const options = items.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <select className="form-control" onChange={onChange}>
      {options}
    </select>
  );
};

const Examples = ({
  locales,
  numberStyle,
  unit,
  unitDisplay,
  currency,
  currencyDisplay
}) => {
  const value = 1234567890;
  const labels = ["locale", "formatted number"];

  // Put in css file?
  const columnStyle = { textAlign: "center" };

  const header = labels.map((label) => {
    return <th style={columnStyle}>{label}</th>;
  });

  const output = locales.map((locale) => {
    return (
      <tr>
        <td style={columnStyle}>{locale}</td>
        <td style={columnStyle}>
          <FormattedNumber
            value={value}
            locale={locale}
            style={numberStyle}
            unit={unit}
            unitDisplay={unitDisplay}
            currency={currency}
            currencyDisplay={currencyDisplay}
          />
        </td>
      </tr>
    );
  });

  // put in css file?
  const tableStyle = { backgroundColor: "AntiqueWhite" };

  return (
    <table className="table table-hover table-bordered" style={tableStyle}>
      <thead>{header}</thead>
      <tbody>{output}</tbody>
    </table>
  );
};

const isStyleUnitSupported = () => {
  try {
    const value = new Intl.NumberFormat(undefined, {style: "unit", unit: "acre"}).format(123);
    console.log(value);
    return true;
  }
  catch(error) {
    console.error(error);
    return false;
  }
};

const isNarrowSymbolSupported = () => {
  try {
    const value = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: 'USD',
      currencyDisplay: "narrowSymbol"
    }).format(123);

    console.log(value);
    return true;
  }
  catch(error) {
    console.error(error);
    return false;
  }
};
