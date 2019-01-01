// @todo: refactor to use html-loader with multiple entry points / hbs
// https://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder
// require('file-loader?name=[name].[ext]!../index.html');

import TweenMax from "greensock";
import verge from "verge";
import Glide from '@glidejs/glide'

// import 'intersection-observer'
// import scrollama from 'scrollama';

import fullpage from "fullpage.js"
import '../scss/index.scss';


(function () {


// testing jquery
// console.log($('.mast__wrapper')[0]);

new fullpage("#fullpage", {
        licenseKey: '',
        // verticalCentered: true,
        // menu: '#menu',
        // anchors: ['intro', 'work', 'projects', 'workshops', 'bio'],
        // easingcss3: "linear"
        // responsiveWidth: 400,
        // responsiveHeight: 400
        // autoScrolling: false,
        // fadingEffect: true,
        // fadingEffect: 'slides'
        // slidesNavigation: true,
        scrollingSpeed: 600,
        slidesNavigation: true,
        scrollBar: false,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Kate Brehm', 'Work', 'Projects', 'Workshops', 'Bio'],

        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            
            // console.log('onLeave');
            // console.log('index: ', index); // leaving this index, 1-indexed array
            // console.log('nextIndex: ', nextIndex); // arriving at this index ,  1-indexed array
            // console.log('direction: ', direction);
            // console.log('=========');

            // leaving section 1
            if(nextIndex === 2){
                console.log('bio');

                // $('.menu').removeClass("menu--on-dark").addClass( "menu--on-light" );
                // $('.mast__image').hide();

                // $('#fpnav').show();

                var kenBurns = loopBioHeadshot();

                timelines.revealHeadshot
                    .addLabel('begin')
                    // .to(".nav", 0.5, { className: "+=nav--on-light" }, "begin+=0.01")
                    .to(
                        [ $headshotMaskBox ],
                        0.7, 
                        { 
                            scaleX: 0, 
                            ease: Power4.easeIn 
                        },
                        "begin+=0.15"
                    )

                    .to(
                        [ $headshotImage ] ,
                        0.5, 
                        { 
                            autoAlpha: 1,
                            ease: Power4.easeIn 
                        }, 
                        "begin+=0.075"
                    )

                    .addLabel('beginText')

                    .to(
                        [ $bioTextMask ],
                        0.6, 
                        { 
                            scaleX: 0, 
                            // autoAlpha: 0, 
                            ease: Power4.easeInOut
                        }, 
                        "begin+=0.075"
                    )

                    .to(
                        [ $bioText ],
                        1.5, 
                        { 
                            autoAlpha: 1, 
                            ease: Power4.easeInOut 
                        }, 
                        "begin+=0.1"
                    )

                    .to(
                        [ $bioNavBGMask ],
                        0.8, 
                        { 
                            scaleX: 0, 
                            ease: Power4.easeInOut 
                        }, 
                        "begin+=.175"
                    )

                    .to(
                        [ ".bio__tab-border" ],
                        0.3, 
                        { 
                            scaleY: 1, 
                            ease: Expo.easeIn
                            // width: 3 
                        }, 
                        "begin+=0.7 "
                    )

                    .add(kenBurns.play(), "begin+=2" )

                    .to(
                        [ ".button--download-pdf" ],
                        0.75, 
                        { 
                            scaleY: 1, 
                            ease: Elastic.easeOut.config(1, 0.3), 
                            height: "11.5rem"
                            // width: 3 
                        }, 
                        "begin+=1"
                    )
                    // .to(
                    //  [ $headshotMaskColor ],
                    //  2, 
                    //  { 
                    //      autoAlpha: 0, 
                    //      ease: Power4.easeOut 
                    //  },
                    //  "beginText-=0.1"
                    // )

                    // .timeScale( .2 )
                    .play()

            }


            if (nextIndex != 2){
                // $('#fpnav').hide();
                // TweenMax.to(".nav", 0.5, { className: "-=nav--slide-2" });
                // TweenMax.to(".bio__frame--panel", 0.75, { borderWidth: "50rem", ease: Quint.easeOut });
                
                // if (timelines.revealHeadshot.progress()){
                //  timelines.revealHeadshot.reverse();
                // }


            }

            // // entering it
            // else if(index == 0 && direction == 'up'){
            //      TweenMax.to(".nav", 0.1, { autoAlpha: 0, ease: Quint.easeOut } );
            //      // TweenMax.to(".nav", 0.1, { backgroundColor: "transparent", ease: Quint.easeOut } );
            // }
        },

        /*
            This callback is fired just after the structure of the page is generated.
            This is the callback you want to use to initialize other plugins or fire 
            any code which requires the document to be ready (as this plugin modifies 
            the DOM to create the resulting structure)
        */

        afterRender: function(){

            new Glide('.glide', 
                {
                    // bpoints should match _mq.scss
                    // 1280 +
                    type: 'carousel',
                    gap: 32,
                    perView: 3,
                    focusAt: 'center',
                    animationDuration: 250,
                    peek: { before: 100, after: 100 },
                    dragThreshold: false,

                    breakpoints: { 

                        // 1031 to 1200
                        1200: {
                            perView: 3,
                            gap: 16,
                            peek: { before: 32, after: 32 },
                            dragThreshold: false
                        },

                        // 861 to 1030
                        1030: {
                            perView: 2,
                            gap: 16,
                            peek: { before: 50, after: 50 },
                            dragThreshold: false
                        },

                        // 651 to 860 
                        860: {
                            perView: 1,
                            gap: 16,
                            peek: { before: 50, after: 50 },
                            dragThreshold: 120
                        },

                        // up to 650 
                        650: {
                            perView: 1,
                            gap: 0,
                            peek: 0,
                            dragThreshold: 120
                        }
                    }
                }

            ).mount()

    
            var inDuration = 0.125;
            var scale = 1.025;


            function tooltipReveal(options){

                // console.log($project[0].clientHeight);
                // console.log($project[0].clientWidth);
                // console.log($project[0].getBoundingClientRect());

                var rect = options.$linkElement[0].getClientRects()[0];

                var growByX = 200; 
                var growByY = 100; 

                var container = document.createElement('div');
                $(container)
                  // .attr("class", "project__detail-tooltip")
                  // .height(rect.height + growByY)
                  // .width(rect.width + growByX)

                  // top left
                  // .css({'transform' : 'translate(' + (rect.left ) + 'px, ' + (rect.top) + 'px)' })

                  // overlapping
                  // .css({ 'transform' : 'translate(' + (rect.left + (growByX / 2)) + 'px, ' + (rect.top - (growByY / 2)) + 'px) scale(0)' 
            
                  // centered
                  // .css({ 'transform' : 'translate(' + (rect.left - (growByX / 2)) + 'px, ' + (rect.top - (growByY / 2)) + 'px) scale(0)' 
                  // })

                  .prependTo($("body"));

                // var $ptip = $(".project__detail-tooltip");
                // $ptip.appendTo($(container));

                var tl = new TimelineMax({paused: true});
                tl
                    .addLabel('beginPlay') 
                    // .to(container, 0.2, { autoAlpha: 1, scaleY: 1 })
                    // .to($ptip, 0.2, { autoAlpha: 1 }, 'beginPlay+=0.5')
                    // .to(".project__detail-tooltip span", 0.3, { autoAlpha: 1, y: 0 }, 'beginPlay+=0.25')
                    // .set($ptip, { autoAlpha: 1 }, 'beginPlay')
                    // .to(".tooltip__logo", 0.2, { autoAlpha: 1, ease: Expo.easeOut }, "+=0.1");

                return tl;
            }



            function playVideo(video){
                // video.play();
            }

            function stopVideo(video){
                if (!video.ended){
                    video.pause();
                    video.currentTime = 0;
                }
            }

            var showMastProject = function(project) {
                var $otherLinks = $(".mast__wrapper a").not(this);
                var $project = $(project.data.projectName);

                var t = new TimelineMax ({paused:true});
                
                t 
                    .addLabel('beginPlay') 
                    .to(
                        $project, 
                      inDuration,
                      { 
                        autoAlpha: 1, 
                        ease: Power1.easeIn, 
                        scale: scale, 
                        transformOrigin:"50% 50%" 
                      },
                      'beginPlay'
                   )

                    .set(['.mast__wrapper p span', $otherLinks], { autoAlpha: 0 }, 'beginPlay'  );

                if(($project).is("video")){
                    t.call(
                      playVideo, 
                      [ $project[0] ], // param, the video element
                      'beginPlay'
                    ) 
                }

                var options = { $mediaElement: $project, $linkElement: $(this) }
                var tDetail = tooltipReveal(options);

                t
                    .add(tDetail.play(), "beginPlay-=0.25" )
                    .set(".material-icon__arrow--down", { autoAlpha: 0, ease: Elastic.easeInOut }, "beginPlay" )
                    .play();
            }

            var hideMastProject = function(project) {
            
                var t = new TimelineMax ({paused:true});
                var $project = $(project.data.projectName);

                t 
                    .addLabel('beginStop') 
                    .to(
                        $project, 
                      0.1,
                      { 
                        autoAlpha: 0, 
                        ease: Power0.easeNone, 
                        scale: 1 
                      },
                      'beginStop'
                   )

                    .set(['.mast__wrapper p span', ".mast__wrapper a"], { autoAlpha: 1 }, 'beginStop' )
                    .play();

                if(($project).is("video")){
                    t.call(
                      stopVideo, 
                      [ $project[0] ], // param, the video element
                      'beginStop'
                    ) 
                }

                t.play();
                
                // var $ptip = $(".project__detail-tooltip");
                // TweenLite.to(".tooltip__logo", 0.1, { autoAlpha: 0 });
                // TweenLite.to($ptip, 0.1, { autoAlpha: 0 });
                TweenLite.to(".material-icon__arrow--down", 0.1, { autoAlpha: 1 });
            }

            $(".js-hover__puppet")
                .on('mouseenter', { projectName: ".project--puppetry" }, showMastProject)
                .on('mouseleave', { projectName: ".project--puppetry" }, hideMastProject);

            $('.js-hover__events')
                .on('mouseenter', { projectName: ".project--events" }, showMastProject)
                .on('mouseleave', { projectName: ".project--events" }, hideMastProject);

            // $('.js-hover__basil')
            //  .on('mouseenter', { projectName: ".i6" }, showMastProject)
            //  .on('mouseleave', { projectName: ".i6" }, hideMastProject);

            $('.js-hover__basil')
                .on('mouseenter', { projectName: ".project--basil" }, showMastProject)
                .on('mouseleave', { projectName: ".project--basil" }, hideMastProject);

            $('.js-hover__perf')
                .on('mouseenter', { projectName: ".project--perf" }, showMastProject)
                .on('mouseleave', { projectName: ".project--perf" }, hideMastProject);

            $('.js-hover__teaches')
                .on('mouseenter', { projectName: ".project--teaches" }, showMastProject)
                .on('mouseleave', { projectName: ".project--teaches" }, hideMastProject);

            $('.js-hover__poof')
                .on('mouseenter', { projectName: ".project--poof" }, showMastProject)
                .on('mouseleave', { projectName: ".project--poof" }, hideMastProject);

            $('.js-hover__costumes')
                .on('mouseenter', { projectName: ".project--costume" }, showMastProject)
                .on('mouseleave', { projectName: ".project--costume" }, hideMastProject);

            $('.js-hover__broadway--off')
                .on('mouseenter', { projectName: ".project--off-broadway" }, showMastProject)
                .on('mouseleave', { projectName: ".project--off-broadway" }, hideMastProject);

            $('.js-hover__broadway--on')
                .on('mouseenter', { projectName: ".project--on-broadway" }, showMastProject)
                .on('mouseleave', { projectName: ".project--on-broadway" }, hideMastProject);

            $('.js-hover__theater-productions')
                .on('mouseenter', { projectName: ".project--theater-productions" }, showMastProject)
                .on('mouseleave', { projectName: ".project--theater-productions" }, hideMastProject);

            $('.js-hover__margolis')
                .on('mouseenter', { projectName: ".project--margolis" }, showMastProject)
                .on('mouseleave', { projectName: ".project--margolis" }, hideMastProject);

            $('.js-hover__explore')
                .on('mouseenter', { projectName: ".project--explore" }, showMastProject)
                .on('mouseleave', { projectName: ".project--explore" }, hideMastProject);


            $( ".material-icon__arrow--down" ).on( "click", function() {
                console.log( $( this ).text() );
                fullpage_api.moveSectionDown();
            });


        }
   

    });




}());
