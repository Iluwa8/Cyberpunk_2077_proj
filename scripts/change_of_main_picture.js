const imgLinks = [
  '/Users/ilasokolov/Documents/Yandex_practicum_for_git/Cyberpunk_2077_proj/images/header_images/Vi_picture.jpg',
  '/Users/ilasokolov/Documents/Yandex_practicum_for_git/Cyberpunk_2077_proj/images/header_images/Vi_on_bike.jpg',
  '/Users/ilasokolov/Documents/Yandex_practicum_for_git/Cyberpunk_2077_proj/images/header_images/Vi_with_car.jpg'
];

let imgContainer = document.getElementById('header__image-container');

//Кешируем картинки, чтобы не было мерцаний при первом использовании.
const images = imgLinks.map(url => {
  const img = new Image()
  img.src = url
  return img
});

// с какого индекса начинаем перебор, index 0 уже установлен в CSS
let index = 1;

setInterval(()=>{
  imgContainer.style.backgroundImage = `url(${images[index].src})`
  index = index >= images.length-1 ? 0 : index + 1
}, 5000);