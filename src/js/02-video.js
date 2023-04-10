import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALKEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCALKEY)
  ? localStorage.getItem(LOCALKEY)
  : null;

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LOCALKEY, data.seconds);
  }, 1000)
);

player.setCurrentTime(currentTime);
