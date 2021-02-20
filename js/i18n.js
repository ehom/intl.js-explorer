var i18n = i18n || {};

i18n.FormattedDateTime = function (_ref) {
  var locale = _ref.locale,
      style = _ref.style,
      value = _ref.value;

  var formatOptions = {
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

  var formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: style, timeStyle: style
  }).format(value);

  return React.createElement(
    React.Fragment,
    null,
    formatted
  );
};

var FormattedNumber = function FormattedNumber(_ref2) {
  var locale = _ref2.locale,
      value = _ref2.value,
      style = _ref2.style,
      unit = _ref2.unit,
      unitDisplay = _ref2.unitDisplay,
      currency = _ref2.currency,
      currencyDisplay = _ref2.currencyDisplay,
      notation = _ref2.notation;

  var options = {
    style: style,
    unit: unit,
    unitDisplay: unitDisplay,
    currency: currency,
    currencyDisplay: currencyDisplay
  };
  var formatted = new Intl.NumberFormat(locale, options).format(value);

  return React.createElement(
    React.Fragment,
    null,
    formatted
  );
};

FormattedNumber.defaultProps = {
  currency: "USD",
  currencyDisplay: "symbol",
  notation: "standard",
  unitDisplay: "long"
};