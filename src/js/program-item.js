function createProgramItem({ date, title, channel }) {
  return `<li class="program__item">
        <span class="program__info program__info--date">${date}</span>
        <span class="program__info program__info--name"
          >${title}</span
        >
        <span class="program__info program__info--channel">${channel}</span>
      </li>`;
}

const data = [
  {
    date: '09:25',
    title: 'т/с “Мене звуть Міша”',
    channel: 'Інтер',
  },
  {
    date: '09:25',
    title: 'х/ф “Безславные убл...',
    channel: '1+1',
  },
  {
    date: '09:25',
    title: 'Фінал Ліги Чемпіо...',
    channel: 'Інтер',
  },
  {
    date: '09:25',
    title: 'т/с “Мене звуть Міша”',
    channel: 'ICTV',
  },
  {
    date: '09:25',
    title: 'Шоу “Голос Діти”',
    channel: 'Інтер',
  },
];

const program = document.querySelector('.program__list');

function createMarkup() {
  const markup = data.map(program => createProgramItem(program)).join('');
  program.insertAdjacentHTML('beforeend', markup);
}

createMarkup();
