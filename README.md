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
- fix jumping with trackpad:?  https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions#fullpagejs-jumps-one-section

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



