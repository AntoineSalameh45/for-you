import sophia from "../../../assets/icon.png";

const ForYou = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-8">
      <div className="mb-2">
        <p className="mb-1">I have a message</p>
        <h1 className="text-2xl font-bold">For You...</h1>
      </div>
      <a href="/story-time" className="mb-4">
        <img src={sophia} alt="sophia" className="h-32" />
      </a>
      <p>Click on Qiqi</p>
    </div>
  );
}

export default ForYou;