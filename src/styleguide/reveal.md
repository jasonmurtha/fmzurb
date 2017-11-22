<title>Styleguide: Reveal Modals</title>

# Modals

A standard modal dialog is just an empty container, so you can put any kind of content inside it, from text to forms to images to an entire grid.  To create a modal,

- Add the attributes `data-open` and `aria-controls` to to the link that opens the modal. The value of both should be the ID of the modal.
- To the modal container, add the class `.reveal`, the attribute `data-reveal`, and a unique ID (which is used by any link that launches the modal).
- The contents of a modal should be wrapped in a `.modal-content` container.

```html
<p><a data-open="modalID" aria-controls="modalID">View a modal window</a>.</p>
<div class="reveal" id="modalID" data-reveal>
  <div class="modal-content">
  </div>
</div>
```



# Standard Content Modals

- All standard content modals should include 3 extra classes on the `.reveal` element: `.full` to enforce that the modal should always cover the full screen, and a dark [background color class](#colors).
- The close button is automatically attached to the `.modal-header`, so for this style of modal, it is required.
- Modals by default are accessible through the use of various ARIA attributes.  To make a modal even more accessible, designate a label to the modal by adding an `id` attribute on the elment you want to designate as the label (such as a heading inside the modal) and then adding the same value into an `aria-labelledby` attribute on the modal container.

```html_example
<p class="gutter-bottom flex-up">View a modal <a data-open="fullModal1" aria-controls="fullModal1">on green</a>.</p>

<div class="reveal full background-green" id="fullModal1" data-reveal aria-labelledby="Modal1-label">
  <div class="modal-content">
    <div class="row">
      <div class="column xlarge-offset-1 xlarge-10 end">
        <div class="modal-header">
          <h2 id="Modal1-label">Modal Label</h2>
        </div>
          <p>I can contain a callout with a white background to great a framed area.</p>
          <p>I can contain any normal markup, from <a href="#">links</a> and images, to a responsive grid of items. </p>
          <img src="files/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </div>
</div>
```

---
  
```html_example
<p class="gutter-bottom flex-up">View a modal <a data-open="fullModal2" aria-controls="fullModal2">on orange</a>.</p>

<div class="reveal full background-orange" id="fullModal2" data-reveal aria-labelledby="Modal2-label">
  <div class="modal-content">
    <div class="row">
      <div class="column xlarge-offset-1 xlarge-10 end">
        <div class="modal-header">
          <h2 id="Modal4-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="#">links</a> and images, to a responsive grid of items. </p>
        <img src="files/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </div>
</div>
```

---
  
```html_example
<p class="gutter-bottom flex-up">View a modal <a data-open="fullModal3" aria-controls="fullModal3">in a white frame on blue</a> with <strong>additional modal header</strong>.<p>

<div class="reveal full background-blue" id="fullModal3" data-reveal>
  <div class="modal-content">
    <div class="row">
      <div class="column xlarge-offset-1 xlarge-10 end">
        <div class="modal-header">
          <h2 id="Modal3-label">Modal Label</h2>
        </div>
        <div class="modal-page-header">
          <h1>Modal Header</h1>
          <p class="page-subtitle">I can even have a header above the callout</p>
        </div>
        <div class="callout xlarge background-white">
          <p>I can contain a callout with a white background to great a framed area.</p>
          <p>I can contain any normal markup, from <a href="#">links</a> and images, to a responsive grid of items. </p>
          <img src="files/kitten160.jpg" alt="kitty">
        </div>
      </div>
    </div>
  </div>
</div>
```

---
  
```html_example
<p class="gutter-bottom flex-up">View a modal <a data-open="fullModal4" aria-controls="fullModal4">in a white frame on teal</a>.</p>

<div class="reveal full background-teal" id="fullModal4" data-reveal>
  <div class="modal-content">
    <div class="row">
      <div class="column xlarge-offset-1 xlarge-10 end">
        <div class="modal-header">
          <h2 id="Modal2-label">Modal Label</h2>
        </div>
        <div class="callout xlarge background-white">
          <p>I can contain a callout with a white background to great a framed area.</p>
          <p>I can contain any normal markup, from <a href="#">links</a> and images, to a responsive grid of items. </p>
          <img src="files/kitten160.jpg" alt="kitty">
        </div>
      </div>
    </div>
  </div>
</div>
```



# Nested Modal

It's possible for modals to open other modals. Create a second modal with a unique ID, and then add a click trigger with `data-open` inside the first modal.

```html_example
<ul>
  <li class="flex-up"><a data-open="exampleModalA" aria-controls="exampleModalA">View a modal</a> that launches a second modal</li>
</ul>

<!-- This is the first modal -->
<div class="reveal full background-purple" id="exampleModalA" data-reveal>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="exampleModalB-label">Modal Label</h2>
    </div>
    <h2>Awesome!</h2>
    <p class="lead">I have another modal inside of me!</p>
    <p><a class="button secondary" data-open="exampleModalB" aria-controls="exampleModalB">View another modal!</a></p>    
    <div class="row">
      <p class="text-center">One section 12 columns wide.</p>
      <div class="small-12 column">
        <div class="callout background-white">
        </div>
      </div>
    </div>
    <div class="row">
      <p class="text-center">Three sections each 4 columns wide.</p>
      <div class="small-4 column">
        <div class="callout background-white">
        </div>
      </div>
      <div class="small-4 column">
        <div class="callout background-white">
        </div>
      </div>
      <div class="small-4 column">
        <div class="callout background-white">
        </div>
      </div>
    </div>
    <div class="row">
      <p class="text-center">Two sections, each 6 columns wide.</p>
      <div class="small-6 column">
        <div class="callout background-white">
        </div>
      </div>
      <div class="small-6 column">
        <div class="callout background-white">
        </div>
      </div>
    </div> 
  </div>
</div>

<!-- This is the nested modal -->
<div class="reveal full background-orange" id="exampleModalB" data-reveal>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="exampleModalB-label">Modal Label</h2>
    </div>
    <h2>ANOTHER MODAL!!!</h2>
    <p>I took the place of the first modal.</p>
  </div>
</div>
```



# Image Modal

Image modals are intended to contain ONLY an image and a optional caption -- if you require anything more, you should use a standard content modal. If the images contain content like charts or graphs that <strong>must</strong> be viewed with the content, consider using a carousel instead of a modal.  Below are examples of an image modal being launched from a text link and from a link with an image.

- To create an image modal, add class `.overlay-image` to the .`reveal` container. Then inside the `.modal-content` container, include a `figure` element that contains an `img` and optional `figcaption`.
- If the modal is being launched from a link on an image, add the class `.modal-launch` to the anchor tag to add the image-expand icon and blue hover-overlay to the image.
- If the image is <strong>not</strong> a thumbnail, and should <strong>always</strong> stretch to fill the width of its container, add class <code>.block</code> to the anchor tag. 
- For image modals, the close button is automatically attached to first image.
- Images will only launch in modals if the user's screenwidth is over 470px.  You <strong>must</strong> include the url of the image in the `href` attribute, so that small-screen users can still get to the image. Including the url also preserves all right-click mouse options for the link (such as opening the link in a new window/tab on desktop, bookmarking the link, copying the link).


```html_example
<ul>
  <li class="flex-up"><a data-open="exampleModalE" aria-controls="exampleModalE" 
  href="files/bigkitty.jpg">View an image modal</a>.</li>
</ul>

<div class="reveal overlay-image" id="exampleModalE" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/bigkitty.jpg" alt="kitty">
      <figcaption>What a pretty kitty!</figcaption>
    </figure>
  </div>
</div>
```

---

```html_example
<ul>
  <li class="flex-up">View an image modal by clicking the following image.<br>
  <a data-open="exampleModalF" aria-controls="exampleModalF" class="modal-launch"
  href="files/kitty1600.jpg"><img src="files/kitten160.jpg" alt="kitty"></a></li>
</ul>

<div class="reveal overlay-image" id="exampleModalF" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/kitty1600.jpg" alt="kitty">
      <figcaption>Who Doesn't Love Kitties?</figcaption>
    </figure>
  </div>
</div>
```



# Image Gallery Modal

Combine the concept of the nested modal with the image modal to achieve an image gallery where the user can navigate through several images one at a time.  Follow the guidelines for image modals and nested modals.

- Similar to image modals, the close button is automatically attached to first image in each `reveal`.
- The prev/next navigation for is automated to cycle through all `.reveal` elements that share the same `rel` attribute, so that attribute is required for galleries.
- Images will only launch in modals if the user's screenwidth is over 470px.  You <strong>must</strong> include the url of the first image in the `href` attribute, so that small-screen users can still get to that image (small screen users will <strong>not</strong> be able to navigate to the rest of the gallery -- if the content is essential, consider putting it in a rotator isntead of a gallery).  Including the url also preserves all right-click mouse options for the link (such as opening the link in a new window/tab on desktop, bookmarking the link, copying the link).


```html_example
<ul class="flex-up">
  <li><p><a data-open="galleryModalA" aria-controls="galleryModalA" href="files/plant1.jpg">View a modal</a> that launches an image gallery</p></li>
  <li>View the same gallery, launched from an image instead<br>
  <a class="modal-launch" data-open="galleryModalA" aria-controls="galleryModalA" href="files/plant1.jpg"><img src="files/plant1-thumb.jpg" alt="flowers"></a></li>
</ul>

<!-- This is the first modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalA" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/plant1.jpg" alt="plant 1">
      <figcaption>Default - center aligned caption.</figcaption>
    </figure>
  </div>
</div>

<!-- This is the second modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalB" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/plant2.jpg" alt="plant 2">
      <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
    </figure>
  </div>
</div>

<!-- This is the third modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalC" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/plant3.jpg" alt="plant 3">
      <figcaption>
        <p class="text-left show-for-medium">The lights burn blue. It is now dead midnight.</p>
      </figcaption>
    </figure>
  </div>
</div>

<!-- This is the fourth modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalD" data-reveal>
  <div class="modal-content">
    <figure>
      <img class="no-border" src="files/plant4.jpg" alt="plant 4">
      <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption.
      </figcaption>
    </figure>
  </div>
</div>
```



# Video Modal

Embedded videos **won't** maintain their aspect ratio as the width of the screen changes, unless you specify the ratio used for the video. 

- Add a `.data-src` attribute to define the video url to embed in the modal, omit the http/https protocol from the embed url and include `wmode=transparent` in the embed query string.  This value should be different than the video page url -- we typically pull videos in via www.youtube-nocookie.com because they are less likely to be blocked. Do not include `autoplay=1` in the query string for the video.  It will be added on modal launch, and removed on modal close.
- Videos will only launch in modals if the user's screenwidth is over 470px.  You <strong>must</strong> include the url of the regular video page in the <code>href</code> attribute, so that small-screen users can still get to the video.  Including the url also preserves all right-click mouse options for the link (such as opening the link in a new window/tab on desktop, bookmarking the link, copying the link).
- Video modals are completely automated and will autoplay when the modal is opened.
- Video modals will only remain responsive if you specify their aspect ratio:  The default ratio is 4:3. Add the <code>.widescreen</code> class to the link to specify if a video is 16:9 instead.


```html_example
<ul class="flex-up">
  <li><a class="video-modal" href="https://www.youtube.com/watch?v=26OUQIjRRbc" data-src="//www.youtube-nocookie.com/embed/26OUQIjRRbc?rel=0&amp;wmode=transparent">View a modal with a (4:3 ratio) video</a>.</li>

  <li><a class="video-modal widescreen-video" href="https://www.youtube.com/watch?v=tCg9285bJnY"  data-src="//www.youtube-nocookie.com/embed/tCg9285bJnY?rel=0&amp;wmode=transparent">View a modal with a widescreen (16:9 ratio) video</a>.</li>
</ul>
```

---