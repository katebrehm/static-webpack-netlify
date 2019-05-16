// @todo: refactor to use html-loader with multiple entry points / hbs
// https://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder
// require('file-loader?name=[name].[ext]!../index.html');

import TweenMax from 'gsap';
import Glide from '@glidejs/glide'
import Plyr from 'plyr'
import Verge from 'verge'

import 'intersection-observer'
import scrollama from 'scrollama';

import fullpage from 'fullpage.js'
import '../scss/app.scss';

import lodash from 'lodash';

import { glideConfig } from './config'
import { transformToCamelCase } from './utils/utils'
import { fullpageKey } from '../../fullpageKey.js'

// var partials = {};

// app data
import introDataObjAsBEM from '../../content/intro.json';
import bioDataObjAsBEM from '../../content/bio.json';
import artProjectsDataObjAsBEM from '../../content/art-projects.json';

// @todo: move this to dedicated webpack. JS files.
import paragraphFragmentsTemplate from '../templates/home/sections/intro/paragraph-fragments.hbs';
import hoverImagesCollectionTemplate from '../templates/home/sections/intro/hover-image-collection.hbs';
import headshotCollectionTemplate from '../templates/home/sections/bio/headshot-collection.hbs';
import artProjectsCollectionTemplate from '../templates/home/sections/art-projects/art-projects-images-collection.hbs';

// @todo: make submodule to import all partials/helpers
// https://stackoverflow.com/questions/32124640/how-to-import-into-properties-using-es6-module-syntax-destructing
// partials
import arrowPartial from '../templates/partials/arrow.hbs';

