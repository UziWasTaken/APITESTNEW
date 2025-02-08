import styles from './page.module.css'

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        <header className="border-b pb-8">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-600">Welcome to our documentation. Get started with our guides and references.</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Getting Started</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2">Quick Start Guide</h3>
              <p className="text-gray-600">Learn the basics and get up and running in minutes.</p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2">Installation</h3>
              <p className="text-gray-600">Step-by-step installation instructions for all platforms.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Core Concepts</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2">Architecture</h3>
              <p className="text-gray-600">Understand how the system works under the hood.</p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2">Best Practices</h3>
              <p className="text-gray-600">Learn recommended patterns and approaches.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600">
            Can't find what you're looking for? Check out our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              FAQ
            </a>{' '}
            or{' '}
            <a href="#" className="text-blue-600 hover:underline">
              contact support
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
