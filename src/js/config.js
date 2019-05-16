export const glideConfig = {
    // bpoints should match _mq.scss
    // 1280 +

    // has a snapping issue, where some slides snap after being swiped
    // type: 'carousel',

    // use this instead
    // https://codepen.io/lifeinchords/pen/joBwWP
    type: 'slider',
    rewind: false,

    startAt: 0,
    perView: 3,
    perTouch: 3,
    swipeThreshold: 1,
    dragThreshold: 25,

    // mouse clicks on slides dont register while animating
    // keep this
    animationDuration: 200,

    // either
    // bound: true,

    // or
    focusAt: 'center',
    // peek: { before: 100, after: 100 },
    gap: 8,
    perTouch: 2,
    breakpoints: {

        // 1031 to 1200
        1200: {
            perTouch: 3,
            perView: 3,
            // peek: { before: 32, after: 32 },
            dragThreshold: 25,
            swipeThreshold: 1
        },

        // 861 to 1030
        1030: {
            perView: 2,
            perTouch: 3,
            // peek: { before: 50, after: 50 },
            dragThreshold: 25,
            swipeThreshold: 1
        },

        // 651 to 860
        860: {
            perView: 1,
            perTouch: 1,
            // peek: { before: 50, after: 50 },
            dragThreshold: 25,
            swipeThreshold: 1
        },

        // up to 650
        650: {
            focusAt: 0,
            perView: 1,
            perTouch: 1,
            gap: 0,
            peek: 0,
            dragThreshold: 25,
            swipeThreshold: 1
        }
    }
};

