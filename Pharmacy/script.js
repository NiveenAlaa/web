const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1; 
        observer.unobserve(entry.target); 
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 
  });
  
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    observer.observe(image);
  });
  
  