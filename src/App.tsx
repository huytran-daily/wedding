import { Icon } from '@iconify/react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Icon icon="mdi:heart" className="text-rose-500" width={56} height={56} />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Huy &amp; Tran
        </h1>
        <p className="text-gray-500 text-sm">
          Welcome to our wedding page 🎉
        </p>

        <div className="flex justify-center gap-6 text-gray-600">
          <div className="flex flex-col items-center gap-1">
            <Icon icon="mdi:calendar-heart" width={28} height={28} className="text-rose-400" />
            <span className="text-xs">Save the Date</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Icon icon="mdi:map-marker" width={28} height={28} className="text-rose-400" />
            <span className="text-xs">Venue</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Icon icon="mdi:camera" width={28} height={28} className="text-rose-400" />
            <span className="text-xs">Gallery</span>
          </div>
        </div>

        <button className="w-full bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white font-medium py-2.5 px-6 rounded-xl transition-colors">
          RSVP Now
        </button>
      </div>
    </div>
  )
}

export default App
