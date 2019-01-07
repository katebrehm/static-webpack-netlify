#### dev
$ npm install
$ npm run dev

#### build prod

dont use the name build: https://www.netlify.com/docs/build-gotchas/#build-command
$ npm run siteBuild

# deploy
automatically happens on Netlify when commits are pushed

---

#### todo

- routes 
- nav: top and bottom only

- wire projects carousel
    - move to 2nd panel
    - lighten bg
    - add masks to types
    - 
    - make admin content
    - 6/8 projects
    - disable full page on narrow. stack on mobile with window matchmedia

- project detail template
    - Full width image
    - next back buttons. ie, Gatsby examples page
    - vimeo embed
    - back link / close
    - 
- headshot
    - Photo, not Ken Burns, others yes
    - headshot narrower, pull text left.
    - text taller, more space for words

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


- add typefaces/fonts back
- nav: arrow line longer
- bio: iterate on grid
    - image aspect ratio : https://css-tricks.com/aspect-ratios-grid-items/
    - responsive


#### later

- dont host 10bm+ files https://www.netlify.com/docs/build-gotchas/#large-files-or-sites
- intro: split into paragraphs. <br> as an item? refactor intro to rich text?
- fullPage license as ENV key, to webpack
- fix jumping: https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions#fullpagejs-jumps-one-section
- set up SSL
- set up custom domain
- netlify: disappearing label?
- intro: wire video
- moves assets to project root
- netlify: image regex validation?
- change colors of diagnal lines on first panel?
- use npm package instead of CDN for Netlify admin js
- preload / lazyload images
- netlify: possible to add a list singular label?
- intro panel: Animate test on with boxes, U /D /L/ R


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
