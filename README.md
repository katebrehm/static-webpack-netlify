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

- headshot: fix image looping
- headshot: mount image loop on section enter/exit
- headshot: content: headshot narrower, pull text left.
- headshot: content: text taller, more space for words
- headshot: image aspect ratio : https://css-tricks.com/aspect-ratios-grid-items/
- headshot: responsive

- bug: fix jumping with trackpad:?  https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions#fullpagejs-jumps-one-section
- bug: projects layout when destroy / rebuild switching types
- bug:  drag and drop intermittent
- nav: hit area bigger

- project detail template (routes)
    - Full width image
    - next back buttons. ie, Gatsby examples page
    - vimeo embed
    - back link / close

- Remove nav on mobile

- intro: animate fragments, boxes
- intro: first load Flash unstyled content
- intro: reponsive content

- projects:  enable/disable on section enter/exit
- projects: !-- - disable full page on narrow. stack on mobile with window matchmedia https://github.com/alvarotrigo/fullPage.js#responsive-auto-height-sections -->
- projects:  quotes ticker, add to admin
- projects:  hover over projects, no cursor on large bpoints where cant drag
- projects:  auto height: https://github.com/glidejs/glide/issues/236
- projects:  carousel broken on swipe
- projects: dont allow click past edges of carousel
- projects: refactor Glide code


 - What is a Movement Director
    use same project detail plumbing
    typeset, layout, some animated gifs
    HIRE ME 

- Research
    paragraph
    links table
        PUBLICATIONS
        EXperiments

- Huff Post quote
    link to artcle

- Teaching
    Lectures
    Workshops
    Book me



#### later
- fix line behind with a psuedo later
- RAM footprint
- rename images/content to content/images 
- intro: split into paragraphs. <br> as an item? refactor intro to rich text?
- add checks for empty json data
- host images outside of GH? 
    https://github.com/netlify/netlify-cms/issues/432
    https://github.com/netlify/netlify-cms/pull/1602
- fix validation
- why isnt handlebars being hot reloaded?
- conditional logic in admin - intro: if it's a plain fragment, how to hide key + image fields?
- dont host 10bm+ files https://www.netlify.com/docs/build-gotchas/#large-files-or-sites
- fullPage license as ENV key, to webpack https://github.com/alvarotrigo/fullPage.js/issues/3544
- set up SSL
- set up custom domain
- webpack image optimizer step
- netlify: disappearing label?
- moves assets to project root
- netlify: image regex validation?
- change colors of diagnal lines on first section?
- use npm package instead of CDN for Netlify admin js
- preload / lazyload images
- netlify: possible to add a list singular label?
- intro: optimize js-hover
- do we want o keep katebrehm GH page.

- #### nice to have
- fix fout https://css-tricks.com/fighting-foit-and-fout-together/
- intro: boxes granim test
- loader to get images 
- set up Uploadcare https://github.com/uploadcare/uploadcare-netlifycms
- extract compile hbs into static js code to separate webpack.xxx.js files
- page transitions with swup
- analytics https://github.com/colbyfayock/html-webpack-partials-plugin
- convert to Gatsby / React or Vue
- optimize CSS load times https://csswizardry.com/2018/11/css-and-network-performance/

#### review
- try on mobile. see intro text vs image?

baking a cake, we dont modify the cake but ingredients and netlify bakes the cake 
FWA
https://www.awwwards.com/




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