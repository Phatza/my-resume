<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="particlesOptions2"
  />
</template>

<script setup>
import { loadFull } from "tsparticles";
import bgImg from "~/assets/images/background.jpg";

const particlesOptions1 = {
  fullScreen: {
    zIndex: -1,
  },
  particles: {
    color: {
      value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
    },
    move: {
      direction: "top",
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 5,
    },
    number: {
      value: 100,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.4,
      },
      value: {
        min: 0.4,
        max: 0.8,
      },
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 30,
      },
      value: {
        min: 30,
        max: 100,
      },
      animation: {
        enable: true,
        speed: 100,
        minimumValue: 30,
      },
    },
  },
};
const particlesOptions2 = {
  background: {
    image: "url("+ bgImg +")",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  backgroundMask: {
    cover: {
      color: {
        value: {
          r: 250,
          g: 250,
          b: 250,
        },
      },
    },
    enable: true,
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 100,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      enable: true,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 30,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
};
const particlesInit = async (engine) => {
  await loadFull(engine);
};
</script>
