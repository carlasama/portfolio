<script>
export default {
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <h2
      class="
        font-general-semibold
        text-3xl
        md:text-3xl
        xl:text-4xl
        text-center
        sm:text-left
        text-ternary-dark
        dark:text-primary-light
        uppercase
      "
    >
      Skills
    </h2>
    <div class="skills">
      <h2
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Front-end
      </h2>
      <ul
        class="
          font-general-semibold
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        <li><span class="html5"></span><em>HTML</em></li>
        <li><span class="css3 / sass"></span><em>CSS/Sass</em></li>
        <li><span class="js"></span><em>JavaScript</em></li>
        <li><span class="vuejs"></span><em>Vue.js</em></li>
        <li><span class="angular"></span><em>Angular</em></li>
        <li><span class="typescript"></span><em>TypeScript</em></li>
        <li><span class="bootstrap"></span><em>Bootstrap</em></li>
        <li><span class="tailwind"></span><em>Tailwind CSS</em></li>
        <li><span class="angularmaterial"></span><em>Angular Material</em></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 25px;
}

.skills {
  width: inherit;
  position: relative;
  float: left;
  padding: 30px 0;
}
ul {
  padding-top: 30px;
}
li {
  margin-bottom: 50px;
  background: #dedede;
  height: 6px;
}
em {
  font-size: 18px;
  font-style: inherit;
  position: relative;
  top: -30px;
}
span {
  height: inherit;
  background-color: #94c245;
  background: linear-gradient(90deg, #d7487e, #c76890);
  position: absolute;
}

.html5 {
  width: 90%;
  animation: html5 2s ease-out;
}
.css3 {
  width: 80%;
  animation: css3 2s ease-out;
}
.js {
  width: 70%;
  animation: js 2s ease-out;
}
.vuejs {
  width: 60%;
  animation: jquery 2s ease-out;
}
.angular {
  width: 50%;
  animation: wordpress 2s ease-out;
}
.typescript {
  width: 50%;
  animation: magento 2s ease-out;
}
.tailwind {
  width: 90%;
  animation: photoshop 2s ease-out;
}
.angularmaterial {
  width: 80%;
  animation: illustrator 2s ease-out;
}

.bootstrap {
  width: 80%;
  animation: illustrator 2s ease-out;
}

@keyframes html5 {
  0% {
    width: 0px;
  }
  100% {
    width: 90%;
  }
}
@keyframes css3 {
  0% {
    width: 0px;
  }
  100% {
    width: 80%;
  }
}
@keyframes js {
  0% {
    width: 0px;
  }
  100% {
    width: 50%;
  }
}
@keyframes jquery {
  0% {
    width: 0px;
  }
  100% {
    width: 60%;
  }
}
@keyframes wordpress {
  0% {
    width: 0px;
  }
  100% {
    width: 50%;
  }
}
@keyframes magento {
  0% {
    width: 0px;
  }
  100% {
    width: 60%;
  }
}
@keyframes photoshop {
  0% {
    width: 0px;
  }
  100% {
    width: 90%;
  }
}
@keyframes illustrator {
  0% {
    width: 0px;
  }
  100% {
    width: 80%;
  }
}
</style>
