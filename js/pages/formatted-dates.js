var FormattedDatesPage = function FormattedDatesPage() {
  var locales = ["en-US", "en-GB", "fr-FR", "fr-CA", "fr-CH", "it-IT", "de-DE", "zh-CN", "zh-HK", "zh-TW", "ja-JP", "ko-KR", "es-ES", "es-MX", "pt-BR", "pt-PT"];

  return React.createElement(
    "div",
    { className: "container mt-3" },
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-2" },
      React.createElement(
        "h4",
        null,
        "Formatted Dates"
      )
    ),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(DateExamples, { locales: locales })
    )
  );
};

var DateExamples = function DateExamples(_ref) {
  var locales = _ref.locales;

  var today = Date.now();
  var formats = ["short", "medium", "full"];
  var labels = ["locale"].concat(formats);

  var header = labels.map(function (label) {
    return React.createElement(
      "th",
      null,
      label
    );
  });

  var Columns = function Columns(_ref2) {
    var locale = _ref2.locale,
        formats = _ref2.formats;

    var content = formats.map(function (format) {
      return React.createElement(
        "td",
        null,
        React.createElement(FormattedDate, {
          locale: locale,
          value: today,
          formatType: format
        })
      );
    });

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "td",
        null,
        locale
      ),
      content
    );
  };

  var output = locales.map(function (locale) {
    return React.createElement(
      "tr",
      null,
      React.createElement(Columns, { locale: locale, formats: formats })
    );
  });

  var style = { backgroundColor: "AntiqueWhite" };

  return React.createElement(
    "table",
    { className: "table table-hover table-bordered table-responsive", style: style },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        header
      )
    ),
    React.createElement(
      "tbody",
      null,
      output
    )
  );
};