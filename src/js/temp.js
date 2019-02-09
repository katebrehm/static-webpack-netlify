
                    /*
                    // first attempt with CSS
                    // https://codepen.io/lifeinchords/pen/gqgVMa
                    // got complex to manage
                    // GSAP CSS tween didnt work properly

                    // diagonal
                    // clip-path: polygon( 100% 0%, 100% 0%, 0% 100%, 0 100%);
                    var diagonalClipPath = "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)";

                    // parallelogram
                    // clip-path: polygon( 20% 0%, 100% 38%, 70% 90%, 0% 100%);
                    // clip-path: polygon( 70% 0%, 100% 0%, 30% 100%, 0% 100%);
                    // clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

                    var parallelogramClipPath = "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)";

                    //  square
                    // clip-path: polygon( 0 0, 100% 0%, 100% 100%, 0% 100%);
                    // clip-path: ;
                    var squareClipPath = "polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%)";

                    // X
                    // clip-path: polygon( 20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
                    var xClipPath = "polygon( 20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)";

                    var frameClipPath = "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%, 0% 0%, 0% 0%);"

                    var fromClipPathO = { value: frameClipPath  };
                    var toClipPathO = { value: squareClipPath };

                    var fromClipPathE = { value: parallelogramClipPath  };
                    var toClipPathE = { value: squareClipPath };

                    // var clipPath = { value:"inset(100% 0% 0% 0%)" } // original example, note fromat, clippath attr name, no semicolon
                    var elementEven = document.querySelectorAll('.glide__slide:nth-child(even) .slide__image')[0];
                    var elementOdd = document.querySelectorAll('.glide__slide:nth-child(odd) .slide__image')[0];
                    */
                

                    // var first = $(".glide__slide").first();
                    // var string = 
                    // `
                    //  <div class='slide__position-counter'>
                    //      <span class="slide__position-number">` + ( glideArt.index + 1 ) + `</span>
                    //      <span class="slide__position-number"> / </span>
                    //      <span class="slide__position-number">` + $('.glide__slide').length + `</span>
                    //  </div>
                    // `;
                    // $(string).appendTo('.glide__slide--active');

                    // .to([ first, ".slide__position-counter" ], 0.2, { autoAlpha: 1 })

                    // $('.glide__slide')[0].addClass('glide__slide--active');

                    /*

                        // .staggerFromTo(
                        //  ".glide__slide:nth-child(odd) .slide__image", 
                        //  0.5,
                        //  // { 
                        //  //  y: 50
                        //  // },
                        //  // { 
                        //  //  y: 0,
                        //  //  ease: Quint.easeOut
                        //  // },
                        //  { 
                        //      objectPosition: "50% 20%"
                        //  },
                        //  { 
                        //      objectPosition: "50% 50%",
                        //      ease: Quint.easeOut
                        //  },
                        //  3,
                        //  'beginPlay+=1.1'
                        // )

                        // .staggerFromTo(
                        //  ".glide__slide:nth-child(even) .slide__image", 
                        //  0.2,
                        //  // { 
                        //  //  x: 50
                        //  // },
                        //  // { 
                        //  //  x: 0,
                        //  //  ease: Quint.easeOut 
                        //  //  // ease: Expo.easeOut
                        //  // },
                        //  { 
                        //      objectPosition: "20% 50%"
                        //  },
                        //  { 
                        //      objectPosition: "50% 50%",
                        //      ease: Quint.easeOut
                        //  },
                        //  0.2,
                        //  'beginPlay+=1'
                        // )

                        // .to(
                        //  ".glide__slide .slide__image", 
                        //  7,
                        //  { 
                        //      clipPath: squareClipPath,
                        //      ease: Quint.easeOut 
                        //      // ease: Expo.easeOut
                        //  },
                        //  'beginPlay'
                        // )

                        // alternate solution
                        // https://greensock.com/forums/topic/15842-problem-on-animate-clip-path/
                        // but still doesnt work because the number of points differs between the from and to paths
                        // .to(
                        //  fromClipPathO, 
                        //  0.3, 
                        //  {
                        //      value: toClipPathO.value,
                        //      onUpdate: function () {
                        //        elementEven.style.clipPath = fromClipPathO.value;
                        //      }
                        //      },
                        //  'beginPlay+=1.2'
                        //   )

                        // .to(
                        //  fromClipPathE, 
                        //  0.3, 
                        //  {
                        //      value: toClipPathE.value,
                        //      onUpdate: function () {
                        //        elementOdd.style.clipPath = fromClipPathE.value;
                        //      }
                        //      },
                        //  'beginPlay+=1.2'
                        //   );
                    */
                        







                // var el1 = $('.js--glide')[1];
                // new Glide(el1, {
                //         // bpoints should match _mq.scss
                //         // 1280 +
                //         type: 'carousel',
                //         gap: 32,
                //         perView: 3,
                //         focusAt: 'center',
                //         animationDuration: 250,
                //         peek: { before: 100, after: 100 },
                //         dragThreshold: false,

                //         breakpoints: { 

                //             // 1031 to 1200
                //             1200: {
                //                 perView: 3,
                //                 gap: 16,
                //                 peek: { before: 32, after: 32 },
                //                 dragThreshold: false
                //             },

                //             // 861 to 1030
                //             1030: {
                //                 perView: 2,
                //                 gap: 16,
                //                 peek: { before: 50, after: 50 },
                //                 dragThreshold: false
                //             },

                //             // 651 to 860 
                //             860: {
                //                 perView: 1,
                //                 gap: 16,
                //                 peek: { before: 50, after: 50 },
                //                 dragThreshold: 120
                //             },

                //             // up to 650 
                //             650: {
                //                 perView: 1,
                //                 gap: 0,
                //                 peek: 0,
                //                 dragThreshold: 120
                //             }
                //         }
                //     }
                // ).mount()

                /*
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
                */


                        
                    var fullPageInstance = new fullpage("#fullpage", {
            licenseKey: '',
            // verticalCentered: true,
            // menu: '#menu',
            anchors: ['intro', 'bio', 'art-projects', 'what-is', 'professional-work'],
            // easingcss3: "linear"
            // responsiveWidth: 400,
            // responsiveHeight: 400
            // autoScrolling: false,
            // fadingEffect: true,
            // fadingEffect: 'slides'
            // slidesNavigation: true,
            recordHistory: true,
            scrollingSpeed: 600,
            slidesNavigation: true,
            scrollBar: false,
            navigation: false,
            // navigationPosition: 'left',
            // navigationTooltips: ['Kate Brehm', 'Bio', 'Art Projects'],



// hiudeinproject

    // if(($project).is("video")){
                    //     t.call(
                    //       stopVideo, 
                    //       [ $project[0] ], // param, the video element
                    //       'beginStop'
                    //     ) 
                    // }




                    // if(($project).is("video")){
                    //     t.call(
                    //       playVideo, 
                    //       [ $project[0] ], // param, the video element
                    //       'beginPlay'
                    //     ) 
                    // }

                    // var options = { $mediaElement: $project, $linkElement: $(this) }
                    // var tDetail = tooltipReveal(options);

    // var tlArrowDown = new TimelineMax();
  
    //   tl
    // .addLabel("load") // for a slight delay for page to render
    // .set('.nav__link', { autoAlpha: 0, y: 10 })
    // .staggerFromTo('.nav__link', 2, { autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: Power4.easeOut }, 0.1, "load+=0.5")
    // .to('.button--arrow-down', 1, { opacity: 1, autoAlpha: 1, ease: Power4.easeOut }, "load+=0.5")
    // .to('.button--arrow-down', 1, { opacity: 1, autoAlpha: 1, ease: Power4.easeOut })
    // .call (tlArrowDown)      

                    
                    // var $ptip = $(".project__detail-tooltip");
                    // TweenLite.to(".tooltip__logo", 0.1, { autoAlpha: 0 });
                    // TweenLite.to($ptip, 0.1, { autoAlpha: 0 });
                    TweenLite.to(".button--arrow-down", 0.1, { autoAlpha: 1 });


                if (destination.anchor != 'bio'){
                    // playBioTl = null;
                    // $('#fpnav').hide();
                    // TweenMax.to(".nav", 0.5, { className: "-=nav--slide-2" });
                    // TweenMax.to(".bio__frame--section", 0.75, { borderWidth: "50rem", ease: Quint.easeOut });
                    
                    // if (timelines.revealHeadshot.progress()){
                    //  timelines.revealHeadshot.reverse();
                    // }
                }






                // // entering it
                // else if(destination.anchor == 'intro' && direction == 'up'){
                //      TweenMax.to(".nav", 0.1, { autoAlpha: 0, ease: Quint.easeOut } );
                //      // TweenMax.to(".nav", 0.1, { backgroundColor: "transparent", ease: Quint.easeOut } );
                // }



                // entering bio
                if(destination.anchor === "bio"){
                    console.log('in bio section');
                    
                    if (timelines.bioTl.isActive()) {
                        console.log('bioTl active');
                    }
                    
                    // bioImgLoopTimeoutHandle = playBioTl(); // run
                    // if (!bioImgLoopTimeoutHandle) {
                    //  bioImgLoopTimeoutHandle = makeBioTl();
                    // }

                    // $('.menu').removeClass("menu--on-dark").addClass( "menu--on-light" );
                    // $('.intro__image').hide();

                    // $('#fpnav').show();



                // if leaving bio
                if(origin.anchor === "bio"){
                    // if (bioImgLoopTimeoutHandle) { 
                        // console.log('stopping bio tl');
                    //  clearTimeout(bioImgLoopTimeoutHandle);
                    // };

                    if (timelines.bioTl.isActive()) {
                        console.log('bioTl active');
                    }


                    // timelines.bioTl.pause();
                    // if(bioImgLoopTimeoutHandle.isActive()){
                        console.log('stopping bio tl');
                    // }
                }









// function toggleProjectsByType(e) {
    // if clicked and acftive are the same, exit

    // otherwise
    // roll up, and hide
    // TweenMax.staggerTo(
    //  ".glide__slide", 
    //  0.2, 
    //  { 
    //      autoAlpha: 0, 
    //      ease: Expo.easeOut
    //      // ease: Quint.easeOut 
    //  },
    //  -0.05 // start from the end
    //  // ,
    //  // 'beginPlay+=0.1'
    // )


    // glideArt.destroy();

    // $('.glide__slide').removeAttr("style");
    // $('.glide__slides').removeAttr("style");
    // $('.art-project__type--2').remove();
    // $('.slide__position-counter').remove();
    // $('.js--glide').removeClass('glide--swipeable');

    // glideArt = null;
    // console.log(el0);
    // console.log(glideArt);

    // var b = new Glide($('.js--glide')[0], projectCarouselOptions)

    //  // insert DOM here, otherwise Glide crashes for some reason
    //  // probably some timing thing where the DOM isnt there
    //  // yet before Glide initializes
    
    //  // from original mount. Dont need this here because All projects arleady exist
    //  // from the JSON data
    //  .on('mount.before', function() {
    //      // $('.glide__slide').addClass('.slide__bg-block'); 

    //      // // load all projects
    //      // $('.js--hbs-inject--art-projects__image-collection')
    //      //  .html(artProjectsCollectionTemplate({ artProjectsImages }));

    //  })

    //  .on('run.before', function() {
    //      $('.slide__position-counter').remove();
    //      TweenLite.to('.glide__slide--active', 0.25, { autoAlpha: 0.6});
    //      // $( ".slide__title").unbind( "click" );

    //      // do this here so there's no delay perception when moving slides
    //      if (direction.direction === ">") {
    //          // glideArt.index + 1;
    //          // var el = 
    //              TweenLite.to($( ".glide__slide--active" ).next(), 0.05, { autoAlpha: 1});
    //      }

    //      else if (direction.direction === "<") {
    //          // glideArt.index - 1;
    //              TweenLite.to($( ".glide__slide--active" ).prev(), 0.05, { autoAlpha: 1});
    //      }
    //  })

    //  .on('run.after', function() {

    //      // console.log('glide:move.after');
    //      // console.log($('.glide__slide--active'));
    //      // console.log(glideArt.index);

    //      // console.log('counter: ', $('.slide__position-counter'));
    //      // run this instead when person arrives to Bio section
    //      var string = 
    //      `
    //          <div class='slide__position-counter'>
    //              <span class="slide__position-number">` + ( glideArt.index + 1 ) + `</span>
    //              <span class="slide__position-number"> / </span>
    //              <span class="slide__position-number">` + $('.glide__slide').length + `</span>
    //          </div>
    //      `;
    //      $(string).appendTo('.glide__slide--active');
    //      TweenLite.to('.slide__position-counter', 0.25, { autoAlpha: 1});

    //      // $('.slide__title').on('click', function(e){
    //      //  console.log(this, " clicked");
    //      // });
    //  })

    // .mount();


    // TweenMax.staggerTo(
    //  ".glide__slide", 
    //  0.2, 
    //  { 
    //      autoAlpha: 0.8, 
    //      ease: Expo.easeOut
    //      // ease: Quint.easeOut 
    //  },
    //  0.05 
    // );

    // TweenMax.staggerTo(
    //  ".glide__slide img", 
    //  3, 
    //  { 
    //      clipPath: "none", 
    //      ease: Expo.easeOut
    //      // ease: Quint.easeOut 
    //  },
    //  0.05 
    // );

    // glideArt.enable();

// }






// function greet( event ) {
//   alert( "Hello " + event.data.name );
// }

// $( "button" ).on( "click", { name: "Karl" }, greet );






// function bounceIntroArrow(){

//   var el = $(".button--arrow-down");

//   var overshoot = 1.2;
//   var period = 0.5;

//   var heartbeatTl = new TimelineMax({
//     repeat: -1
//   });

//   heartbeatTl
//    // .to(el, 0.5, { scale: 0.9 })
//    .to(
//       el,
//       0.4,
//       {
//         autoAlpha: 0,
//         y: -6,
//         // opacity: 0
//         // scale: 1,
//         // transformOrigin:"50% 50%",
//         // ease: Back.easeOut,
//       }
//       // "+=1.5x"
//     )
    
//     .to(
//       el,
//       1,
//       {
//         y: 0,
//         autoAlpha: 1,
//         ease: Elastic.easeOut,
//         easeParams:[ overshoot, period]
//       }
//     )

//     // filler, as a delay before the next bounce
//     .to(el, 1, { opacity: 1 })

//   return heartbeatTl;
// }




// when arrived to a new section
            afterLoad: function(origin, destination, direction){
                var loadedSection = origin;
                    // console.log(direction);

                    // if (destination.anchor === 'intro') {
                    //  bounceIntroArrow().play();
                    // }

                    // else {
                    //  bounceIntroArrow().stop();
                    // }
                    if(origin) {
                        console.log('=========');
                        console.log('afterLoad');
                        console.log('origin.index: ', origin.index); 
                        console.log('destination.index: ', destination.index); 
                        console.log('direction: ', direction);
                        console.log('=========');
                    }
        
            },





                function toggleProjects() {
                // function toggleProjects(event) {
                    // var glideI = event.data.gInstance;
                    // console.log("test", test);
                    test = "d";
                    // console.log("toggle test", test);



            timelines.revealHeadshot = makeRevealHeadshot();
            timelines.bioTl = makeBioTl();

            // for project
            var inDuration = 0.125;
            var scale = 1.025;

            // @todo: reuse code with single mount instance
            //  https://github.com/glidejs/glide/issues/202
            // var sliders = document.querySelectorAll('.glide');

            // for (var i = 0; i < sliders.length; i++) {
            //   var glide = new Glide(sliders[i], {
            //     gap: 15,
            //   });
              
            //   glide.mount();
            // }

            // load all projects
            // $('.js--hbs-inject--art-projects__image-collection')
            //  .html(artProjectsCollectionTemplate({ artProjectsImages }));

            // console.log("test", test);
            test = "b";
            // console.log("test", test);




    // function initGlide(glideInstance){
    function initGlide(which){
        test = "c";
        console.log("test ", test);












        
        var tl = new TimelineMax({ 
            onComplete:onComplete, 
            onStart:onStart, 
            paused: true,
            repeat: -1
        });

        var $bioImages = $(".headshot__image");

        $bioImages.each(function(index, element) {

            // insert first animation at a time of 0 or all other animations at a time that 
            // will overlap with the previous animation fading out.
            var offset;
            if (index === 0){
                offset = 0;
            }
            else {
                offset = "-=" + duration; 
            };
            
            tl.to(
                element, 
                duration, 
                {
                    autoAlpha: 1,
                    ease: Power3.EaseIn,
                    repeat: 1, 
                    yoyo:true, 
                    repeatDelay: delay
                }, 
                offset
            )
            
            // when the last image fades out we need to cross-fade the first image
            if (index === ($(".headshot__image").length - 1)){
                tl.to(
                    $(".headshot__image")[0], 
                    duration, 
                    {  
                        autoAlpha: 1,
                        ease: Power3.EaseIn
                    }, 
                    delay
                )
            }
        });

        function onComplete() {
          tl.play(duration / 2);
          // console.log('biol onComplete, repeat');
        };

        function onStart() {
          // console.log('biol onStart, starting play');
        };
