document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const page = this.getAttribute('href').substring(1) + '.html';
      window.location.href = page;
  });
});

