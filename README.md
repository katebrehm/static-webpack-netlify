#### dev
$ npm install
$ npm run dev

#### build prod

dont use the name build: https://www.netlify.com/docs/build-gotchas/#build-command
$ npm run siteBuild

#### deploy
automatically happens on Netlify when commits are pushed

---

#### todo

intro
    bug: hover over underline wigs out
    bug: hover intermittently shows all hoverable fragments, debounce
        https://codepen.io/jonneal/pen/yybEbo/
        https://css-tricks.com/dropdown-menus-with-more-forgiving-mouse-movement-paths/
    responsive:
        text formatting, size
    social links

bio
    reveal animation, reduce motion
    responsive
        remove reveal animation
         add section header
    layout
        headshot narrower, pull text left.
        text taller, more space for words
        image aspect ratio : 
            https://css-tricks.com/aspect-ratios-grid-items/

bug: fix jumping with trackpad:?  https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions#fullpagejs-jumps-one-section

nav: 
    hit area bigger
    nav__section-line-active  goes down on scroll sections

project detail
    barba transitions 
        https://www.smashingmagazine.com/2016/07/improving-user-flow-through-page-transitions/
    wire admin 
    bug: broken back link
    templating via webpack 
        https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates
        https://dev.to/rodeghiero_/multiple-html-files-with-htmlwebpackplugin-19bf
        https://github.com/mariorodeghiero/mariorodeghiero.github.io/blob/master/webpack.config.js

projects: 
    6/8 back
    bug: stagger animation
    bug: destroy /disable on filtering
    bug: resizing https://katebrehm.surge.sh/
    disable full page on narrow.
        https://github.com/alvarotrigo/fullPage.js#responsive-auto-height-sections
    hover over projects, no cursor on large bpoints where cant drag
    auto height: https://github.com/glidejs/glide/issues/236
    glide__slide, cursor default only on non-swipe
    focus middle on load


 What is a Movement Director
    use same project detail plumbing
    typeset, layout, some animated gifs
    HIRE ME 

Research
    paragraph
    links table
        PUBLICATIONS
        EXperiments

Huff Post quote
    link to artcle

Teaching
    Lectures
    Workshops
    Book me


#### later

 
:root {
   --font-size: calc(18px + 0.25vw)
}

body {
  font-size: var(--font-size);
}
 
 
https://frontendchecklist.io/
https://webaccessibility.guide/


consider switching from Glide to native: 
    https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap

bug: intro: "imnotlost" flashes another image

move critical inline css to plugin if possible
    https://medium.com/wizardnet972/https-medium-com-wizardnet972-make-your-page-rendering-faster-e14a95747c7a
    https://vuejsdevelopers.com/2017/07/24/critical-css-webpack/
    https://csswizardry.com/2018/11/css-and-network-performance/

RAM footprint

intro: split into paragraphs. <br> as an item? refactor intro to rich text?

why isnt handlebars being hot reloaded?

fullPage license as ENV key, to webpack 
    https://github.com/alvarotrigo/fullPage.js/issues/3544

set up SSL
set up custom domain
webpack image optimizer step
    dont host 10bm+ files https://www.netlify.com/docs/build-gotchas/#large-files-or-sites

netlify: 
    disappearing label?
    image regex validation?
    use npm package instead of CDN for Netlify admin js
    moves assets to project root
    possible to add a list singular label?
    host images outside of GH? 
        https://github.com/netlify/netlify-cms/issues/432
        https://github.com/netlify/netlify-cms/pull/1602
        
preload / lazyload images
    https://imagesloaded.desandro.com/
    https://github.com/aFarkas/lazysizes
    https://github.com/codrops/ImageRevealHover/blob/9d6991f0256b69e2f8a9cf9f289e040cdc32f7ce/js/demo.js#L1182

intro: optimize js-hover
clean up commit history to steven.dale@, with ktadmin GH account

set up prefer-reduced-motion
    https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

#### nice to have
project detail
    layout
        next / prev project 
            https://kyledecker.me/work/dropbox
            https://www.gatsbyjs.org/showcase/gm.capitalone.com

split js into modules
    https://webpack.js.org/guides/author-libraries/#expose-the-library

projects
    roll bio button up when get
    quotes ticker, add to admin
    
add checks for empty json data

intro
    admin: if it's a plain fragment, how to hide key + image fields?

fix fout 
    https://css-tricks.com/fighting-foit-and-fout-together/

loader to get images 

responsive images
    https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433

switch to mini css extract plugin to fix FOUC in dev/HMR
    https://git.avrami.me/rmit-coursework/sept-zulip/commit/64dadae697c9500835c7763d1416c6e2ac01bfe9
    https://github.com/webpack-contrib/mini-css-extract-plugin/issues/34

set up Uploadcare 
    https://github.com/uploadcare/uploadcare-netlifycms

extract compile hbs into static js code to separate webpack.xxx.js files

analytics 
    https://github.com/colbyfayock/html-webpack-partials-plugin

convert to Gatsby / React or Vue 
    https://github.com/giantcz/gia

FWA https://www.awwwards.com/
credits


#### references

https://github.com/glidejs/glide/issues/271
https://github.com/glidejs/glide/issues/222#issuecomment-391385045

throttle
https://github.com/glidejs/glide/issues/265

flash
https://github.com/glidejs/glide/issues/269


box-shadow: 1rem 1rem rgba(255, 0, 0, 0.4)



<!-- 

/*   
/*   inset
/*     clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%); 
   animation-name: diagnol;
 animation-duration: 0.85s; /* or: Xms */
 animation-iteration-count: infinite;
/*  animation-direction: alternate; /* or: normal */ 
 animation-timing-function: cubic-bezier(.17,.67,.38,1.04); /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
 animation-fill-mode: forwards; /* or: backwards, both, none, forwards */
/*  animation-delay: 2s; /* or: Xms */ 
   */



    to-parallelogram 4s infinite forwards cubic-bezier(.17,.67,.38,1.04) 
    to-square 2s infinite forwards cubic-bezier(.17,.67,.38,1.04);



 -->


https://kyledecker.me/work/swiftype
https://www.elastic.co/products/stack/machine-learning
https://www.cityblock.com/careers

FOUC
https://gist.github.com/johnpolacek/3827270
https://stackoverflow.com/questions/46175558/preventing-fouc-when-calling-css-through-a-javascript
https://stackoverflow.com/questions/42228423/set-div-to-hidden-then-visible-after-time-delay
https://stackoverflow.com/questions/3221561/eliminate-flash-of-unstyled-content


swup - tried, ran into errors
https://github.com/gmrchk/swupjs
https://github.com/gmrchk/swupjs-gia-demo/blob/master/src/js/app.js
https://github.com/gmrchk/swup/wiki/Common-Issues
https://next.plnkr.co/edit/yED0KAV2hGsMjYyr?open=lib%2Fscript.js&preview
https://github.com/gmrchk/swup/issues/44





    retain section link when going back
        https://github.com/gmrchk/swup#skip-popstate-handling  ?


            carousel broken on swipe 
        https://github.com/glidejs/glide/issues/311
        https://github.com/glidejs/glide/issues/309



npm install -g zero

https://www.cssgridplayground.com/ 
https://www.matuzo.at/blog/the-dark-side-of-the-grid/
