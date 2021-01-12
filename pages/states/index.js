import Link from "next/link";
import React from "react";

export default function States({ states }) {
  return (
    <div className="states-page">
      <h1>All states</h1>
      <table>
        <colgroup span="4" />
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {states.map((state) => (
            <tr key={state.id}>
              <td>{state.id}</td>
              <td>{state.name}</td>
              <td>{state.capital}</td>
              <td>{state.population}</td>
              <td>
                <Link href={`/states/${state.id}`}>Learn more</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.sampleapis.com/the-states/the-states`);
  const states = await res.json();

  return {
    props: {
      states
    }
  };
}
