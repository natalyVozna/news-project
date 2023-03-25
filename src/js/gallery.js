import ApiServise from './api-servise.js';
import createNewsListCard from './news-list-card.js';
import LoadBtn from './load-btn.js';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-load-news]'),
};
const apiServise = new ApiServise();
const loadMoreBtn = new LoadBtn({
  selector: '[data-load-news]',
  hidden: false,
});

loadMoreBtn.refs.button.addEventListener('click', loadMoreArticles);

function loadMoreArticles() {
  loadMoreBtn.disable();
  apiServise.fetchArticles().then(news => {
    if (news.length === 0) {
      loadMoreBtn.hide();
    } else {
      const markup = news.map(article => createNewsListCard(article)).join('');
      refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
      loadMoreBtn.show();
      loadMoreBtn.enable();
      const cardHeight = document
        .querySelector('.gallery')
        .firstElementChild?.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 5,
        behavior: 'smooth',
      });
    }
  });
}
