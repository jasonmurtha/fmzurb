<title>Styleguide: Fluid Typography</title>

# Fluid Typography

This is a very quick overview of fluid typography. Read [this Smashing Magazine article](https://www.smashingmagazine.com/2016/05/fluid-typography/) if you want more in-depth details.

<div class="callout large">
  <div class="callout background-gray">
    <h2>The Goal</h2>
    <p class="flex-up">You want an H1 to be 28px (or 1.75rem) at smallest screen and 48px  (or 3rem) at largest size.</p>
    <p class="flex-up">Your design's largest breakpoint is 80em (1280px) and your smallest screen size is 20em (320px).</p>
  </div>
</div>

The traditional way of adjusting fonts in Foundation is to set the smallest size as default, and then adjust the size upward at each breakpoint, for as many breakpoints as needed.

```css
h1 { font-size: 1.75rem; }
@media screen and (min-width: 30em) {  
  h1 { font-size: 2rem; }
}
@media screen and (min-width: 45em) {  
  h1 { font-size: 2.25rem; }
}
@media screen and (min-width: 60em) {  
  h1 { font-size: 2.5rem; }
}
@media screen and (min-width: 80em) {  
  h1 { font-size: 3rem; }
}
```

With fluid typography, you set the min and max font size, and rely on a formula for everything in between.
 
The formula (image from above article):

<div class="row">
  <div class="column medium-9 large-7 xlarge-5 medium-centered">
    <figure>
    <a  aria-controls="formulaImage" data-open="formulaImage" class="modal-launch"><img alt="Image of a function: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400))" src="files/advanced-calc-800-opt.png"></a>
    <figcaption>Image borrowed from [Smashing Magazine](https://www.smashingmagazine.com/2016/05/fluid-typography/) </figcaption>
    </figure>
  </div>
</div>
<div class="reveal overlay-image" id="formulaImage" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/advanced-calc-800-opt.png" alt="Image of a function: calc(16px + (24 - 16) * (100vw - 400px) / (800 - 400))">
    </figure>
  </div>
</div>

So that yields this:

```css
h1 {
   font-size: 1.75rem; 
   font-size: calc( 28px + (48-28) * (100vw - 320px) / (1280-320) ); 
}

  /* I don’t like writing so many parentheses, so I tend to solve the basic math parts that don’t include ‘px’ or ‘vw’ */

h1 {
   font-size: 1.75rem; 
   font-size: calc(28px + 20 * (100vw - 320px)/960); 
}

  /* then we add an override to prevent the font-size from continuing to grow when the viewport is greater than our max-width. */

@media screen and (min-width: 80em) { 
  h1 { font-size: 3rem; }  
}
```

When you use fluid typography, you'll want to keep the other attributes proportionate as well.
- Set padding, margin, word-spacing, and letter-spacing using em values (as opposed to rem or pixel).
- Set line-height as a unit-less ratio (to calculate, divide the line height by the font size, such as 60px/48px = 1.25)

```css
h1 {
   font-size: 1.75rem; 
   font-size: calc(28px + 20 * (100vw - 320px)/960); 
   margin-bottom: 0.5em;
   line-height: 1.25;
   letter-spacing: 0.0023em;
}
@media screen and (min-width: 80em) { 
  h1 { font-size: 3rem; }  
}
```

---