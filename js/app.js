let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

//set animation
timeline
    .to('#rock', 3, {y: -600})
    .to('#girl', 3, {y: -400}, '-=3')
    .fromTo('#bg1', {y: -50}, {y: 0, duration: 3}, '-=3')
    .to('#content', 3, {top: '0%'}, '-=3')
    .fromTo('#content-images', {opacity: 0}, {opacity: 1, duration: 3})
    .fromTo('#text', {opacity: 0}, {opacity: 1, duration:3})

//config scroll and show animation
let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '300%',
    triggerHook: 0
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)