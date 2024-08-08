// Header component.
  class Header extends HTMLElement {
      constructor() {
        super();
      }
    
      connectedCallback() {
        this.innerHTML = `
      <h1>CodeCrafters - $</h1>
      <header>
          <nav id="navigation">
                  <a href="index.html">início</a>
                  <a href="posts.html">postagens</a>
                  <a href="projects.html">projetos</a>
                  <a href="about.html">sobre</a>
          </nav>
      </header>
        `;
      }
    }
    customElements.define('header-component', Header);


// Footer component.
    class Footer extends HTMLElement {
      constructor() {
        super();
      }
    
      connectedCallback() {
        this.innerHTML = `
      <footer>
          <p>2024 - Adrian Victor & Veronica Balke, todos os direitos reservados.</p>
      </footer>
        `;
      }
    }
    customElements.define('footer-component', Footer);


  // Header links highlighting logic.
  document.addEventListener("DOMContentLoaded", function() {
    // Get all the links within the specified div
    var links = document.getElementById('navigation').getElementsByTagName('a');

    // Loop through each link
    for (var i = 0; i < links.length; i++) {
        // Check if the link href matches the current page URL
        if (links[i].href == window.location.href) {
            // Make the link bigger
            links[i].setAttribute('id', 'currentPageLink');
        }
    }
});

// TODO page transitions.
