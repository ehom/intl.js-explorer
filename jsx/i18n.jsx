const FormattedDate = ({ locale, dateStyle, value }) => {
  const formatOptions = {
    short: {},
    medium: {
      month: "short",
      day: "numeric",
      year: "numeric"
    },
    long: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    full: {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  };

  // dateStyle is still not supported on Safari

  const formatted = new Intl.DateTimeFormat(
    locale, formatOptions[dateStyle]
    ).format(value);

  return <React.Fragment>{formatted}</React.Fragment>;
};

const FormattedNumber = ({
    locale,
    value,
    style,
    unit,
    unitDisplay,
    currency,
    currencyDisplay,
    notation
  }) => {
    const options = {
      style: style,
      unit: unit,
      unitDisplay: unitDisplay,
      currency: currency,
      currencyDisplay: currencyDisplay
    };
    const formatted = new Intl.NumberFormat(locale, options).format(value);

    return <React.Fragment>{formatted}</React.Fragment>;
};

FormattedNumber.defaultProps = {
  currency: "USD",
  currencyDisplay: "symbol",
  notation: "standard",
  unitDisplay: "long"
};
