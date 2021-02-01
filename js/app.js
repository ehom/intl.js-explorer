var APP_NAME = "Intl.js Explorer";

var _ReactRouterDOM = ReactRouterDOM,
    BrowserRouter = _ReactRouterDOM.BrowserRouter,
    Route = _ReactRouterDOM.Route,
    Link = _ReactRouterDOM.Link,
    Switch = _ReactRouterDOM.Switch,
    Redirect = _ReactRouterDOM.Redirect;


var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "nav",
      { "class": "navbar navbar-expand-lg navbar-light bg-light" },
      React.createElement(
        "a",
        { "class": "navbar-brand", href: "#" },
        "Intl.js Explorer"
      ),
      React.createElement(
        "button",
        { "class": "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        React.createElement("span", { "class": "navbar-toggler-icon" })
      ),
      React.createElement(
        "div",
        { "class": "collapse navbar-collapse", id: "navbarSupportedContent" },
        React.createElement(
          "ul",
          { "class": "navbar-nav mr-auto" },
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              Link,
              { to: "/about/browser", className: "nav-link" },
              "This Browser"
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              Link,
              { to: "/sorting", className: "nav-link" },
              "Intl.Collator"
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              Link,
              { to: "/pluralRules", className: "nav-link" },
              "Intl.PluralRules"
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
            React.createElement(
              Link,
              { to: "/counting", className: "nav-link" },
              "Counting"
            )
          ),
          React.createElement(
            "li",
            { "class": "nav-item" },
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
  BrowserRouter,
  null,
  React.createElement(App, null)
), document.getElementById("root"));