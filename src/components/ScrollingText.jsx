export default function ScrollingText() {
  return (
    <>
      {/* The Scrolling Text */}
      <div className="w-full overflow-hidden flex whitespace-nowrap text-3xl lg:text-4xl font-medium uppercase">
        <div className="animate-marquee">
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
        </div>
        <div className="animate-marquee">
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
          <span className="ml-10">Featured projects</span>
        </div>
      </div>
    </>
  );
}
