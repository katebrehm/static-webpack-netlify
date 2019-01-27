// @todo: refactor to use html-loader with multiple entry points / hbs
// https://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder
// require('file-loader?name=[name].[ext]!../index.html');

import TweenMax from "greensock";
import verge from "verge";
import Glide from '@glidejs/glide'

// import 'intersection-observer'
// import scrollama from 'scrollama';

import fullpage from "fullpage.js"
import '../scss/app.scss';

import lodash from 'lodash';

// app utils
// import transformToCamelCase from './utils/transformToCamelCase';

// app data
import introDataObjAsBEM from '../../content/intro.json';
import bioDataObjAsBEM from '../../content/bio.json';
import artProjectsDataObjAsBEM from '../../content/art-projects.json';

var partials = {};

// @todo: move this to dedicated webpack. JS files.
import paragraphFragmentsTemplate from '../templates/home/sections/intro/paragraph-fragments.hbs';
import hoverImagesCollectionTemplate from '../templates/home/sections/intro/hover-image-collection.hbs';
import headshotCollectionTemplate from '../templates/home/sections/bio/headshot-collection.hbs';
import artProjectsCollectionTemplate from '../templates/home/sections/art-projects/art-projects-images-collection.hbs';

// @todo: make submodule to import all partials/helpers
// https://stackoverflow.com/questions/32124640/how-to-import-into-properties-using-es6-module-syntax-destructing
// partials
import arrowPartial from '../templates/partials/arrow.hbs';


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



(function () {


	// workaround for fullpage history bug. Add #intro only if page loads without a deep link
	// https://github.com/alvarotrigo/fullPage.js/issues/950#issuecomment-69156110
	// https://stackoverflow.com/questions/24078332/is-it-secure-to-use-window-location-href-directly-without-validation/24089350
	if (!window.location.href.includes("#")) {
		window.location.href = window.location.href + "#intro";
	}

	var timelines = [];
	var $headerOne              = $('.h1__1');
	var $headshotMaskBox        = $('.headshot__mask--box');
	var $headshotMaskColor      = $('.headshot__mask--color');
	var $bioTextMask            = $('.bio__text--mask');
	var $bioText                = $('.bio__text');
	var $headshotImage          = $('.headshot__image');
	var $bioNavBGMask           = $('.bio__nav-bg--mask');

	// var tlArrowDown = new TimelineMax();
  
 //   tl
    // .addLabel("load") // for a slight delay for page to render
    // .set('.nav__link', { autoAlpha: 0, y: 10 })
    // .staggerFromTo('.nav__link', 2, { autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: Power4.easeOut }, 0.1, "load+=0.5")
    // .to('.button--arrow-down', 1, { opacity: 1, autoAlpha: 1, ease: Power4.easeOut }, "load+=0.5")
    // .to('.button--arrow-down', 1, { opacity: 1, autoAlpha: 1, ease: Power4.easeOut })
    // .call (tlArrowDown)


	// function playBioTl(){
	function makeBioTl(){

		
	// https://codepen.io/mikeK/pen/zdKjNr
		// var transitionSpeed = 1.25;
		// var msBetweenChange = 2000
		// var imgs = $.makeArray( $('.headshot__image') );

		// if (imgs.length === 1) { return false } 

	 //    imgs.reverse();
	 //    // imgs.pop(imgs.unshift());

		// function crossfade(){

		//     TweenMax.to(imgs[0], transitionSpeed, {autoAlpha:0}) 
		//     TweenMax.to(imgs[1], transitionSpeed, {autoAlpha:1})
		//     imgs.push( imgs.shift() )
		//   }

		// var bioImgLoopTimeoutHandle = setInterval(crossfade,msBetweenChange)
		// return bioImgLoopTimeoutHandle;

		//////////////
		// adapted from https://codepen.io/GreenSock/pen/WEGLYq
		var duration = 2;
		var delay = 2;
		// var tl = new TimelineMax({  paused: true });
		var tl = new TimelineMax({ onComplete:onComplete, onStart:onStart, paused: true });

		var $bioImages = $(".headshot__image");
		$bioImages.each(function(index, element) {
			// insert first animation at a time of 0 or all other animations at a time that 
			// will overlap with the previous animation fading out.
			var offset = index === 0 ? 0 : "-=" + duration; 
			console.log(index);
			
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
					offset
				)
			}
		});

		function onComplete() {
		  tl.play(duration);
		  console.log('biol onComplete, repeat');
		};

		function onStart() {
		  console.log('biol onStart, starting play');
		};

		console.log('made bio tl', tl);
		return tl;
	}

	timelines.revealHeadshot = new TimelineMax ({ paused: true });
	timelines.bioTl = makeBioTl();
	// timelines.bioTl.play();
	
	// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
	const transformToCamelCase = (obj) => {
	  if (!_.isObject(obj)) {
		return obj;
	  } else if (_.isArray(obj)) {
		return obj.map((v) => transformToCamelCase(v));
	  }
	  return _.reduce(obj, (r, v, k) => {
		return { 
		  ...r, 
		  [_.camelCase(k)]: transformToCamelCase(v) 
		};
	  }, {});
	}; 

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
	var bioDataObj = transformToCamelCase(bioDataObjAsBEM);
	var headshotImagesArray = bioDataObj.bioHeadshotImagesList;
	var headshotImages = headshotImagesArray;

	$(headshotCollectionTemplate({ headshotImages }))
		.appendTo(".js--hbs-inject--bio__headshot-collection");

	///////////////
	var artProjectsDataObj = transformToCamelCase(artProjectsDataObjAsBEM);
	var artProjectsImagesArray = artProjectsDataObj.artProjectsList;
	var artProjectsImages = artProjectsImagesArray;

	// insert in Glide on mount.before, otherwise Glide crashes for some reason

	///////////////
	$('.js--hbs-inject--arrow')
		.html(arrowPartial);

	$('.js--nav__item--previous').on('click', function(){
		fullpage_api.moveSectionUp();
	})

	$('.js--nav__item--next').on('click', function(){
		fullpage_api.moveSectionDown();
	})