(function () {

    // var options = {
    //  bio: {
    //      makeSlideshow: false // if there more than 2 images, build bio timeline
    //  }
    // }

    // workaround for fullpage history bug. Add #intro only if page loads without a deep link
    // https://github.com/alvarotrigo/fullPage.js/issues/950#issuecomment-69156110
    // https://stackoverflow.com/questions/24078332/is-it-secure-to-use-window-location-href-directly-without-validation/24089350
    if ((!window.location.href.includes('#')) && (!window.location.href.includes('project'))) {
        window.location.href = window.location.href + '#intro';
    }

    // window.timelines = {};

    const mobileWidth = 650;
    const mobileHeight = 650;

    // var glideArt;
    // // var glideArt2;

    // // var $headerOne              = $('.h1__1');
    // var $headshotMaskBox        = $('.headshot__mask--box');
    // // var $headshotMaskColor      = $('.headshot__mask--color');
    // var $bioTextMask            = $('.bio__text--mask');
    // var $bioText                = $('.bio__text');
    // var $headshotImage          = $('.headshot__image');
    // var $bioNavBGMask           = $('.bio__nav-bg--mask');


    // @todo: make injectTemplates module
    // clean and prep the data object from
    // to format we need
    // content submitted via Netlify admin
    var introDataObj = transformToCamelCase(introDataObjAsBEM);
    var introDataArray = introDataObj.introFragmentList;

    var paragraphFragments = introDataArray;
    var hoverImages = introDataArray;

    $('.js--hbs-inject--intro__paragraph-fragments')
        .html(paragraphFragmentsTemplate({ paragraphFragments }));

    $('.js--hbs-inject--intro__hover-image-collection')
        .html(hoverImagesCollectionTemplate({ hoverImages }));

    ///////////////
    // var bioDataObj = transformToCamelCase(bioDataObjAsBEM);
    // var headshotImagesArray = bioDataObj.bioHeadshotImagesList;

    // // reverse due to reveal animation algorithm
    // var headshotImages = _.reverse(headshotImagesArray);
    // // options.bio.makeSlideshow = (headshotImages.length >= 1) ? true : false;

    // $(headshotCollectionTemplate({ headshotImages }))
    //     .appendTo('.js--hbs-inject--bio__headshot-collection');

    ///////////////
    var artProjectsDataObj = transformToCamelCase(artProjectsDataObjAsBEM);
    var artProjectsImagesArray = artProjectsDataObj.artProjectsList;
    var artProjectsImages = artProjectsImagesArray;

    // insert in Glide on mount.before, otherwise Glide crashes

    ///////////////
    // $('.js--hbs-inject--arrow')
    //     .html(arrowPartial);

    // $('.js--nav__item--previous').on('click', function(){
    //     fullpage_api.moveSectionUp();
    // })

    // $('.js--nav__item--next').on('click', function(){
    //     fullpage_api.moveSectionDown();
    // })

    // $('.js--button--resume-pdf').attr('href',bioDataObj.bioResumePdf);


    // $('.js--project-detail__back-button').on('click', function(){
    //     window.history.back();
    //     // console.log(document.referrer);
    // })

    var gi;

    // function makeNav(){

    // }

    // function destroyNav(){

    // }

    var fullPageOptions = {};
    // console.log('page load width', Verge.viewportW());

    // we could use fullpage's responsiveWidth option, but it doesnt have the fitToSection
    // so we calc the viewport ourselves
    if(Verge.viewportW() < mobileWidth || Verge.viewportH() < mobileHeight) {
        fullPageOptions.autoScrolling = false;
        fullPageOptions.fitToSection = false;
        console.log('going responsive');
    }

    else {
        console.log('going full featured');
        fullPageOptions.autoScrolling = true;
        fullPageOptions.fitToSection = true;
    }

    var fullPageInstance = new fullpage('#fullpage', {
        licenseKey: fullpageKey,
        anchors: ['intro', 'bio', 'art-projects', 'what-is', 'professional-work'],
        recordHistory: true,
        animateAnchor: false,
        scrollingSpeed: 600,
        slidesNavigation: true,
        scrollBar: false,
        navigation: false,
        autoScrolling: fullPageOptions.autoScrolling,
        fitToSection: fullPageOptions.fitToSection,

        // afterResize: function(width, height){
        //     var fullpageContainer = this;
        //     console.log('full page resize: width: ', width, ' height: ' , height);

        //     if(width < mobileWidth || height < mobileWidth) {
        //         console.log('going responsive');
        //         fullpage_api.setAutoScrolling(false);
        //         fullpage_api.setFitToSection(false);

        //         $('.fp-tableCell').css('height', 'auto');
        //         $('.fp-table').css('height', 'auto');
        //         $('.fp-section').css('height', 'auto');

        //         $('.js--nav__section').hide();
        //     }

        //     else {
        //         console.log('going full featured');
        //         fullpage_api.setAutoScrolling(true);
        //         fullpage_api.setFitToSection(true);
        //         fullpage_api.moveTo('intro');
        //         $('.js--nav__section').show();

        //         fullpage_api.reBuild();
        //         window.scrollTo(0, 0);
        //     }

        //     // so image-wrapper, outside of the fullpage wrapper
        //     // is on the same z-index, so the intro label fragment text hovers work
        //     if(fullpage_api.getActiveSection().anchor === 'intro'){
        //         $('#fullpage').css('transform', 'none');
        //     }
        // },

        // // when arrived to a new section
        // afterLoad: function(origin, destination, direction){
        //     var loadedSection = origin;

        //     // so image-wrapper, outside of the fullpage wrapper
        //     // is on the same z-index, so the intro label fragment text hovers work
        //     if(destination.anchor === 'intro'){
        //         $('#fullpage').css('transform', 'none');
        //     }

        //     // might be the first section, or a deep link arrival
        //     // if(origin) {
        //     //     console.log('=========');
        //     //     console.log('afterLoad');
        //     //     console.log('origin.index: ', origin.index);
        //     //     console.log('destination.index: ', destination.index);
        //     //     console.log('direction: ', direction);
        //     //     console.log('=========');
        //     // }
        // },

        // // before scroll animation begins
        // onLeave: function(origin, destination, direction){
        //     var index = origin.index;
        //     var leavingSection = $(this);

        //     // console.log('=========');
        //     // console.log('onLeave');
        //     // console.log('origin.index: ', origin.index);
        //     // console.log('destination.index: ', destination.index);
        //     // console.log('direction: ', direction);
        //     // console.log('=========');

        //     // if leaving bio
        //     if(origin.anchor === 'bio'){

        //         // if (timelines.bioTl.isActive()) {
        //         //  console.log('bioTl active');
        //         // }
        //         if (timelines.bioTl.isActive()) {
        //             timelines.bioTl.pause();
        //             // console.log('bioTl active');
        //         }
        //     }

        //     if(origin.anchor === 'art-projects'){
        //         // destroyAndCleanGlideInstance();
        //     }



        //     // entering bio
        //     if(destination.anchor === 'bio'){
        //         // console.log('entered bio section');
        //         timelines.revealHeadshot.play();
        //         timelines.bioTl.resume();

        //         // if (timelines.bioTl.isActive()) {
        //         //  console.log('bioTl active');
        //         // }
        //     }

        //     if(destination.anchor === 'art-projects'){

        //         // glideArt = initGlide(glideArt);
        //         // initGlide(); // all
        //         // initGlide(0); // all

        //         // console.log(gi);


        //     }
        // },

        afterRender: function(){

            initGlide(); // all

            if(Verge.viewportW() < mobileWidth || Verge.viewportH() < mobileHeight) {
                console.log('going responsive');
                $('.fp-tableCell').css('height', 'auto');
                $('.fp-table').css('height', 'auto');
                $('.fp-section').css('height', 'auto');

                // so image-wrapper, outside of the fullpage wrapper
                // is on the same z-index, so the intro label fragment text hovers work
                $('#fullpage').css('transform', 'none');

                $('.js--nav__section').hide();
            }

            // timelines.bioTl = makeBioTl();

            // // needs to be declared after bioTl
            // timelines.revealHeadshot = makeRevealHeadshot();

            // // for project
            var inDuration = 0.35;
            var scale = 1.025;

            // make named function so we can pass it to jquery event handler
            var showIntroProject = function(e) {
                var $otherLinks = $('.intro__text-wrapper a').not(this);
                var $project = $('.js--project--' + $(e.target).data('introFragmentKey'));
                var t = new TimelineMax ({paused:true});

                t
                    .addLabel('beginPlay')
                    .to(
                        $project,
                        inDuration,
                        {
                            autoAlpha: 1,
                            ease: Power1.easeInOut,
                            scale: scale,
                            transformOrigin:'50% 50%'
                        },
                        'beginPlay'
                    )
                    .set(['.intro__text-wrapper p span', $otherLinks], { autoAlpha: 0 }, 'beginPlay'  )
                    .set('.js--nav__section--intro', { autoAlpha: 0, ease: Elastic.easeInOut }, 'beginPlay' )
                    .play();
            };

            // // make named function so we can pass it to jquery event handler
            var hideIntroProject = function(e) {
                var t = new TimelineMax ({paused:true});
                var $project = $('.js--project--' + $(e.target).data('introFragmentKey'));

                t
                    .addLabel('beginStop')
                    .to(
                        $project,
                          0.2,
                          {
                            autoAlpha: 0,
                            ease: Power0.easeNone,
                            scale: 1
                          },
                          'beginStop'
                       )
                    .set(['.intro__text-wrapper p span', '.intro__text-wrapper a'], { autoAlpha: 1 }, 'beginStop' )
                    .play();

                TweenLite.to('.js--nav__section--intro', 0.1, { autoAlpha: 1 });
            };

            $('.js--intro-fragment-hover')
                .on('mouseenter', showIntroProject)
                .on('mouseleave', hideIntroProject);

            $( '.button--arrow-down' ).on( 'click', function() {
                // console.log( $( this ).text() );
                fullpage_api.moveSectionDown();
            });

            $( '.js--nav__section-line-active--intro' ).on( 'click', function() {
                // console.log( $( this ).text() );
                fullpage_api.moveSectionDown();
            });
        }
    });

    function initGlide(){

        gi = new Glide($('.js--glide')[0], glideConfig)

            // insert DOM here, otherwise Glide crashes for some reason
            // probably some timing thing where the DOM isnt there
            // yet before Glide initializes
            .on('mount.before', function() {

                console.log('mount.before');

                // function addProjectDetailClickHandlers(){
                //     $('.js--intro-fragment-hover')
                //         .on('mouseenter', showIntroProject)
                //         .on('mouseleave', hideIntroProject);
                // }

                // make named function so we can pass it to jquery event handler
                // var addProjectDetailClickHandler = function(e) {
                //     var $project = $('.js--project--' + $(e.target).data('introFragmentKey'));
                // };


                // $( '.js-slide__title' ).on( 'click', function() {
                //     console.log('js-slide__title');
                //     // console.log( $( this ).text() );
                //     // console.log( `
                //         // js-slide-detail-link' ${js-slide-detail-link}
                //     // `);
                // });

                // inject all slides into the carousel,
                // including thumbnail and title
                $('.js--hbs-inject--art-projects__image-collection')
                            .html(artProjectsCollectionTemplate({ artProjectsImages }));

                // now, add event handler so when person clicks the title,
                // it injects the project detail page into the page <body> and shows it as a
                // full viewport overlay.

                // $('.glide__slide').addClass('.slide__bg-block');
                // if ($('.glide__slide').length === 0) {
                //     if (which > 0) {
                //         var arr = _.filter(artProjectsImages, ['artProjectType', which]);
                //         $('.js--hbs-inject--art-projects__image-collection')
                //             .html(artProjectsCollectionTemplate({ arr }));
                //     }

                //     else {
                //         $('.js--hbs-inject--art-projects__image-collection')
                //             .html(artProjectsCollectionTemplate({ artProjectsImages }));
                //     }
                // }
            })

            .on('mount.after', function(){

                $( '.glide__slide' ).on( 'click', function() {
                    console.log('glide__track');
                });

                // document.querySelector('.glide__slide').addEventListener('click', function(e) {
                //     console.log('glide__track e');

                // })
            })
            // .on('build.after', function() {
            //     console.log('build.after');
            //     // console.log('init slide index: ', glideInstance.index );
            // })

            // .on('run.before', function(direction) {
            //     console.log('run.before');
            //     // @todo: animate these out
            //     $('.slide__position-counter').remove();
            //     TweenLite.to('.glide__slide--active', 0.25, { autoAlpha: 0.6});
            //     // console.log('leaving slide: ', glideInstance.index);
            //     // console.log('direction: ', direction);

            //     // do this here so there's no delay perception when moving slides
            //     if (direction.direction === '>') {
            //         // glideInstance.index + 1;
            //         // var el =
            //         TweenLite.to($( '.glide__slide--active' ).next(), 0.05, { autoAlpha: 1});
            //     }

            //     else if (direction.direction === '<') {
            //         // glideInstance.index - 1;
            //         TweenLite.to($( '.glide__slide--active' ).prev(), 0.05, { autoAlpha: 1});
            //     }
            // })

            // .on('run.after', function() {
            //     console.log('run.after');
            //     // console.log('glide:move.after');
            //     // console.log($('.glide__slide--active'));
            //     // console.log(glideInstance.index);
            //     var string =
            //     `
            //         <div class='slide__position-counter'>
            //             <span class='slide__position-number'>` + ( gi.index + 1 ) +  `</span>
            //             <span class='slide__position-number'> / </span>
            //             <span class='slide__position-number'>` + $('.glide__slide').length + `</span>
            //         </div>
            //     // `;
            //     $(string).appendTo('.glide__slide--active')


            // })

            .mount();

            // document.querySelector('.glide__slide').addEventListener('click', function(e) {
            //         console.log('glide__track e');

            // });


        // var tl = new TimelineMax();
        // tl
        //     .addLabel('beginPlay')

        //     .staggerTo(
        //         '.glide__slide',
        //         0.15,
        //         {
        //             autoAlpha: 0.6,
        //             // clipPath: squareClipPath,
        //             ease: Expo.easeOut,
        //             // ease: Quint.easeOut
        //             yoyo: true,
        //             y: 60,
        //             scale: 0.1
        //         },
        //         0.075,
        //         'beginPlay+=1'
        //     )

        //         .to('.slide__position-counter', 0.1, { autoAlpha: 1});

        // return glideInstance;
    };

    // function makeRevealHeadshot(){
    //     var tl = new TimelineMax ({ paused: true });
    //     tl
    //         .addLabel('begin')
    //         .set($bioTextMask, { width: 500})

    //         // .to('.nav', 0.5, { className: '+=nav--on-light' }, 'begin+=0.01')
    //         .to(
    //             [ $headshotMaskBox ],
    //             0.7,
    //             {
    //                 scaleX: 0,
    //                 ease: Power4.easeIn
    //             },
    //             'begin+=0.15'
    //         )

    //         .to(
    //             [ $headshotImage ] ,
    //             0.5,
    //             {
    //                 autoAlpha: 1,
    //                 ease: Power4.easeIn
    //             },
    //             'begin+=0.075'
    //         )

    //         .addLabel('beginText')
    //         .to(
    //             [ $bioTextMask ],
    //             0.6,
    //             {
    //                 scaleX: 0,
    //                 // autoAlpha: 0,
    //                 ease: Power4.easeInOut
    //             },
    //             'begin+=0.075'
    //         )

    //         .to(
    //             [ $bioText ],
    //             1.5,
    //             {
    //                 autoAlpha: 1,
    //                 ease: Power4.easeInOut
    //             },
    //             'begin+=0.1'
    //         )

    //         .to(
    //             [ $bioNavBGMask ],
    //             0.8,
    //             {
    //                 scaleX: 0,
    //                 ease: Power4.easeInOut
    //             },
    //             'begin+=0.175'
    //         )

    //         .to(
    //             [ '.bio__tab-border' ],
    //             0.3,
    //             {
    //                 scaleY: 1,
    //                 ease: Expo.easeIn
    //                 // width: 3
    //             },
    //             'begin+=0.7'
    //         )

    //         // if there are 0 or 1 headshots, the tl will just display for the headshot
    //         // otherwise, construct and start the slideshow
    //         .add(timelines.bioTl.play(), 'begin+=0.5')

    //         .to(
    //             [ '.button--resume-pdf' ],
    //             0.75,
    //             {
    //                 scaleY: 1,
    //                 ease: Elastic.easeOut.config(1, 0.3),
    //                 height: '11.5rem'
    //                 // width: 3
    //             },
    //             'begin+=1'
    //         )
    //         // .to(
    //         //  [ $headshotMaskColor ],
    //         //  2,
    //         //  {
    //         //      autoAlpha: 0,
    //         //      ease: Power4.easeOut
    //         //  },
    //         //  'beginText-=0.1'
    //         // )

    //         // .timeScale( .2 )

    //         // console.log('bio tl: ', tl);
    //     return tl;
    // };

    // function makeBioTl(){
    //     var $bioImages = $('.headshot__image');
    //     var numHeadshotsImages = $bioImages.length;
    //     var fadeDuration = 2.8;
    //     var showSlideFor = 3.5;

    //     if (numHeadshotsImages > 1)  {
    //         var tl = new TimelineMax({
    //             onComplete: onComplete,
    //             paused: true,
    //             repeat: -1,
    //             smoothChildTiming: true
    //         });

    //         var $reversed = _.reverse($bioImages);
    //         var $f = _.first($bioImages);
    //         var $l = _.last($bioImages)

    //         $reversed.each(function(index, element) {

    //             /*

    //                 slideshow depends on source order as:
    //                     <img D>
    //                     <img C>
    //                     <img B>
    //                     <img A>

    //                 ------------------------

    //                 Transition each image's opacity from 1 to 0,
    //                 revealing what's under it visually (the image that's earlier in the source)

    //                 On the last image of the stack, fade it with the first image,
    //                 and set a callback to reset to the beginning state for looping

    //                     s                                         e
    //                     t                                         n
    //                     a                                         d
    //                     r
    //                     t

    //                     D: 1      D: 1      D: 1       D: 1   ->  D: 0
    //                     C: 1      C: 1      C: 1   ->  C: 0       C: 0
    //                     B: 1      B: 1  ->  B: 0       B: 0       B: 0
    //                     A: 1  ->  A: 0      A: 0       A: 0   ->  A: 1
    //                     ----      ----      ----       ----       ----
    //                     .to()    .to()      .to()      .to()     .to() with onComplete(e)

    //                     onComplete(e){
    //                         // rest opacity of everything but A
    //                         D: 1,
    //                         C: 1,
    //                         B, 1
    //                     };
    //             */

    //             // image A
    //              if (index === $bioImages.length - 1) {
    //                 tl.addLabel('swapFirstAndLast', '+=' + showSlideFor);
    //                 tl.to( $f, fadeDuration, { autoAlpha: 1, ease: Power1.EaseIn }, 'swapFirstAndLast' );
    //                 tl.to( $l, fadeDuration, { autoAlpha: 0, ease: Power1.EaseIn }, 'swapFirstAndLast' );
    //              }

    //             // everything but A
    //              else {
    //                 tl.to( element, fadeDuration, { autoAlpha: 0, ease: Power1.EaseIn }, '+=' + showSlideFor)
    //              }
    //         });

    //         function onComplete() {
    //             /*
    //                 At this point, the last image in the DOM source order is showing
    //                 (which is the first image the admin wants to see in the slideshow)
    //                 begin the scenesm reset the opacity to the start state
    //             */
    //             TweenLite.set(_.initial($bioImages), { autoAlpha: 1 });
    //         }
    //      }

    //      else {
    //         var tl = new TimelineMax({ paused: true });
    //         tl.to($bioImages, 1, { autoAlpha: 1});
    //      }

    //     return tl;
    // };

    // function destroyAndCleanGlideInstance(){
    //     // glideI.disable();
    //     // glideI.destroy();
    //     gi.destroy();

    //     // $('.glide__slide').removeAttr('style');
    //     $('.glide__slide').remove();

    //     // glideI.update(projectCarouselOptions);
    //     // glideI.enable();

    //     $('.glide__slides').removeAttr('style');
    //     $('.js--glide').removeClass('glide--swipeable');
    //     $('.slide__position-counter').remove();

    //     gi = null;
    //     // event.data.gInstance = null;
    //     // console.log(glideI);
    //     // console.log(glideArt2);

    //     $('.js--projects__menu-tag--productions').unbind('click');
    //     $('.js--projects__menu-tag--events').unbind('click');
    //     $('.js--projects__menu-tag--all').unbind('click');
    // }

    // function toggleProjects(event) {

    //     // glideArt2 = initGlide(glideArt2);
    //     destroyAndCleanGlideInstance();
    //     initGlide(event.data.which);

    //     // var tl = new TimelineMax();
    //     // false
    //     //  .addLabel('beginPlay')

    //     //  .staggerTo(
    //     //      '.glide__slide',
    //     //      0.15,
    //     //      {
    //     //          autoAlpha: 0.6,
    //     //          // clipPath: squareClipPath,
    //     //          ease: Expo.easeOut
    //     //          // ease: Quint.easeOut
    //     //      },
    //     //      0.075,
    //     //      'beginPlay+=1'
    //     //  )

    //     //          // var b = new Glide($('.js--glide')[0], projectCarouselOptions)
    //     //          // initGlide(glideArt2);
    // };

}());


