<title>Styleguide: Tabs</title>

# Tab Elements

<p class="lead">Tabs are elements that help you organize and navigate multiple panes of content in a single container.</p>

There are two pieces to a tabbed interface: the tab container, and the tab content container. These two elements should be contained in a single wrapper container. 

---

## The Tab Container

The tab container is an element with the class `.tabs`, the attribute `data-tabs`, and a unique `id` attribute.
- Each tab within the container has the class `.tabs-title`. 
  - The `href` of each link should match the ID of a tab panel. Alternatively, the ID can be specified with the attribute `data-tabs-target`.
  - To mark which tab is the default, add the class `.is-active` to the tab, and `aria-selected="true"` to the `<a>` element.
  - If the tabs will always be horizontal above the tab content, add class `.horizontal` to add a gutter between the tabs and the content.  (or you can add a gutter class to the tabs-panel)

```html
<ul class="tabs horizontal" data-tabs id="example-tabs">
  <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
  <li class="tabs-title"><a data-tabs-target="#panel2" href="#/tabs/panel2">Tab 2</a></li>
</ul>
```

---

## The Tab Content

The tab content container is an element with the class `.tabs-content`, and a ` data-tabs-content` attribute that matches the ID of the coordinating tab container.
- Each section inside the tab content container has the class `.tabs-panel`. 
  - Each content pane also has a unique ID, which is targeted by a tab.
  - To mark which pane is the default, add the class `.is-active` to that pane.

```html
<div class="tabs-content" data-tabs-content="example-tabs">
  <div class="tabs-panel is-active" id="panel1">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </div>
  <div class="tabs-panel" id="panel2">
    <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
  </div>
</div>
```

---

## The Wrapper

Finally, wrap all tab items in a containing element with the class `.tab-wrapper`.

```html
<div class="tab-wrapper">
  <ul class="tabs" data-tabs id="example-tabs">
    <!-- tabs-title items -->
  </ul>
  <div class="tabs-content" data-tabs-content="example-tabs">
    <!-- tabs-panel items -->
  </div>
</div>
```

---

## Example

Put it all together, and we get this:

```html_example
<div class="tab-wrapper">
  <ul class="tabs horizontal" data-tabs id="example-1">
    <li class="tabs-title is-active"><a href="#tabpanel1" aria-selected="true">Tab 1</a></li>
    <li class="tabs-title"><a href="#tabpanel2">Tab 2</a></li>
    <li class="tabs-title"><a href="#tabpanel3">Tab 3</a></li>
    <li class="tabs-title"><a href="#tabpanel4">Tab 4</a></li>
    <li class="tabs-title"><a href="#tabpanel5">Tab 5</a></li>
    <li class="tabs-title"><a href="#tabpanel6">Tab 6</a></li>
  </ul>
  <div class="tabs-content" data-tabs-content="example-1">
    <div class="tabs-panel is-active" id="tabpanel1">
      <p>one</p>
      <p>Check me out! I'm a super cool Tab panel with text content!</p>
      <p><a href="#">I am a link but don't do anything</a></p>
    </div>
    <div class="tabs-panel" id="tabpanel2">
      <p>two</p>
      <textarea></textarea>
      <button class="button">I do nothing!</button>
    </div>
    <div class="tabs-panel" id="tabpanel3">
      <p>three</p>
      <p>Check me out! I'm a super cool Tab panel with text content!</p>
    </div>
    <div class="tabs-panel" id="tabpanel4">
      <p>four<br><img src="files/kitten160.jpg" alt="kitty"></p>    
    </div>
    <div class="tabs-panel" id="tabpanel5">
      <p>five</p>
      <p>Check me out! I'm a super cool Tab panel with text content!</p>
    </div>
    <div class="tabs-panel" id="tabpanel6">
      <p>six</p>
      <img src="files/hanson-sm.jpg" alt="hanson">
    </div>
  </div>
</div>
```



# Default Tab Layout

By default, the width of each tab is flexible to accommodate the tab title text, and  tabs will wrap as needed.

## Layouts to Avoid

