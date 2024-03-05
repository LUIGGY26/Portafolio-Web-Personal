Script.js

const links = document.querySelectorAll('.sidebar ul li a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = e.target.textContent.replace(/\s+/g, '-').toLowerCase();
    loadContent(section);
  });
});

function loadContent(section) {
  fetch(`${section}.html`)
    .then(response => response.text())
    .then(html => {
      document.querySelector('.content').innerHTML = html;
    })
    .catch(error => console.error('Error loading content: ', error));
}
