import React from "react";
import Link from "next/link";

export default function State({ state }) {
  return (
    <div className="states-page">
      <h1>
        <Link href="/states">Go to All States</Link>
      </h1>
      <img src={state.flag} alt={state.name} width="50" />
      <h1>{state.name}</h1>
      <table>
        <colgroup span="4" />
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.id}</td>
            <td>{state.name}</td>
            <td>{state.capital}</td>
            <td>{state.population}</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination-buttons">
        <Link
          href={`/states/${
            parseInt(state.id, 10) === 1 ? "" : parseInt(state.id, 10) - 1
          }`}
          title="previous state"
        >
          <a>← previous</a>
        </Link>
        <Link
          href={`/states/${
            parseInt(state.id, 10) === 50 ? "" : parseInt(state.id, 10) + 1
          }`}
          title="next state"
        >
          <a> next →</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // This is a real endpoint
  const res = await fetch("https://api.sampleapis.com/the-states/the-states");
  const states = await res.json();

  const paths = states.map((state) => `/states/${state.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.sampleapis.com/the-states/the-states?id=${params.id}`
  );
  const state = await res.json();

  return {
    props: {
      state: state[0]
    }
  };
}
