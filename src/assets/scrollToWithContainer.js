import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export const scrollToWithContainer = () => {

    let goToContainer = new Promise((resolve, reject) => {

        Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
        });

        scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'create-scroll'
        }));
}