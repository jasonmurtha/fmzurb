<title>Styleguide: Orbit Carousels</title>

# Orbit Carousel Basics

<p class="lead">Each carousel is made up of a wrapper, a slide container, slides, and slide navigation including bullets and prev/next buttons.</p>

**Slide wrapper**
- The wrapper for the carousel should use the `.orbit` class and contain a `data-orbit` attribute and a `role="region"` attribute.  
-  For assistive technology, provide an `aria-label` attribute that describes the carousel contents.  The wrapper groups the slides and the slide navigation together.

**Slide Container**
- The container for the slides is a `ul` with the class `.orbit-container`.  (If you are designing your own with a custom class, define it on the wrapper using the `data-container-class` attribute.)

**Slides**
- The slide container houses each individual slide. Each slide is an `<li>` with the class `.orbit-slide`. (If you are designing your own with a custom class, define it on the wrapper using the `data-slide-class` attribute.)  
- The initial slide you want displayed should also have the class `.is-active`  -- if you want the first slide to be the initial slide, you can omit this class. 
- You can place any HTML you want inside of the slide, but we have some premade styles for image gallery style slides.
- To make an entire slide a solid color, include `.background-xxx` class (where xxx is green, orange, primary, blue, teal, gray, yellow, red, purple) on the <code>.orbit-slide</code> container.

