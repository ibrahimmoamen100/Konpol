import React from "react";

function page({ params }) {
  let id = params.page;
  return (
    <div className="text-center p-5 text-4xl font-bold">
      This Page is not found : {id}
    </div>
  );
}

export default page;
