const state = () => ({
    width: 0,
    height: 0,
    scrollTop: 0,
    mouseX: 0,
    mouseY: 0,
    scrolled: false,
    scrollStart: false,
    menuOpen: false,
    showToggle: false,
    animationDelay:1,
    introLoader: true,
    pageTransition: false,
    isPageReady:false,
    isWebkit: false,
    isSafari: false,
    isFirefox: false,
});

export default state;