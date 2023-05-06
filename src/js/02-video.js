import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTimeKey = 'videoplayer-current-time';

player.on(
  'timeupdate',
    throttle(({ seconds }) => 
        localStorage.setItem(currentTimeKey, seconds), 1000)
); 

const time = localStorage.getItem(currentTimeKey);

player.setCurrentTime(time)
