export default async function decorate(block) {
  const heroCustomContent = document.createElement('div');
  heroCustomContent.classList.add('hero-custom-content');
  const rows = [...block.children];
  rows.forEach((row) => {
    [...row.children].forEach((col, c) => {
      if (c === 0) {
        // create image content
        const pictureMarkup = col.querySelector('picture');
        const imageContainer = document.createElement('div');
        imageContainer.classList = 'hero-image-content';
        imageContainer.append(pictureMarkup);
        heroCustomContent.append(imageContainer);
      } else {
        // create text content
        const title = col.querySelector('h1');
        const subtitle = col.querySelector('p');
        const cta1 = col.querySelector('p:nth-of-type(2) a');
        const cta2 = col.querySelector('p:nth-of-type(3) a');
        const rightSideContent = `
          <div class="hero-text-content">
              <h1 class="hero-custom-title">${title.innerHTML}</h1>
              <p class="sale-subtitle">${subtitle.innerHTML}</p>
              <div class="cta-container">
                  <a class="hero-custom-link btn-primary" href="${cta1.href}">${cta1.textContent}</a>
                  <a class="hero-custom-link btn-secondary" href="${cta2.href}">${cta2.textContent}</a>
              </div>
          </div>`;
        heroCustomContent.innerHTML += rightSideContent;
      }
    });
  });

  block.textContent = '';
  block.append(heroCustomContent);
}
