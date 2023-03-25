import moment from 'moment';

export default function createNewsListCard({
  commentsCount,
  content,
  createdAt,
  imageUrl,
  title,
}) {
  moment.locale('uk');
  const date = moment(createdAt).format('h:mm - DD MMMM YYYY');

  return `
      <li class="gallery__item">
      <div class="gallery__img-wrap">
        <img class="gallery__img" src="${imageUrl}" />
      </div>
      <div class="gallery__info">
        <div class="gallery__date">
          <span class="gallery__time">${date}</span>
          <div class="gallery__message">
            <svg class="gallery__icon">
              <use href="${'../img/sprite.svg#icon-message'}"></use>
            </svg>
            <span class="gallery__message-count">${commentsCount}</span>
          </div>
        </div>

        <h2 class="gallery__title">${title}</h2>
        <span class="gallery__text">${content}</span>
      </div>
    </li>`;
}