function toggleProjectsByType() {


}


/*
	Application js
*/
	// var bioImgLoopTimeoutHandle;

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

			// when arrived to a new section
			afterLoad: function(origin, destination, direction){
				var loadedSection = origin;
					// console.log(direction);

					// if (destination.anchor === 'intro') {
					// 	bounceIntroArrow().play();
					// }

					// else {
					// 	bounceIntroArrow().stop();
					// }
			},

			// before scroll animation begins
			onLeave: function(origin, destination, direction){
				var index = origin.index;
				// var leavingSection = $(this);
				// console.log(bioTl);

				// if (bioTl.isActive()) {
				// 	console.log('active');
				// }

				// console.log('onLeave');
				// console.log('source.index: ', source.index); 
				// console.log('destination.index: ', destination.index); 
				// console.log('direction: ', direction);
				// console.log('=========');


				// if leaving bio
				if(origin.anchor === "bio"){
					// if (bioImgLoopTimeoutHandle) { 
						// console.log('stopping bio tl');
					// 	clearTimeout(bioImgLoopTimeoutHandle);
					// };
							// if (bioTl.isActive()) {
				// 	console.log('active');
				// }
				console.log('bioTl active?' , timelines.bioTl.isActive());

				timelines.bioTl.pause();
					// if(bioImgLoopTimeoutHandle.isActive()){
						console.log('stopping bio tl');
					// }
				}
				// entering bio
				if(destination.anchor === "bio"){
					console.log('in bio');
					// bioImgLoopTimeoutHandle = playBioTl(); // run
					// if (!bioImgLoopTimeoutHandle) {
					// 	bioImgLoopTimeoutHandle = makeBioTl();
					// }

					// $('.menu').removeClass("menu--on-dark").addClass( "menu--on-light" );
					// $('.intro__image').hide();

					// $('#fpnav').show();

					timelines.revealHeadshot
						.addLabel('begin')
						.set($bioTextMask, { width: 500})

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

						.add(timelines.bioTl.play(), "begin+=2" )

						.to(
							[ ".button--resume-pdf" ],
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

				if(destination.anchor === "art-projects"){
					var tl = new TimelineMax();
					tl
						.addLabel('beginPlay') 

						.staggerTo(
							".glide__slide", 
							0.1, 
							{ 
								autoAlpha: 0.8, 
								ease: Expo.easeOut
								// ease: Quint.easeOut 
							},
							0.1,
							'beginPlay+=0.1'
						)

						.staggerFromTo(
							".glide__slide:nth-child(odd) .slide__image", 
							0.3,
							{ 
								y: 30
							},
							{ 
								y: 0,
								ease: Quint.easeOut 
								// ease: Expo.easeOut
							},
							0.2,
							'beginPlay+=0.2'
						)

						.staggerFromTo(
							".glide__slide:nth-child(even) .slide__image", 
							0.3,
							{ 
								x: 30
							},
							{ 
								x: 0,
								ease: Quint.easeOut 
								// ease: Expo.easeOut
							},
							0.2,
							'beginPlay+=0.2'
						)
				}

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
			},

			/*
				This callback is fired just after the structure of the page is generated.
				This is the callback you want to use to initialize other plugins or fire 
				any code which requires the document to be ready (as this plugin modifies 
				the DOM to create the resulting structure)
			*/

			afterRender: function(){

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

				var el0 = $('.js--glide')[0];
				var newGlide = new Glide(el0, 
					{
						// bpoints should match _mq.scss
						// 1280 +
						type: 'slider',
						gap: 32,
						perView: 3,
						focusAt: 'center',
						animationDuration: 250,
						peek: { before: 100, after: 100 },
						dragThreshold: false,
						perTouch: 2,
						rewind: false,
						breakpoints: { 

							// 1031 to 1200
							1200: {
								perView: 3,
								gap: 32,
								peek: { before: 32, after: 32 },
								dragThreshold: false
							},

							// 861 to 1030
							1030: {
								perView: 2,
								gap: 32,
								peek: { before: 50, after: 50 },
								dragThreshold: 1,
								swipeThreshold: 1
							},

							// 651 to 860 
							860: {
								perView: 1,
								gap: 16,
								peek: { before: 50, after: 50 },
								dragThreshold: true,
								dragThreshold: 1,
								swipeThreshold: 1
							},

							// up to 650 
							650: {
								perView: 1,
								gap: 0,
								peek: 0,
								dragThreshold: true,
								dragThreshold: 1,
								swipeThreshold: 1
							}
						}
					}
				)

				// insert DOM here, otherwise Glide crashes for some reason
				// probably some timing thing where the DOM isnt there
				// yet before Glide initializes
				.on('mount.before', function() {
					// $('.glide__slide').addClass('.slide__bg-block'); 
					$('.js--hbs-inject--art-projects__image-collection')
						.html(artProjectsCollectionTemplate({ artProjectsImages }));
				})

				.on('run.before', function() {
					// @todo: animate these out
					$('.yo').remove();
					$('.slide__position-counter').remove() 
				})

				.on('run.after', function() {
					// console.log('glide:move.after');
					// console.log($('.glide__slide--active'));
					// console.log(newGlide.index);
					var string = 
					`
						<div class='slide__position-counter'>
							<span class="slide__position-number">` + newGlide.index + `</span>
							<span class="slide__position-number"> / </span>
							<span class="slide__position-number">` + $('.glide__slide').length + `</span>
						</div>
					`;
				  	$(string).appendTo('.glide__slide--active')
				})

				.mount();

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

				var showIntroProject = function(e) {
					var $otherLinks = $(".intro__text-wrapper a").not(this);
					var $project = $(".js--project--" + $(e.target).data('introFragmentKey'));

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

						.set(['.intro__text-wrapper p span', $otherLinks], { autoAlpha: 0 }, 'beginPlay'  );

					// if(($project).is("video")){
					//     t.call(
					//       playVideo, 
					//       [ $project[0] ], // param, the video element
					//       'beginPlay'
					//     ) 
					// }

					// var options = { $mediaElement: $project, $linkElement: $(this) }
					// var tDetail = tooltipReveal(options);

					t
						// .add(tDetail.play(), "beginPlay-=0.25" )
						.set(".button--arrow-down", { autoAlpha: 0, ease: Elastic.easeInOut }, "beginPlay" )
						.play();
				}

				var hideIntroProject = function(e) {
				
					var t = new TimelineMax ({paused:true});
					var $project = $(".js--project--" + $(e.target).data('introFragmentKey'));

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

						.set(['.intro__text-wrapper p span', ".intro__text-wrapper a"], { autoAlpha: 1 }, 'beginStop' )
						.play();

					// if(($project).is("video")){
					//     t.call(
					//       stopVideo, 
					//       [ $project[0] ], // param, the video element
					//       'beginStop'
					//     ) 
					// }

					t.play();
					
					// var $ptip = $(".project__detail-tooltip");
					// TweenLite.to(".tooltip__logo", 0.1, { autoAlpha: 0 });
					// TweenLite.to($ptip, 0.1, { autoAlpha: 0 });
					TweenLite.to(".button--arrow-down", 0.1, { autoAlpha: 1 });
				}

				$(".js--intro-fragment-hover")
					.on('mouseenter', showIntroProject)
					.on('mouseleave', hideIntroProject);

				$( ".button--arrow-down" ).on( "click", function() {
					console.log( $( this ).text() );
					fullpage_api.moveSectionDown();
				});

				$( ".js--nav__section-line-active--intro" ).on( "click", function() {
					// console.log( $( this ).text() );
					fullpage_api.moveSectionDown();
				});

				

			}
		});
}());










