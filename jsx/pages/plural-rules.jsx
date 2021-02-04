const PluralRulesPage = () => {
  const locales = ["en", "fr", "ar", "he", "zh", "ja",  "ru", "pl"];
  
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
  let counts = [...Array(112).keys()];
    
  const rows = counts.map((count) => {
    const values = locales.map((locale, index) => {
      const f = new Intl.PluralRules(locale);
      if (index === 0) {
        return (
          <React.Fragment>
            <td>{count}</td><td className={f.select(count)}>{f.select(count)}</td>
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <td className={f.select(count)}>{f.select(count)}</td>
        </React.Fragment>
      );
    });
    return (
      <tr>{values}</tr>
    );
  });

  const style = { backgroundColor: "AntiqueWhite" };

  return (
    <div className="mt-3">
      <div className="jumbotron pt-4 pb-2">
        <h4>Intl.PluralRules of several locales</h4>
      </div>
      <div className="container" style={style}>
        <table className="table table-hover table-responsive">
          <caption>count</caption>
          <TableHeader labels={locales} />
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
};
