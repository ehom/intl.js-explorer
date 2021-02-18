var APP_NAME = "Intl.js Explorer";

var _ReactRouterDOM = ReactRouterDOM,
    HashRouter = _ReactRouterDOM.HashRouter,
    Route = _ReactRouterDOM.Route,
    Link = _ReactRouterDOM.Link,
    Switch = _ReactRouterDOM.Switch,
    Redirect = _ReactRouterDOM.Redirect;


var App = function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "nav",
      { className: "navbar navbar-light bg-light" },
      React.createElement(
        "a",
        { className: "navbar-brand", href: "#" },
        "Intl.js Explorer"
      ),
      React.createElement(
        "button",
        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        React.createElement("span", { className: "navbar-toggler-icon" })
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
        React.createElement(
          "ul",
          { className: "navbar-nav mr-auto" },
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/about/browser", className: "nav-link" },
              "This Browser"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/formatted/dates", className: "nav-link" },
              "Formatted Dates"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/formatted/numbers", className: "nav-link" },
              "Formatted Numbers"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/sorting", className: "nav-link" },
              "Intl.Collator"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/pluralRules", className: "nav-link" },
              "Intl.PluralRules"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/counting", className: "nav-link" },
              "Counting"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              Link,
              { to: "/about", className: "nav-link" },
              "About This App"
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        Switch,
        null,
        React.createElement(
          Route,
          { exact: true, path: "/about" },
          React.createElement(AboutThisApp, null)
        ),
        React.createElement(
          Route,
          { path: "/sorting" },
          React.createElement(SortingPage, null)
        ),
        React.createElement(
          Route,
          { path: "/counting" },
          React.createElement(CountingPage, null)
        ),
        React.createElement(
          Route,
          { path: "/pluralRules" },
          React.createElement(PluralRulesPage, null)
        ),
        React.createElement(
          Route,
          { exact: true, path: "/formatted/dates" },
          React.createElement(FormattedDatesPage, null)
        ),
        React.createElement(
          Route,
          { exact: true, path: "/formatted/numbers" },
          React.createElement(FormattedNumbersPage, null)
        ),
        React.createElement(
          Route,
          { path: "/about/browser" },
          React.createElement(IntljsSupportPage, null)
        ),
        React.createElement(Redirect, { to: "/about/browser" })
      )
    )
  );
};

document.title = APP_NAME;

ReactDOM.render(React.createElement(
  HashRouter,
  null,
  React.createElement(App, null)
), document.getElementById("root"));