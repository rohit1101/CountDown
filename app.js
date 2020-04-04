const counter = document.querySelector('.dis');
const d = document.querySelector('.d');
const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');
const spin = document.querySelector('.spin');

function handleCount() {
  const start = new Date();
  const y = document.querySelector('.year');
  const month = document.querySelector('.month');
  const date = document.querySelector('.date');
  console.log(y.value, month.value, date.value);
  const end = new Date(
    `${month.value ? `${month.value}` : 'January'} ${
      date.value ? `${date.value}` : '1'
    }, ${y.value ? `${y.value}` : '2021'} 00:00:00`
  );
  const diffMs = end - start;
  let hr = Math.floor(diffMs / 1000 / 60 / 60) % 24;
  let min = Math.floor(diffMs / 1000 / 60) % 60;
  let sec = Math.floor(diffMs / 1000) % 60;
  let days = Math.floor(diffMs / 1000 / 60 / 60 / 24);
  d.innerHTML = `${days}`;
  h.innerHTML = `${hr <= 9 ? `0${hr}` : `${hr}`}`;
  m.innerHTML = `${min <= 9 ? `0${min}` : `${min}`}`;
  s.innerHTML = `${sec <= 9 ? `0${sec}` : `${sec}`}`;
}

document.body.appendChild(counter);

setTimeout(() => {
  counter.style.display = 'flex';
}, 1000);

setInterval(handleCount, 1000);
