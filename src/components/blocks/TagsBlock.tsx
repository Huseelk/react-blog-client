import React from "react";
import { Link } from "react-router-dom";

function TagsBlock({ tags }: any) {
  return (
    <aside className="p-4 mr-5 mb-10 bg-white flex justify-start flex-col items-start break-all shadow min-w-[150px]">
      <h3 className="font-bold mb-4">Tags</h3>

      {tags.map((tag: string, idx: number) => {
        return (
          <div key={idx} className="mb-2">
            <span className="mr-6 font-bold">#</span>
            <Link className="hover:underline" to={`/category/${tag}`}>{tag}</Link>
          </div>
        );
      })}
    </aside>
  );
}

export default TagsBlock;
