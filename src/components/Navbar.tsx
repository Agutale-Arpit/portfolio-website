function Navbar() {
  return (
    <div className="flex border-black border-2 rounded-xl border-dashed m-4 justify-between">
      <div className="p-4 text-3xl">Arpit Agutale</div>
      <div className="flex p-2 pr-6 mr-4">
        <a href="#Experiences" className="p-2 text-xl">Experiences</a>
        <a href="#Projects" className="p-2 text-xl">Projects</a>
        <a href="#Education" className="p-2 text-xl">Education</a>
      </div>
    </div>
  );
}

export default Navbar;
