var Banner = function Banner(_ref) {
  var text = _ref.text;
  return React.createElement(
    "h4",
    null,
    text
  );
};

var AboutThisApp = function AboutThisApp() {
  var styling = { backgroundColor: "AntiqueWhite" };

  return React.createElement(
    "div",
    { className: "container mt-3" },
    React.createElement(
      "div",
      { className: "jumbotron pt-4 pb-2" },
      React.createElement(Banner, { text: "About This App" })
    ),
    React.createElement(
      "div",
      { className: "container", style: styling },
      React.createElement(
        "p",
        null,
        "Run this app to check if the Intl.js functionality needed is available on web browsers your customers will be using."
      )
    )
  );
};