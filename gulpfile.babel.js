'use strict';

import plugins  from 'gulp-load-plugins';
import yargs    from 'yargs';
import browser  from 'browser-sync';
import gulp     from 'gulp';
import panini   from 'panini';
import rimraf   from 'rimraf';
import sherpa   from 'style-sherpa';
import yaml     from 'js-yaml';
import fs       from 'fs';
// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Load settings from settings.yml
const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build',
  gulp.series(clean, gulp.parallel(pages, sass, javascript, images, copy), styleGuide)
);

gulp.task('guide',
  gulp.series(clean, gulp.parallel(stylePages, copy), styleGuide)
);

// Build the site, run the server, and watch for file changes

gulp.task('default',
  gulp.series('build', server, watch)
);
  
gulp.task('clean', 
  gulp.series(clean)
);

gulp.task('images', 
  gulp.series(gulp.parallel(images)));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(PATHS.dist, done);
}

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
function copy() {
  return gulp.src(PATHS.assets) 
    .pipe(gulp.dest(PATHS.dist));  
}

// Copy page templates into finished HTML files
function pages() {
  return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist));
}

// Copy page templates into finished HTML files
function stylePages() {
  return gulp.src('src/pages/styleguide/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist + '/styleguide'));
}

// Load updated HTML templates and partials into Panini
function resetPages(done) {
  panini.refresh();
  done();
}

// Generate a style guide from the Markdown content and HTML template in styleguide/

function styleGuide(done) {
  sherpa('src/styleguide/index_fm.md', {
    output: PATHS.dist + '/styleguide/styleguide_fm.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideCorp(done) ); 
}
function styleGuideCorp(done) {
  sherpa('src/styleguide/index_corp.md', {
    output: PATHS.dist + '/styleguide/styleguide_corp.html',
    template: 'src/styleguide/template_corp.html'
  }, styleGuideScripts(done) ); 
}
function styleGuideScripts(done) {
  return sherpa('src/styleguide/scripts_corp.md', {
    output: PATHS.dist + '/styleguide/styleguide_scripts_corp.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideGrid(done)); 
}
function styleGuideGrid(done) {
  return sherpa('src/styleguide/grid.md', {
    output: PATHS.dist + '/styleguide/styleguide_grid.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideFluid(done)); 
}
function styleGuideFluid(done) {
  return sherpa('src/styleguide/fluidtype.md', {
    output: PATHS.dist + '/styleguide/styleguide_fluid.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideAbide(done)); 
}
function styleGuideAbide(done) {
  return sherpa('src/styleguide/abide.md', {
    output: PATHS.dist + '/styleguide/styleguide_abide.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideEmbeds(done)); 
}
function styleGuideEmbeds(done) {
  return sherpa('src/styleguide/embeds.md', {
    output: PATHS.dist + '/styleguide/styleguide_embeds.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideOrbit(done)); 
}
function styleGuideOrbit(done) {
  return sherpa('src/styleguide/orbit.md', {
    output: PATHS.dist + '/styleguide/styleguide_orbit.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideTabs(done)); 
}
function styleGuideTabs(done) {
  return sherpa('src/styleguide/tabs.md', {
    output: PATHS.dist + '/styleguide/styleguide_tabs.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideReveal(done)); 
}
function styleGuideReveal(done) {
  return sherpa('src/styleguide/reveal.md', {
    output: PATHS.dist + '/styleguide/styleguide_reveal.html',
    template: 'src/styleguide/template_foundation.html'
  }, styleGuideMF(done)); 
}
function styleGuideMF(done) {
  sherpa('src/styleguide/index_mf.md', {
    output: PATHS.dist + '/styleguide/styleguide_mf.html',
    template: 'src/styleguide/template_mf.html'
  }, done);
}
function styleGuideSF(done) {
  sherpa('src/styleguide/index_sf.md', {
    output: PATHS.dist + '/styleguide/styleguide_sf.html',
    template: 'src/styleguide/template_sf.html'
  }, done);
}
function styleGuideCM(done) {
  sherpa('src/styleguide/index_cm.md', {
    output: PATHS.dist + '/styleguide/styleguide_cm.html',
    template: 'src/styleguide/template_cm.html'
  }, done);
}
// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('src/assets/scss/{app_,home}*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.if(PRODUCTION, $.cssnano({safe: true, minifyGradients: false, calc:false, zindex:false, colormin:false, reduceInitial:false,autoprefixer: false})))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/ss'))
    .pipe(browser.reload({ stream: true }));
}

// Combine JavaScript into one file
// In production, the file is minified
function javascript(done) {
  var landing = [];
  gulp.src(PATHS.javascriptcorp)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_corp.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  gulp.src(PATHS.javascriptcorpalt)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_corp_alt.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  gulp.src(PATHS.javascriptsf)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_sf.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  gulp.src(PATHS.javascriptmf)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_mf.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  gulp.src(PATHS.javascriptcm)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_cm.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  gulp.src(PATHS.javascriptmfsbl)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_mf_sbl.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/multifamily/new_standard/sbl/'));
  landing = PATHS.javascriptLanding;
  landing.push("src/assets/js/appBetterHousing.js");
  gulp.src(landing)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_bhf.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  landing = PATHS.javascriptLanding;
  landing.push("src/assets/js/appBof.js");
  gulp.src(landing)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('appBof.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  done();
}


// Copy images to the "dist" folder
function images() {
  return gulp.src('src/assets/img/**/*')
    .pipe(gulp.dest(PATHS.dist + '/images'));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
  browser.init({
    server: PATHS.dist, port: PORT, ws: 'http://o365proxy.fhlmc.com'
  });
  done();
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  gulp.watch(PATHS.assets, copy);
  gulp.watch('src/pages/**/files/**/*').on('change', gulp.series(copy, browser.reload));
  gulp.watch('src/pages/**/images/*').on('change', gulp.series(copy, browser.reload));
  gulp.watch('src/pages/**/**/images/*').on('change', gulp.series(copy, browser.reload));
  gulp.watch('src/pages/**/*.html').on('change', gulp.series(pages, browser.reload));
  gulp.watch('src/{layouts,partials}/**/*.html').on('change', gulp.series(resetPages, pages, browser.reload));
  gulp.watch('src/assets/scss/**/*.scss').on('change', gulp.series(sass, browser.reload));
  gulp.watch('src/assets/js/**/*.js').on('change', gulp.series(javascript, browser.reload));
  gulp.watch('src/assets/img/**/*').on('change', gulp.series(images, browser.reload));
  gulp.watch('src/styleguide/*').on('change', gulp.series(styleGuide, browser.reload));
}
