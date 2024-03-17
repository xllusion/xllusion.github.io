// CTA Button
const ctaBtn = document.querySelector('.cta-button');
ctaBtn.addEventListener('click', () => {
  window.open('https://www.google.com', '_blank');
});

// Timeline animation
let scene1 = () => {
  let tl = gsap.timeline();
  tl.from('#logo-black', { duration: 1, delay: 0.5, opacity: 0, scale: 0.5, ease: 'back.out' })
    .from('#large-red-diag', { duration: 0.6, yPercent: 100, ease: 'expo.out' }, '-=0.3')
    .from('#small-white-diag', { duration: 0.6, yPercent: 100, ease: 'expo.out' }, '-=0.3')
    .from('#product', { duration: 0.8, opacity: 0, x: 25, ease: 'expo.out' }, '>')
    .from('#title', { duration: 0.8, opacity: 0, y: 10, ease: 'expo.out' }, '-=0.4');
  return tl;
};

let scene2 = () => {
  let tl = gsap.timeline();
  tl.from('#background2', { duration: 0.6, xPercent: -100, ease: 'expo.out' })
    .from('#text-max', { duration: 0.6, opacity: 0, scale: 1.5, ease: 'power1.out' })
    .set('#text-max', { opacity: 0 }, '+=0.4')
    .from('#text-your', { duration: 0.6, opacity: 0, scale: 1.5, ease: 'power1.out' })
    .set('#text-your', { opacity: 0 }, '+=0.4')
    .from('#text-power', { duration: 0.6, opacity: 0, scale: 1.5, ease: 'power1.out' })
    .set('#text-power', { opacity: 0 }, '+=2')
    .set('#background2', { opacity: 0 }, '<');
  return tl;
};

let scene3 = () => {
  let tl = gsap.timeline();
  tl.from('#background3', { duration: 0.6, opacity: 0, scale: 1.2, ease: 'expo.out' })
    .from('#logo', { duration: 1, opacity: 0, scale: 0.5, ease: 'back.out' })
    .from('#cta', { duration: 1, opacity: 0, y: -20, ease: 'expo.out' });
  return tl;
};

let mainTl = gsap
  .timeline({ repeat: 2, repeatDelay: 2 })
  .add(scene1())
  .add(scene2(), '+=1')
  .add(scene3(), '-=1');
