import "./App.css";

import wedding from "./assets/wedding.png";

import church from "./assets/church.png";
import churchImage from "./assets/ekexeci.png";
import party from "./assets/party.png";
import restaurant from "./assets/restoran.png";

function App() {
  return (
    <div className="wedding-page">

      {/* ========================================
          ՀԱՐՍԱՆԵԿԱՆ ՆԿԱՐ
      ======================================== */}

      <img
        src={wedding}
        alt="Հարսանեկան լուսանկար"
        className="wedding-image"
      />


      {/* ========================================
          ՆԿԱՐԻ ՎՐԱ ՎԵՐՆԱԳԻՐ
      ======================================== */}

      <div className="overlay">
        <h1>Հարսանյաց հրավեր</h1>
      </div>


      {/* ========================================
          ՀՐԱՎԵՐԻ ՀԱՏՎԱԾ
      ======================================== */}

      <div className="invite">

        <h2>Բարեկամներ և ընկերներ</h2>

        <p>
          Մենք գտել ենք մեր հավերժական սերը և ուրախ կլինենք,
          եթե կիսեք մեզ հետ մեր լուսավոր օրը։
        </p>

        <h3>Սիրով հրավիրում ենք Ձեզ մեր</h3>

        <h3>Հարսանիքին</h3>


        {/* ========================================
            ՍԵՊՏԵՄԲԵՐԻ ՕՐԵՐ
        ======================================== */}

        <div className="date-section">

          <h2>Սեպտեմբեր</h2>

          <div className="calendar">

            <div className="weekdays">
              <span>Երկ</span>
              <span>Երք</span>
              <span>Չոր</span>
              <span>Հինգ</span>
              <span>Ուրբ</span>
              <span>Շաբ</span>
              <span>Կիր</span>
            </div>

            <div className="days">
              <span>7</span>

              <span className="selected-day">
                8
              </span>

              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
            </div>

          </div>

        </div>

      </div>
 

<section className="program-section">

  <h2 className="program-title">
    Օրվա ծրագիր
  </h2>


  {/* ========================================
      👰 ՀԱՐՍԻ ՏՈՒՆ
  ======================================== */}

  <div className="program-item">

    <h3>Հարսի տուն</h3>

    <div className="program-time">
      12:00
    </div>

    <img
      src={church}
      alt="Հարսի տուն"
      className="program-image"
    />

  </div>


  {/* ========================================
      ⛪ ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ
  ======================================== */}

  <div className="program-item">

    <h3>Պսակադրություն</h3>

    <div className="program-time">
      14:00
    </div>

    <p className="program-place">
      Սուրբ Գևորգ եկեղեցի (Մուղնի)
    </p>

    <img
      src={churchImage}
      alt="Սուրբ Գևորգ եկեղեցի"
      className="programimage"
    />

    <a
      href="https://www.google.com/maps/search/?api=1&query=Սուրբ+Գևորգ+եկեղեցի+Մուղնի"
      target="_blank"
      rel="noopener noreferrer"
      className="map-button"
    >
      Ինչպես հասնել
    </a>

  </div>


  {/* ========================================
      🤵 ՓԵՍԱՅԻ ՏՈՒՆ
  ======================================== */}

  <div className="program-item">

    <h3>Փեսայի տուն</h3>

    <div className="program-time">
      15:00
    </div>

    <img
      src={party}
      alt="Փեսայի տուն"
      className="program-image"
    />

  </div>


  {/* ========================================
      🥂 ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ
  ======================================== */}

  <div className="program-item">

    <h3>Հարսանյաց հանդիսություն</h3>

    <div className="program-time">
      17:00
    </div>

    <p className="program-place">
      Ashtarak Hall
    </p>

    <img
      src={restaurant}
      alt="Ashtarak Hall"
      className="programimage"
    />

    <a
      href="https://www.google.com/maps/search/?api=1&query=Ashtarak+Hall"
      target="_blank"
      rel="noopener noreferrer"
      className="map-button"
    >
      Ինչպես հասնել
    </a>

  </div>

</section>

    </div>
  );
}

export default App;