import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="home-title">TripBud</h1>
        <h3 className="home-subtitle">budget trip buddy</h3>
        <div className="enter-btn-div" id="enter-btn-div"></div>
      </div>
      <div className="footer">
        <p>© 2022 SPS Team 36</p>
      </div>
    </main>
  )
}
