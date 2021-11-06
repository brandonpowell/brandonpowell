const player = document.querySelector('.player');
const video = player.querySelector('.player-video');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.filled-progress');
const toggle = player.querySelector('.toggle-play');
const skippers = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

function togglePlay() {
  const playState = video.paused ? 'play' : 'paused';
    video[playState]();
 }

function updateButton() {
  const togglePlayBtn = document.querySelector('.toggle-play');


  if(this.pause) {
    togglePlayBtn.innerHTML + `<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>play</title><path d="M3 2l10 6-10 6z"></path></svg>`;
  } else {
    togglePauseBtn.innerHTML + `<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>pause</title><path d="M3 2l10 6-10 6z"></path></svg>`
  }
  console.log(document.body.innerHTML)
}

function skip() {
    video.currentTime += parseInt(this.dataset.skip);
}

function rangeUpdate() {
  video[this.name] = this.value;
}

function progressUpdate() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdated', progressUpdate);

toggle.addEventListener('click', togglePlay);
skippers.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', rangeUpdate));
range.forEach(range => range.addEventListener('mousemove', rangeUpdate));

let mousemove = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
