import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import { restaurants } from '../data/DATA.json';

const renderRestaurants = restaurants => {
    restaurantWrapperElement.innerHTML = restaurants
        .map(restaurant => restaurantDOM(restaurant))
        .reduce((sum, restaurant) => sum + restaurant);
}

const burgerElement = document.querySelector('.burger');
const navElement = document.querySelector('header nav');
burgerElement.addEventListener('click', () => navElement.classList.add('active'));
navElement.addEventListener('click', function(e) {
    if (e.target !== this)
        return;
    navElement.classList.remove('active')
})

const restaurantWrapperElement = document.querySelector('.restaurants__wrapper');
const restaurantDOM = restaurant => (`
    <a href="#" class="resto__items">
      <div class="resto__image">
        <img src="${restaurant.pictureId}" alt="Photo of ${restaurant.name}">
      </div>
      <div class="resto__info">
        <div class="name__rating">
            <h3>${restaurant.name}</h3>
            <span class="resto__rating">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e3e327">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  ${restaurant.rating}
              </span>
        </div>
          <p>${restaurant.description}</p>
          <span class="resto__location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3d3d3d">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              ${restaurant.city}
          </span>
      </div>
    </a>
  `);

renderRestaurants(restaurants);