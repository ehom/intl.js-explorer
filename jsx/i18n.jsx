var i18n = i18n || {};

i18n.FormattedDateTime = ({ locale, style, value }) => {
  const formatOptions = {
    short: {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    },
    medium: {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    },
    long: {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
      timeZoneName: "short"
    },
    full: {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
      timeZoneName: "long"
    }
  };

  // dateStyle and timeStyle are not supported on Safari (yet?)

  /* Maybe provide a page that uses custom date/time formatting?
  const formatted = new Intl.DateTimeFormat(
    locale, formatOptions[dateStyle]
    ).format(value);
  */

  const formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: style, timeStyle: style
  }).format(value);

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
