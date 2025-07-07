export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-thin">hello world</h1>
      <h1 className="text-4xl font-extralight">hello world</h1>
      <h1 className="text-4xl font-light">hello world</h1>
      <h1 className="text-4xl font-normal">hello world</h1>
      <h1 className="text-4xl font-medium">hello world</h1>
      <h1 className="text-4xl font-semibold">hello world</h1>
      <h1 className="text-4xl font-bold">hello world</h1>
      <h1 className="text-4xl font-extrabold">hello world</h1>
      <h1 className="text-4xl font-black">hello world</h1>
      <button className="bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground px-4 py-2">
        Primary 버튼
      </button>
      <button className="bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-secondary-foreground px-4 py-2">
        Secondary 버튼
      </button>
      <button className="bg-destructive hover:bg-destructive-hover active:bg-destructive-active text-destructive-foreground px-4 py-2">
        Destructive 버튼
      </button>
      <button className="bg-muted hover:bg-muted-hover active:bg-muted-active text-muted-foreground px-4 py-2">
        Muted 버튼
      </button>
    </div>
  );
}
