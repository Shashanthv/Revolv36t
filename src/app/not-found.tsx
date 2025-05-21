import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-gray-900">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg max-w-md w-full text-center">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-4 drop-shadow">404</h2>
        <p className="text-gray-300 mb-8">Page not found</p>
        <Link 
          href="/en" 
          className="inline-block px-6 py-2 rounded-lg bg-purple-500/80 text-white font-semibold shadow hover:bg-purple-600 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
