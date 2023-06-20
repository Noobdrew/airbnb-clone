import photoGrid from "./assets/photo-grid.png";

export default function Main() {
  return (
    <main className="hero">
      <div className="photo-conteiner">
        <img src={photoGrid} alt="Hero photo" className="main-photo" />
      </div>

      <div className="text-conteiner">
        <h1 className="main-title">Online Experiences</h1>
        <p className="main-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
}
