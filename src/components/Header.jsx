function Header({ title, username }) {
  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-3">
        <div className="hidden h-8 w-1 rounded-full bg-blue-600 sm:block" />
        <h1 className="text-lg font-semibold tracking-tight text-gray-900">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
          {username.charAt(0)}
        </div>
        <span className="hidden text-sm font-medium text-gray-700 sm:block">{username}</span>
      </div>
    </header>
  )
}

export default Header
