<section class="disable-dbl-tap-zoom">
  <svg on:click>
    <polygon
      class="arrow-top"
      points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
    />
    <polygon
      class="arrow-middle"
      points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
    />
    <polygon
      class="arrow-bottom"
      points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
    />
  </svg>
</section>

<style>
  section {
    color: #000;
    margin: 0;
    font-family: "Lucida Console", Monaco, monospace;
  }

  /* Arrow & Hover Animation */
  svg {
    width: 75px;
    height: 65px;
    margin: 0 auto;
  }
  svg:hover polygon.arrow-bottom {
    transform: translateY(-18px);
  }
  svg:hover polygon.arrow-top {
    transform: translateY(18px);
  }
  polygon {
    fill: rgb(150, 150, 150);
    transition: all 0.2s ease-out;
  }
  polygon.arrow-middle {
    opacity: 0.75;
  }
  polygon.arrow-top {
    opacity: 0.5;
  }
</style>
