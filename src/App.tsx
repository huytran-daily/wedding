import { Icon } from '@iconify/react'

function App() {
  return (
    <div className="min-h-screen bg-background-wedding-primary flex items-center justify-center p-6">
      <div className="bg-background-default rounded-2xl shadow-lg p-10 max-w-md w-full text-center space-y-6">

        {/* Decorative script */}
        <p className="font-vibes text-4xl text-text-wedding-red leading-none">
          You are invited
        </p>

        {/* Heart icon */}
        <div className="flex justify-center">
          <Icon
            icon="mdi:heart"
            className="text-text-wedding-red"
            width={48}
            height={48}
          />
        </div>

        {/* Names */}
        <div className="space-y-1">
          <h1 className="font-cinzel text-4xl font-semibold text-text-wedding-primary tracking-widest">
            Huy &amp; Tran
          </h1>
          <p className="font-vibes text-2xl text-text-wedding-red">
            Together forever
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border-default" />
          <Icon icon="mdi:flower" className="text-text-wedding-red" width={16} />
          <div className="flex-1 h-px bg-border-default" />
        </div>

        {/* Info icons */}
        <div className="flex justify-center gap-8 text-text-subtle">
          <div className="flex flex-col items-center gap-1.5">
            <Icon
              icon="mdi:calendar-heart"
              width={28}
              height={28}
              className="text-text-wedding-red"
            />
            <span className="text-xs font-medium uppercase tracking-wide">
              Save the Date
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Icon
              icon="mdi:map-marker"
              width={28}
              height={28}
              className="text-text-wedding-red"
            />
            <span className="text-xs font-medium uppercase tracking-wide">
              Venue
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Icon
              icon="mdi:camera"
              width={28}
              height={28}
              className="text-text-wedding-red"
            />
            <span className="text-xs font-medium uppercase tracking-wide">
              Gallery
            </span>
          </div>
        </div>

        {/* RSVP Button */}
        <button className="w-full bg-background-wedding-secondary hover:opacity-90 active:opacity-75 text-text-inverse font-cinzel font-medium tracking-widest py-3 px-6 rounded-lg transition-opacity">
          RSVP Now
        </button>

        {/* Footer note */}
        <p className="text-text-disable text-xs">
          We look forward to celebrating with you 🤍
        </p>

      </div>
    </div>
  )
}

export default App

