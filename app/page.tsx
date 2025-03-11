import Scene3D from './components/Scene3D';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Interactive 3D Website</h1>
        <p className="text-lg mb-8">
          Welcome to our interactive 3D experience! Try clicking and dragging the cube below.
          You can rotate it, zoom in/out, and click it to see it transform.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <Scene3D />
        </div>
      </div>
    </main>
  );
} 