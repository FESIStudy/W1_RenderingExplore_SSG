import CSR from "./components/CSR";

export default function Home() {
  return (
    <div className="w-full min-h-screen mx-auto py-20">
      <h1 className="font-bold text-5xl text-center">CSR Rendering</h1>
      <CSR />
    </div>
  );
}
