import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          MIT Healthcare Innovation Ecosystem
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Our project aims to visualize the data collected in a manner that
          provides a better understanding of the MIT healthcare innovation
          ecosystem, identifying which entities are active at which stage of
          innovation development, and providing a way to quantify the impact of
          innovation ecosystems on creating and building new healthcare
          startups.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          We also aim to obtain more data on MIT healthcare startups that have
          been created as well as visualize them in a web application that
          allows viewers to see how the startups were created, including over
          time and by location, and which MIT programs contributed to their
          development.
        </p>
        <div>
          {/* <Link
            href="/graph"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
          >
            View Graph
          </Link> */}
          <Link
            href="/sample_map"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded ml-4"
          >
            View Map
          </Link>

          <Link
            href="/gsheets_map"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded ml-4"
          >
            Map from Google Sheets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
