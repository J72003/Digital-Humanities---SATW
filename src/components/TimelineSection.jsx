import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Citation from "./Citation.jsx";

export default function TimelineSection({ events = [] }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (!events.length) return;
      const idx = Math.floor(v * events.length);
      const clamped = Math.max(0, Math.min(events.length - 1, idx));
      setActiveIndex(clamped);
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length]);

  const getReveal = (index) => ({
    initial: {
      opacity: 0,
      y: 24,
      x: index % 2 === 0 ? -18 : 18,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    viewport: { once: false, margin: "-120px" },
  });

  return (
    <section className="section section-alt" id="timeline">
      <div className="section-inner">
        <div className="timeline-header">
          <div>
            <h2 className="section-title">From Block Party to Museum Glass</h2>
            <div className="section-divider" />
            <p className="section-text">
              A spatial story needs a temporal spine. Scroll to watch New York
              streetwear move from local survival and innovation into
              institutional recognition and global capital.
            </p>
          </div>
        </div>

        {/* Scroll-controlled timeline */}
        <div ref={scrollRef} className="scroll-timeline">
          <div className="st-container">
            {/* Base line */}
            <div className="st-line" />

            {/* Progress line */}
            <motion.div
              className="st-progress"
              style={{ height: progressHeight }}
            />

            {/* Traveling glow “comet” */}
            <motion.div
              className="st-comet"
              style={{ top: progressHeight }}
            >
              <motion.span
                className="st-comet-core"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <div className="st-items">
              {events.map((event, index) => {
                const isActive = index <= activeIndex;

                return (
                  <div
                    key={`${event.year}-${event.label}-${index}`}
                    className={`st-item ${index % 2 === 0 ? "left" : "right"}`}
                  >
                    {/* Center node */}
                    <div className="st-node">
                      <motion.span
                        className={`st-node-dot ${isActive ? "active" : ""}`}
                        animate={
                          isActive
                            ? {
                                scale: [1, 1.25, 1],
                                boxShadow: [
                                  "0 0 0px rgba(248,113,113,0)",
                                  "0 0 14px rgba(248,113,113,0.55)",
                                  "0 0 0px rgba(248,113,113,0)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Card */}
                    <motion.article
                      className={`st-card ${isActive ? "active" : ""}`}
                      {...getReveal(index)}
                      initial="initial"
                      whileInView="whileInView"
                    >
                      <div className="st-card-top">
                        <span className="timeline-year-badge">
                          {event.year}
                        </span>
                        {event.site && (
                          <span className="timeline-site-badge">
                            {event.site}
                          </span>
                        )}
                      </div>

                      <h3 className="st-card-title">{event.label}</h3>
                      <p className="st-card-text">
                        {event.description}
                        {event.cites?.length ? (
                          <>
                            {" "}
                            {event.cites.map((c, i) => (
                              <Citation
                                key={i}
                                to={c}
                                label={`[${i + 1}]`}
                              />
                            ))}
                          </>
                        ) : null}
                      </p>

                      {/* Smart jumps */}
                      <div className="st-card-links">
                        {event.site?.toLowerCase().includes("bronx") && (
                          <a className="timeline-card-link" href="#bronx">
                            Jump to Bronx →
                          </a>
                        )}
                        {event.site?.toLowerCase().includes("harlem") && (
                          <a className="timeline-card-link" href="#harlem">
                            Jump to Harlem →
                          </a>
                        )}
                        {event.site?.toLowerCase().includes("soho") && (
                          <a className="timeline-card-link" href="#soho">
                            Jump to SoHo →
                          </a>
                        )}
                        {event.site
                          ?.toLowerCase()
                          .includes("brooklyn") && (
                          <a
                            className="timeline-card-link"
                            href="#brooklyn-museum"
                          >
                            Jump to Brooklyn Museum →
                          </a>
                        )}
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* end scroll timeline */}
      </div>
    </section>
  );
}
