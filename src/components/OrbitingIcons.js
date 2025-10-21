import React, { useRef, useEffect, useState } from "react";
import Image from "gatsby-image";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiStripe, SiContentful } from "react-icons/si";
import styles from "../styles/OrbitingIcons.module.css";

const icons = [
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <FaGithub color="#181717" />, name: "GitHub" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "TailwindCSS" },
  { icon: <SiStripe color="#635BFF" />, name: "Stripe" },
  { icon: <SiContentful color="#2478CC" />, name: "Contentful" },
];

const OrbitingIcons = ({
  imageData,
  offset = 40,
  duration = 12,
  imageClassName = "rounded-full lg:w-80 md:w-40 lg:h-80 md:h-40",
}) => {
  const imageRef = useRef(null);
  const [orbitDistance, setOrbitDistance] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      if (imageRef.current) {
        const width = imageRef.current.offsetWidth;
        setOrbitDistance(width / 2 + offset);
      }
    };
    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, [offset]);

  return (
    <div className="hidden relative md:flex items-center justify-center w-full max-w-[700px] aspect-square mx-auto">
      {/* Main Image */}
      <div
        ref={imageRef}
        className={`z-10 overflow-hidden shadow-xl ${imageClassName}`}
      >
        <Image
          fluid={imageData}
          alt="Profile"
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      {/* Orbiting Icons */}
      {orbitDistance > 0 &&
        icons.map(({ icon, name }, i) => {
          const angle = (i / icons.length) * 360;
          return (
            <div
              key={name}
              className={styles.orbitWrapper}
              style={{
                "--orbit-distance": `${orbitDistance}px`,
                "--orbit-duration": `${duration}s`,
                "--start-angle": `${angle}deg`,
              }}
            >
              <div className={styles.orbitIcon}>
                <div className={`${styles.iconInner} ${styles.iconSpin}`}>
                  {icon}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrbitingIcons;
