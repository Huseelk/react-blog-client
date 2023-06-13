import React from "react";

function CommentsBlock() {
  return (
    <aside className="p-4 xl:mr-5 mb-10 bg-white flex justify-start flex-col items-start break-all shadow mr-0">
      <h3 className="font-bold mb-4">Comments</h3>

      {[...Array(3)].map((e, idx) => {
        return (
          <div key={idx} className="mb-3 flex flex-row items-bottom">
            <img
              className="mr-3 rounded-full w-8 h-8"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
            />
            <div>
              <span className="text-md">Tigran Petrosyants</span>
              <span className="flex items-center text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default CommentsBlock;