<ol>
  <li><p>**Avoid** mixing extremely short and long tab tab titles in the same list.</p>
    <div class="gutter-all">
       <ul class="tabs" data-tabs id="what-not-to-do-1">
        <li class="tabs-title is-active"><a href="#dummy" aria-selected="true">One</a></li>
        <li class="tabs-title"><a href="#dummy">Tab two has an extrememly long name</a></li>
        <li class="tabs-title"><a href="#dummy">Three</a></li>
        <li class="tabs-title"><a href="#dummy">4</a></li>
      </ul>
    </div>
  </li>
  <li><p>**Avoid** using an excessive number of tabs. Consider [using Accordions](styleguide_fm.html#accordions) instead.</p>
    <div class="gutter-all">
      <ul class="tabs" data-tabs id="what-not-to-do-2">
        <li class="tabs-title is-active"><a href="#dummy" aria-selected="true">Tab one</a></li>
        <li class="tabs-title"><a href="#dummy">Tab two with long name</a></li>
        <li class="tabs-title"><a href="#dummy">Tab three</a></li>
        <li class="tabs-title"><a href="#dummy">Tab four with long name</a></li>
        <li class="tabs-title"><a href="#dummy">Tab five</a></li>
        <li class="tabs-title"><a href="#dummy">Tab six</a></li>
        <li class="tabs-title"><a href="#dummy">Tab seven</a></li>
        <li class="tabs-title"><a href="#dummy">Tab eight with an extra long name</a></li>
        <li class="tabs-title"><a href="#dummy">Tab nine</a></li>
        <li class="tabs-title"><a href="#dummy">Tab ten</a></li>
        <li class="tabs-title"><a href="#dummy">Tab eleven</a></li>
        <li class="tabs-title"><a href="#dummy">Tab twelve is not last</a></li>
        <li class="tabs-title"><a href="#dummy">Tab thirteen is last</a></li>
      </ul>
    </div>
  </li>
</ol>



# Overriding Tab Defaults

For the corporate template, the tabs plugin is initialized with these defaults.  You can override these defaults by applying custom attributues to the `.tabs` element.

| Defaults                    | Value  |Description                                                            | 
|-----------------------------|--------|-----------------------------------------------------------------------|
| data-update-history         | true   |Update the browser history with the open tab                           |
| data-deep-link              | true   |Allows the window to scroll to content of pane specified by hash anchor|
| data-deep-link-smudge       | true   |Adjust the deep link scroll to make sure the top of the tab panel is visible|
| data-deep-link-smudge-delay | 300    |Animation time (ms) for the deep link adjustment                       |
| data-match-height           | true if viewport width > 569 while initializing |Tab content panes match height of tallest pane if true.|



# Fixed Width Tabs

With fixed-width tabs, all tabs are the same width, with labels centered, and the tabs stretch edge to edge.
- Add a [block grid](styleguide_grid.html#advanced) class `.[size]-up-[n]` to the tabs element that defines the starting breakpoint and quantity of tabs. For example, `.small-up-3` represents 3 equal-width tabs, starting at the smallest breakpoint.  
  - You can set more than one at a time -- for example, at small you could have 2 rows of 2 tabs and at medium have 1 row of 4 tabs by adding both `.small-up-2` and `.medium-up-4`.
  - Utilize the [equalizer plugin](http://foundation.zurb.com/sites/docs/equalizer.html) to keep all tabs at the same height if there is a chance words might wrap within a tab.

```html
<div class="tab-wrapper">
  <ul class="tabs small-up-3 horizontal" data-tabs id="fixed-example" data-equalizer data-equalize-on="small">
    <li class="tabs-title is-active"><a data-equalizer-watch href="#panelsample1" aria-selected="true">Tab One</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panelsample2">Tab Two</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panelsample3">Tab Three</a></li>
  </ul>
  <div class="tabs-content" data-tabs-content="fixed-example">
    <!-- tabs-panel items -->  
  </div>
</div>
```

---

**Example**: Three fixed-width tabs which maintain equal height and width at all breakpoints


```html_example
<div class="tab-wrapper" data-equalizer data-equalize-on="small">
  <ul class="tabs horizontal small-up-3" data-tabs id="example-tabsB">
    <li class="tabs-title is-active"><a data-equalizer-watch href="#panel1B" aria-selected="true">Tab one</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panel2B">Tab two with long name</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panel3B">Tab three</a></li>
  </ul>
  <div class="tabs-content" data-tabs-content="example-tabsB">
    <div class="tabs-panel is-active" id="panel1B">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel" id="panel2B">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>
    <div class="tabs-panel" id="panel3B">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>
  </div>
</div>
```



# Vertical Tabs

To stack tabs vertically, add the `.vertical` class to the `.tabs` element. 

```html
<ul class="tabs vertical" id="example-vertical-tabs" data-tabs>
  <li class="tabs-title is-active"><a href="#dummy" aria-selected="true">Tab one</a></li>
  <li class="tabs-title"><a href="#dummy">Tab two</a></li>
  <li class="tabs-title"><a href="#dummy">Tab three</a>
  </li>
</ul>
```

---

## Vertical Tabs to the Left of Tab Content

<p class="lead">Utilize a row with 2 column containers to make the tabs and the tab content sit side-by-side. </p>

In this example, the tabs and tab content stack at the smallest breakpoint and display side-by-side at medium breakpoint and above.
- This example also utilizes ` data-match-height="false"` to prevent the gap below the content panels with shorter content, thus causing the content below the tabs to shift up and fill the space when available.

```html_example
<div class="tab-wrapper">
  <div class="row">
    <div class="xlarge-2 large-3 medium-4 column">
      <ul class="tabs vertical" id="example-vert-tabsB" data-tabs data-match-height="false">
        <li class="tabs-title is-active"><a href="#panel1vB" aria-selected="true">Tab one</a></li>
        <li class="tabs-title"><a href="#panel2vB">Tab two</a></li>
        <li class="tabs-title"><a href="#panel3vB">Tab three</a></li>
      </ul>
    </div>
    <div class="xlarge-10 large-9 medium-8 column">
      <div class="tabs-content gutter-top-small-only" data-tabs-content="example-vert-tabsB">
        <div class="tabs-panel is-active" id="panel1vB">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panel2vB">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panel3vB">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <img src= "files/kitten160.jpg" alt="cat">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### Extend height of vertical tabs to match tab content

Utilize the [equalizer plugin](http://foundation.zurb.com/sites/docs/equalizer.html) to keep the stacked tabs at the same height as the tab content.
- avoid adding any gutter classes or padding to the `.tabs` or `.tabs-content` element as they will affect the equalizer when the page is resized.

```html_example
<div class="tab-wrapper" data-equalizer data-equalize-on="medium">
  <div class="row">
    <div class="xlarge-2 large-3 medium-4 column">
      <ul class="tabs vertical" id="example-vert-tabsC" data-tabs data-equalizer-watch data-match-height="true">
        <li class="tabs-title is-active"><a href="#panel1vC" aria-selected="true">Tab one</a></li>
        <li class="tabs-title"><a href="#panel2vC">Tab two</a></li>
        <li class="tabs-title"><a href="#panel3vC">Tab three</a></li>
      </ul>
    </div>
    <div class="xlarge-10 large-9 medium-8 column gutter-top-small-only">
      <div class="tabs-content" data-tabs-content="example-vert-tabsC" data-equalizer-watch>
        <div class="tabs-panel is-active" id="panel1vC">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panel2vC">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panel3vC">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <img src= "files/kitten160.jpg" alt="cat">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Vertical Tabs to the Right of Tab Content

Utilize the [Source Ordering](styleguide_grid.html#advanced) options to shift the vertical tabs to the right at a specific breakpoint.
- Add class `.edge` to each `.tabs-title` element to flip the bordered edge to the other side.
  - To flip the bordered edge only above a specific breakpoint, use `.edge-left-medium` or `.edge-left-large`.

```html_example
<div class="tab-wrapper" data-equalizer data-equalize-on="medium">
  <div class="row">
    <div class="xlarge-2 large-3 medium-4 column medium-push-8 large-push-9 xlarge-push-10">
      <ul class="tabs vertical" id="example-vert-tabsD" data-tabs data-equalizer-watch data-match-height="true">
        <li class="tabs-title edge-left-medium is-active"><a href="#panel1vD" aria-selected="true">Tab one</a></li>
        <li class="tabs-title edge-left-medium"><a href="#panel2vD">Tab two</a></li>
        <li class="tabs-title edge-left-medium"><a href="#panel3vD">Tab three</a></li>
      </ul>
    </div>
    <div class="xlarge-10 large-9 medium-8 column gutter-top-small-only medium-pull-4 large-pull-3 xlarge-pull-2">
      <div class="tabs-content" data-tabs-content="example-vert-tabsD" data-equalizer-watch>
        <div class="tabs-panel is-active" id="panel1vD">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panel2vD">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="tabs-panel" id="panel3vD">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          <img src= "files/kitten160.jpg" alt="cat">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```



# Combo Vertical to Horizontal
 
You can add a class to the `.tabs` element to create tabs that display vertically below specific breakpoints: `.vertical-for-large-down`, `.vertical-for-medium-down`, and `vertical-for-small-only`.

```html
<ul class="tabs vertical-for-medium-down" data-tabs>
</ul>
```

**Example**: Tabs that are vertical for medium breakpoint and down, but horizontal at the large breakpoint.

```html_example
<div class="tab-wrapper">
  <ul class="tabs vertical-for-medium-down" data-tabs id="combo-tabs-1">
    <li class="tabs-title is-active"><a href="#panelh1" aria-selected="true">Tab one is here</a></li>
    <li class="tabs-title"><a href="#panelh2">Tab two is here</a></li>
    <li class="tabs-title"><a href="#panelh3">Tab three is here</a></li>
    <li class="tabs-title"><a href="#panelh4">Tab four is here</a></li>
  </ul>
  <div class="tabs-content gutter-top" data-tabs-content="combo-tabs-1">
    <div class="tabs-panel is-active" id="panelh1">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel" id="panelh2">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel" id="panelh3">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>
    <div class="tabs-panel" id="panelh4">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p><img src="files/kitten160.jpg" alt="kitty"></p>
    </div>
  </div>
</div>
```



# Combo Horizontal to Vertical
 
You can add a class to the `.tabs` element to create tabs that display vertically only above specific breakpoints: `.vertical-for-large-up`, `.vertical-for-medium-up`.

```html
<ul class="tabs vertical-for-medium-up" data-tabs>
</ul>
```

**Example**: Tabs that are fixed-width and horizontal at small breakpoint, and vertical at medium breakpoint and up.

```html_example
<div class="tab-wrapper">
  <div class="row">
    <div class="column medium-3">
      <ul class="tabs small-up-3 medium-up-1 vertical-for-medium-up" data-tabs id="combo-tabs-2">
        <li class="tabs-title is-active"><a href="#panelhv1" aria-selected="true">Tab one</a></li>
        <li class="tabs-title"><a href="#panelhv2">Tab two</a></li>
        <li class="tabs-title"><a href="#panelhv3">Tab three</a></li>
      </ul>
    </div>
    <div class="column medium-9 gutter-top-small-only">
      <div class="tabs-content" data-tabs-content="combo-tabs-2">
        <div class="tabs-panel is-active" id="panelhv1">
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panelhv2">
          <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
          <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        </div>
        <div class="tabs-panel" id="panelhv3">
          <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
          <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```



# Custom Tab Design

<p class="lead">You can choose to override the default style of tabs by adding a `data-options` attribute to the `.tabs` element to specify alternate classes for many of the tab elements.</p>

| attribute               |  default    | description                              |
|-------------------------|-------------|------------------------------------------|
|data-link-class          | tabs-title  | Class applied to `li`'s in tab link list.|
|data-link-active-class   | is-active   | Class applied to the active `li` in tab link list.|
|data-panel-class         | tabs-panel  | Class applied to the content containers. |
|data-panel-active-class  | is-active   | Class applied to the active content container.|

**Example**: the following code shows how you would override `.tabs-title` and `.tabs-panel` classes.

```html
<ul class="tabs" data-tabs id="custom-tabsC" data-link-class="custom-tab-class" data-panel-class="custom-panel-class">
  <!-- tab titles -->
</ul>
```
  
Step One, define the custom css for each custom class you create. If you need to override styles on the tab container or wrapper, add a class to `.tabs-wrapper` and use it to override the defaults by  increasing the specificity of your styles.

```css
/* custom tabs */
.tabs-title-primary {
  border-left: 2px solid #FFF;
  float: left;
  width: 33.3333%;
  text-align: center;
  margin: 0;
}
.tabs-title-primary > a {
  display: block;
  line-height: 1;
  background: #0096d2;
  color: #FFF;
  opacity: 0.7;
  padding: 1.4rem 1rem 1rem;
  border-top: 6px solid #FFF;
  border-bottom: 4px solid #0096d2;
  font-size: 0.875rem;
  transition: all 0.5s ease;
}
.tabs-title-primary > a:hover, 
.tabs-title-primary > a:focus {
  opacity: 1;
}
.tabs-title-primary.is-active > a {
  opacity: 1;
  border-bottom: 6px solid #ff6c00;
  border-top: 6px solid #0096d2;
  font-size: 115%;
  padding-top: 1rem;
  font-weight: 400;
} 
/* custom panels */
.tabs-panel-primary {
  display: none;
  background-color: #f4f9ff;
  padding: 1rem;
  border-bottom: 3px solid #0096d2;
}
.tabs-panel-primary.is-active {
  display: block;
}
/* custom wrapper */
.tab-primary { 
  padding: 2rem 1rem;
  border: 1px solid #eee;
}
/* custom wrapper used to override tabs */
.tab-primary .tabs { 
  background: #fff;
}
```

<style>
/* custom tabs */
.tabs-title-primary {
  border-left: 2px solid #FFF;
  float: left;
  width: 33.3333%;
  text-align: center;
  margin: 0;
}
.tabs-title-primary > a {
  display: block;
  line-height: 1;
  background: #0096d2;
  color: #FFF;
  opacity: 0.7;
  padding: 1.4rem 1rem 1rem;
  border-top: 6px solid #FFF;
  border-bottom: 4px solid #0096d2;
  font-size: 0.875rem;
}
.tabs-title-primary > a:hover, 
.tabs-title-primary > a:focus {
  opacity: 1;
}
.tabs-title-primary.is-active > a {
  opacity: 1;
  border-bottom: 6px solid #ff6c00;
  border-top: 6px solid #0096d2;
  font-size: 115%;
  padding-top: 1rem;
  font-weight: 400;
} 
/* custom panels */
.tabs-panel-primary {
  display: none;
  background-color: #f4f9ff;
  padding: 1rem;
  border-bottom: 3px solid #0096d2;
}
.tabs-panel-primary.is-active {
  display: block;
}
/* custom wrapper */
.tab-primary { 
  padding: 2rem 1rem;
  border: 1px solid #eee;
}
/* custom wrapper used to override tabs */
.tab-primary .tabs { 
  background: #fff;
}
</style>

Step Two, create your tab HTML and add in the custom class names you chose for the tabs, panels, and/or wrapper.

```html_example
<div class="tab-wrapper tab-primary" data-equalizer data-equalize-on="small">
  <ul class="tabs" data-tabs id="custom-tabsB"  data-link-class="tabs-title-primary" data-panel-class="tabs-panel-primary">
    <li class="tabs-title-primary is-active"><a data-equalizer-watch href="#customtab1" aria-selected="true">Tab one</a></li>
    <li class="tabs-title-primary"><a data-equalizer-watch href="#customtab2">Tab two Longer</a></li>
    <li class="tabs-title-primary"><a data-equalizer-watch href="#customtab3">Tab three</a></li>
  </ul>
  <div class="tabs-content" data-tabs-content="custom-tabsB">
    <div class="tabs-panel-primary is-active" id="customtab1">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel-primary" id="customtab2">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>
    <div class="tabs-panel-primary" id="customtab3">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>
  </div>
</div>
```

---