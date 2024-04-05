import "./assets/style/style.css";
import { useState } from "react";
import SkillCard from "./components/SkillCard";

import aboutImg from "./assets/images/about.jpg";
import arrangImg from "./assets/images/arrang.png";
import mixingImg from "./assets/images/mixing.png";
import liveImg from "./assets/images/live.jpg";
import recordImg from "./assets/images/record.jpg";
import filmImg from "./assets/images/film.jpg";
import dubImg from "./assets/images/dubbing.png";
import Reveal from "./components/Reveal";

function App() {
    const [skillHoverCard, setSkillHoverCard] = useState(3);
    return (
        <div className="App">
            <nav>
                <h2>TBM</h2>

                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Works</a>
                    <a href="#">Contact Me</a>
                </div>
            </nav>
            <section class="v-container hero">
                <div className="info">
                    <Reveal width="fit-content">
                        <h3>Hello, I Am</h3>
                    </Reveal>
                    <Reveal width="fit-content">
                        <h1>
                            Trayambak <br /> Made
                        </h1>
                    </Reveal>
                    <Reveal width="fit-content">
                        <h2>A Professional Audio Engineer</h2>
                    </Reveal>
                </div>

                <button className="cta-btn">Email Me</button>
            </section>

            <section class="v-container about center-v">
                <Reveal width="fit-content">
                    <h1 class="sect-title">Who I Am</h1>
                </Reveal>

                <div className="about-container">
                    <Reveal width="50%">
                        <p>
                            I'm Trayambak Made(TBM), a Audio Engineer from Delhi
                            who is passionate about Audio Engineering, Film
                            Sound Mixing, Recording and Dubbing, Arrangement and
                            Programing,Song Mixing and Mastering With a strong
                            focus on delivering Quality of Sound. <br /> <br />{" "}
                            I am dedicated to delivering flawless audio
                            experiences. With meticulous attention to detail and
                            a profound grasp of the latest sound engineering
                            trends, I excel in seamlessly blending sonic
                            aesthetics with optimal functionality. Whether
                            crafting immersive soundscapes or implementing
                            innovative audio techniques, I bring my expertise to
                            every project. Committed to realizing your sonic
                            vision, I ensure that each audio production reflects
                            your distinctive style and objectives. Let's
                            collaborate and craft extraordinary auditory
                            experiences together!
                        </p>
                    </Reveal>

                    <img src={aboutImg} alt="" />
                </div>
            </section>

            <section className="v-container alt-sect center-v skills">
                <Reveal width="fit-content">
                    <h1 class="sect-title">My Skills</h1>
                </Reveal>

                <div className="skills-container">
                    <SkillCard
                        number={1}
                        title="Recording"
                        skillHoverCard={skillHoverCard}
                        onMouseEnter={() => setSkillHoverCard(1)}
                        img={recordImg}
                    />
                    <SkillCard
                        number={2}
                        onMouseEnter={() => setSkillHoverCard(2)}
                        skillHoverCard={skillHoverCard}
                        title="Mixing and Mastering"
                        img={mixingImg}
                    />
                    <SkillCard
                        number={3}
                        onMouseEnter={() => setSkillHoverCard(3)}
                        skillHoverCard={skillHoverCard}
                        title="Dubbing"
                        img={dubImg}
                    />
                    <SkillCard
                        number={4}
                        onMouseEnter={() => setSkillHoverCard(4)}
                        skillHoverCard={skillHoverCard}
                        title="Song Arrangement and Programming"
                        img={arrangImg}
                    />
                    <SkillCard
                        number={5}
                        onMouseEnter={() => setSkillHoverCard(5)}
                        skillHoverCard={skillHoverCard}
                        title="Live Sound Engineer"
                        img={liveImg}
                    />
                    <SkillCard
                        number={6}
                        onMouseEnter={() => setSkillHoverCard(6)}
                        skillHoverCard={skillHoverCard}
                        title="Film Sound and Mixing"
                        img={filmImg}
                    />
                </div>
            </section>

            <section className="v-container center-v work">
                <Reveal width="fit-content">
                    <h1 class="sect-title">Latest Work</h1>
                </Reveal>
                    <div className="slidshow-container">
                            <button>1</button>

                            <div className="slides">akshdkashd</div>
                            <div className="slides">alsndladsl</div>
                            <div className="slides">asodhashd</div>
                            <div className="slides">aoischaosicnoas</div>

                            <button>2</button>

                    </div>


            </section>

            <footer className="v-container center-v alt-sect sect-h-m">
                <Reveal width="fit-content">
                    <h1 className="sect-title">Let's Connect</h1>
                </Reveal>
            </footer>



        </div>
    );
}

export default App;
