import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

    return (
     
    <div className="text-center my-5">
      <HashLoader
        color="#000"
        loading={loading}
        css=""
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mx-auto"
      />
    </div>
  );
}

export default Loader;
