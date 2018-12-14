import '@babel/polyfill';
import '../public/img/html5-logo.svg';
import '../public/img/star.svg';
import '../public/style.css';
import { TweenMax, TimelineLite, Bounce, Back } from 'gsap/TweenMax';

//TweenMax.from('.logo', 1, {
//  scale: .5
//});

const timeline = new TimelineMax();
timeline.from('.logo', .5, {
  scale: 0,
  ease: Bounce.easeOut
});
timeline.from('.background', .5, {
  scale: 0
});
timeline.from('h1', .7, {
  opacity: 0,
  scale: 2,
  ease: Back.easeOut.config(4)
});
