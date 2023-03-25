const data = {
  ua: {
    new: 'новини',
    sport: 'спорт',
    finance: 'фінаси',
    btn: 'Більше новин',
    text: 'Костантин Заруцький —  справжнє ім’я популярного автоблогера, який публікується в мережі під ніком AcademeG. Його відео про перетворення старих авто дивляться міліони підписників. Сам він називає свою роботу автокритикою',
  },
  ru: {
    new: 'новости',
    sport: 'спорт',
    finance: 'финансы',
    btn: 'Больше новостей',
    text: 'Костянтин Заруцкий — настоящее имя популярного автоблогера, который публикуется в сети под ником AcademeG. Его видео о превращении подержанных авто смотрят миллионы подписчиков. Сам он называет свою работу автокритикой',
  },
};

const langEl = document.querySelector('.language');
const link = document.querySelectorAll('.language__btn');
const btnEl = document.querySelector('[data-load-news]');
const newEl = document.querySelector('[data-link-news]');
const sportEl = document.querySelector('[data-link-sport]');
const financeEl = document.querySelector('[data-link-finance]');
const textEl = document.querySelector('.hero__text');

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('lang');
    newEl.textContent = data[attr].new;
    sportEl.textContent = data[attr].sport;
    financeEl.textContent = data[attr].finance;
    textEl.textContent = data[attr].text;
    btnEl.textContent = data[attr].btn;
  });
});
