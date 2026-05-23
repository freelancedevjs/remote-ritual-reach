export default function ServiceLoading() {
  return (
    <div className="min-h-screen bg-stone-50 animate-pulse">
      <div className="h-16 bg-stone-200 w-full" />
      <div className="h-64 bg-stone-200 w-full" />
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        <div className="h-8 bg-stone-200 rounded-xl w-2/3" />
        <div className="h-4 bg-stone-200 rounded-xl w-full" />
        <div className="h-4 bg-stone-200 rounded-xl w-5/6" />
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 bg-stone-200 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
