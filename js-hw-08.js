import images from "./gallery-items.js";

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  overlay: document.querySelector('.lightbox__overlay'),
  imageLightbox: document.querySelector('.lightbox__image')
};

const createImage = (item, parent) => {
    const { preview, original, description } = item;
    const img = document.createElement('img');
    
    img.classList.add('gallery__image');
    img.dataset.source = original;
    img.src = preview;
    img.alt = description;
    
    parent.appendChild(img);
};
  
  
  const createLink = (item, parent) => {
    const { original } = item;
    const a = document.createElement('a');
    
    a.classList.add('gallery__link');
    a.href = original;
    
    createImage(item, a);
        
    parent.appendChild(a);
  };
  
  const createItem = (item) => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    
    createLink(item, li);
    
    return li;
  };
  
  const renderListItems = (arr) => {
    const items = arr.map((item) => createItem(item));
    
    refs.galleryList.append(...items);
  };
  renderListItems(images);
  
  
  function onClickHandler(e) {
    e.preventDefault();
    refs.lightbox.classList.add('is-open');
    refs.imageLightbox.src = e.target.dataset.source;
    refs.imageLightbox.alt = e.target.alt;
    refs.imageLightbox.dataset.index = e.target.dataset.index;
    
  };
  
  function onCloseHandler() {
    refs.lightbox.classList.remove('is-open');
    refs.imageLightbox.src = "";
    refs.imageLightbox.alt = "";
    
  };

  refs.galleryList.addEventListener('click', onClickHandler);
  refs.btn.addEventListener('click', onCloseHandler);
  refs.overlay.addEventListener('click', onCloseHandler);
  
  window.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
      onCloseHandler()
    }
    if(event.key === "ArrowLeft") {
      arrowLeft()
    }
    if(event.key === "ArrowRight") {
      arrowRight()
    }
  });

  function setLightboxImageAttribute(step, index) {
    refs.imageLightbox.dataset.index = `${index + step}`;
    refs.imageLightbox.src = images[index + step].original;
    
  };
  
  function arrowLeft() {
    let index = Number(refs.imageLightbox.dataset.index);
    if(index === 0) {
      setLightboxImageAttribute(0, images.length - 1);
      return;
    }
    // console.log(index);
    setLightboxImageAttribute(-1, index);
  };

  function arrowRight() {
    let index = Number(refs.imageLightbox.dataset.index);
    if(index === images.length - 1) {
      setLightboxImageAttribute(0, 0);
      return;
    }
    // console.log(index);
    setLightboxImageAttribute(1, index);
  }

  
  


  

  

  