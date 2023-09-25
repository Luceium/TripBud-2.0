import LogInSignOut from "./components/LogInSignOut";


export default function Home() {

  return (
    <main>
      <div className="flex flex-col">
        <h1 className="home-title text-center text-xl py-20 mt-20">TripBud</h1>
        <h3 className="home-subtitle text-center text-sm py-5">your budget trip planner</h3>
        <LogInSignOut />
      </div>
      <div className="absolute -bottom-0 text-center text-xs w-full">
        <p>© 2022 SPS Team 36</p>
      </div>
    </main>
  )
}
