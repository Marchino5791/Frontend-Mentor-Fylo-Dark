import hero from '../assets/illustration-intro.png'

export const Heading = () => {
  return (
    <section className="heading">
      <div className="heading__box-img">
        <img src={hero} alt="Hero image" />
      </div>

      <div className="heading__text">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>

        <a href="#CTA" className="btn max-15">
          Get Started
        </a>
      </div>
    </section>
  )
}
