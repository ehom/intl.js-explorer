const PluralRulesPage = () => {
  const locales = ["en", "de", "it", "es", "fr", "ar", "he", "zh", "ja", "ru", "pl"];
  
  const TableHeader = ( ({labels}) => {
    const columnHeaders = labels.map((label, index) => {
      if (index === 0) {
        return (
          <React.Fragment>
            <th></th><th>{label}</th>
          </React.Fragment>
        );
      }
      return <th>{label}</th>;
    });
    
    return (
      <thead>
        <tr>{columnHeaders}</tr>
      </thead>
    );
  });
  
  // create array filled with values 0 to 9
  let counts = [...Array(21).keys()];
    
  const rows = counts.map((count) => {
    const values = locales.map((locale, index) => {
      const f = new Intl.PluralRules(locale);
      if (index === 0) {
        return (
          <React.Fragment>
            <td>{count}</td><td>{f.select(count)}</td>
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <td>{f.select(count)}</td>
        </React.Fragment>
      );
    });
    return (
      <tr>{values}</tr>
    );
  });

  return (
    <React.Fragment>
      <div className="jumbotron pt-3 pb-3">
        <h3>Intl.PluralRules of several locales</h3>
      </div>
      <div className="container">
        <table className="table table-hover table-responsive">
          <caption>count</caption>
          <TableHeader labels={locales} />
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
