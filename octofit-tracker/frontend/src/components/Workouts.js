import React, { useEffect, useState } from 'react';

const TableView = ({items}) => {
  if (!items || items.length === 0) return <div className="text-muted">Keine Einträge</div>;
  const cols = Array.from(new Set(items.flatMap(i => Object.keys(i))));
  return (
    <div className="card-table">
      <table className="table table-striped table-sm">
        <thead className="table-light"><tr>{cols.map(c => <th key={c}>{c}</th>)}</tr></thead>
        <tbody>{items.map((it, r) => (<tr key={it.id || r}>{cols.map(c => <td className="table-json" key={c}>{JSON.stringify(it[c])}</td>)}</tr>))}</tbody>
      </table>
    </div>
  );
};

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  const load = () => {
    setLoading(true);
    console.log('Fetching workouts from:', endpoint);
    fetch(endpoint).then(r=>r.json()).then(data=>{
      const results = data.results || data;
      setWorkouts(results);
      console.log('Fetched workouts:', results);
    }).catch(err=>console.error('Error fetching workouts:', err)).finally(()=>setLoading(false));
  };

  useEffect(()=>{load();},[endpoint]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Workouts</h5>
        <div className="mb-2">
          <button className="btn btn-primary btn-sm me-2" onClick={load} disabled={loading}>{loading? 'Loading...':'Refresh'}</button>
          <a className="btn btn-link btn-sm" href={endpoint} target="_blank" rel="noreferrer">API</a>
        </div>
        <TableView items={workouts} />
      </div>
    </div>
  );
};

export default Workouts;
