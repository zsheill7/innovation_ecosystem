import React from "react";
import dynamic from "next/dynamic";

const SheetsMapTest = dynamic(() => import("components/SheetsMapTest"), {
  loading: () => <p>Map is loading</p>,
  ssr: false, // This line is important. It's what prevents server-side render
});

function App() {
  return (
    <div>
      <h1>Healthcare Innovation Ecosystem Map</h1>
      <SheetsMapTest />
    </div>
  );
}

export default App;
