export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight drop-shadow-sm lg:text-5xl">
        Hey there
      </h1>
      <br />
      <div className="text-sm leading-5 md:text-base md:leading-7">
        <p>
          I&rsquo;m Tyler, a developer and designer from Chile. I strive to
          continually improve my skills and knowledge, and enjoy contributing to
          open-source projects. Currently, I&rsquo;m focused on building{" "}
          <a
            href="http://bazza.studio"
            target="_blank"
            className="font-semibold transition-colors duration-700 ease-in-out hover:text-zinc-400"
            rel="noreferrer"
          >
            Bazza Studio.
          </a>
        </p>
        <br />
        <p>
          With experience as a developer and student since 2021, I have
          successfully completed and created several projects, including
          attendance registration applications and a sign language interpreter
          robot. My interests are diverse, from AI to mobile development, but I
          am currently honing my skills in web development.
        </p>
        <br />
        <p>
          As a seasoned programmer analyst, I am eager to expand my skillset and
          seek challenging opportunities for growth and learning.
        </p>
      </div>
    </>
  )
}
