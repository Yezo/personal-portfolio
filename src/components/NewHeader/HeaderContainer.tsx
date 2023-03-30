export const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="min-h-screen bg-gray text-darktext">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-between px-8 pt-8 pb-4">
        {children}
      </div>
    </header>
  )
}
