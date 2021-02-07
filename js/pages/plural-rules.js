function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PluralRulesPage = function PluralRulesPage() {
  var locales = ["en", "fr", "ar", "he", "zh", "ja", "ru", "pl"];

  var TableHeader = function TableHeader(_ref) {
    var labels = _ref.labels;

    var columnHeaders = labels.map(function (label, index) {
      if (index === 0) {
        return React.createElement(
          React.Fragment,
          null,
          React.createElement("th", null),
          React.createElement(
            "th",
            null,
            label
          )
        );
      }
      return React.createElement(
        "th",
        null,
        label
      );
    });

    return React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        columnHeaders
      )
    );
  };

  // create array filled with values 0 to 9
  var counts = [].concat(_toConsumableArray(Array(112).keys()));

  var rows = counts.map(function (count) {
    var values = locales.map(function (locale, index) {
      var f = new Intl.PluralRules(locale);
      if (index === 0) {
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "td",
            null,
            count
          ),
          React.createElement(
            "td",
            { className: f.select(count) },
            f.select(count)
          )
        );
      }
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "td",
          { className: f.select(count) },
          f.select(count)
        )
      );
    });
    return React.createElement(
      "tr",
      null,
      values
    );
  });

  var style = { backgroundColor: "AntiqueWhite" };

  return React.createElement(
    "div",
    { className: "mt-3" },
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-2" },
      React.createElement(Banner, { text: "Intl.PluralRules of several locales" })
    ),
    React.createElement(
      "div",
      { className: "container", style: style },
      React.createElement(
        "table",
        { className: "table table-hover table-responsive" },
        React.createElement(
          "caption",
          null,
          "count"
        ),
        React.createElement(TableHeader, { labels: locales }),
        React.createElement(
          "tbody",
          null,
          rows
        )
      )
    )
  );
};