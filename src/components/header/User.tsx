import React from "react";

function User() {
  return (
    <div className="flex">
      <div className="mx-2">
        <button className="px-2 py-1 rounded border border-blue-500 text-white bg-blue-500 hover:bg-blue-700 transition-all">
          NEW POST
        </button>
      </div>

      <div className="mx-2">
        <button className="px-2 py-1 border border-red-500 rounded bg-red-500 text-white hover:bg-red-700 transition-all">
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default User;
