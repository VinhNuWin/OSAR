import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedTitle() {
  const text = 'OSAR' // This would normally be passed into this component as a prop!
  const navigate = useNavigate();
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.65, 0.9, 0.3, 0.9],
      },
    },
  };
  
  return (
    <div className="grid place-content-center h-96">
    <Title aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: .5,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </Title>
      <motion.button
      whileHover={{
        scale: 1,
        // textShadow: "0px 0px 8px rgb(0,0,0)",
        boxShadow: "0px 0px 8px rgb(0,0,0)"
      }}
      onClick={() => {
        navigate("/registry");
      }}
      >
        Begin Registry
      </motion.button>
    </div>
  );
}