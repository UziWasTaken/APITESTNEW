import styles from './page.module.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto p-8">
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 text-purple-800">Kanna&apos;s Adventure</h1>
          <p className="text-xl text-purple-600">Join the adorable dragon girl in her daily adventures!</p>
        </header>

        <section className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <h2 className="text-2xl font-bold text-pink-600 mb-3">Daily Activities</h2>
              <p className="text-gray-700">Follow Kanna as she discovers the human world, plays with friends, and enjoys delicious sweets!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <h2 className="text-2xl font-bold text-pink-600 mb-3">School Life</h2>
              <p className="text-gray-700">Experience the fun and challenges of elementary school through Kanna&apos;s unique dragon perspective!</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <h2 className="text-2xl font-bold text-pink-600 mb-3">Dragon Powers</h2>
              <p className="text-gray-700">Discover Kanna&apos;s amazing abilities and how she keeps them secret in the human world!</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform">
              <h2 className="text-2xl font-bold text-pink-600 mb-3">Friendship</h2>
              <p className="text-gray-700">Meet Saikawa, Tohru, and all of Kanna&apos;s friends who make her life special!</p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Join the Adventure!</h2>
          <p className="text-lg text-purple-600 mb-6">
            Follow Kanna&apos;s daily adventures and discover the magic of friendship through a dragon&apos;s eyes!
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transform hover:scale-105 transition-all">
            Start Adventure!
          </button>
        </section>

        <footer className="mt-16 text-center text-purple-600">
          <p>✨ Powered by Dragon Magic ✨</p>
        </footer>
      </div>
    </main>
  )
}
