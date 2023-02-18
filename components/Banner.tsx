
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Quasi's Unexpected Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#f7ab07]">
                Every Qwertard's
                </span>{" "}
                favorite blog.
            </h2>
        </div>

        <p className="mt-5 md:mt-5 text-gray-400 max-w-sm"> 
            New Quacks | More Unexpected B-Rolls | More Quack Quack Quack Quack
        </p>
    </div>
  )
}

export default Banner