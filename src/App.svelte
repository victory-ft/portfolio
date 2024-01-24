<script lang="ts">
  import Header from "./components/Header.svelte";
  import Home from "./sections/Home.svelte";
  import About from "./sections/About.svelte";
  import Footer from "./components/Footer.svelte";
  import Contact from "./sections/Contact.svelte";
  import Projects from "./sections/Projects.svelte";
  import { theme, section } from "./stores/Settings";
</script>

<div class={`container ${$theme === "dark" ? "dark" : ""}`}>
  <Header />
  <Home />
  <About />
  <Projects />
  <Contact />
  <Footer />
</div>
