import { Component } from '@theme/component';

/**
 * A custom element that renders the product media gallery.
 *
 * This component is responsible for initializing and managing
 * the Swiper instance used to display product media in both
 * mobile and desktop layouts.
 *
 * @typedef {object} Refs
 * @property {HTMLElement} productGallerySwiper - The root Swiper container element.
 *
 * @extends {Component<Refs>}
 */
class ProductGallery extends Component {
  requiredRefs = ['productGallerySwiper'];

  connectedCallback() {
    super.connectedCallback();

    if (!window.Swiper) return;

    this.swiper = new Swiper(this.refs.productGallerySwiper, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 300,
      pagination: {
        el: this.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: this.querySelector('.swiper-button-next'),
        prevEl: this.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        // Mobile variant
        0: {
          direction: 'horizontal',
          autoHeight: true,
          spaceBetween: 7
        },
        // Desktop variant
        750: {
          direction: 'vertical',
          autoHeight: false,
        }
      },
      on: {
        breakpoint: (swiper) => {
          swiper.updateSize();
          swiper.updateSlides();
          swiper.update();
        }
      }
    });
  }
}

if (!customElements.get('product-gallery')) {
  customElements.define('product-gallery', ProductGallery);
}
