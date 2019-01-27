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

- Remove nav on mobile

- project detail template (routes)
    - Full width image
    - next back buttons. ie, Gatsby examples page
    - vimeo embed
    - back link / close

- intro
    - animate fragments, boxes
    - first load Flash unstyled content
    - reponsive content.

- headshot
    - mount image loop on section enter/exit
    - headshot narrower, pull text left.
    - text taller, more space for words
    - bio: iterate on grid
    - image aspect ratio : https://css-tricks.com/aspect-ratios-grid-items/
    - responsive

- art projects 
    - stagger items 
    - mount/unmount on section enter/exit
    <!-- - disable full page on narrow. stack on mobile with window matchmedia https://github.com/alvarotrigo/fullPage.js#responsive-auto-height-sections -->
    - quotes ticker, add to admin
    - hover over projects, no cursor on large bpoints where cant drag
    - auto height: https://github.com/glidejs/glide/issues/236
    - carousel broken on swipe

- commerical work
     background change from Art project
     a diff set of shapes 

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

- rename images/content to content/images 
- add checks for empty json data
- host images outside of GH? 
    https://github.com/netlify/netlify-cms/issues/432
    https://github.com/netlify/netlify-cms/pull/1602
- fix validation
- set up handlebars-helper webpack plugin
- why isnt handlebars being hot reloaded?
- conditional logic in admin - intro: if it's a plain fragment, how to hide key + image fields?
- dont host 10bm+ files https://www.netlify.com/docs/build-gotchas/#large-files-or-sites
- intro: split into paragraphs. <br> as an item? refactor intro to rich text?
- fullPage license as ENV key, to webpack https://github.com/alvarotrigo/fullPage.js/issues/3544
- fix jumping with trackpad:?  https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions#fullpagejs-jumps-one-section
- set up SSL
- set up custom domain
- webpack image optimizer step
- netlify: disappearing label?
- intro: wire video
- moves assets to project root
- netlify: image regex validation?
- change colors of diagnal lines on first section?
- use npm package instead of CDN for Netlify admin js
- preload / lazyload images
- netlify: possible to add a list singular label?
- intro section: Animate test on with boxes, U /D /L/ R
- intro: optimize js-hover
- do we want o keep katebrehm GH page.
- project page:  Next / previous project.

- #### nice to have
- fix fout https://css-tricks.com/fighting-foit-and-fout-together/
- intro: boxes granim test
- loader to get images 
- try the "what is a movement director" idea
- set up Uploadcare https://github.com/uploadcare/uploadcare-netlifycms
- extract compile hbs into static js code to separate webpack.xxx.js files
- page transitions with swup
- analytics https://github.com/colbyfayock/html-webpack-partials-plugin
- convert to Gatsby / React or Vue

#### review
- take notes in google doc
- email notifications on each deploy?
- accept login
- intro fragments. 
    no space in hoverable. 
    spaces after hoverable. 
    order. 
    image filename. 
    key name. 
    image ratios. 
    compression auto
    key name and image not really optional.
    what happens on the backend, deploy timing.








