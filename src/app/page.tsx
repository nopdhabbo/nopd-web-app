import style from './home.module.css';


export default function Home() {
  return (
    <>
      <div className={style.backgroundRectangle}>
        <div className={style.rectangleOne}></div>
        <div className={style.rectangleTwo}></div>
        <div className={style.rectangleThree}></div>
        <div className={style.rectangleFive}></div>
        <div className={style.rectangleFour}></div>
        <div className={style.rectangleSix}></div>
        <div className={style.rectangleSeven}></div>
        <div className={style.rectangleEight}></div>
        <div className={style.rectangleNine}></div>
        <div className={style.rectangleTen}></div>
      </div>
      <main className={style.homeMain}>
        <section className={style.heroSection}>
          <div className={style.heroSectionLeft}>
            {/* Hero Section Heading Container */}
            <div className={style.heroSectionHeadingContainer}>
              <h1>Welcome to New Orlean’s City Police Department. </h1>
              <p>Experience nostalgia with NOPD - the top Police Roleplay game on Habbo since 2007. Dive into the action and relive the golden days!</p>
              <button>
                <span>
                  join now
                </span>
              </button>
              <div className={style.heroSectionSocialMedia}>

              </div>
            </div>
          </div>

          <div className={style.heroSectionRight}>

          </div>
        </section>
        <section>section 2</section>
        <section>section 3</section>
        <section>section 4</section>
        <section>section 5</section>
        <section>section 6</section>
        <section>section 7</section>

      </main>

    </>
  );
}
