import React from "react";

const Loading = () => {
  return (
    <div className="py-24">
      <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
        <div class=" animate-pulse space-x-4">
          <div class="flex">
            <div class="h-10 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
