"use client";
export default function Error(error, reset) {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <h2>Something Went Wrong!</h2>
        <div>
          <button onClick={() => reset()}> Try Again</button>
        </div>
      </main>
    </>
  );
}
