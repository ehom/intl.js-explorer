const FormattedDate = ({ locale, dateStyle, value }) => {
  const [language, country] = locale.split("-");

  let zones = moment.tz.zonesForCountry(country);
  // console.debug("zones:", zones);

  let timezoneOffset = new Date(value).getTimezoneOffset() / 60;
  let timezone = undefined;

  for (const zone of zones) {
    const offset = moment.tz.zone(zone).utcOffset(value) / 60;
    console.debug("offset:", offset);
    console.debug("timezoneOffset:", timezoneOffset);
    if (offset === timezoneOffset) {
      timezone = zone;
    }
  }

  if (timezone === undefined) {
    timezone = zones[0];
  }

  const formatted = new Intl.DateTimeFormat(
    locale, {
      dateStyle: dateStyle,
      timeStyle: dateStyle,
      timeZone: timezone
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
