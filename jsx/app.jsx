const APP_NAME = "Intl.js Explorer";

const { HashRouter, Route, Link, Switch, Redirect } = ReactRouterDOM;

const App = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Intl.js Explorer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/about/browser" className="nav-link">This Browser</Link>
          </li>
          <li class="nav-item">
            <Link to="/sorting" className="nav-link">Intl.Collator</Link>
          </li>
          <li class="nav-item">
            <Link to="/pluralRules" className="nav-link">Intl.PluralRules</Link>
          </li>
          <li class="nav-item">
            <Link to="/counting" className="nav-link">Counting</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" className="nav-link">About This App</Link>
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