**Slide Navigation**
- [Slide navigation](#carousel-navigation) will be **automatically inserted for you** unless you add an attribute of `data-automate-nav="false"` to the wrapper.
- To opt for the all white navigation that appears all in one row, overlapping the bottom of the slide panel, add class `.bullets-overlay` to the wrapper.
- To opt to attach the orbit-controls to a container other than the wrapper, add attribute `data-nav-parent-class` to the wrapper, and set the value to the class of the desired parent. For example, `data-nav-parent-class="orbit-container"` will vertically center the prev/next buttons based on the height of the slides, not the combined height of slide and bullet nav. 
- You have the option of [omitting or customizing](#customization-options) the navigation elements.

**Slide Transition**
- By default, slides transition every 5 seconds (5000 milliseconds).  
- You can customize the timing of the delay by defining it on the wrapper using the `data-timer-delay` attribute and providing a value that is the number of milliseconds to dalay.
- You can prevent the auto-play functionality by adding the attribute `data-auto-play="false"`.

**Slide Animation**
- The default animation for the carousel is slide out the existing slide while sliding in the replacement slide (direction based on whether you are moving forward or backward through the slides).  
- You have the option of disabling or changing the [slide animation](#slide_animation).

<div class="callout background-blue">
  <p class="flex-up">If you are going to use the built in controls for Orbit, avoid applying padding or margin (or gutter classes) to the orbit container, the slide container, or the slide elements. If you need additional white-space around a rotator, wrap it in a div and apply the extra padding or margins to that element.</p>
</div>



# Content Carousels

## Plain Jane Carousel

Example set inside a `.background-concrete` container to show the edges of the orbit wrapper, and how the default bullet nav is held to the bottom of the wrapper, regardless of the height of each slide.
- **Omit**  `.background-concrete` outer container.
- Layout Hint: If you wrap each slide's contents in a `div` with classes `.callout` and `.large`, the slide's content wills avoid overlapping the navigation buttons and bullets.

```html_example
<div class="background-concrete">
  <!-- omit outer callout div when copying this code -->
  <div class="orbit" role="region" aria-label="This is my slideshow" data-orbit>
    <ul class="orbit-container">
      <li class="orbit-slide">
        <div class="callout large">
          <h3>Slide One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="text-center"><img src="files/plant1-thumb.jpg" /></div>
        </div>
      </li>
      <li class="orbit-slide">
        <div class="callout large">
          <h3>Slide Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p class="text-center"><a class="button">Button Link</a></p>
        </div>
      </li>
      <li class="orbit-slide">
        <div class="callout large">
          <h3>Slide Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p class="text-right"><a class="button large">Button Link</a></p>
        </div>
      </li>
    </ul>
  </div>
</div>
```

---

## Bullet only Navigation, Shown below Slides

Example with `data-auto-play="false"` and `data-nav-buttons="false"`, and each slide using a different background color.

```html_example
<div class="orbit" role="region" aria-label="This is my slideshow" data-orbit data-auto-play="false" data-nav-buttons="false">
  <ul class="orbit-container">
    <li class="orbit-slide background-yellow">
      <div class="callout">
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><img src="files/plant1-thumb.jpg" /></p>
      </div>
    </li>
    <li class="orbit-slide background-green">
      <div class="callout">
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-orange">
      <div class="callout">
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </div>
    </li>
  </ul>
</div>
```

---

## White Overlay Navigation with Buttons and Bullets

Example with `.bullets-overlay` class, `data-auto-play="false"`, and slides using background colors.

```html_example
<div class="orbit bullets-overlay" role="region" aria-label="This is my slideshow" data-orbit data-auto-play="false">
  <ul class="orbit-container">
    <li class="orbit-slide background-red">
      <div class="callout">
        <h3>Slide Four</h3>
        <div class="float-right gutter-left"><img src="files/plant1-thumb.jpg" /></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul>
        <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
        <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-purple">
      <div class="callout">
        <h3>Slide Five</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-blue">
      <div class="callout">
        <h3>Slide Six - Example Without a Button</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
        <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
        <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
      </div>
    </li>
    <li class="orbit-slide background-teal">
      <div class="callout">
        <h3>Slide Seven</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p class="text-center"><a class="button hollow large">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-gray">
      <div class="callout">
        <h3>Slide Nine</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p><a class="button hollow">Button Link</a></p>
      </div>
    </li>
  </ul>
</div>
```

---

## Carousel with Columns Inside Slides 

Notice that the number of slides does not change between large and small widths -- the contents merely stack and unstack within each slide.
This example also defines `data-nav-parent-class` to vertically align the buttons to the slide height instead of the full orbit height.

```html_example
<div class="background-concrete">
  <!-- omit outer callout div when copying this code -->
  <div class="orbit" role="region" aria-label="This is my slideshow" data-orbit data-nav-parent-class="orbit-container">
    <ul class="orbit-container">
      <li class="orbit-slide">
        <div class="callout large">
          <h3 class="text-center">Slide One With Columns</h3>
          <div class="row">
            <div class="column medium-4">
              <p class="text-center"><img src="files/orbit/01.jpg" /></p>
            </div>
            <div class="column medium-4">
              <div class="callout small">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit labore.</p>
              </div>
            </div>
            <div class="column medium-4">
              <p class="text-center"><img src="files/orbit/02.jpg" /></p>
            </div>
          </div>
        </div>
      </li>
      <li class="orbit-slide">
        <div class="callout large">
          <h3 class="text-center">Slide Two With Columns</h3>
          <div class="row">
            <div class="column medium-4">
              <p class="text-center"><img src="files/orbit/03.jpg" /></p>
            </div>
            <div class="column medium-4">
              <div class="callout small">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit labore.</p>
              </div>
            </div>
            <div class="column medium-4">
              <p class="text-center"><img src="files/orbit/04.jpg" /></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
```

---

## Content Carousel with Large Images

In this example, **images do not stretch** to fill as they do in [image carousels](#image-carousels), and captions will effect the vertically centered positioning of the prev/next buttons. (To prevent the bullet nav from further affecting the positioning, include attribute `data-nav-parent-class="orbit-container"` on the wrapper.)
- To force an image to stretch to the full width of the slide, add class `.orbit-image` and/or include the image in a `figure` tag.  

```html_example
<div class="row">
  <div class="column large-11 xlarge-10 large-centered">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-nav-parent-class="orbit-container" data-auto-play="false">
      <ul class="orbit-container">
        <li class="orbit-slide">
          <div class="text-center clearfix">
            <img src="files/plant1.jpg" alt="flower">
            <p>Lovely Flower.</p>
          </div>
        </li>
        <li class="orbit-slide">
          <div class="text-center clearfix">
            <img src="files/plant2.jpg" alt="flower">
            <p>So pretty.</p>
            <p>Quite pretty.</p>
            <p>Totally pretty.</p>
          </div>
        </li>
        <li class="orbit-slide is-active">
          <div class="text-center clearfix">
            <img src="files/plant3.jpg" alt="flower">
            <p>I love to garden. Do you love to garden?</p>
            <p>Do you know anyone whoe likes to garden? I'd love to meet them!</p>
          </div>
        </li>
        <li class="orbit-slide">
          <div class="text-center clearfix">
            <img src="files/plant4.jpg" alt="flower">
            <p>Springtime.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
```



# Image Carousels

<p class="lead">Depending upon your planned design, there are two options for including Image Carousels -- depending on whether you want the image and the caption to stretch to fill their ccontainer.</p> 

- Any `image` and `figcaption` inside a `figure` element will **always** stretch to the full width of the figure.
- To force an image outside of a `figure` element to stretch to the full width of the slide, add class `.orbit-image`.
- To override the 1px border on the images, add class `.no-border` to each image.

Regardless of which option you choose: 
- Try to make sure your images are all similar in size and proportion.  
- Each image should still have an `alt` attribute, even if it has an associated caption.
- Captions can contain additional markup -- from blockquotes to paragraphs to text formatting.
- Image carousels **cannot** be used inside a modal window -- instead refer to [Image Gallery Modal](styleguide_reveal.html#image-gallery-modal).

---

## Image Carousel with Non-Overlay Caption

In this example, each caption is decorated differently using the design options for [callouts](styleguide_fm.html#callouts) and the images include class `no-border`.
- Non-overlay captions work best when all captions are similar in length. In this example, the last caption requires three lines, while others require just one, so the navigation appears disconnected. 

```html_example
<div class="row">
  <div class="medium-9 large-8 column medium-centered">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-auto-play="false" data-nav-parent-class="orbit-container">
      <ul class="orbit-container">
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant1.jpg" alt="plant 1">
            <figcaption class="callout background-yellow text-center">This is a center aligned caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant2.jpg" alt="plant 2">
            <figcaption class="callout background-gray">This is a left aligned caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant3.jpg" alt="plant 3">
            <figcaption class="callout background-concrete text-right">This is a right aligned caption</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant4.jpg" alt="plant 4">
            <figcaption class="callout hollow">Avoid having a caption with more<br>rows of text than the others.<br>It affects the navigation positioning.</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Image Carousel with Bottom Overlay Caption

In this example, the images use class `.orbit-image` and the caption overlays the bottom of the image due to the use of the `.orbit-caption` class, thus preventing the caption from affecting the slide height. 
- In this design, one caption can be longer than the rest, without affecting the navigation position, but it will affect how much of the image is covered by the caption.

```html_example
<div class="row">
  <div class="medium-8 column medium-centered">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-nav-parent-class="orbit-container" data-auto-play="false">
      <ul class="orbit-container">
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image no-border" src="files/plant1.jpg" alt="plant 1">
            <figcaption class="orbit-caption">Default - center aligned caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image no-border" src="files/plant2.jpg" alt="plant 2">
            <figcaption class="orbit-caption"><p class="text-left">Left-aligned caption.</p>
            <p class="text-left">With more than one paragraph.</p></figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image no-border" src="files/plant3.jpg" alt="plant 3">
            <figcaption class="orbit-caption">
              <p class="text-left show-for-medium">(example below is how a blockquote would appear, and shows how a multiline caption looks) </p>
              <blockquote>
                <p>"The lights burn blue. It is now dead midnight."</p>
                <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
              </blockquote>
            </figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image no-border" src="files/plant4.jpg" alt="plant 4">
            <figcaption class="orbit-caption">This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption. </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Image Carousel with Top Overlay Caption

In this example, the caption overlays the top of the image due to the use of the `.orbit-title` class.   

```html_example
<div class="row">
  <div class="medium-8 column medium-centered">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-nav-parent-class="orbit-container" data-auto-play="false">
      <ul class="orbit-container  background-gray">
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant1.jpg" alt="plant 1">
            <figcaption class="orbit-title">Default - center aligned top caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant2.jpg" alt="plant 2">
            <figcaption class="orbit-title">Title of Slide</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant3.jpg" alt="plant 3">
            <figcaption class="orbit-title">"The lights burn blue. It is now dead midnight."</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant4.jpg" alt="plant 4">
            <figcaption class="orbit-title">This title is longer than the others to show how things look when the title is long enough to wrap across multiple lines. </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Image Carousel with Bottom AND Top Captions

Be careful combining these -- at smaller screen sizes, long text can mostly cover the image.   

```html_example
<div class="row">
  <div class="medium-8 column medium-centered">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-nav-parent-class="orbit-container" data-auto-play="false">
      <ul class="orbit-container  background-gray">
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant1.jpg" alt="plant 1">
            <figcaption class="orbit-title">Default - center aligned top caption.</figcaption>
            <figcaption class="orbit-caption">Default - center aligned caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant2.jpg" alt="plant 2">
            <figcaption class="orbit-title">Title of Slide</figcaption>
            <figcaption class="orbit-caption"><p class="text-left">Left-aligned caption.</p>
            <p class="text-left">With more than one paragraph.</p></figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant3.jpg" alt="plant 3">
            <figcaption class="orbit-title">"The lights burn blue. It is now dead midnight."</figcaption>
            <figcaption class="orbit-caption">
              <p class="text-left show-for-medium">(example below is how a blockquote would appear, and shows how a multiline caption looks) </p>
              <blockquote>
                <p>"The lights burn blue. It is now dead midnight."</p>
                <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
              </blockquote>
            </figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="no-border" src="files/plant4.jpg" alt="plant 4">
            <figcaption class="orbit-title">This title is longer than the others to show how things look when the title is long enough to wrap across multiple lines. </figcaption>
            <figcaption class="orbit-caption">This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption. </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```



# Carousel Navigation

<p class="lead">The following navigation examples will **automatically be inserted** on any carousel unless the wrapper has an attribute of `data-automate-nav="false"`.</p>

Orbit controls use the class `.orbit-previous` and `.orbit-next`. 
- To opt to attach the orbit-controls to a container other than the wrapper, add attribute `data-nav-parent-class` to the wrapper, and set the value to the class of the desired parent.  For example, `data-nav-parent-class="orbit-container"` will vertically center the prev/next buttons based on the height of the slides, not the combined height of slide and bullet nav. 
- You have the option of [customizing controls](#custom-controls) or [omitting the controls](#omit-controls).

```html
<div class="orbit-controls">
  <button class="orbit-previous"><span class="show-for-sr">previous slide</span><svg aria-hidden="true" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="14 14 22 22"><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/></svg></button>
  <button class="orbit-next"><span class="show-for-sr">next slide</span><svg aria-hidden="true" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="14 14 22 22"><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"/></svg></button>
</div>
```

The bullets serve two purposes: they mark the current slide, and can be clicked on to navigate to another slide. Like with the controls, the bullets also have screen reader-friendly labels.
- To omit the bullet portion of the nav, add attribute `data-bullets="false"` to the wrapper.

```html
<nav class="orbit-bullets">
  <button data-slide="0"><span class="show-for-sr">Slide 1.</span></button>
  <button data-slide="1"><span class="show-for-sr">Slide 2.</span></button>
  <button data-slide="2"><span class="show-for-sr">Slide 3.</span></button>
  <button data-slide="3"><span class="show-for-sr">Slide 4.</span></button>
</nav>
```

The combination controls and bullets option used for carousels with `.bullets-overlay` class.

```html
<div class="orbit-controls">
  <button class="orbit-previous"><span class="show-for-sr">previous slide</span><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="14 14 22 22" width="1em" height="1em"><path d="M 27.3 34.7 L 17.6 25 l 9.7 -9.7 l 1.4 1.4 l -8.3 8.3 l 8.3 8.3 Z" /></svg></button>
  <nav class="orbit-bullets">
    <button data-slide="0"><span class="show-for-sr">slide 1</span></button>
    <button data-slide="1"><span class="show-for-sr">slide 2</span></button>
    <button data-slide="2"><span class="show-for-sr">slide 3</span></button>
  </nav>
  <button class="orbit-next"><span class="show-for-sr">next slide</span><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="14 14 22 22" width="1em" height="1em"><path d="M 22.7 34.7 l -1.4 -1.4 l 8.3 -8.3 l -8.3 -8.3 l 1.4 -1.4 l 9.7 9.7 Z" /></svg></button>
</div>
```



# Customization Options

<p class="lead">You can choose to omit or customize the slide controls and bullets.</p> 

## Omit Slide Navigation Bullets

- Set attribute `data-bullets` to "false" to omit the bullets. 

```html_example
<div class="row">
  <div class="medium-8 large-6 xlarge-5 column medium-centered">
    <div class="orbit" role="region" aria-label="My slides" data-orbit data-bullets="false">
      <ul class="orbit-container">
        <li class="orbit-slide">
          <p><img class="orbit-image no-border" src="files/plant3.jpg" alt="flower"></p>
          <figcaption class="orbit-caption">Nullam id dolor id nibh ultricies vehicula ut id elit.</figcaption>
        </li>
        <li class="orbit-slide">
          <p><img class="orbit-image no-border" src="files/plant1.jpg" alt="flower"></p>
          <figcaption class="orbit-caption">Aenean lacinia bibendum nulla sed consectetur. </figcaption>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Omit Previous/Next Controls <span id="omit-controls"></span>

Set attribute `data-nav-buttons` to "false" to omit the prev/next buttons and their event handlers.  

```html_example
<div class="row">
  <div class="large-8 xlarge-7 column large-centered">
    <div class="orbit" role="region" aria-label="Helping Borrowers" data-orbit data-nav-buttons="false">
      <ul class="orbit-container">
        <li class="orbit-slide background-gray">
          <figure>
            <img class="no-border" alt="Keeping Rent Low" src="http://www.freddiemac.com/about/images/KeepingRentsLow.png" />
            <figcaption class="orbit-caption">
              <p class="text-right"><a href="https://www.multihousingnews.com/post/greystone-provides-221m-loan-for-ca-affordable-housing/">Learn More<span class="show-for-sr"> about keeping rents low</span></a></p>
            </figcaption>
          </figure>
        </li>
        <li class="orbit-slide background-gray">
          <figure>
            <img alt="Next Step" src="http://www.freddiemac.com/about/images/ManufacturedHousing.png" />
            <figcaption class="orbit-caption">
              <p class="text-right"><a href="http://freddiemac.mwnewsroom.com/press-releases/freddie-mac-works-to-increase-homebuyer-readiness--otcqb-fmcc-1304319">Learn More<span class="show-for-sr"> about next steps</span></a></p>
            </figcaption>
          </figure>
        </li>
        <li class="orbit-slide background-gray">
          <figure>
            <img alt="borrower help centers" src="http://www.freddiemac.com/about/images/HelpingBorrowers.png" />
            <figcaption class="orbit-caption">
              <p class="text-right"><a href="http://www.freddiemac.com/singlefamily/housingpros/help_centers.html">Learn More<span class="show-for-sr"> about borrower help centers</span></a></p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Shift Previous/Next Controls Outside of Slide Container

In this example, the wrapper has an extra class of `.orbit-controls-outside` to shift the position of the controls outside of the orbit container and make them larger.
- Do not combine this option with `data-nav-parent-class="orbit-container"` which shifts controls inward.

```html_example
<div class="row">
  <div class="medium-9 large-8 xlarge-7 column medium-centered">
    <div class="orbit orbit-controls-outside" role="region" aria-label="My slides" data-orbit data-bullets="false">
      <ul class="orbit-container">
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image" src="files/plant3.jpg" alt="flower">
            <figcaption class="orbit-caption weight-bold">Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image" src="files/plant1.jpg" alt="flower">
            <figcaption class="orbit-caption weight-bold">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>    
```

---

## Customize Previous/Next Controls <span id="custom-controls"></span>

You can opt to not use the automated controls at all, and build your own, or you can simply modify the style of the eixsting controls.

Step One: Define your new button styles using custom css classes:

```css
.button-prev-custom {
  font-size: 3em;
  float: left;
}
.button-next-custom {
  font-size: 3em;
  float: right;
}
.button-next-custom svg,
.button-prev-custom svg {
  fill: #999;
  stroke-width: 1px;
  stroke: #990000;
}
```

<style>
.button-prev-custom {
  font-size: 3em;
  float: left;
}
.button-next-custom {
  font-size: 3em;
  float: right;
}
.button-next-custom svg,
.button-prev-custom svg {
  fill: #999;
  stroke-width: 1px;
  stroke: #990000;
}
</style>

Step Two: On the wrapper, set attributes `data-next-class` and `data-prev-class` to the custom button classes you created:

```html_example
<div class="orbit orbit-controls-outside" role="region" aria-label="My slides" data-orbit data-next-class="button-next-custom" data-prev-class="button-prev-custom">
  <ul class="orbit-container">
    <li class="orbit-slide background-teal">
      <div class="callout">
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="text-center"><img src="files/plant1-thumb.jpg" /></div>
      </div>
    </li>
    <li class="orbit-slide  background-teal">
      <div class="callout">
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide  background-teal">
      <div class="callout">
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </div>
    </li>
  </ul>
</div>
```

---

## Customize Navigation Bullets <span id="custom-bullets"></span>

Step One: Define your new bullets container style using custom css classes, and style buttons inside that container:

```css
.bullets-box-custom {
  border: 4px solid #00a19a;
  border-top-width: 0;
  text-align: center;
  margin-bottom: 1rem;
}
.bullets-box-custom button {
  display: inline-block;
  background-color: #00a19a;
  height: 1rem;
  width: 1rem; 
  margin: 1rem; 
  opacity: 0.5;  
  b
```

<style>
.bullets-box-custom {
  border: 4px solid #00a19a;
  border-top-width: 0;
  text-align: center;
  margin-bottom: 1rem;
}
.bullets-box-custom button {
  display: inline-block;
  background-color: #00a19a;
  height: 1rem;
  width: 1rem; 
  margin: 1rem; 
  opacity: 0.5;  
  border-radius: 0;
}
.bullets-box-custom button.is-active {
  opacity: 1;
}
</style>

Step Two: On the wrapper, set attribute `data-box-of-bullets` to the custom class you created. (This example also sets `data-nav-buttons` to false to disable the prev/next buttons):

```html_example
<div class="orbit" role="region" aria-label="My slides" data-orbit  data-nav-buttons="false" data-box-of-bullets="bullets-box-custom">
  <ul class="orbit-container">
    <li class="orbit-slide background-teal">
      <div class="callout">
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="text-center"><img src="files/plant1-thumb.jpg" /></div>
      </div>
    </li>
    <li class="orbit-slide  background-teal">
      <div class="callout">
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide  background-teal">
      <div class="callout">
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </div>
    </li>
  </ul>
</div>
```

---

## Design Your Own Navigation by Replacing the Controls and Bullets

<p class="lead">You can choose to omit the default navigation and completely design your own custom controls and bullets.</p> 

Step One, define the custom css for the elements you want to create.
 
```css
.orbit-thumbnails {
  margin: 0;
  background: #111;
  padding: 1rem 0;
  text-align: center; 
}
  @media screen and (max-width: 35.60938em) {
    .orbit-thumbnails {
      display: table;
      width: 100%;
      padding: 1rem; 
    } 
  }
.button-thumbnail {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ffffff;
  border-radius: 0;
  opacity: 1; 
}
  @media screen and (max-width: 35.60938em) {
    /* small screen only, treat as table cells */
    .button-thumbnail {
      height: 4rem;
      display: table-cell; 
    } 
  }
  @media print, screen and (min-width: 35.625em) {
    .button-thumbnail {
      height: 5rem;
      width: 9rem; 
    } 
  }
.button-thumbnail:hover, .button-thumbnail:focus, .button-thumbnail.is-active {
    opacity: 0.65; 
}
.nav-thumbnail {
  background: none;
  font-size: 3rem;
  color: #eee;
}
```

<style>
.orbit-thumbnails {
  margin: 0;
  background: #111;
  padding: 1rem 0;
  text-align: center; 
}
  @media screen and (max-width: 35.60938em) {
    /* small screen only, treat as table cells */
    .orbit-thumbnails {
      display: table;
      width: 100%;
      padding: 1rem; 
    } 
  }
.button-thumbnail {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ffffff;
  border-radius: 0;
  opacity: 1; 
}
  @media screen and (max-width: 35.60938em) {
    .button-thumbnail {
      height: 4rem;
      display: table-cell; 
    } 
  }
  @media print, screen and (min-width: 35.625em) {
    .button-thumbnail {
      height: 5rem;
      width: 9rem; 
    } 
  }
.button-thumbnail:hover, .button-thumbnail:focus, .button-thumbnail.is-active {
    opacity: 0.65; 
}
.nav-thumbnail {
  background: none;
  font-size: 3rem;
}
</style>

Step Two, create your custom HTML.

- Simple add an attribute of `data-automate-nav="false"` to the wrapper to omit the default buttons and bullets, and then create your own 
- Be sure your custom navigation includes accessibility hooks, such as screen reader-only text (wrapped in the class `.show-for-sr`), that explain what the controls do.
- You can even customize the [slide animation](#slide_animation).

```html_example
<div class="row">
  <div class="large-10 xlarge-9 column large-centered">
    <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-automate-nav="false" data-box-of-bullets="orbit-thumbnails"  data-options="animInFromLeft:hinge-in-from-bottom; animInFromRight:hinge-in-from-top; animOutToLeft:hinge-out-from-bottom; animOutToRight:hinge-out-from-top;">
      <nav class="orbit-thumbnails">
        <button data-slide="0" style="background-image: url(files/orbit/thumb01.jpg)" class="button-thumbnail"><span class="show-for-sr">slide 1</span></button>
        <button data-slide="1" style="background-image: url(files/orbit/thumb02.jpg)" class="button-thumbnail"><span class="show-for-sr">slide 2</span></button>
        <button data-slide="2" style="background-image: url(files/orbit/thumb03.jpg)" class="button-thumbnail"><span class="show-for-sr">slide 3</span></button>
        <button data-slide="3" style="background-image: url(files/orbit/thumb04.jpg)" class="button-thumbnail"><span class="show-for-sr">slide 3</span></button>
      </nav>
      <div class="orbit-controls">
        <button class="orbit-previous nav-thumbnail"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
        <button class="orbit-next nav-thumbnail"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
      </div>
      <ul class="orbit-container background-black">
        <li class="is-active orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/01.jpg" alt="Space 1">
            <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/02.jpg" alt="Space 2">
            <figcaption class="orbit-caption">Lets Rocket!</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/03.jpg" alt="Space 3">
            <figcaption class="orbit-caption">Encapsulating</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/04.jpg" alt="Space 4">
            <figcaption class="orbit-caption">Outta This World</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Changing the Slide Animation <span id="slide_animation"></span>

Orbit uses [Motion UI](http://foundation.zurb.com/sites/docs/motion-ui.html) CSS classes to animate slides around.

There are four plugin options you can set to change the default effects:
- `data-anim-in-from-left`: transition to play when a slide comes *in from the left*.
- `data-anim-in-from-right`: transition to play when a slide comes *in from the right*.
- `data-anim-out-from-left`: transition to play when a slide comes *out from the left*.
- `data-anim-out-from-right`: transition to play when a slide comes *out from the right*.

Since those option names are pretty *long*, you can also set them all in one HTML attribute, using `data-options`.

By default, slides transition every 5 seconds (5000 milliseconds). 
- You can customize the timing of the delay by defining it on the wrapper using the `data-timer-delay` attribute and providing a value that is the number of milliseconds to dalay.

---

Below is an example of the same image carousel shown above, but with a **fade-in/fade-out** animation.

```html_example
<div class="row">
  <div class="medium-9 large-8 xlarge-7 column medium-centered">
    <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
      <ul class="orbit-container">
        <li class="is-active orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/01.jpg" alt="Space">
            <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/02.jpg" alt="Space">
            <figcaption class="orbit-caption">Lets Rocket!</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/03.jpg" alt="Space">
            <figcaption class="orbit-caption">Encapsulating</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/04.jpg" alt="Space">
            <figcaption class="orbit-caption">Outta This World</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>    
</div>
```

Below is an example of the same image carousel shown above, but with a **hinge-in/hinge-out** animation, and `data-timer-delay` set to 7500 milliseconds.

```html_example
<div class="row">
  <div class="medium-9 large-8 xlarge-7 column medium-centered">
    <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-timer-delay="7500" data-options="animInFromLeft:hinge-in-from-left; animInFromRight:hinge-in-from-right; animOutToLeft:hinge-out-from-left; animOutToRight:hinge-out-from-right;">
      <ul class="orbit-container background-black">
        <li class="is-active orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/01.jpg" alt="Space">
            <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/02.jpg" alt="Space">
            <figcaption class="orbit-caption">Lets Rocket!</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/03.jpg" alt="Space">
            <figcaption class="orbit-caption">Encapsulating</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure class="orbit-figure">
            <img class="orbit-image" src="files/orbit/04.jpg" alt="Space">
            <figcaption class="orbit-caption">Outta This World</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

### Disabling Transition Animation

To disable the animation (slide, fade, etc), set the `data-use-m-u-i` attribute to "false".  To stop the auto-play functionality, set the `data-auto-play` attribute to "false".

```html
<div class="orbit" role="region" aria-label="Example with animation disabled" data-orbit data-auto-play="false" data-use-m-u-i="false">
</div>
```



# JavaScript Events

These events will fire from any element with a Orbit plugin attached, allowing you to add JavaScrpt hooks into a carousel to trigger an action outside of the carousel.

| Event Name                 | Description                                                                              |
|----------------------------|------------------------------------------------------------------------------------------|
|`beforeslidechange.zf.orbit`|Triggers before the next slide starts animating in (only if a next slide has been found). |
|`slidechange.zf.orbit`      |Triggers when a slide has finished animating in (adding class `.is-active` to the slide). |


This example hides an external callour using the `beforeslidechange.zf.orbit` event, and then slides down a new callout using the `slidechange.zf.orbit` trigger.

```javascript
function syncOrbitWithPanel(){  
  $('#orbit-trigger').on('beforeslidechange.zf.orbit', function() {  
    $('#orbit-target').find('.callout:visible').hide();      
  }); 
  $('#orbit-trigger').on('slidechange.zf.orbit', function() {  
    var x = $('#orbit-trigger').find('li.is-active').index();
    $('#orbit-target').find('.callout:eq('+x+')').slideDown('500');
  }); 
}
syncOrbitWithPanel();
```

<script>
function syncOrbitWithPanel(){  
  $('#orbit-trigger').on('beforeslidechange.zf.orbit', function() {  
    $('#orbit-target').find('.callout:visible').hide();      
  }); 
  $('#orbit-trigger').on('slidechange.zf.orbit', function() {  
    var x = $('#orbit-trigger').find('li.is-active').index();
    $('#orbit-target').find('.callout:eq('+x+')').slideDown('500');
  }); 
}
window.onload = syncOrbitWithPanel;  
</script>

Then write your custom layout based on the items you've scripted.

```html_example
<div class="row">
  <div class="column medium-6 large-5">
    <div class="orbit" role="region" id="orbit-trigger" aria-label="Flower Pictures" data-orbit data-nav-parent-class="orbit-container">
      <ul class="orbit-container">
        <li class="orbit-slide is-active">
          <figure>
            <img class="orbit-image" src="files/plant1.jpg" alt="plant 1">
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image" src="files/plant2.jpg" alt="plant 2">
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="orbit-image" src="files/plant3.jpg" alt="plant 3">
          </figure>
        </li>
      </ul>
    </div>
  </div>  
  <div class="medium-6 large-7 column">
    <div id="orbit-target" class="gutter-left">
      <p class="weight-normal">Content in this column will change each time the associated slide changes.</p>
      <div class="callout background-orange">
        <h2>Sample Markup to go with Slide 1</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      <div class="callout background-primary" style="display: none;">
        <h2>Sample Markup to go with Slide 2</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      <div class="callout background-gray" style="display: none;">
        <h2>Sample Markup to go with Slide 3</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      </li>
    </div>
  </div>
</div>
```

---