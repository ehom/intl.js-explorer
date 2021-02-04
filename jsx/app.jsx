const APP_NAME = "Intl.js Explorer";

const { HashRouter, Route, Link, Switch, Redirect } = ReactRouterDOM;

const App = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Intl.js Explorer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/about/browser" className="nav-link">This Browser</Link>
          </li>
          <li className="nav-item">
            <Link to="/formatted/dates" className="nav-link">Formatted Dates</Link>
          </li>
          <li className="nav-item">
            <Link to="/sorting" className="nav-link">Intl.Collator</Link>
          </li>
          <li className="nav-item">
            <Link to="/pluralRules" className="nav-link">Intl.PluralRules</Link>
          </li>
          <li className="nav-item">
            <Link to="/counting" className="nav-link">Counting</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">This App</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <Switch>
        <Route exact path="/about">
          <AboutThisApp />
        </Route>

        <Route path="/sorting">
          <SortingPage />
        </Route>

        <Route path="/counting">
          <CountingPage />
        </Route>

        <Route path="/pluralRules">
          <PluralRulesPage />
        </Route>

        <Route path="/formatted/dates">
          <FormattedDatesPage />
        </Route>

        <Route path="/about/browser">
          <IntljsSupportPage />
        </Route>

        <Redirect to="/about/browser" />
      </Switch>
    </div>
  </div>
);

document.title = APP_NAME;

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);


