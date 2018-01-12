
# TeamSite Templates

The site has 2 primary templates in Teamsite: Page and Article.  The page article supports both 1- and 2-column layouts and the article template supports only a 2-column layout.

When you are creating a page using the TeamSite template, the following markup is **automatically inserted for you** by the TeamSite template.

<div class="row">
<div class="column large-6">
  **One Column Content**
  <pre>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"content-band"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"row column"</span>&gt;</span>
        <span class="hljs-comment">main content from template</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre>
</div>
<div class="column large-6">
  **Two Column Content**
  <pre>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"two-column-layout"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"row two-column-row"</span>&gt;</span> 
      <span class="hljs-tag">&lt;<span class="hljs-title">main</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"column"</span>&gt;</span>
        <span class="hljs-comment">main content from template</span>      
      <span class="hljs-tag">&lt;/<span class="hljs-title">main</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-title">aside</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"column"</span>&gt;</span>  
        <span class="hljs-comment">sidebar content from template</span>
      <span class="hljs-tag">&lt;/<span class="hljs-title">aside</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre>
</div>
</div>



# Framework 

<p class="lead">The framework behind our codebase is Foundation 6.3.0.</p>

The Foundation 6.3 grid uses two key elements: rows and columns. When you need to create additional columns inside the initial ones added by the template, start by adding an element with a class of `.row`. This will create a horizontal block to contain vertical columns. Then add elements with a `.column` class within that row. Specify the widths of each column with the `.small-#`, `.medium-#`, and `.large-#` classes.

<p><a class="button tertiary large" href="styleguide_grid.html">Learn more about rows and columns</a></p>

---

## Framework Breakpoints

There are 5 primary breakpoints for the corporate design.  If you need to write custom css for a page using this design, you will likely need to know these.

| breakpoint | pixels |   ems    | details                      |
|------------|-------:|---------:|------------------------------|
| small      | 0px    | 0em      | we set a 320px min-width on the body element. At this width, almost all containers are full width |
| medium     | 570px  | 35.625em | breakpoint where small cards first stack/unstack, and tabs and data tables typically stack/unstack |
| large      | 980px  | 61.25em  | breakpoint where the 2-column layout stacks/unstacks, and large feature cards stack/unstack |
| xlarge     | 1270px | 79.375em | breakpoint where the primary nav, ribbon and search bar collapse/uncollapse |
| xxlarge    | 1500px | 93.75em  | content area width is 1360px with 70px padding on each side; also max width for most responsive fonts |

---

## Framework Components

The site is broken down into 4 main designs: Corporate, Multifamily, Single-Family, and Capital Markets.  Each of these designs has some Foundation elements enabled and some disabled.  Refer to each individual template for details.
<ul>
  <li class="item-name"><a href="styleguide_corp.html#framework">Corporate Site</a></li> 
  <li class="item-name"><a href="styleguide_mf.html#framework">Multifamily Site</a></li> 
  <li class="item-name">Singlefamily Site TBD</li> 
  <li class="item-name">Capital Markets Site TBD</li> 
</ul>



# Colors

<p class="lead">Below you can find the different values we created that support the color variables you can change at any time in <code>\_settings.scss</code></p>
<hr>
<h2>Backgrounds</h2>
<div class="row up-1 medium-up-2 large-up-3 xlarge-up-4">
  <div class="column">
    <div class="color-block">
      <span class="background-orange"> `.background-orange` </span>
      $fm-orange
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-green"> `.background-green` </span>
      $fm-green
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-yellow"> `.background-yellow` </span>
      $fm-yellow
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-red"> `.background-red` </span>
      $fm-red
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-primary"> `.background-primary` </span> 
      $primary-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-blue"> `.background-blue`</span>
      $fm-blue
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-teal"> `.background-teal` </span>
      $fm-teal
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-purple"> `.background-purple` </span>
      $fm-purple
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-gray"> `.background-gray`</span>
      $fm-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-concrete"> `.background-concrete` </span>
      $light-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-offwhite">`.background-offwhite`</span>
      $offwhite
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-white"> `.background-white` </span>
      $white
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-black"> `.background-black` </span>
      $black
    </div>
  </div>
</div>
<hr>
<h2>Text Colors</h2>
<div class="row up-1 medium-up-2 large-up-3 xlarge-up-4"  data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="color-block" data-equalizer-watch>
      <span style="background: #464645"></span>
      $medium-gray<br>
      $body-font-color<br>
      <div style="text-transform: none;">default text color on light backgrounds</div>
    </div>
  </div>
  <div class="column">
    <div class="color-block" data-equalizer-watch>
      <span class="background-white"></span>
      $white
      <div style="text-transform: none;">default text color on dark backgrounds</div>
    </div>
  </div>
  <div class="column">
    <div class="color-block" data-equalizer-watch>
      <span style="background: #333333"> `.subheader` </span>
      $dark-gray<br>
      <div style="text-transform: none;">also default text color for accordions</div>
    </div>
  </div>
  <div class="column">
    <div class="color-block" data-equalizer-watch>
      <span class="background-gray"> `.accent-gray` </span>
      $fm-gray<br>
      <div style="text-transform: none;">also default text color in some callouts, card avatars, and titles</div>
    </div>
  </div>
  <div class="column">
    <div class="color-block" data-equalizer-watch>
      <span class="background-orange"> `.accent-orange` </span>
      $fm-orange
      <div style="text-transform: none;">used sparingly, mostly in blogs</div>
    </div>
  </div>
  <div class="column">
    <div class="color-block" data-equalizer-watch>
      <span class="background-yellow"> `.accent-yellow` </span>
      $fm-yellow
      <div style="text-transform: none;">used sparingly, mostly in modals with dark backgrounds</div>
    </div>
  </div>
</div>
<hr>
<h2>Mosaic Colors</h2>
<p>The mosaic colors are <strong>not</strong> intended to stand alone. Instead they should be applied only when there is 3 or more items to shade.</p>
<div class="row up-1 medium-up-2 large-up-3 xlarge-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #88BD45"></span>
      $mosaic-start
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #E4F118"></span>
      $mosaic-end
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-celery"> `.background-celery` </span>
      $celery
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span class="background-pear"> `.background-pear` </span>
      $pear
    </div>
  </div>
</div>
<hr>

<h4 class="gutter-top">Example of a mosaic edge design</h4>

```html_example
<div class="hero-edge">
</div>
```

<h4 class="gutter-top">Example of mosaic bottom borders (used on cards)</h4>

```html_example
<div class="row medium-up-2 large-up-4">
  <div class="column">
    <div class="card">
    </div>
  </div>
  <div class="column">
    <div class="card">
    </div>
  </div>
  <div class="column">
    <div class="card">
    </div>
  </div>
  <div class="column">
    <div class="card">
    </div>
  </div>
</div>
<br>
<div class="row medium-up-3">
  <div class="column">
    <div class="card">
    </div>
  </div>
  <div class="column">
    <div class="card">
    </div>
  </div>
  <div class="column">
    <div class="card">
    </div>
  </div>
</div>
```

<h4 class="gutter-top">Examples of mosaic backgrounds</h4>

```html_example
<div class="row collapse medium-up-3 mosaic-3">
  <div class="column">
    <div>col 1</div>
  </div>
  <div class="column">
    <div>col 2</div>
  </div>
  <div class="column">
    <div>col 3</div>
  </div>
</div>
<br>
<div class="row collapse medium-up-2 large-up-4 mosaic-4">
  <div class="column">
    <div>col 1</div>
  </div>
  <div class="column">
    <div>col 2</div>
  </div>
  <div class="column">
    <div>col 3</div>
  </div>
  <div class="column">
    <div>col 4</div>
  </div>
</div>
```



# Dividers

Use `<hr>` dividers to define thematic breaks between content chunks.  The line color will automatically become white on dark backgrounds.

```html_example
<div class="gutter-all background-offwhite">
  sample content
  <hr>
  sample content
</div>

<div class="gutter-all background-blue">
  sample content
  <hr>
  sample content
</div>
```



# Text and Typography

There are several text and typography styles to choose from, although some styles are intended for specific uses, or for specific page types. Avoid skipping heading levels when structuring your document, as it confuses screen readers. 

<div class="callout background-gray">
  <p class="lead">While some may appear similar at desktop width, they scale down differently at mobile sizes, so pay attention to the class you choose.</p>
</div>

```html_example
<ul class="accordion-pointer" data-accordion>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography1" id="typography1-heading" aria-controls="typography1" role="tab">Generic Headings</a>
    <div class="accordion-content" data-tab-content id="typography1" aria-labelledby="typography1-heading" role="tabpanel">
      <p>Avoid skipping heading levels when structuring your document. If you need a heading to match a specific style, use one of the custom classes in the Basic Content Styles section.</p>
      <hr>
      <div class="callout">
        <h1>H1 is the largest header</h1>
        <h2>H2 is a large header</h2>
        <h3>H3 is a medium header</h3>
        <h4>H4 is a moderate header</h4>
        <h5>H5 is a small header</h5>
        <h6>H6 is the smallest header</h6>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography2" id="typography-heading2" aria-controls="typography2" role="tab">Custom Content Styles</a>
    <div class="accordion-content" data-tab-content id="typography2" aria-labelledby="typography-heading2" role="tabpanel">
      <p>These styles can be applied to <strong>most HTML elements</strong>, such as <code>H1</code> - <code>H6</code>, <code>span</code>, <code>div</code>, or <code>p</code>. You do not have to use the same element that the example uses.</p>
      <p>Avoid skipping heading levels when structuring your document, as it confuses screen readers. Screen readers announce headings and identify the heading level. JAWS, for example, precedes &lt;h1&gt; headings with "heading level 1."</p>
      <hr>
      <div class="callout">
        <p><span class="callout-txt">This is class callout-txt, use it for a brief, attention-catching phrase.</span></p>  
        <h3 class="call-to-action">This is class call-to-action  (currently not used)</h3>
        <h3 class="subtitle">This is class subtitle</h3>
        <h3 class="section-subtitle">This is class section-subtitle</h3> 
        <h2 class="page-subtitle">This is class page subtitle (also used for subtitles in <a href="#page-title">page titles</a>)</h2>
        <p class="flex-up">This is class flex-up</p>
        <p>This is class <span class="accent-orange">accent-orange</span>, which can be combined with other classes to change weight or size, such as <span class="enlarge accent-orange weight-medium">accent-orange</span> which combines the accent with <code>.enlarge</code> and <code>.weight-medium</code>.</p>
        <p>This is class <span class="accent-yellow">accent-yellow</span>, which can be combined with other classes to change weight or size, such as <span class="enlarge accent-yellow weight-bold">accent-yellow</span> which combines the accent with <code>.enlarge</code> and <code>.weight-bold</code>.</p>
        <p>This is class <span class="accent-gray">accent-gray</span>, which can also be combined with other classes, such as <span class="uppercase accent-gray weight-medium">accent-gray</span> which combines the accent with <code>.uppercase</code> and <code>.weight-medium</code>.</p>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography3" id="typography-heading3" aria-controls="typography3" role="tab">Content Intro/Lead</a>
    <div class="accordion-content" data-tab-content id="typography3" aria-labelledby="typography-heading3" role="tabpanel">
      <p>These styles create larger blocks of text for introductory content.</p>
      <hr>
      <div class="callout">
        <p class="intro">This is a paragraph with class <code>.intro</code>, which can also <strong>contain strong text</strong> and <em>emphasized text</em>.</p>
        <p class="lead">This is a paragraph with class <code>.lead</code>, which can also <strong>contain strong text</strong> and <em>emphasized text</em>.</p>
        <p>This is a regular paragraph for comparison.</p>
      </div>
  </li>
</ul>
```

---

```html_example
<ul class="accordion-pointer" data-accordion>  
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography12" id="typography-heading12" aria-controls="typography12" role="tab">Abbreviations, Code, Keystrokes</a>
    <div class="accordion-content" data-tab-content id="typography12" aria-labelledby="typography-heading12" role="tabpanel">
      <p>Use the <code>abbr</code> tag to annotate a shortened term. Abbreviations must always have a <code>title</code> attribute which clarifies the full term.</p>
      <hr>
      <div class="callout">
        <ul>
          <li>In my dream last night, I saw <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and George <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on Sunset <abbr title="Boulevard">Blvd</abbr>.</li>
        </ul>          
      </div>             
      <p>Format references to markup languanges with the <code>code</code> tag.  Use the <code>kbd</code> tag to annotate a key stroke or combination.</p>
      <hr>
      <div class="callout">
        <ul>
          <li>To displays all connections and listening ports, type <code>netstat -a</code> at the command prompt.</li>
          <li>To exit the routine, press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows).</li>
        </ul>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography15" id="typography15-heading" aria-controls="typography15" role="tab">Text Weight &amp; Size</a>
    <div class="accordion-content" data-tab-content id="typography15" aria-labelledby="typography15-heading" role="tabpanel">
      <div class="callout">
        <h5>Emphasized Text</h5>
        <p>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> to add emphasis to standard text.</p>
        <p>This is <strong>content inside a &lt;strong&gt; element</strong> in a regular sentence.</p>
        <p>This is <em>content inside an &lt;em&gt; element</em> in a regular sentence.</p>
      </div>    
      <hr>
      <div class="callout">
        <h5>Text Weight</h5>
        <p>When you need to change the weight of text without changing it's emphasis, add class <code>.weight-xxx</code> (where xxx = light, normal, medium, bold, or black).  These classes can be nested as needed to create variation.</p>
        <ol>
          <li class="weight-light">This is class weight-light (300), and <span class="weight-bold">This is class weight-bold (700)</span> inside of it.</li>
          <li class="weight-normal">This is class weight-normal (400), and <span class="weight-black">This is class weight-black (900)</span> inside of it.</li>
          <li class="weight-medium">This is class weight-medium (500), and <span class="weight-light">This is class weight-light (300)</span> inside of it.</li>
          <li class="weight-bold">This is class weight-bold (700), and <span class="weight-normal">This is class weight-normal (400)</span> inside of it.</li>
          <li class="weight-black">This is class weight-black (900), and <span class="weight-medium">This is class weight-medium (500)</span> inside of it.</li>
        </ol>
      </div>   
      <hr>
      <div class="callout"> 
        <h5>Text Size</h5>
        <p>Use these styles you want to adjust the font size of an item up or down.</p>
        <p>This is <span class="enlarge">class enlarge -- it bumps up the size</span> of the current text.  This size increase is <strong>proportional</strong> -- it will be 112.5% of the element's text size.</p>
        <p>This is <span class="reduce">class reduce -- it bumps down the size</span> of the current text.  This size decrease is <strong>proportional</strong> -- it will be 87.5% of the element's text size.</p>
        <p>This is <span class="stat-sm">class stat-sm</span> it calls out a single data point to highlight it.</p>     
        <p>This is <span class="stat-med">class stat-med</span> it calls out a single data point to highlight it.</p>     
        <p>This is <span class="stat">class stat</span> it calls out a single data point to highlight it.</p>
        <p>This is <span class="stat-lg">class stat-lg</span> it calls out a single data point to highlight it.</p>         
      </div>
    </div>
  </li>  
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography6" id="typography6-heading" aria-controls="typography6" role="tab">Capitalization</a>
    <div class="accordion-content" data-tab-content id="typography6" aria-labelledby="typography6-heading" role="tabpanel">
      <p>Use these styles when the choice to display some text is merely a stylistic choice. When using these styles, keep your markup in standard case, and use this class to visually change the displayed case.</p>
      <p>For words that should <strong>always</strong> be uppercased (such as our stock symbol, or acronyms like REO), use uppercased letters in your markup.</p>
      <hr>
      <div class="callout">
        <p><span class="uppercase">This is class uppercase</span>, which makes every letter appear capitalized.</p>
        <p><span class="smallcaps">This is Class smallcaps</span>, which makes every lowercased letter appear as small capital letters.</p>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography11" id="typography-heading11" aria-controls="typography11" role="tab">Blockquotes</a>
    <div class="accordion-content" data-tab-content id="typography11" aria-labelledby="typography-heading11" role="tabpanel">
      <p>Blockquotes should only be used when a person or source is being quoted.</p>
      <ul>
        <li>Include the source for the quote in a <code>footer</code> and include the author, title or work in a <code>cite</code>.</li>
        <li>Do <strong>not</strong> use a blockquote simply to decorate text that isn't a quotation.</li>
      </ul>
      <hr>
      <div class="callout">
        <blockquote>
          <p>Cowards die many times before their deaths; the <strong>valiant</strong> never taste of death but once.</p>
          <footer><cite>William Shakespeare</cite> in <cite>King Henry the Fifth</cite></footer>
        </blockquote>
      </div>
    </div>
  </li>
</ul>
```

---

```html_example
<ul class="accordion-pointer" data-accordion>  
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography4" id="typography-heading4" aria-controls="typography4" role="tab">Sidebar (aside) classes</a>
    <div class="accordion-content" data-tab-content id="typography4" aria-labelledby="typography-heading4" role="tabpanel">
      <p>In addition to these styles, sidebars can also use any of the basic content styles.</p>
      <hr>
      <div class="callout">
        <h3 class="sidebar-title">This is a sidebar-title</h3>
        <h3 class="sidebar-subtitle">This is a sidebar-subtitle (use in research landing)</h3>
        <h3 class="sidebar-headline">This is a sidebar-headline</h3>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography5" id="typography-heading5" aria-controls="typography5" role="tab">Article Promo classes</a>
    <div class="accordion-content" data-tab-content id="typography5" aria-labelledby="typography-heading5" role="tabpanel">
      <p>These styles are for article promotions via article lists and cards. These are not for use in actual article content.</p>
      <hr>
      <div class="callout">
      <h5>Article Data for Lists and Cards</h5>
        <h3 class="article-headline">This is class article-headline (use in news, blog)</h3>
        <h3 class="card-title-large">This is class card-title-large (variation of above, used for EP cards only)</h3>
        <div class="article-category">This is class article-category</div>
        <div class="article-date">This is class article-date (used in blog, perspectives)</div>
        <div class="article-date-lg">This is class article-date-lg <span class="uppercase"><strong>Partial Uppercase/Strong</strong></span> (used in media, research)</div>
        <div class="article-date-feature">This is class article-date-feature <span class="uppercase">Partial Uppercase</span> (used in featured blog/EP)</div>
        <div class="article-byline">This is class article-byline <span class="uppercase">Partial Uppercase</span> <span class="reduce">Partial Reduced</span> (used in featured EP)</div> 
      </div>
      <hr>
      <div class="callout">
      <h5>Promo Blurbs</h5>
      <p>These styles are limited just to promo blurbs -- all of these styles <strong>hide</strong> at smallest screen sizes, to allow more room for their accompanying headline.</p> 
        <div class="article-blurb">This is class article-blurb (used in news, EP).</div>
        <div class="article-blurb-blog">This is class article-blurb-blog (used only in blog).</div>
        <div class="article-blurb-lg">This is class article-blurb-lg (used only in featured EP).</div> 
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography9" id="typography-heading9" aria-controls="typography9" role="tab">Grid-block classes</a>
    <div class="accordion-content" data-tab-content id="typography9" aria-labelledby="typography-heading9" role="tabpanel">
      <p>These are intended for use in the colorful grid layouts like the About page and media resources.  Be careful using them elsewhere, as they have a more dramatic size variation from small screen to large screen than most other text styles.</p>
      <hr>
      <div class="callout">
        <div class="callout background-teal">
          <p class="grid-block-label">This is grid-block-label</p>
          <p class="grid-block-title-large">This is grid-block-title-large</p>
          <p class="grid-block-title">This is grid-block-title</p>
          <p class="grid-block-title-medium">This is grid-block-title-medium</p>
          <p class="grid-block-text">This is grid-block-text.</p>
          <p class="grid-block-text-small">This is grid-block-text-small</p>
          <p class="stat-lg">This is stat-lg</p>
          <p class="stat">This is stat</p>
          <p class="stat-med">This is stat-med</p>
          <p class="stat-sm">This is stat-sm</p>
        </div>
      </div>
    </div>
  </li>
</ul>
```

---

```html_example
<ul class="accordion-pointer" data-accordion>  
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography7" id="typography-heading7" aria-controls="typography7" role="tab">Footer Promo classes</a>
    <div class="accordion-content" data-tab-content id="typography7" aria-labelledby="typography-heading7" role="tabpanel">
      <p>This style should only be used inside a Footer Promo.</p>
      <hr>
      <div class="callout">
        <div class="callout background-primary footer-promo">
          <h3 class="callout-footer-title">This is callout-footer-title</h3>
        </div>  
      </div>      
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography8" id="typography-heading8" aria-controls="typography8" role="tab">Hero classes</a>
    <div class="accordion-content" data-tab-content id="typography8" aria-labelledby="typography-heading8" role="tabpanel">
      <p>These should only be used inside HERO elements.</p>
      <hr>
      <div class="callout">
        <div class="callout background-primary">
          <div class="hero-date">This is hero-date</div>
          <h1 class="hero-title">This is hero-title</h1>
          <div class="hero-subtitle">This is hero-subtitle (homepage only)</div>
        </div>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography10" id="typography-heading10" aria-controls="typography10" role="tab">Homepage classes</a>
    <div class="accordion-content" data-tab-content id="typography10" aria-labelledby="typography-heading10" role="tabpanel">
      <p>These styles should only be used on the corporate homepage.</p>
      <hr>
      <div class="callout">
        <h2 class="homepage-headline">This is homepage-headline</h2>
        <h3 class="finance-category">This is finance-category</h3>
        <h3 class="finance-research-title">This is finance-research-title</h3>
        <p class="finance-research-category">This is finance-research-category</p>
        <p class="stat-med">This is stat-med</p>
        <p class="stat-sm">This is stat-sm</p>
        <p class="stat-points">This is stat-points</p>
        <p class="title-testimonial">This is title-testimonial</p>  
      </div>
    </div>
  </li>
</ul>
```



# Text Alignment

The default text alignment for most containers is left.
- You can change the text alignment of an element by adding `.text-left`, `.text-right`, or `.text-center` to an element.
- You can shift alignment at different breakpoints by adding a breakpoint to the front of a text alignment class. For example, `.medium-text-center` will keep text left-aligned on the smallest screens, but switch to center-aligned on medium screens and larger.
- There are also [vertical alignment classes](#data-tables) if you are needing to align table cells.

```html
<p class="text-left"><strong>This text is left-aligned.</strong> </p>
<p class="medium-text-right"><strong>This text is right-aligned</strong> at medium screen widths and larger.</p>
<p class="text-center"><strong>This text is center-aligned.</strong> </p>
```

<div class="callout background-concrete">
  <p class="text-left"><strong>This text is left-aligned.</strong> </p>
</div>
<div class="callout background-concrete">
  <p class="medium-text-right"><strong>This text is right-aligned</strong> at medium screen widths and larger.</p>
</div>
<div class="callout background-concrete">
  <p class="text-center"><strong>This text is center-aligned.</strong> </p>
</div>



# Ordered Lists

Use an ordered list when creating a list where the order of the items is important. Ordered lists support additional attributes and classes if you need to specify a starting number other than 0, apply a non-integer counting method, or reverse to decending order.

---

## Standard Nested List

This is the ordered list style you will most often use.

```html_example
<div class="callout hollow">
  <ol>
    <li>Cheese</li>
    <li>Pepperoni</li>
    <li>Bacon
      <ol>
        <li>Normal bacon</li>
        <li>Canadian bacon</li>
      </ol>
    </li>
    <li>Sausage</li>
    <li>Onions</li>
    <li>Mushrooms</li>
    <li>Peppers</li>
    <li>Pineapple</li>
    <li>Black Olives</li>
    <li>Green Olives</li>
  </ol>
</div>
```

---

## Descending list

Add attribute `reversed` to the `<ol>` tag.

```html_example
<div class="callout hollow">
  <ol reversed="reversed">
    <li>Coffee</li>
    <li>Milk</li>
    <li>Tea</li>
    <li>Soda</li>
  </ol>
</div>
```

## Reversed Display Order

Use class `.reversed` to visually reverse the display (for something like a "top 10 list" where you want the items to appear to count down to one. 

<strong>Note:</strong> this only reverses the visual display. The items are still marked up in their standard order.  There is also a reversed attribute, but IE does not support it.

  
```html_example
<div class="callout hollow">
  <ol class="reversed">
    <li>Cheese</li>
    <li>Pepperoni</li>
    <li>Bacon</li>
    <li>Sausage</li>
    <li>Onions</li>
    <li>Mushrooms</li>
    <li>Peppers</li>
    <li>Pineapple</li>
    <li>Black Olives</li>
    <li>Green Olives</li>
  </ol>
</div>
```

---

## Alphabetical lists

Use `.upper-alpha` for uppercase or `.lower-alpha` for lowercase. If you go beyond 26, the count will shift from A-Z to AA-ZZ to AAA-ZZZ, etc. Nested lists are numeric unless you specify a different type.

```html_example
<div class="callout hollow">
  <ol class="upper-alpha">
    <li>Coffee</li>
    <li>Milk
      <ol class="lower-alpha">
        <li>Whole</li>
        <li>Reduced fat</li>
        <li>Skim</li>
      </ol>
    </li>
    <li>Tea
      <ol>
        <li>Black</li>
        <li>Herbal</li>
        <li>Green</li>
      </ol>
    </li>
    <li>Soda</li>
  </ol>
</div>
```

---

## Roman Numerals lists

Use `.upper-roman` for uppercase or `.lower-roman` for lowercase. Nested lists are numeric unless you specify a different type.

```html_example
<div class="callout hollow">
  <ol class="upper-roman">
    <li>Coffee</li>
    <li>Milk
      <ol class="lower-roman">
        <li>Whole</li>
        <li>Reduced fat</li>
        <li>Skim</li>
      </ol>
    </li>
    <li>Tea
      <ol>
        <li>Black</li>
        <li>Herbal</li>
        <li>Green</li>
      </ol>
    </li>
    <li>Soda</li>
  </ol>
</div>
```

---

## Leading Zero list

Use `.leading-zero` to include leading zeros on the numbers 1-9. Nested lists are numeric unless you specify a different type.

```html_example
<div class="callout hollow">
  <ol class="leading-zero">
    <li>Cheese</li>
    <li>Pepperoni</li>
    <li>Bacon</li>
    <li>Sausage</li>
    <li>Onions</li>
    <li>Mushrooms</li>
    <li>Peppers</li>
    <li>Pineapple</li>
    <li>Black Olives</li>
    <li>Green Olives</li>
  </ol>
</div>
```

---

## Start an ordered list at a number other than One

Provide a numeric value to the <code>start</code> attribute (even if the list is alpabetical). <strong>Note:</strong> you will need to add custom padding to a list where the item count is 3 digits or more -- our default level of indention displays best for 1-2 digit numbers.

```html_example
<div class="callout hollow">
  <ol class="gutter-left" start="98">
    <li>Coffee</li>
    <li>Milk
      <ol class="lower-alpha" start="8">
        <li>Whole</li>
        <li>Reduced fat</li>
        <li>Skim</li>
      </ol>
    </li>
    <li>Tea</li>
    <li>Soda</li>
  </ol>      
</div>
```



# Unordered Lists

Use an unordered list to... *list things*, if the order of the items doesn't matter.  Add class `.no-margin` to override the default margins.

```html_example
<div class="callout hollow">
  <ul>
    <li>List item</li>
    <li>List item
      <ul>
        <li>Nested list item      
          <ul>
            <li>Nested in a nested list item   
              <ol>
                <li>Numbered list</li>
                <li>Deeply nested</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>Nested list item</li>
      </ul>
    </li>
    <li>List item</li>
  </ul>
</div>
```

---

## Un-bulleted Unordered Lists

Add class `.no-bullet` to remove the bullets from that list.  Nested lists will retain their formatting unless also modified.

```html_example
<div class="callout hollow">
  <ul class="no-bullet">
    <li>List item</li>
    <li>List item</li>
    <li>List item
      <ul>
        <li>Nested list item</li>
        <li>Nested list item</li>
      </ul>
    </li>
    <li>List item</li>
    <li>List item</li>
  </ul>
</div>
```

---

## Expanded Unordered Lists

When you require additional space between very long, complex list items -- such as those where multiple paragraphs are in a single list item, use `p` tags.

```html_example
<div class="callout hollow">
  <ul>
    <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor <a href="#">orci eros, ac molestie lorem</a> dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat.</p></li>
    <li><p>Proin diam quam, elementum in eleifend id, elementum et metus. Cras in justo consequat justo semper ultrices. Sed dignissim lectus a ante mollis, nec vulputate ante molestie. Proin in porta nunc. Etiam pulvinar turpis sed velit porttitor, vel adipiscing velit fringilla. Cras ac tellus vitae purus pharetra tincidunt. Sed cursus aliquet aliquet. <strong>Cras eleifend commodo malesuada.</strong> In turpis turpis, ullamcorper ut tincidunt a, ullamcorper a nunc. Etiam luctus tellus ac dapibus gravida. Ut nec lacus laoreet neque ullamcorper volutpat.</p>
      <p>Nunc et leo erat. Aenean mattis ultrices lorem, eget adipiscing dolor ultricies eu. In hac habitasse platea dictumst. Vivamus cursus feugiat sapien quis aliquam. Mauris quam libero, porta vel volutpat ut, blandit a purus. Vivamus vestibulum <a href="#">dui vel tortor molestie</a>, sit amet feugiat sem commodo. Nulla facilisi. Sed molestie arcu eget tellus vestibulum tristique.</p>
    </li>
    <li><p>Nullam ut tincidunt nunc. Pellentesque metus lacus, commodo eget justo ut, rutrum varius nunc. <strong>Sed non rhoncus risus.</strong> Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, <a href="#">nec consequat ipsum mattis id</a>. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu.</p>
      <p><em>Suspendisse potenti.</em> Donec ante velit, ornare at augue quis, <a href="#">tristique laoreet sem</a>. Etiam in ipsum elit. Nullam cursus dolor sit amet nulla feugiat tristique. Phasellus ac tellus tincidunt, imperdiet purus eget, ullamcorper ipsum. Cras eu tincidunt sem. Nullam sed dapibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id venenatis tortor. In consectetur sollicitudin pharetra. Etiam convallis nisi nunc, et aliquam turpis viverra sit amet. Maecenas faucibus sodales tortor.</p>
      <p>Suspendisse lobortis mi eu leo viverra volutpat. Pellentesque velit ante, vehicula sodales congue ut, elementum a urna. Cras tempor, ipsum eget luctus rhoncus, arcu ligula fermentum urna, vulputate pharetra enim enim non libero.</p>
    </li>
  </ul>
</div>
```

---

## Divided Lists

To add dividers between items in a list, add the class `.list-divided` (for light backgrounds) or `.list-divided-white` (for dark backgrounds) to the `ul` or tag.  

```html_example
<div class="callout">
  <div class="row">
    <div class="column medium-6">
      <div class="callout hollow"> 
        <ul class="list-divided no-bullet">
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div> 
    </div>
    <div class="column medium-6">    
      <div class="callout background-gray"> 
        <ul class="list-divided-white no-bullet">
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div>
    </div>  
  </div> 
</div>
```

---

### News List

For more space between items, add class `.clipping-block` instead of `.list-divided`.

```html_example
<div class="row">
  <div class="column medium-8 medium-centered">
    <ul class="no-bullet clipping-block">
      <li><div class="article-date-lg">January 18, 2017</div>
        <h3 class="article-headline"><a href="#">Freddie Mac Forgoes Issuing a Reference Notes Security on its January 18, 2017 Announcement Date</a></h3>
        <p>Freddie Mac announced today that it will forgo issuing a Reference Notes security on its Jan. 18, 2017 announcement... <a href="#">More</a></p>
      </li>
      <li><div class="article-date-lg">January 18, 2017</div>
        <h3 class="article-headline"><a href="#">Freddie Mac to Delist from Luxembourg Stock Exchange </a></h3>
        <p>Freddie Mac  announced that its request to delist its debt and mortgage securities from the Luxembourg Stock Exchange was granted... <a href="#">More</a></p>
      </li>
      <li><div class="article-date-lg">January 18, 2017</div>
        <h3 class="article-headline"><a href="#">Mortgage Rates Lower for Third Consecutive Week </a></h3>
        <p>Freddie Mac  today released the results of its Primary Mortgage Market Survey&reg; (PMMS&reg;), showing average mortgage rates moving... <a href="#">More</a></p>
      </li>
      <li><div class="article-date-lg">January 17, 2017</div>
        <h3 class="article-headline"><a href="#">Freddie Mac Announces Pricing of $198.5 Million Multifamily Small Balance Loan Securitization </a></h3>
        <p>Freddie Mac  announces the pricing of the SB26 offering, a multifamily mortgage-backed securitization backed by small balance... <a href="#">More</a></p>
      </li>
    </ul>
  </div>
</div> 
```

---

## RSS Lists

Add class `list-rss` to the `ul` tag to include an rss icon for each list item.

```html_example
<div class="row">
  <div class="column medium-8 large-5 medium-centered">
    <div class="callout background-gray">
    <h2>RSS Feeds</h2>
      <ul class="list-divided-white flex-up no-bullet">
        <li>
          <ul class="no-bullet list-rss">
            <li><a href="#">Housing and Economic Research</a></li>
            <li><a href="#">Perspectives</a></li>
          </ul>
        </li>
        <li><span class="uppercase weight-bold">Freddie Mac Blog</span>
          <ul class="no-bullet list-rss">
            <li><a href="#">All Posts</a></li>
            <li><a href="#">Homeownership</a></li>
            <li><a href="#">Rental Housing</a></li>
            <li><a href="#">Research &amp; Analysis</a></li>
            <li><a href="#">Notable</a></li>
          </ul>            
        </li>
      </ul>
    </div>
  </div>
</div> 
```

---

## Lists With Icons

You can combine an unordered list or divided list with (Media Objects)[#media-objects] to add small image to a list.

- Use the (visibility classes)[#visibility-classes] like `.show-for-medium` to hide images at small screen and display above a specific breakpoint.
- Be sure to include an `aria-hidden="false"` attribute to hide decorative SVG images from screen readers.

```html_example
<div class="row">
  <div class="column large-8 large-centered">
    <ul class="no-bullet gutter-top">
     <li class="media-object collapse medium-uncollapse gutter-bottom">
        <div class="media-object-section">  
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" width="28px" height="28px">
          <path fill="#00a6e2" d="M 26.4 47.4 l -2.8 -2.8 L 36.2 32 L 23.6 19.4 l 2.8 -2.8 L 41.8 32" />
          <circle fill="none" stroke="#00a6e2" stroke-width="5" cx="32" cy="32" r="29" />
          </svg>
        </div>
        <div class="media-object-section">
          <p><strong>Duis aute irure dolor in reprehenderit</strong><br>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </li>
      <li class="media-object collapse medium-uncollapse gutter-bottom">
        <div class="media-object-section">
          <svg aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" width="28px" height="28px">
          <path class="fill-anchor" d="M 26.4 47.4 l -2.8 -2.8 L 36.2 32 L 23.6 19.4 l 2.8 -2.8 L 41.8 32" />
          <circle class="stroke-anchor" stroke-width="5" cx="32" cy="32" r="29" />
          </svg>
        </div>
        <div class="media-object-section">
          <p><strong>Ut enim ad minim veniam</strong><br>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.  </p>
        </div>
      </li>
      <li class="media-object collapse medium-uncollapse gutter-bottom">
        <div class="media-object-section">  
          <h2 class="icon show-for-medium" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#88bd45" d="M 4.9 8.8 c 0.2 -0.2 0.3 -0.5 0.5 -0.7 c 0.1 -0.2 0.3 -0.5 0.4 -0.7 c 0.8 0.3 1.8 0.8 2.8 1.3 c 1.2 0.6 2.2 1.3 3 2 c 1.6 -1.8 3.5 -3.8 5.8 -5.8 c 1.7 -1.5 3.4 -2.8 5 -3.8 c 0.2 0.5 0.4 1 0.6 1.6 c -1.6 1.5 -3.2 3.3 -4.9 5.4 c -2.6 3.2 -4.4 6.4 -5.7 9.1 c -1.4 -1.6 -2.8 -3.1 -4.2 -4.7 C 7.1 11.1 6 10 4.9 8.8 Z m 15 -0.9 c 0.4 0.8 0.8 2.1 0.7 3.5 c -0.2 4 -3.5 9.2 -9.2 9.2 c -5.1 0 -9.2 -4.1 -9.2 -9.2 s 4.1 -9.2 9.2 -9.2 c 0.9 0 1.8 0.2 1.8 0.2 c 1.6 0.3 2.8 1 3.4 1.5 c 0.3 -0.2 0.5 -0.4 0.8 -0.6 c 0.3 -0.3 0.6 -0.5 0.8 -0.8 c -0.7 -0.6 -2.2 -1.5 -4.2 -2 c 0 0 -1.3 -0.3 -2.6 -0.3 C 5.2 0.2 0.2 5.2 0.2 11.4 s 5 11.2 11.2 11.2 s 11.2 -5 11.2 -11.2 c 0 -0.5 -0.1 -1.1 -0.1 -1.1 c -0.2 -1.8 -0.7 -3.2 -1.2 -4.1 c -0.3 0.3 -0.6 0.5 -0.9 0.9 c -0.1 0.2 -0.3 0.5 -0.5 0.8 Z" /></svg></h2>
        </div>
        <div class="media-object-section">
          <h2 class="weight-normal">Quis nostrud exercitation ullamco laboris</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </li>
      <li class="media-object collapse medium-uncollapse gutter-bottom">
        <div class="media-object-section">  
          <h2 class="icon show-for-medium" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#88bd45" d="M 4.9 8.8 c 0.2 -0.2 0.3 -0.5 0.5 -0.7 c 0.1 -0.2 0.3 -0.5 0.4 -0.7 c 0.8 0.3 1.8 0.8 2.8 1.3 c 1.2 0.6 2.2 1.3 3 2 c 1.6 -1.8 3.5 -3.8 5.8 -5.8 c 1.7 -1.5 3.4 -2.8 5 -3.8 c 0.2 0.5 0.4 1 0.6 1.6 c -1.6 1.5 -3.2 3.3 -4.9 5.4 c -2.6 3.2 -4.4 6.4 -5.7 9.1 c -1.4 -1.6 -2.8 -3.1 -4.2 -4.7 C 7.1 11.1 6 10 4.9 8.8 Z m 15 -0.9 c 0.4 0.8 0.8 2.1 0.7 3.5 c -0.2 4 -3.5 9.2 -9.2 9.2 c -5.1 0 -9.2 -4.1 -9.2 -9.2 s 4.1 -9.2 9.2 -9.2 c 0.9 0 1.8 0.2 1.8 0.2 c 1.6 0.3 2.8 1 3.4 1.5 c 0.3 -0.2 0.5 -0.4 0.8 -0.6 c 0.3 -0.3 0.6 -0.5 0.8 -0.8 c -0.7 -0.6 -2.2 -1.5 -4.2 -2 c 0 0 -1.3 -0.3 -2.6 -0.3 C 5.2 0.2 0.2 5.2 0.2 11.4 s 5 11.2 11.2 11.2 s 11.2 -5 11.2 -11.2 c 0 -0.5 -0.1 -1.1 -0.1 -1.1 c -0.2 -1.8 -0.7 -3.2 -1.2 -4.1 c -0.3 0.3 -0.6 0.5 -0.9 0.9 c -0.1 0.2 -0.3 0.5 -0.5 0.8 Z" /></svg></h2>
        </div>
        <div class="media-object-section">
          <h2 class="weight-normal">Duis aute irure dolor in reprehenderit</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.  </p>
        </div>
      </li>
    </ul>
    <h4 class="gutter-top">With Dividers</h4>
    <ul class="no-bullet list-divided">
      <li class="media-object">
        <div class="media-object-section">  
          <p><svg class="icon-calendar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 560"><rect x="119" width="48" height="139" rx="12.97" ry="12.97"/><rect x="382" width="48" height="139" rx="12.97" ry="12.97"/><rect x="178" y="62" width="192" height="42"/><path d="M467.86,62H441v42.77c30,3.86,53,29.73,53,61.14V262H46V165.9c0-34.07,27.22-61.9,61.29-61.9H108V62H72.14C32.07,62,0,94.67,0,134.73V487.46A72.2,72.2,0,0,0,72.14,560H467.86A72.2,72.2,0,0,0,540,487.46V134.73C540,94.67,507.93,62,467.86,62Z"/><text class="text1" x="270" y="245">Sept</text><text class="text2" x="270" y="465">25</text></svg></p>
        </div>
        <div class="media-object-section main-section">
          <div class="article-category">Industry Event</div>
          <h3 class="sidebar-headline">NMHC Student Housing Conference & Expo</h3>
          <p class="article-date-lg weight-light">September 25, 2017 <br>Tampa, FL</p>
          <p class="weight-normal"><a class="icon-chevron-right" href="#" aria-label="NMHC Student Housing Conference">Event Details</a></p>
        </div>
      </li>
      <li class="media-object">
        <div class="media-object-section">  
          <p><svg class="icon-calendar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 560"><rect x="119" width="48" height="139" rx="12.97" ry="12.97"/><rect x="382" width="48" height="139" rx="12.97" ry="12.97"/><rect x="178" y="62" width="192" height="42"/><path d="M467.86,62H441v42.77c30,3.86,53,29.73,53,61.14V262H46V165.9c0-34.07,27.22-61.9,61.29-61.9H108V62H72.14C32.07,62,0,94.67,0,134.73V487.46A72.2,72.2,0,0,0,72.14,560H467.86A72.2,72.2,0,0,0,540,487.46V134.73C540,94.67,507.93,62,467.86,62Z"/><text class="text1" x="270" y="245">Oct</text><text class="text2" x="270" y="465">16-18</text></svg></p>
        </div>
        <div class="media-object-section main-section">
          <div class="article-category">Conference</div>
          <h3 class="sidebar-headline">2017 Customer Conference</h3>
          <p class="article-date-lg weight-light">October 16-18, 2017 <br>Phoenix, AZ</p>
          <p class="weight-normal"><a class="icon-chevron-right" href="#" aria-label="2017 Customer Conference">Event Details</a></p>
        </div>
      </li>
      <li class="media-object">
        <div class="media-object-section">  
          <p><svg class="icon-calendar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 560"><rect x="119" width="48" height="139" rx="12.97" ry="12.97"/><rect x="382" width="48" height="139" rx="12.97" ry="12.97"/><rect x="178" y="62" width="192" height="42"/><path d="M467.86,62H441v42.77c30,3.86,53,29.73,53,61.14V262H46V165.9c0-34.07,27.22-61.9,61.29-61.9H108V62H72.14C32.07,62,0,94.67,0,134.73V487.46A72.2,72.2,0,0,0,72.14,560H467.86A72.2,72.2,0,0,0,540,487.46V134.73C540,94.67,507.93,62,467.86,62Z"/><text class="text1" x="270" y="245">Oct</text><text class="text2" x="270" y="465">14</text></svg></p>
        </div>
        <div class="media-object-section  main-section">
          <div class="article-category">Conference</div>
          <h3 class="sidebar-headline">NCSHA Annual Conference</h3>
          <p class="article-date-lg weight-light">October 14, 2017 <br>Denver, CO </p>
        </div>
      </li>
    </ul>
    <h4 class="gutter-top">Image Last instead of First</h4>
    <ul class="no-bullet">
      <li class="media-object gutter-bottom">
        <div class="media-object-section  main-section">
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div class="media-object-section">  
          <img src="files/layton-sm.jpg" alt="Layton">
        </div>
      </li>
      <li class="media-object gutter-bottom">
        <div class="media-object-section  main-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div class="media-object-section">  
          <img src="files/brickman-sm.jpg" alt="David Brickman">
        </div>
      </li>
    </ul>
  </div>
</div>
```

---

### Nested Lists

You can nest a `.media-object` inside of a `.media-object-section` if that section is the `.main-section`.

For nested items, include `.stack-for-small` on each `.media-object`, and add class `.width-auto` to the images if you don't want them to stretch to the available width once stacked.

```html_example
<div class="row">
  <div class="column large-10 large-centered">
    <ul class="no-bullet no-margin">
      <li class="media-object gutter-bottom">
        <div class="media-object-section">  
          <img src="files/brickman-sm.jpg" alt="David Brickman">
        </div>
        <div class="media-object-section  main-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <ul class="no-bullet no-margin">
            <li class="media-object gutter-bottom stack-for-small">
              <div class="media-object-section">  
                <img class="width-auto" src="files/layton-sm.jpg" alt="Layton">
              </div>
              <div class="media-object-section  main-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
            </li>
            <li class="media-object stack-for-small">
              <div class="media-object-section">  
                <img class="width-auto" src="files/brickman-sm.jpg" alt="David Brickman">
              </div>
              <div class="media-object-section  main-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="media-object gutter-bottom">
        <div class="media-object-section">
          <img src="files/layton-sm.jpg" alt="Layton">
        </div>
        <div class="media-object-section  main-section">
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </li>
    </ul>
  </div>
</div>
```



# Description & Glossary Lists

A description list `<dl>` is used to pair a list of `<dt>` elements (the term or name to be described)  with one or more `<dd>` elements (the description of each term or name). 

---

##  Description List

A basic description list. 

```html_example
<div class="callout hollow">
  <dl>
    <dt>Time</dt>
    <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
    <dt>Space</dt>
    <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
    <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
  </dl>
</div>
```

---

## Glossary List

To indent the descriptions, add class `.glossary` to the `<dl>`.
 
```html_example 
<div class="callout hollow">
  <dl class="glossary">
    <dt>Amortization</dt>
    <dd>Paying off a loan over the period of time and at the interest rate specified in a loan document. The amortization of a loan includes the payment of interest and a part of the amount borrowed in each mortgage payment.</dd>
    <dt>Amortization Schedule</dt>
    <dd>Provided by mortgage lenders, the schedule shows how over the term of your mortgage the principal portion of the mortgage payment increases and the interest portion of the mortgage payment decreases.</dd>
    <dt>Annual Percentage Rate (APR)</dt>
    <dd>How much a loan costs annually. The APR includes the interest rate, points, broker fees and certain other credit charges a borrower is required to pay.</dd>
    <dt>Application Fee</dt>
    <dd>The fee that a mortgage lender charges to apply for a mortgage to cover processing costs.</dd>
  </dl>   
</div>
```

---

## Divided Description List

To add dividers between the entries, add class `.description-block` to the `<dl>`.

```html_example 
<dl class="description-block">
  <dt>ABC Banking</dt>
  <dd>
    <strong>Contact:</strong><br>
    John Doe<br>
    <a class="mailto" href="#">john_doe@bankname.com</a><br>
    Chief Operating Officer<br>
    Arlington, VA<br>
    (555) 555-1234<br>
    <a class="offsite" href="#">http://www.bankname.com</a>
    <div class="areas">
      <strong>Approved Area(s):</strong><br>
      Connecticut, New Jersey, Virginia 
    </div>
  </dd> 

  <dt>My Bank, LLC</dt>
  <dd>
    <strong>Contact:</strong><br>
    Jane Doe<br>
    <a class="mailto" href="#">jane_doe@mybank.com</a><br>
    Senior Vice President -- Product Manager<br>
    Bethesda, MD<br>
    (555) 123-4567<br>
    <a class="offsite" href="#">http://www.mybank.com</a>
    <div class="areas">
      <strong>Approved Area(s):</strong><br>
      California, Maryland, North Carolina, Ohio, Pennsylvania <em>(Western)</em>, South Carolina 
    </div>
  </dd> 
   
  <dt>The Other Bank</dt>
  <dd>
    <strong>Contact:</strong><br>
    Jim Doe<br>
    <a class="mailto" href="#">jim_doe@theotherbank.com</a><br>
    Executive Vice President<br>
    Charlotte, NC<br>
    (555) 987-6543<br>
    <a class="offsite" href="#">http://www.theotherbank.com/</a>
    <div class="areas">
      <strong>Approved Area(s):</strong><br>
      New York <em>(Counties of New York, Bronx, Kings, Queens, Richmond)</em>, North Carolina 
    </div>
  </dd> 
</dl>
```



# Callouts

<p class="lead">A callout is just a container with a `.callout` class applied. You can put any kind of content inside.</p>

- To create a callout with a border, add class `.hollow`, `.hollow-thin`, or `.border-white` to the `.callout` container.
- To select a callout with a specific background color, include a [background color class](#colors) on the `.callout` container.
- There are callouts for use within the content area.  Refer to [prefooter promo](#prefooter-promo-band) for full width promo containers. 
- Avoid applying background colors to `.row` elements.  

```html_example
<div class="row">
  <div class="medium-6 column">
    <div class="callout hollow">
      <p>This is a <a href="#">callout</a> with class of hollow.</p>
    </div>
    <div class="callout hollow-thin">
      <p>This is a <a href="#">callout</a> with a class of hollow-thin.</p>
    </div>
    <div class="callout background-concrete">
      <p>This is a <a href="#">callout</a> with a class of background-concrete.</p>
    </div>
    <div class="callout background-gray">
      <p>This is a <a href="#">callout</a> with class of background-gray.</p>
    </div>
    <div class="callout background-green">
      <p>This is a <a href="#">callout</a> with a class of background-green.</p>
    </div>
    <div class="callout background-blue">
      <p>This is a <a href="#">callout</a> with class of background-blue.</p>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-orange">
      <p>This is a <a href="#">callout</a> with a class of background-orange.</p>
    </div>
    <div class="callout background-yellow">
      <p>This is a <a href="#">callout</a> with background-yellow</p>
    </div>
    <div class="callout background-purple">
      <p>This is a <a href="#">callout</a> with class of background-purple.</p>
    </div>
    <div class="callout background-teal">
      <p>This is a <a href="#">callout</a> with class of background-teal.</p>
    </div>
    <div class="callout background-primary">
      <p>This is a <a href="#">callout</a> with class of background-primary.</p>
    </div>
    <div class="callout background-red">
      <p>This is a <a href="#">callout</a> with class of background-red.</p>
    </div>
  </div>
</div>
<p>When nesting callouts against other backgrounds, you may need to include <code>.background-white</code> for hyperlink and text colors to work.</p>
<div class="row">
  <div class="column medium-6">
    <div class="callout background-gray">
      <p>This is a gray callout, with another callout nested inside it.</p>
      <div class="callout background-white">
        <p>This is a <a href="#">callout</a> with class of background-white.</p>
      </div>
    </div>
  </div>
  <div class="column medium-6">
    <div class="callout background-gray">
      <p>This is a gray callout, with another callout nested inside it.</p>
      <div class="callout hollow background-white">
        <p>This is a <a href="#">callout</a> with class of hollow and  background-white.</p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="column medium-6">
    <div class="gutter-all background-concrete">
      <p>This is a container with background-concrete. </p>
      <div class="callout background-concrete border-white">
        <p>This is a <a href="#">callout</a> with class of background-concrete and border-white, nested inside a container that has background-concrete.</p>
      </div>
    </div>
  </div>
  <div class="column medium-6">
    <div class="gutter-all background-yellow">
      <p>This is a container with background-yellow. </p>
      <div class="callout background-white hollow">
        <p>This is a <a href="#">callout</a> with class of background-white and hollow, nested inside a container that has a background.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Rounded Corners

<p>Add class `.rounded` to give a `.callout` rounded corners.  Rounded corners can be combined with any of the color or size variations.</p>

```html_example
<div class="callout background-blue rounded">
  <p>This is a rounded callout.</p>
</div>
```

---
 
## Sizing

Callouts can be sized using the `.small`, `.large` and `.xlarge` classes. These will affect the padding around content to be smaller and larger respectively.  You can limit the width of a callout by putting it inside less than 12 columns at larger widths.

```html_example
<div class="row">  
  <div class="medium-8 column medium-centered">
    <div class="callout background-purple small">
      <p>This is a callout with class of small. It has less padding between the contents and the edge of the container.</p>
    </div>
    <div class="callout background-purple large">
      <p>This is a callout with class of large. It has more padding between the contents and the edge of the container.</p>
    </div>
    <div class="callout background-purple xlarge">
      <p>This is a callout with class of xlarge. It has lots of padding between the contents and the edge of the container.</p>
    </div>
    <div class="callout background-purple xlarge">
      <div class="callout background-white xlarge">
        <p>This is a nested callout with class of xlarge. Combined it with <code>.background-white</code>, to create a white frame inside an element with a darker background, such as a modal.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Make An Entire Callout Clickable

To make the entire callout clickable, put an anchor tag around the `.callout` container.  

```html_example
<div class="row">
  <div class="small-8 medium-6 end column">
    <a href="http://www.freddiemac.com/">
      <div class="callout background-blue">
        <p class="enlarge">This entire blue callout is inside an anchor tag and becomes 1 big link.</p>
      </div>
    </a>
  </div>
</div>
```

---

## Making Callouts Closable

Pair the callout with the [close button](#close-button) component and `data-closable` attribute to create a dismissable alert box.

<div class="callout background-concrete">
  <p>When using the <code>data-closable</code> attribute, you can optionally add <a href="http://foundation.zurb.com/sites/docs/motion-ui.html">Motion UI</a> classes to the attribute to change the closing animation. If no class is added, the plugin defaults to to a fadeout animation.</p>
</div>

```html_example
<div class="row">
  <div class="medium-6 column">
    <div class="callout background-orange" data-closable>
      <h5>This is Important!</h5>
      <p>When you're done reading it, click the close button in the corner to dismiss this alert.</p>
      <p>I'm using the default <code>data-closable</code> parameters, and simply fade out.</p>
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-green" data-closable="slide-out-right">
      <h5>This a friendly message.</h5>
      <p>When you're done reading it, click the close button in the corner to dismiss this message.</p>
      <p>And when you're done with me, I close using a Motion UI animation.</p>
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</div>
```

---

## Making Callouts the Same Height

<p class="intro">Whenever you need to make containers the same height, utilize the Foundation <a href="https://foundation.zurb.com/sites/docs/equalizer.html">Equalizer</a> plug-in.</p>

To set up an Equalizer group, you need a container, which gets the attribute `data-equalizer`, and then a series of child elements, which get the attribute `data-equalizer-watch`. The child elements will all be resized to have the same height.
- By default, Equalizer works across all breakpoints. You can add an attribute of `data-equalize-on` set to medium, large, or xlarge if you only want the containers to equalize at large screen widths.

```html_example
<p>In this example, the blue callouts stretch to match the height of the taller callout, at breakpoints medium and above.</p>
<div class="row" data-equalizer data-equalize-on="medium">
  <div class="medium-4 columns">
    <div class="callout background-primary" data-equalizer-watch>
      <p>Pellentesque habitant morbi tristique senectus et netus et, ante.</p>
      
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="callout hollow" data-equalizer-watch>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="callout background-primary" data-equalizer-watch>
      <p>Pellentesque habitant morbi tristique senectus et netus et, ante.</p>
    </div>
  </div>
</div>
```

---

## Making Callout Contents Vertically and Horizontally Center

This example uses the Foundation <a href="https://foundation.zurb.com/sites/docs/equalizer.html">Equalizer</a> plug-in mentioned above, and combines it with vertical and horizontal centering. 
- To center horizontally, add class `.text-center` to the container.
- To center vertically, add class `.table` to the callouts, and add class `.table-cell` and `.vertical-middle` to a `<div>` around the contents; and add class `.gutter-all` to compensate for the missing padding between the text and the callout.

```html_example
<div class="row gutter-bottom" data-equalizer data-equalize-on="medium">
  <div class="column medium-4">
    <div class="callout background-green text-center table" data-equalizer-watch>
      <div class="grid-block-text table-cell vertical-middle gutter-all">Pellentesque <div class="stat-med">100,000</div> habitant morbi tristique senectus</div>
    </div>
  </div>
  <div class="column medium-4">
    <div class="callout background-green text-center table" data-equalizer-watch>
      <div class="grid-block-text table-cell vertical-middle gutter-all">Ut enim ad <div class="stat-med">6,040</div> minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
  </div>
  <div class="column medium-4">
    <div class="callout background-green text-center table" data-equalizer-watch>
      <div class="grid-block-text table-cell vertical-middle gutter-all">Lorem <div class="stat-med">30%</div> ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
    </div>
  </div>
</div>
```



# Anchor Links

<p>Links are very standard, and the color is preset to $primary-color. </p>
<p>Links inside <a href="#sidebar-modules">sidebar modules</a> and links inside <a href="#cards">Cards</a> inherit the existing text color to blend in better.  Use class `.primary` on the card eletement to override this default.</p>
<p>Refer to <a href="styleguide_reveal.html">Modals</a> if you are looking for information on how to make a link launch a video, image, or content block inside a modal.</p>
<div class="callout background-yellow">
  <div class="callout background-white">
    <h3>Tagging Links for Analytics, Screen Readers and Search Engines </h3>
    <ul>
      <li>Avoid using vague link text like "click here" or "read more". The text of each link itself should adequately describe where the link goes and should differentiate it from all other links on the page.</li>
      <li>When the client insists that all links use the same visible text, you should still add the additional text necessary to make the link text unique, and hide the parts that the client doesn't want to SEE by wrapping it with class `.show-for-sr`. </li>
    </ul>
  </div>
</div>

```html_example
<div class="callout hollow">
  <p>This sentence contains <a href="#">linked inline text</a>.</p>
  <p>The following 3 links utilize class <code>.show-for-sr</code> so that they will each be unique for screen readers, analytics, and search engines.</p>
  <p><a class="button" href="#">Learn More<span class="show-for-sr"> about our offerings</span></a> 
     <a class="button" href="#">Learn More<span class="show-for-sr"> about our mission</span></a> 
     <a class="button" href="#">Learn More<span class="show-for-sr"> about our lines of business</span></a> 
  </p>
</div>
```

---

## Block Style Anchor Links

Whenever you need for an anchor link to switch from inline to a block element, add class `.block`.  This can correct quirky hover states on hyperlinks that wrap across multiple lines.

```html_example
<div class="row">
  <div class="column medium-6 large-4 xlarge-3">
    <div class="callout background-primary">
      <ul>
        <li><a href="#">Example of a <i>multi-line</i> link with no class added. The hover affect doesn't reach to the full width of the link.</a></li>
        <li><a class="block" href="#">Example of a multiline link using the <code>.block</code> class, so it stretches the full width of the list item.</a></li>
      </ul>
    </div>
  </div>
</div>
```

---

## Decorated Links

There are some common classes that can be added to links to decorate them.
 
```html_example
<div class="callout hollow">
<p><a href="#" class="icon-chevron-right">link with single right chevron</a></p>
<p><a href="#" class="icon-chevron-right-double">link with double right chevron</a></p>
<p><a href="#" class="icon-download">link with download icon</a></p>
<p class="weight-medium"><a href="#" class="mailto">link with envelope icon</a></p>
</div>
<div class="callout background-gray">
  <p><a href="#">link with white <span class="icon-chevron-right-white">right chevron</span></a></p>
  <p class="accent-yellow weight-medium"><a href="#" class="mailto">link with envelope icon</a></p>
</div>
```

---

### Secured Links

Add class `.secured` to a link to include a solid padlock icon.  If the link already includes a filemarker, you can alternately include an icon image.

```html_example
<div class="callout hollow">
  <p><a href="#" class="secured">link with padlock decoration</a></p>
  <p><a href="files/webform-tracking.docx">link with filemarker</a> <img src="/images/icon-locked-orange.svg" alt="login required"></p>
  <p><a href="#" class="secured button">link with padlock decoration</a></p>
  <p><a href="#" class="secured button primary">link with padlock decoration</a></p>
  <p><a href="#" class="secured button secondary">link with padlock decoration</a></p>
  <p><a href="#" class="secured button tertiary">link with padlock decoration</a></p>
</div>
```

---

### Links With SVG Icons


Use class `.icon` when you want to include an svg icon and have it inherit its size from the existing text and class `.secondary` when you want the link to be secondary color. 

Use class `.fill-anchor` on an svg to have fill color match link color and class `.stroke-anchor` on an svg to have stroke color match link color.

```html_example
<div class="callout hollow">
  <ul>
    <li><a class="icon" href="#">text link with svg
      <svg class="fill-anchor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 350 350">
      <polygon points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      </svg>
      </a>
    </li>
    <li><a class="icon" href="#">text link with svg
      <svg class="stroke-anchor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 350 350">
      <polygon fill="none" stroke-width="25" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      </svg>
      </a>
    </li>
  </ul> 
  <div class="gutter-left">link that is svg only on a round blue background
    <div class="gutter-top" style="max-width: 300px;">
      <a class="svglink-round-blue" href="#" aria-hidden="true">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <style>.st0{fill:none;stroke:#fff;stroke-width:0.6752;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#fff;stroke-width:0.6752;stroke-linejoin:round;stroke-miterlimit:10;}</style>
          <path class="st0" d="M16.8 21.3l-3.1.9.9-3.1 6.7-6.8 2.3 2.3z"/>
          <path class="st1" d="M19.5 14.1l2.3 2.3"/><path class="st0" d="M14.6 19.1l2.2 2.2"/>
          <path class="st0" d="M12.1 22.2H3.6V3.3h1.8"/><path class="st0" d="M18 3.3h1.8v8.1"/>
          <path class="st0" d="M13.5 3.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8H7.2V6h9V3.3h-2.7z"/>
          <path class="st0" d="M18 12.3V5.1h-1.8"/><path class="st0" d="M7.2 5.1H5.4v15.3h7.2"/>
          <path class="st0" d="M8.1 9.6h7.2"/><path class="st0" d="M8.1 11.4h7.2"/>
          <path class="st0" d="M8.1 13.2h7.2"/><path class="st0" d="M8.1 15h4"/>
        </svg>
      </a>
    </div>
  </div>
</div> 
```

---

## Linked Image Overlays

Apply the `.overlay` class to the `<a>` that wraps an image to style the image with a blue overlay on hover and focus. 
Refer to <a href="styleguide_reveal.html">modals</a> for additional options if you are launching a modal from the link.

If you need to force an overlay to always be full width, add class `.block` to the `<a>` and class `.full` to the image.

```html
<a class="overlay" href="#"><img alt="photo of David Brickman" src="files/exec_david_brickman.jpg"></a>
```

<div class="row">
  <div class="small-6 medium-3 column small-centered">
    <a class="overlay" href="#"><img alt="photo of David Brickman" src="files/exec_david_brickman.jpg"></a>
  </div>
</div>



# Visibility Classes

Visibility classes let you show or hide elements based on screen size or device orientation. You can also use visibility classes to control which elements users see depending on their browsing environment.

<div class="callout background-concrete">
  <p>There are no classes to detect touchscreen devices, as both desktop and mobile browsers inconsistently report touch support. Learn more here: <a href="http://www.stucox.com/blog/you-cant-detect-a-touchscreen/">You Can't Detect a Touchscreen</a></p>
</div>

## Show/Hide by Screen Size/Orientation

There are `.show-for-xxx` and `.hide-for-xxx` visibility classes to control the visiblity of an element based on the device on which users view a page. If their browser meets the class's conditions, the element will be shown. If not, it will be hidden.

```html_example
<div class="callout hollow">
  <p>You are on a small screen or larger.</p>
  <p class="show-for-medium">You are on a medium screen or larger.</p>
  <p class="show-for-large">You are on a large screen or larger.</p>
  <p class="show-for-small-only">You are <em>definitely</em> on a small screen.</p>
  <p class="show-for-medium-only">You are <em>definitely</em> on a medium screen.</p>
  <p class="show-for-large-only">You are <em>definitely</em> on a large screen.</p>
  <p class="hide-for-medium">You are <em>not</em> on a medium screen or larger.</p>
  <p class="hide-for-large">You are <em>not</em> on a large screen or larger.</p>
  <p class="hide-for-small-only">You are <em>definitely not</em> on a small screen.</p>
  <p class="hide-for-medium-only">You are <em>definitely not</em> on a medium screen.</p>
  <p class="hide-for-large-only">You are <em>definitely not</em> on a large screen.</p>
  <p class="show-for-landscape">You are in landscape orientation.</p>
  <p class="show-for-portrait">You are in portrait orientation.</p>
</div>
```

---

## Show/Hide for Screen Readers

And if you really just need something hidden no matter what, there are classes for that as well. The `.hide` and `.invisible` classes respectively set `display: none` and `visibility: hidden` on an element. Note that both of these classes hide content from screen readers.

To visually hide content, while still allowing assistive technology to read it, add the class `.show-for-sr`.  To hide text from assistive technology, while still keeping it visible, add the attribute `aria-hidden="true"`. This doesn't affect how the element looks, but screen readers will skip over it.

Use the class `.show-on-focus` to hide an element, except when it has focus. Adding tabindex="0" to the target element makes if focusable.

```html_example
<div class="callout hollow">
  <p class="hide">Hidden for all users.</p>
  <p class="invisible">Not visible for all users, but still occupies space on screen.</p>
  <p class="show-for-sr">This text can only be read by a screen reader.</p>
  <p>There's a line of text above this one, you just can't see it because it is only shown to screen readers.</p>
  <p aria-hidden="true">This text can be seen, but won't be read by a screen reader.</p>

  <p>Click on this sentence and then hit tab to see the skip link appear while it has focus.</p>
  <p><a name="skiplink" class="show-on-focus" href="#sampleContent">Skip to Content</a></p>

  <div id="sampleContent" role="main" tabindex="0" style="min-height: 1rem;">
  </div>
</div>
```



# Padding Classes

<p class="lead">Sometimes you need to add padding to the top, right, bottom, or left side of an item to match the standard gap between columns or cards.</p>

You can add padding to an element by adding `.gutter-top`, `.gutter-right`, `.gutter-bottom`, or `gutter-left` classes to an element. There's also a shortcut class of `gutter-all` that will add a gutter on all 4 sides.
- Do not apply the gutter classes to rows or columns, as they already have their own padding defined.
- To set gutters so that they apply starting at a specific breakpoint (medium-xlarge), add `-breakpoint` to the class, such as `gutter-top-medium`. (no `-small` option since it would be identical to regular `.gutter-xx` classes)
- To limit gutters so that they apply only at a single breakpoint (small-xlarge), add -breakpoint-only to the class, such as `gutter-top-small-only`.

```html_example
<div class="callout hollow">
  <p>Examples have been given a blue background to make the padding variations easier to see.</p>
  <p class="background-blue gutter-top">I have a top gutter at all breakpoints</p>
  <p class="background-blue gutter-bottom-medium-only">I have a bottom gutter at medium breakpoint only</p>
  <p class="background-blue gutter-bottom-medium">I have a bottom gutter at medium breakpoint and higher</p>
  <p class="background-blue gutter-all-xlarge">I have a gutter on all sides at xlarge breakpoint and higher</p>
</div>
```



# Float Classes

<p class="lead">Foundation includes a handful of helpful float classes to add common positioning behaviors to elements.</p>

---

## Float Left/Right

You can change the float behavior of an element by adding the `.float-left` or `.float-right` classes to an element. To clear floats, add the class `.clearfix` to the parent element.
- Tp prevent 2 floated containers from touching, use one or more of the [padding classes](#padding-classes).

```html_example
<div class="callout hollow clearfix">
  <a class="button secondary float-left">Left</a>
  <a class="button secondary float-right">Right</a>
</div>
```

---

## Float Center

Okay, it's not *really* a float, but you can add the `.float-center` class to an element to engage the automatic margin centering trick. Note that this will only work on elements with an absolute width or a maximum width that is less than their containing element.  If you just want to center text, use class `.text-center`.

```html_example
<div class="callout hollow">
  <div class="gutter-bottom">
    <img src="files/fm_blog_usda_returns.jpg" alt="Harp - act now!"  class="float-center">
  </div>
  <div class="float-center background-green" style="width: 50%; padding: 1rem;">
  <p class="text-center">My container is always half of the available width.</p>
  </div>
</div>
```

---

## Content Section Floats

There are four options for creating floated content columns within a content area: left and right variations that are proportionate or fixed.  All will only float at medium breakpoint and above -- the content will stack at small screen sizes.  Only use floated containers when ther eis sufficient content to wrap around them -- if there isn't sufficient content use a row that splits content into columns at specific breakpoints to create a similar concept.

---

### Left Float, Proportionate Width

Use class `.box-left-40` to float content to the left at 40% of the content area's width (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html
<p class="lead">Example showing floated element inserted, with floated container set to percentage-based width at medium breakpoint and higher.</p>
<div class="box-left-40">
  <div class="callout background-teal">
    <h3>Related Items</h3>
    <ul>
      <li><a href="#">Link to some supporting material</a></li>
      <li><a href="#">Link to some other supporting material</a></li>
    </ul>
  </div>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```


<div class="row">
  <div class="column large-10 large-centered">
    <div class="callout hollow">
      <p class="lead">Example showing floated element inserted, with floated container set to percentage-based width at medium breakpoint and higher.</p>
      <div class="box-left-40">
        <div class="callout background-teal">
          <h3>Related Items</h3>
          <ul>
            <li><a href="#">Link to some supporting material</a></li>
            <li><a href="#">Link to some other supporting material</a></li>
          </ul>
        </div>
      </div>
      <p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</div>
</div>

---

### Left Float, Fixed Width 

Use class `.box-left-fixed300` to float content to the left at a fixed width of 300px (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html
<p class="lead">Example showing floated element inserted, with floated container set to a fixed-size width at medium breakpoint and higher.</p>
<div class="box-left-fixed300">
  <figure>
    <img src="files/bigkitty.jpg" alt="kitty">
  </figure>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

<div class="row">
  <div class="column large-10 large-centered">
    <div class="callout hollow">
      <p class="lead">Example showing floated element inserted, with floated container set to a fixed-size width at medium breakpoint and higher.</p>
      <div class="box-left-fixed300">
        <figure>
          <img src="files/bigkitty.jpg" alt="kitty">
        </figure>
      </div>
      <p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

---

### Right Float, Proportionate Width 

Use class `.box-right-40` to float content to the right at 40% of the content area's width (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html
<p class="lead">Example showing floated element inserted, with floated container set to percentage-based width at medium breakpoint and higher.</p>
<div class="box-right-40">
  <div class="callout background-yellow">
    <h3>Related Items</h3>
    <ul class="list-divided no-bullet">
      <li><a href="#">Link to some supporting material</a></li>
      <li><a href="#">Link to some other supporting material</a></li>
      <li><a href="#">Link to some other supporting material</a></li>
    </ul>
  </div>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

<div class="row">
  <div class="column large-10 large-centered">
    <div class="callout hollow">
      <p class="lead">Example showing floated element inserted, with floated container set to percentage-based width at medium breakpoint and higher.</p>
      <div class="box-right-40">
        <div class="callout background-yellow">
          <h3>Related Items</h3>
          <ul class="list-divided no-bullet">
            <li><a href="#">Link to some supporting material</a></li>
            <li><a href="#">Link to some other supporting material</a></li>
            <li><a href="#">Link to some other supporting material</a></li>
          </ul>
        </div>
      </div>
      <p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

---

### Right Float, Fixed Width 

Use class `.box-right-fixed300` to float content to the right at a fixed width of 300px (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html
<p class="lead">Example showing floated element inserted, with floated container set to a fixed-size width at medium breakpoint and higher.</p>
<div class="box-right-fixed300">
  <figure>
    <img src="files/bigkitty.jpg" alt="kitty">
  </figure>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

<div class="row">
  <div class="column large-10 large-centered">
    <div class="callout hollow">
      <p class="lead">Example showing floated element inserted, with floated container set to a fixed-size width at medium breakpoint and higher.</p>
      <div class="box-right-fixed300">
        <figure>
          <img src="files/bigkitty.jpg" alt="kitty">
        </figure>
      </div>
      <p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>



# Buttons

<p class="lead">The following `.button` styles can be used either on anchor links or on actual <code>button</code> tags.  The size can be adjusted by adding a class of `.small`, or `.large`.</p>

---

## Default Buttons

Use default buttons for minor actions like resetting a form or cancelling a request.

```html_example
<p>
  <a href="#" class="large button">Button (large)</a>
  <a href="#" class="button">Button (default)</a>
  <a href="#" class="small button">Button (small)</a>
</p>
```

---

## Primary Buttons

Use class `.primary`, for buttons used for primary calls-to-action, like submitting a form.  Use sparingly; there shouldn't be multiple calls-to-action on most web pages.

```html_example
<p>
  <a href="#" class="primary large button">Button (large)</a>
  <a href="#" class="primary button">Button (default)</a>
  <a href="#" class="primary small button">Button (small)</a>
</p>
```

---

## Secondary Buttons

Use class `.secondary` for buttons used for less important, secondary actions on a page.

```html_example
<p>
  <a href="#" class="secondary large button">Button (large)</a>
  <a href="#" class="secondary button">Button (default)</a>
  <a href="#" class="secondary small button">Button (small)</a>
</p>
```

---

## Tertiary Buttons

Use class `.tertiary` for buttons for logins.  See below section on buttons with icons to include a padlock.

```html_example
<p>
  <a href="#" class="tertiary large button">Button (large)</a>
  <a href="#" class="tertiary button">Button (default)</a>
  <a href="#" class="tertiary small button">Button (small)</a>
</p>
```

---

## Hollow Buttons

Use class `.hollow` for non-call-to-action buttons used on a dark background. 

```html_example
<div class="callout background-purple">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
<div class="callout background-teal">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
<div class="callout background-primary">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
```

---

## Buttons with Icons

If your svg icon includes a fill color (as in the third example), it will maintain that color on hover, focus, and active states.
If you use a one-color svg icon without a fill color, css will allow it to inherit the current TEXT color as it's fill color, and will adjust to match the text's color on hover, focus, and active states.  Use a tool like <a href="https://jakearchibald.github.io/svgomg/">SVGOMG</a> to optimize the svg markup.

```html_example
<p>
  <a class="button secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="40 40 400 400"><path d="M189.3 128.4L89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z"/></svg> Previous</a>
   
  <a href="#" class="button tertiary secured">Log In</a>
   
  <a class="button secondary">Next <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="40 40 400 400"><path d="M322.7 128.4l100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/></svg></a>
</p>
```

---

## Close Button <span id="close-button"></span>

A close button is a `<button>` element with the class `.close-button`.  The button is also labeled with `aria-label` to clarify what the button's purpose is.
- For simple close buttons, we use the multiplication symbol (`&times;`) as the X icon. This icon is wrapped in a `<span>` with the attribute `aria-hidden="true"`, so screen readers don't read the X icon.
- Some elements, such as [modals](styleguide_reveal.html), have predefined close button styles.

```html_example
<div class="callout background-yellow">
  <button class="close-button" aria-label="Close alert" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
  <p>Look at this close button!</p>
</div>
```

---

### Making Something Closable

The close button on its own doesn't close elements, but you can use it with other plugins that have open and close behaviors.

<div class="callout background-concrete">
  <p>Any element can be used as a close trigger, not just close button. Adding the attribute <code>data-close</code> to any element within the callout will turn it into a close trigger.</p>
</div>

The below example pairs the callout with the close button component and `data-closable` attribute to create a dismissible alert box.

```html_example
<div class="row">
  <div class="large-12 column">
    <div class="large-6 column">
      <div class="callout background-concrete" data-closable>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <p>You can so totally close this!</p>
      </div>
    </div>
    <div class="large-6 column">
      <div class="callout background-concrete" data-closable="slide-out-right">
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <p>You can close me too, and I close using a Motion UI animation.</p>
      </div>
    </div>
  </div>
</div>
```



# Button Group

<p class="lead">Button groups are containers for related action items. They're great when you need to display a group of actions in a bar. </p>

Add the `.button-group` class to a container, and inside it place any number of buttons. The buttons are separated by a small border.

Add the `.expanded` class to the container to make a full-width button group. Each item will automatically size itself based on how many buttons there are, up to a maximum of four.

```html_example
<div class="button-group">
  <a class="button">View</a>
  <a class="primary button">Edit</a>
  <a class="secondary button">Share</a>
  <a class="tertiary button">Delete</a>
</div>
<br>
<div class="expanded button-group">
  <a class="button">View</a>
  <a class="primary button">Edit</a>
  <a class="secondary button">Share</a>
  <a class="tertiary button">Delete</a>
</div>
```



# Heros

<p class="lead">There are several different hero styles, depending upon site design and template type.  For most pages, you should use a [page title](#page-title) instead of a hero.</p>
<ul>
  <li class="item-name"><a href="styleguide_corp.html#heros">Corporate Site Heros</a></li> 
  <li class="item-name"><a href="styleguide_mf.html#heros">Multifamily Site Heros</a></li> 
  <li class="item-name">Singlefamily Site TBD</li> 
  <li class="item-name">Capital Markets Site TBD</li> 
</ul>



# Page Title

There are 2 main options for page titles, with one alternate design if the page is a corporate research article.

## Page Title without Subtitle

For pages without a tertiary nav, the column with the title goes full width at all breakpoints.

```html_example
<div class="page-title">
  <div class="row">
    <div class="column">
      <h1>Page Title That is Quite Long to Show Where Wrapping Occurs</h1>
    </div>
  </div>
</div>
```

---

## Page Title with Subtitle

For pages that include a subtitle, it will appear directly below the H1.

```html_example
<div class="page-title">
  <div class="row">
    <div class="column">
      <h1>Page Title</h1>
      <p class="page-subtitle">This is an optional page subtitle</p>
    </div>
  </div>
</div>
```

---

## Page Title for Corporate Research Articles


```html_example
<div class="page-title">
  <div class="row">
    <div class="column">
      <p class="intro"><span class="uppercase weight-bold">Outlook</span> | December 12, 2016</p>
      <h1>After housing's best year in a decade, what is next?</h1>
    </div>
  </div>
  <!-- and a share widget -->
</div>
```



# Cards

<p class="lead">Cards are a are a popular and flexible UI component, typically used to group article entries. </p>

<p>A card is just an element with a `.card` class applied. You can put any kind of content inside.
Make sure you wrap your content in a `.card-section` element in order to achieve the traditional card look.</p>
<p>A card container has no padding, allowing you to place full-bleed images inside. Use the `.card-divider` and `.card-section` classes to sub-divide a card. To center the text content (for people cards, for example) simply add class `.text-center` to the `.card-section` container.</p>

<ul>
  <li class="item-name"><a href="styleguide_corp.html#cards">Corporate Cards</a></li> 
  <li class="item-name"><a href="styleguide_mf.html#cards">Multifamily Cards</a></li> 
  <li class="item-name">Singlefamily Site TBD</li> 
  <li class="item-name">Capital Markets Site TBD</li> 
</ul>

---    

## Video Cards

- If the cards should have a different background than the container they are in, add a [background color class](#colors).
- You will need to view each video on Youtube to get the accurate length of the video to put in the `.video-length` span.

```html_example
<div class="row medium-up-2 large-up-3" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <a class="overlay video-modal widescreen-video" href="https://www.youtube.com/watch?v=QcthGnwJRsk" data-src="//www.youtube-nocookie.com/embed/QcthGnwJRsk?rel=0&amp;wmode=transparent"><span class="video-length" aria-label="video length in minutes">2:11</span><img src="files/video-1.jpg" alt="description of video"></a>
      <div class="card-section">
        <p class="card-title">Why Freddie Mac</p>
        <p class="card-subtitle">Early reports are showing first-time homebuyers coming back into the market.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <a class="overlay video-modal widescreen-video" href="https://www.youtube.com/watch?v=vNPl4CS4nnQ" data-src="//www.youtube-nocookie.com/embed/vNPl4CS4nnQ?rel=0&amp;wmode=transparent"><span class="video-length" aria-label="video length in minutes">4:48</span><img src="files/video-2.jpg" alt="description of video"></a>
      <div class="card-section">
        <h4 class="card-title">Freddie Mac and Your Mortgage</h4>
        <p class="card-subtitle">During National Volunteer Week we celebrate all volunteers who give back to make our communities better and improve the lives of others</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <a class="overlay video-modal widescreen-video" href="https://www.youtube.com/watch?v=kkHyUX40NxE" data-src="//www.youtube-nocookie.com/embed/kkHyUX40NxE?rel=0&amp;wmode=transparent"><span class="video-length" aria-label="video length in minutes">3:45</span><img src="files/video-3.jpg" alt="description of video"></a>    
      <div class="card-section">
        <h4 class="card-title">Avoiding Mortgage Fraud</h4>
        <p class="card-subtitle">McLean ,VA</p>
      </div>
    </div>
  </div>
</div>
```

## People Cards

- If the cards should have a different background than the container they are in, add a [background color class](#colors).

```html_example
<div class="row small-up-1 medium-up-2 large-up-4" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card" data-equalizer-watch>
      <img alt="photo of Donald Layton" src="files/exec_donald_layton.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>Donald H. Layton</strong></p>
        <p class="card-subtitle">Chief Executive Officer</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <img alt="photo of David Brickman" src="files/exec_david_brickman.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>David M. Brickman</strong></p>
        <p class="card-subtitle">Executive Vice President, Multifamily Business</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <img alt="photo of James Mackey" src="files/exec_james_mackey.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>James G. Mackey</strong></p>
        <p class="card-subtitle">Executive Vice President and Chief Financial Officer</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <img alt="photo of Dwight Robinson" src="files/exec_dwight_robinson.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>Dwight Robinson</strong></p>
        <p class="card-subtitle">Senior Vice President of Human Resources, Diversity &amp; Inclusion and Chief Diversity Officer</p>
      </div>
    </div>
  </div>
</div>
```



# Tertiary Navigation

<p class="lead">Tertiary navigation is available for pages that are 3-4 levels deep in the IA.  Tertiary nav is only avaialble in the two-column content template.</p>

All items in the tertiary nav (including the heading) should be linked.  Add class `.no-bullet` to the `ul` tags to create the link lists.

```html
<div class="tertiary-nav">
<h2><a href="#">Level Two Link</a></h2> 
<nav>
  <ul class="no-bullet">
    <li><a href="#">Level Three Link</a>
      <ul class="no-bullet">
        <li><a href="#">Level Four Link</a></li>
        <li><a href="#">Level Four Link</a></li>
      </ul> 
    </li>
    <li><a href="#">Level Three Link</a></li>
    <li><a href="#">Level Three Link</a></li>
    <li><a href="#">Level Three Link</a></li>
  </ul>
</nav>
</div>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <div class="tertiary-nav demo">
        <h2><a href="#">Level Two Link</a></h2> 
        <nav>
          <ul class="no-bullet">
            <li class="parent data-expanded"><a class="active" href="#">Level Three Link</a>
              <ul class="no-bullet" style="display: block !important;">
                <li><a href="#">Level Four Link</a></li>
                <li><a href="#">Level Four Link</a></li>
              </ul> 
            </li>
            <li><a href="#">Level Three Link</a></li>
            <li><a href="#">Level Three Link</a></li>
            <li><a href="#">Level Three Link</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</div>



#  Sidebar Modules

<p class="lead">There are a variety of modules available for use in a side bar, when you are using the Two Column Layout.</p>

- Use a [background color class](#colors) on the `.sidebar` container to change the background.
- Links inside most sidebar modules inherit the existing text color (typically white) to blend in better.
- Avoid using the same background color for  the last sidebar box that you use in the prefooter -- in mobile they will appear to run together when that occurs.

---

## Sidebar Popular List Items

For divided list items, include these classes on the `ul` tag: `.no-bullet` (to suppress list bullets), `.lead` (to increase the font size), and `.list-divided-white` (to add white dividers between items on a dark background or use `.list-divided` for light backgrounds).

```html
<section class="sidebar background-yellow">
  <div class="row">
    <h2>Trending Now</h2>
    <ul class="list-divided-white no-bullet lead">
      <li><a href="#">Credit Smart</a></li>
      <li><a href="#">Education &amp; Tools</a></li>
      <li><a href="#">Fraud</a></li>
      <li><a href="#">HARP</a></li>
      <li><a href="#">MiMi</a></li>
    </ul>
  </div>
</section>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">  
      <section class="sidebar background-yellow">
        <div class="row">
          <h2>Trending Now</h2>
          <ul class="list-divided-white no-bullet lead">
            <li><a href="#">Credit Smart</a></li>
            <li><a href="#">Education &amp; Tools</a></li>
            <li><a href="#">Fraud</a></li>
            <li><a href="#">HARP</a></li>
            <li><a href="#">MiMi</a></li>
          </ul>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## Sidebar Call To Action

To avoid having the text stretch edge-to-edge, you can wrap the text in a div with class `.sidebar-txt`.

If a sidebar contains multiple calls-to-action, set one button to be the `.primary` call.

```html
<section class="sidebar background-primary">
  <div class="row">
    <div class="column">
      <div class="sidebar-txt">
        <h2 class="sidebar-title">Connect with Us</h2>
        <p>Sign up to get the latest <strong>Lorem Ipsum updates</strong> in your inbox.</p>      
      </div>
      <p><a class="primary button" href="#">Subscribe</a> <a class="hollow button" href="#">Unsubscribe</a></p>
    </div>
  </div>
</section>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <section class="sidebar background-primary">
        <div class="row">
          <div class="column">
            <div class="sidebar-txt">
              <h2 class="sidebar-title">Connect with Us</h2>
              <p>Sign up to get the latest <strong>Lorem Ipsum updates</strong> in your inbox.</p>      
            </div>
            <p><a class="primary button" href="#">Subscribe</a> <a class="hollow button" href="#">Unsubscribe</a></p>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## Sidebar RSS

For divided list items, include these classes on the `ul` tags: `.no-bullet`, `.flex-up`, `.list-divided-white`, and `.list-rss`.

```html
<section class="sidebar background-gray">
  <div class="row">
    <h2>RSS Feeds</h2>
    <ul class="list-divided-white flex-up no-bullet">
      <li>
        <ul class="no-bullet list-rss">
          <li><a href="#">Housing and Economic Research</a></li>
          <li><a href="#">Perspectives</a></li>
        </ul>
      </li>
      <li><span class="uppercase weight-bold">Freddie Mac Blog</span>
        <ul class="no-bullet list-rss">
          <li><a href="#">All Posts</a></li>
          <li><a href="#">Homeownership</a></li>
          <li><a href="#">Rental Housing</a></li>
          <li><a href="#">Research &amp; Analysis</a></li>
          <li><a href="#">Notable</a></li>
        </ul>            
      </li>
    </ul>
  </div>
</section>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
      <aside class="column">
        <section class="sidebar background-gray">
          <div class="row">
            <h2>RSS Feeds</h2>
            <ul class="list-divided-white flex-up no-bullet">
              <li>
                <ul class="no-bullet list-rss">
                  <li><a href="#">Housing and Economic Research</a></li>
                  <li><a href="#">Perspectives</a></li>
                </ul>
              </li>
              <li><span class="uppercase weight-bold">Freddie Mac Blog</span>
                <ul class="no-bullet list-rss">
                  <li><a href="#">All Posts</a></li>
                  <li><a href="#">Homeownership</a></li>
                  <li><a href="#">Rental Housing</a></li>
                  <li><a href="#">Research &amp; Analysis</a></li>
                  <li><a href="#">Notable</a></li>
                </ul>            
              </li>
            </ul>
          </div>
        </section>
      </aside>
  </div>
</div>

---

## Sidebar Featured Article

Use a [background color class](#colors) to set the background on the `.sidebar-feature` container and include a background image in the `.feature-background` container.

```html
<section class="sidebar background-primary sidebar-feature">
  <div class="feature-background" style="background-image: url('files/feature-bg.jpg')"></div>
  <div class="row">
    <div class="sidebar-txt">
      <p class="article-category">Insight <span class="weight-light">| November 30, 2016</span></p>
      <h3 class="sidebar-title">Life's a Beach</h3>
      <p class="lead">So you've always dreamed of living at the beach, but you're discouraged by the high price of beachfront property? Not to worry. We've found just the place for you.  </p>
      <p><a class="hollow button expand" href="#">Read More</a></p>
    </div>
  </div>
</section>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <section class="sidebar background-primary sidebar-feature">
        <div class="feature-background" style="background-image: url('files/feature-bg.jpg')"></div>
        <div class="row">
          <div class="sidebar-txt">
            <p class="article-category">Insight <span class="weight-light">| November 30, 2016</span></p>
            <h3 class="sidebar-title">Life's a Beach</h3>
            <p class="lead">So you've always dreamed of living at the beach, but you're discouraged by the high price of beachfront property? Not to worry. We've found just the place for you.  </p>
            <p><a class="hollow button expand" href="#">Read More</a></p>
          </div>
        </div>
      </section>
      <section class="sidebar background-purple sidebar-feature">
        <div class="feature-background" style="background-image: url('files/featured-background.jpg')"></div>
        <div class="row">
          <div class="column">
            <div class="sidebar-txt">
            <p class="article-category">Insight <span class="weight-light">| November 30, 2016</span></p>
            <h3 class="sidebar-title">Interest Rates Heading Higher. What That Means for Housing.</h3>
              <p>Interest rates surged higher over the past two weeks following the U.S. presidential election.  The 10-year Treasury closed at 2.35 percent on November 18, 2016, up over 50 basis points... </p>
              <p><a class="hollow button" href="#">Read More</a></p>
            </div>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## Sidebar Posts with Thumbnail

Refer to the Media Object section for more details about this markup.

```html
<section class="sidebar background-concrete">
  <div class="row">
    <div class="column">
      <h2 class="sidebar-title">Recent Posts</h2>
      <ul class="list-divided no-bullet">
        <li class="media-object image1-leads-blurb2">
          <div class="media-object-section">  
            <a class="overlay" href="#">
              <img src="files/post-1.jpg" alt="Post Img" />
            </a>
          </div>
          <div class="media-object-section">
            <div class="article-date">May 9, 2016</div>
            <h3 class="sidebar-headline"><a href="#">Homework and a Home Purchase</a></h3>
            <div class="article-category">Homeownership</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <section class="sidebar background-concrete">
        <div class="row">
          <div class="column">
            <h2 class="sidebar-title">Recent Posts</h2>
            <ul class="list-divided no-bullet">
              <li class="media-object image1-leads-blurb2">
                <div class="media-object-section">  
                  <a class="overlay" href="#">
                    <img src="files/post-1.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">May 9, 2016</div>
                  <h3 class="sidebar-headline"><a href="#">Homework and a Home Purchase</a></h3>
                  <div class="article-category">Homeownership</div>
                </div>
              </li>
              <li class="media-object image1-leads-blurb2">
                <div class="media-object-section">  
                  <a class="overlay" href="#">
                    <img src="files/post-2.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">  
                  <div class="article-date">May 2, 2016</div>
                  <h3 class="sidebar-headline"><a href="#">Law Enforcement Cracking Down on Home Rental Scams</a></h3>
                  <div class="article-category">Rental Housing</div>
                </div>
              </li>
              <li class="media-object image1-leads-blurb2">
                <div class="media-object-section">
                  <a class="overlay" href="#">
                    <img src="files/post-3.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">April 23, 2016</div>
                  <h3 class="sidebar-headline"><a href="#">A Slow Start to the Best Year in Home Sales in a Decade</a></h3>
                  <div class="article-category">Research &amp; Analysis</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>



# Embedded Objects

Embedded objects (iframes, videos, Tableau visuals) were <a href="styleguide_embeds.html">moved to their own page</a> to speed up the load of the initial styleguide. 

<a href="styleguide_embeds.html" class="button tertiary large">Learn about embeds</a>



# Accordions

<p class="lead">Accordions are elements that help you organize and navigate multiple panes of content in a single container.</p>

---

## Basics

### Accordion Container

The container for an accordion needs the class `.accordion-pointer`, and the attribute `data-accordion`. Note that in these examples, we use a `<ul>`, but you can use any element you want.


```html
<ul class="accordion-pointer" data-accordion>
</ul>
```

### Accordion Content Panes

Inside the accordion, place a series of content panes with the class `.accordion-item` and the attribute `data-accordion-item`. To mark which pane should be open by default, add the class `.is-active` to that pane. Omit this class if all panes should be closed by default.

Each pane has 2 parts: a **title** and a **content area**.
-    The **title** is an `<a>` with the class `.accordion-title`. 
-    The **content area**, is a `<div>` with the class `.accordion-content`, and the attribute `data-tab-content`.


```html
  <li class="accordion-item is-active" data-accordion-item>
    <a class="accordion-title" href="#">Accordion A: Title</a>
    <div class="accordion-content" data-tab-content>
      Panel A: I start in the open state.
    </div>
  </li>
```

<div class="row">
  <div class="column large-6">
    <ul class="accordion-pointer" data-accordion>
      <li class="accordion-item is-active" data-accordion-item>
        <a class="accordion-title" href="#">Panel One Title</a>
        <div class="accordion-content" data-tab-content>
          Panel 1. Lorem ipsum dolor.
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a class="accordion-title" href="#">Panel Two Title</a>
        <div class="accordion-content" data-tab-content>
          Panel 2. Lorem ipsum dolor.
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a class="accordion-title" href="#">Panel Three Title</a>
        <div class="accordion-content" data-tab-content>
          Panel 3. Lorem ipsum dolor.
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a class="accordion-title" href="#">Panel Four Title</a>
        <div class="accordion-content" data-tab-content>
          Panel 4. Lorem ipsum dolor.
        </div>
      </li>
    </ul>
  </div>
  <div class="column large-6">
    <ul class="accordion-pointer" data-accordion>
      <li class="accordion-item is-active" data-accordion-item>
        <a class="accordion-title" href="#">Panel 1 With Links</a>
        <div class="accordion-content" data-tab-content>
          <ul>
            <li><a href="#">Lorem ipsum dolor, porta sem malesuada magna mollis euismo</a></li>
            <li><a href="#">Fusce dapibus, tellus ac cursus commodo</a></li>
            <li><a href="#">Aenean lacinia bibendum nulla sed consectetur</a></li>
          </ul>
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a class="accordion-title" href="#">Panel 2 With Links</a>
        <div class="accordion-content" data-tab-content>
          <ul>
            <li><a href="#">Lorem ipsum dolor, porta sem malesuada magna mollis euismo</a></li>
            <li><a href="#">Fusce dapibus, tellus ac cursus commodo</a></li>
            <li><a href="#">Aenean lacinia bibendum nulla sed consectetur</a></li>
          </ul>
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a class="accordion-title" href="#">Panel 3 With Links</a>
        <div class="accordion-content" data-tab-content>
          <ul>
            <li><a href="#">Lorem ipsum dolor, porta sem malesuada magna mollis euismo</a></li>
            <li><a href="#">Fusce dapibus, tellus ac cursus commodo</a></li>
            <li><a href="#">Aenean lacinia bibendum nulla sed consectetur</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>

---

## Advanced Options

For FM sites, our default settings allow all panes of an accordion to be closed or multiple panes be opened.  

- To prevent all panes from being closed, set the 'data-allow-all-closed' attribute to false. (Clicking the expanded section header will do nothing if it is the only open section.)
- To prevent multiple panes from being opened, set the `data-multi-expand` attribute to false.
- To deep link into a horizontal accordion and shift the viewport so that the accordion is at the top of the viewport, set the attribute `data-deep-link` to true, `data-update-history` to true, and `data-deep-link-smudge` to true. You can also set a delay before the smudge by setting `data-deep-link-smudge-delay` to the number of milliseconds desired.
  - When the data-deep-link option is set to true, the current state of the accordion is recorded by adding a hash with the accordion panel ID to the browser URL when a accordion opens.
  - If a user navigations multiple panes, their browser back button will track each click that opens an accordion panel.
 
```html
<ul class="accordion-pointer" data-accordion data-allow-all-closed="false">
  <!-- one pane must stay open at all times. If you haven't marked up one pane as active, the first pane will be forced open -->
</ul>
<ul class="accordion-pointer" data-accordion data-multi-expand="false">
  <!-- Only one pane can be open at any time -->
</ul>
<ul class="accordion-pointer" data-accordion data-allow-all-closed="false" data-multi-expand="false">
  <!-- Only one pane can be open at any time, and the only way to close the open pane is to open a different pane -->
</ul>
<ul class="accordion" data-accordion data-deep-link="true" data-update-history="true" data-deep-link-smudge="true" data-deep-link-smudge-delay="500">
  <!-- best used when each pane is somewhat exclusive to different audiences. this can have frustrating consequences for users wanting to navigate through multiple accordion sections -->
</ul>
```



# FAQs

Lists of Frequently Asked Questions (FAQs) use a variation of the accordion markup that includes numbering of questions, and omits the +/- type markers.  
- Use class `.accordion-faq` on the container for the questions.
- Do not add a class to initially expand one FAQ.
- FAQ lists also support the advanced options listed under accordions.

```html_example
 <ol class="accordion-faq" data-accordion>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">What is the Refinance Report?</a>
    <div class="accordion-content" data-tab-content>
    <p>Freddie Mac compiles statistics on loans it purchases that refinance loans in its portfolio, and produces a report on the attributes of these refinance loans. The report is known as the Refinance Report and is released quarterly.</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">What does the Refinance Report cover and how far back does the data go?</a>
    <div class="accordion-content" data-tab-content>
    <p>The Freddie Mac's Refinance Activities Report covers: Quarterly Refinance Statistics for the United States covering the period 1985Q1 to present; Annual Refinance Statistics for the United States and four Census Divisions (1985-present); Quarterly Cash-Out Volume Estimates for the United States (1993Q1-present); Annual Cash-out Volume Estimates for the United States (1993-present); Quarterly Product Transition report for the United States (2002Q1-present); Annual Product Transition Report for the United States (1990-present).</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">When is the report updated? Do you revise previously released data?</a>
    <div class="accordion-content" data-tab-content>
    <p>Freddie Mac publishes its Refinance Report approximately 30 days after quarter's end. Previously released data is revised, but usually revisions are small. The revisions are due to Freddie Mac's purchases of refinance loans originated in prior quarters. The additional data can cause the reported median and average statistics values to change.</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">What data are typically released in the Refinance Report?</a>
   <div class="accordion-content" data-tab-content>
    <p>The quarterly and annual refinance statistics include the percent of Freddie Mac-owned loans that were refinanced and resulted in new mortgages at least five percent higher in amount than the original mortgages, the share that resulted in lower loan amounts, the median ratio of the new loan interest rate to the old interest rate for fixed-rate mortgages, the median age of the refinanced loan, and the median amount of appreciation on the property since the previous loan was originated.</p>
    </div>
  </li>
</ol>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

Make forms easy to use with the following rules:
* Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the <code>for</code>, <code>name</code>, and <code>id</code> attributes for all applicable elements.
* Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
* Required content should include <code>required</code>.

---

## Form Validation ##

<p>Validation is done through the <a href="styleguide_abide.html">Abide</a> form validation library.</p>

<p><a class="button primary large" href="styleguide_abide.html">Learn About Form Validation</a></p>

---

## Form Layouts

Form elements are styled based on their type attribute rather than a class. Inputs have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

---

## Form Example

```html_example
<form class="form" action="#">
  <div class="row">
    <div class="small-12 column">
      <label for="">Label</label>
      <input id="" type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <label for="pw">Password with Sample Help Text</label>
      <input id="pw" type="password" aria-describedby="passwordHelpText" placeholder="***">
      <p class="help-text" id="passwordHelpText">Your password must have at least 10 characters, a number, and a symbol.</p>
    </div>
  </div>
  <div class="row">
    <div class="medium-7 column">
      <label for="">Email</label>
      <input id="" type="email" placeholder="name@company.com">
    </div>
    <div class="medium-5 column">
      <div class="row collapse">
        <label>Height (combo field example)</label>
        <div class="input-group">
          <input id="feet" class="input-group-field" type="number" placeholder="5" min="0" max="12">
          <label for="feet" class="input-group-label">ft.</label>
          <input id="inches" class="input-group-field" type="number" placeholder="8" min="0" max="12">
          <label for="inches" class="input-group-label">in.</label>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <label for="">Select Box</label>
      <select aria-describedby="helpText2">
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select> 
      <p class="help-text" id="helpText2">Browsers apply their own design to the drop down on select boxes.</p>
    </div>
  </div>
  <div class="row"> 
    <div class="small-12 column">
      <label for="">Multiple Select Box</label>
      <select multiple>
        <option value="showboat">Showboat</option>
        <option value="redwing">Redwing</option>
        <option value="narcho">Narcho</option>
        <option value="hardball">Hardball</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="medium-6 column">
      <fieldset>
        <legend>Choose Your Favorite</legend>
        <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
        <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
        <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
      </fieldset>
    </div>
    <div class="medium-6 column">
      <fieldset>
        <legend>Check these out</legend>
        <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
        <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
        <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
      </fieldset>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <fieldset class="fieldset">
        <legend>Styled Fieldset</legend>
        <input id="checkbox12" type="checkbox"><label for="checkbox12">Checkbox 1</label>
        <input id="checkbox22" type="checkbox"><label for="checkbox22">Checkbox 2</label>
        <input id="checkbox32" type="checkbox"><label for="checkbox32">Checkbox 3</label>
      </fieldset>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <label for="">How many items?</label>
      <input id="" type="number" value="100">
      <label for="">Textarea Label</label>
      <textarea placeholder="placeholder" rows="3"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <button class="button primary" type="submit">Submit</button>
    </div>
  </div>
</form>
```

---

### Example with labels next to fields

Sometimes you want a form with labels to the left of your inputs. Piece of cake! You can put the label inside a different column to the left of the input. Then use the class `.text-right` to realign the label.  Add the `.middle` class to vertically align the first line of the label with its input. In this example, for medium screen sizes and up, the labels are 3 columns wide and the fields are 9 columns wide; and the column with buttons is pushed 3 columns over to line up with the fields.

```html_example
<div class="row">
  <div class="column">
    <form class="form" action="#">
      <div class="row">
        <div class="medium-3 column">
          <label for="side-label" class="text-right middle">Side Label</label>
        </div>
        <div class="medium-9 column">
          <input type="text" id="side-label" placeholder="short label that is vertically aligned to middle of field">
        </div>
      </div>
      <div class="row">
        <div class="medium-3 column">
          <label for="side-label2" class="text-right">A much longer side label for comparison</label>
        </div>
        <div class="medium-9 column">
          <input type="text" id="side-label2" placeholder="longer label with default alignment">
        </div>
      </div>
      <div class="row">
        <div class="medium-9 medium-push-3 column">
          <button class="button primary" type="submit">Submit</button>
          <button class="button" type="button">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</div>  
```

---

### Example of single field form all in 1 row

If a form has only a single field, you can combine the label, field, and submit button into a single element using the `.input-group` class.

```html_example
<form class="form" action="#">
  <div class="row">
    <div class="medium-8 column end">
      <div class="input-group">
        <label for="emailxx" class="input-group-label">Get Notified</label>
        <input id="emailxx" class="input-group-field" type="email" placeholder="name@company.com">
        <div class="input-group-button">
          <button class="button tertiary" type="submit">Subscribe</button>
        </div>
      </div> 
    </div>
  </div>
</form>
```

---

### Example on different background colors

When the form appears on a darker [background color](#colors), add the class `.outline` to the form to invert the borders to white. Avoid putting forms inside containers that are red, green or orange to avoid conflicting with error/success messages and primary buttons.

```html
<form action="#" class="form outline">
  <label for="">Label</label>
  <input type="text" placeholder="placeholder">
  <button class="button primary">Submit</button>
</form>
```

<div class="row">
  <div class="medium-6 column">
    <div class="callout background-primary">
      <form action="#" class="form outline">
        <label for="">Label</label>
        <input type="text" placeholder="placeholder">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-yellow">
      <form action="#" class="form outline">
        <label for="">Select One</label>
        <select>
          <option value="good">Good</option>
          <option value="better">Better</option>
          <option value="best">Best</option>
        </select>
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
</div>
<div class="row">
  <div class="medium-6 column">
    <div class="callout background-teal">
      <form action="#" class="form outline">
        <fieldset>
          <legend>Check a box or two</legend>
          <input id="checkbox13" type="checkbox"><label for="checkbox13">Checkbox 1</label>
          <input id="checkbox23" type="checkbox"><label for="checkbox23">Checkbox 2</label>
        </fieldset>
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-purple">
      <form action="#" class="form outline">
        <fieldset>
          <legend>Choose Your Favorite</legend>
          <input type="radio" name="coloropt" value="Red" id="colorRed"><label for="colorRed">Red</label>
          <input type="radio" name="coloropt" value="Blue" id="colorBlue"><label for="colorBlue">Blue</label>
          <input type="radio" name="coloropt" value="Yellow" id="colorYellow"><label for="colorYellow">Yellow</label>
        </fieldset>
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
</div>
<div class="row">
  <div class="medium-6 column">
    <div class="callout background-blue">
      <form action="#" class="form outline">
        <label for="">Email</label>
        <input id="" type="email" placeholder="name@company.com">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-gray">
      <form action="#" class="form outline">
        <label for="">Keyword</label>
        <input id="" type="search" placeholder="search" class="icon">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
</div>

---

### Interactive Module Forms

These are intended for interactive forms that sort/filter content within a single page, not for forms meant to submit data.

```html_example
<div class="row">
  <div class="column large-7 end">
    <form class="form module-form" onSubmit="return false;">  
      <div class="gutter-left gutter-right gutter-top">
        <h5>Quick Find</h5>       
        <label class="flex-up" for="filter-field">Filter through the resources below by entering a <strong>keyword</strong>, <strong>filetype</strong> or <strong>year</strong>.</label>
        <div class="gutter-left-medium">
          <input type="search" class="filter-field" id="filter-field" placeholder="Start typing to filter...">
          <button class="reset-filter" type="button" aria-label="remove filter">X</button>
        </div>
      </div>
      <div class="text-right">
        <div class="module-control flex-down">
          <button type="reset" class="button-expand">Expand All Categories</button>
          <button type="reset" class="button-collapse hide">Collapse All Categories</button>
        </div>
      </div>
    </form>
    <p class="gutter-top"></p>
    <form class="form module-form" onSubmit="return false;">  
      <div class="gutter-left gutter-right gutter-top">
        <h5>Quick Find</h5>       
        <label class="flex-up" for="filter-field">Filter through the resources below by entering a <strong>keyword</strong>, <strong>filetype</strong> or <strong>year</strong>.</label>
        <div class="gutter-left-medium">
          <input type="search" class="filter-field" id="filter-field" placeholder="Start typing to filter...">
          <button class="reset-filter" type="button" aria-label="remove filter">X</button>
        </div> 
        <fieldset>
          <legend class="flex-up no-margin"><strong>And/Or</strong> only show resources for:</legend>
          <div class="gutter-left-medium">
            <input type="radio" name="filterTopic" value="CAS" id="CASToggle"><label class="weight-medium flex-down" for="CASToggle">Conventional and Seniors Housing</label><br>
            <input type="radio" name="filterTopic" value="TAH" id="TAHToggle"><label class="weight-medium flex-down" for="TAHToggle">Targeted Affordable Housing</label><br>
            <input type="radio" name="filterTopic" value="SBL" id="SBLToggle"><label class="weight-medium flex-down" for="SBLToggle">Small Balance Loan</label>
          </div>
        </fieldset>
      </div>
      <div class="text-right">
        <div class="module-control flex-down">
          <button type="reset" class="button-expand">Expand All Categories</button>
          <button type="reset" class="button-collapse hide">Collapse All Categories</button>
        </div>
      </div>
    </form>
  </div>
</div>
```



# Tabs

<p class="lead">Tabs are elements that help you organize and navigate multiple panes of content in a single container.</p>

## Guidelines

1. Use tabs to alternate between views within the same context, **not** to navigate to different areas. Staying in place while alternating views is the primary reason for using tabs.
2. Logically chunk the content behind the tabs so users can easily predict what they'll find when they select a given tab. 
  - Card sorting is one option for researching this “mini-IA” problem. 
  - If you don't find clearly distinct groupings, then tabs are likely the wrong interface control for managing your content.
3. Use tabs only when users don't need to see content from multiple tabs simultaneously. 
  - Switching back and forth between tabs puts an added burden on the user's short-term memory, increases cognitive load and interaction cost, and lowers usability.
4. Design tab labels that are parallel in nature. 

### Design Options

There are numerous [design options](styleguide_tabs.html) for tabs beyond the example shown below. 

<a href="styleguide_tabs.html" class="button tertiary">Learn more about Tab Design Options</a>

### Example

Horizontal set of 3 tabs, first tab active.

```html_example
<div class="tab-wrapper">
  <ul class="tabs" data-tabs id="example-tabs">
    <li class="tabs-title is-active"><a href="#panelh1" aria-selected="true">Tab one</a></li>
    <li class="tabs-title"><a href="#panelh2">Tab two</a></li>
    <li class="tabs-title"><a href="#panelh3">Tab three</a></li>
  </ul>
  <div class="tabs-content gutter-top" data-tabs-content="example-tabs">
    <div class="tabs-panel is-active" id="panelh1">
      <p>Panel 1. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
      <ul>
        <li>Vivamus hendrerit arcu sed erat molestie vehicula. </li>
      </ul>
    </div>
    <div class="tabs-panel" id="panelh2">
      <p>Panel 2. Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel" id="panelh3">
      <p>Panel 3. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>
  </div>
</div>
```



# Data Tables

<p class="lead">Okay, they're not the sexiest things ever, but tables get the job done (for tabular data, of course). They have responsive modifiers to help solve some of your layout issues based on your tables needs.</p>

- You can change a cell's horizontal alignment (default is left-aligned) by adding `.text-right`, or `.text-center` to the `<td>` or `<th>`.
- You can change a cell's vertical alignment (default is center-aligned) by adding `.vertical-top`, `.vertical-bottom`, or `.vertical-baseline` to the `<td>` or `<th>`.
- For tables with *more* than 3 rows, add class `.hover` to the `<table>` so that each table row highlights on mouseover. 

Some sidebar tables have unique designs just for their site sections.  
<ul>
  <li class="item-name"><a href="styleguide_corp.html#data-tables">Corporate Site</a></li> 
  <li class="item-name"><a href="styleguide_mf.html#data-tables">Multifamily Site</a></li> 
  <li class="item-name">Singlefamily Site TBD</li> 
  <li class="item-name">Capital Markets Site TBD</li> 
</ul>

---

## Stacking Tables

To stack a table on medium and small screens, add the class `.stack`.  Cells that span multiple rows are only shown in their original row -- if you have a complex table that has numerous rowspans and colspans, you may need opt for the scrolling table instead.

By default, *all* header rows are hidden when the table stacks.  You can make the first header cell visible by adding class `.show-header` to the table.  If you opt for this route, make sure you put relevant content info in the first cell.  

To swap the contents of the first cell between stacked and non-stacked displays, use class `.hide-for-large` for content that should only display when stacked and class `.show-for-large` for content that should only show when not stacked.

---

<h3>Table (with hover class) that stacks and header does not display</h3>

```html_example
<table class="stack hover">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header (entire header is desktop only)</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer Row Header</th>
      <td>Footer content</td>
      <td>Footer content</td>
      <td>Footer content</td>
    </tr>
  </tfoot>
</table>
```

---

<h3>Table (with hover class) that stacks and displays alternate header info</h3>

```html_example
<table class="stack hover show-header">
  <thead>
    <tr>
      <th>
        <span class="show-for-large">Table Header (desktop only, alternate content at mobile)</span>
        <span class="hide-for-large">Alternate Header for Mobile Stacked Table</span>      
      </th>
      <th>Table Header (desktop only)</th>
      <th>Table Header (desktop only)</th>
      <th>Table Header (desktop only)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer Row Header</th>
      <td>Footer content</td>
      <td>Footer content</td>
      <td>Footer content</td>
    </tr>
  </tfoot>
</table>
```

---

## Scrolling Table

Got a lot of tubular tabular data? Add a wrapper element with the class `.table-scroll` or `.overflow-horizontal` around your table to enable horizontal scrolling.

<strong>Note:</strong> You can combine scrolling with stacking, but you may want to avoid doing so on tables with complex row and column spanning.

```html
<div class="table-scroll">
  <table class="hover">
  // table markup
  </table>
</div>
```

<h3>Table with hover inside a container that scrolls when the table doesn't fit</h3>

<div class="table-scroll">
  <table class="hover">
    <thead>
      <tr>
        <th>This is the description!</th>
        <th>One</th>
        <th>Two</th>
        <th>Three</th>
        <th>Four</th>
        <th>Five</th>
        <th>Six</th>
        <th>Seven</th>
        <th>Eight</th>
        <th>Nine</th>
        <th>Ten</th>
        <th>Eleven</th>
        <th>Twelve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>These are all the words that people use to describe Foundation 6!</th>
        <td>Cool</td>
        <td>Swag</td>
        <td>Chill</td>
        <td>Killer</td>
        <td>Rad</td>
        <td>Baller</td>
        <td>OMG</td>
        <td>Sweet</td>
        <td>Awesome</td>
        <td>Beast</td>
        <td>Dope</td>
        <td>Tubular</td>
      </tr>
      <tr>
        <th>These are some words that people use to describe other web frameworks.</th>
        <td>Whatevs</td>
        <td>Ugh.</td>
        <td>LOL</td>
        <td>K</td>
        <td>Aight</td>
        <td>Eh.</td>
        <td>Grrr...</td>
        <td>Meh.</td>
        <td>TTYL</td>
        <td>Bleh.</td>
        <td>Really?</td>
        <td>Why?</td>
      </tr>
      <tr>
        <th>Here are some great super heros.</th>
        <td>Batman</td>
        <td>Superman</td>
        <td>Spiderman</td>
        <td>Wonder Woman</td>
        <td>Hulk</td>
        <td>Nicolas Cage</td>
        <td>Antman</td>
        <td>Aquaman</td>
        <td>Captain America</td>
        <td>Wolverine</td>
        <td>Thor</td>
        <td>Iron Man</td>
      </tr>
      <tr>
        <th>Here are some common colors.</th>
        <td>Red</td>
        <td>Orange</td>
        <td>Yellow</td>
        <td>Green</td>
        <td>Blue</td>
        <td>Indigo</td>
        <td>Violet</td>
        <td>Black</td>
        <td>White</td>
        <td>Brown</td>
        <td>Peach</td>
        <td>Pink</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Here's a table footer, just in case</th>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
        <td>E</td>
        <td>F</td>
        <td>G</td>
        <td>H</td>
        <td>I</td>
        <td>J</td>
        <td>K</td>
        <td>L</td>
      </tr>
    </tfoot>
  </table>
</div>

---

## Unstriped Tables

By default, table rows are striped. There's an `.unstriped` class to remove the stripes. It can be helpful for very small tables, where its undesirable to have only one row striped.

```html
<table class="unstriped hover">
</table>
```

<h3>Table (with hover class) that is unstriped</h3>

<table class="unstriped hover">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>



# Tooltip

<p class="intro">Tooltips are nifty for displaying extended information for a term, link, or action on a page.</p>

By default, a tooltip appears below the defined term on hover or focus, and clicking on a tooltip will leave it open until you click somewhere else. 

You can position the tooltips to the top, right or left by adding the classes `.top`, `.right` or `.left` to the `<span>` element.

Tooltips should be short text, and <strong>cannot</strong> contain HTML markup.  You can use “curly quotes” if needed, but if the tooltip requires complex markup, images, links, etc, you should use a modal instead.


```html_example
<h4>Tool tip on a word or phrase</h4>
<p>The <span data-tooltip aria-haspopup="true" class="has-tip" tabindex="0" title="A “scarabaeus” is an outdated term for an object in the form of a scarab beetle. 
The scarab was a popular form of amulet in Ancient Egypt.">scarabaeus</span> hung clear of any branches, and, if allowed to fall, would have fallen at our feet. </p>

<h4>Tool tip on an icon</h4>
<p>The <a href="https://en.wikipedia.org/wiki/Scarabaeus">scarabaeus</a> <span data-tooltip aria-haspopup="true" class="has-tip no-border" tabindex="0" 
title="Fancy word for a beetle."><img src="/images/icon-tooltip.svg" alt="tool tip icon"></span> hung clear of any branches, and would have fallen at our feet.</p>
```



# Carousels

<p class="lead">There are numerous options for carousels -- so many that they have their own page.</p>

<a class="button tertiary large" href="styleguide_orbit.html">Learn More About Carousels</a>



# Modals

<p class="lead">There are numerous options for modals -- so many that they have their own page.</p>

<a class="button tertiary large" href="styleguide_reveal.html">Learn More About Modals</a>



# Media Objects

<p class="intro">Media objects are super useful components for displaying an item, usually an image, alongside some content, usually text. You could put lists, grids, or even other media objects inside.</p>

A media object is a container with the class `.media-object`, and two or three sections with the class `.media-object-section`.  

Media objects are one of hte few items we use in flexbox mode, so the class .main-section must be added to the section that should stretch in width to fill the available space.

Each section aligns to the top by default, but individual sections can also be middle- or bottom-aligned by adding `.align-*` classes on the container to align every child section at once, or individual child sections can be aligned with `.align-self-*` classes.

To override the width of the images in the media object, there are additional classes of `.image1-leads-blurb3`, `.image1-leads-blurb2`, and `blurb3-leads-image2`.

By adding the `.stack-for-small` class, you can make your media object sections stack at small screen.

---

## Image leading Blurb 1:3 ratio

Images inside media object with class `.image1-leads-blurb3` are limited to width of 210px. 

In the example, the first is not stacked for small sizes, but the second version is. (You can view the difference by resizing your browser to it is less than 580px wide). These are often used inside a list container, where each media object is an `<li>` in a longer list.

```html_example
<div class="media-object image1-leads-blurb3">
  <div class="media-object-section text-center">  
    <a class="overlay" href="#">
      <img src="files/ribbon.jpg" alt="Autism Ribbon" />
    </a>
  </div>
  <div class="media-object-section">
    <h3 class="article-headline"><a href="#">Autism as an Asset in the Workplace</a></h3>
    <p class="enlarge">Reaching into an untapped source of talent.</p>
  </div>
</div>
<div class="media-object image1-leads-blurb3 stack-for-small">
  <div class="media-object-section text-center">  
    <a class="overlay" href="#">
      <img src="files/ribbon.jpg" alt="Autism Ribbon" />
    </a>
  </div>
  <div class="media-object-section">
    <h3 class="article-headline"><a href="#">Autism as an Asset in the Workplace</a></h3>
    <p class="enlarge">Reaching into an untapped source of talent.</p>
  </div>
</div>
```

---

##  Blurb leading Image 3:2 ratio; Stacked for Small

Images inside media object with class `.blurb3-leads-image2` are 325px wide at medium and shift down to 290px at xlarge.

These are often used inside a list container, where each media object is an `<li>` in a longer list.

```html_example
<div class="media-object blurb3-leads-image2 stack-for-small">
  <div class="media-object-section">
    <div class="article-date-lg"><strong><span class="uppercase">Outlook</span></strong> | July 19, 2016</div>
    <h3 class="article-headline"><a href="#">Fun After Fifty </a></h3>
    <p>According to the common wisdom, Baby Boomers — like Peter Pan — refuse to grow older. Instead of retiring, they launch second — and third — careers. Instead of moving to seniors-oriented communities, they “age-in-place” or, even better, move into the heart of a walkable city. Human interest stories in the Sunday papers claim that 70 is the new 40 and 60 still has bad skin and trouble talking to girls. These clichés make great copy, but how accurate are they?  <a href="#">More</a></p>
  </div>
  <div class="media-object-section">
    <a class="overlay" href="#"><img src="files/insight-chart.jpg"></a>
  </div>
</li>
```

---

## Image leading Blurb 1:2 ratio

Images inside media object with class `image1-leads-blurb2` have a maximum width of 130px, and are intended for use inside a sidebar, without stacking for small screens.

```html
<div class="media-object image1-leads-blurb2">
  <div class="media-object-section">  
    <a class="overlay" href="#">
      <img src="files/post-1.jpg" alt="image description" />
    </a>
  </div>
  <div class="media-object-section">
    <div class="article-date">May 9, 2016</div>
    <h3 class="sidebar-headline"><a href="#">Homework and a Home Purchase</a></h3>
    <div class="article-category">Homeownership</div>
  </div>
</div>
```

<div class="row gutter-bottom">
  <div class="column medium-6 large-5 xlarge-4 end">
    <div class="media-object image1-leads-blurb2">
      <div class="media-object-section">  
        <a class="overlay" href="#">
          <img src="files/hanson-sm.jpg" alt="image description" />
        </a>
      </div>
      <div class="media-object-section">
        <div class="article-date">May 9, 2016</div>
        <h3 class="sidebar-headline"><a href="#">Homework and a Home Purchase</a></h3>
      </div>
    </div>
  </div>
</div>



# Prefooter Promo Band

A Prefooter Promo is a full width band of content.  On most interior pages, it is inserted after all content and immediately above the footer.  Never include more than one prefooter band per page, and limit the content of the prefooter band to a single concept and one link.  The first `div` should contain the supporting text, and the second `div` should contain the call to action.

- Use a [background color class](#colors) to set the background on the `.footer-promo` container.
- Avoid using the same background color for the prefooter as you do for the last sidebar module -- in mobile they will appear to run together when that occurs.

```html_example
<div class="background-primary footer-promo">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="column large-8" data-equalizer-watch>
      <h3 class="callout-footer-title">Getting To Know Freddie Mac</h3>
      <p>Every day, Freddie Mac employees ensure mortgage credit is available for America's families and help rebuild the nation's housing finance system.</p>
      <p>Learn how Our Mission is making a positive impact.</p>
    </div>
    <div class="column large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="footer-promo-cta">
       <a class="hollow button large" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</div>
<div class="background-yellow footer-promo">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="column large-8" data-equalizer-watch>
       <h3 class="callout-footer-title">My Home by Freddie Mac®</h3>
      <p>We offer the resources to help you make informed housing decisions and support your success – whether you rent, own, or plan to buy a home.</p>
    </div>
    <div class="column large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="footer-promo-cta">
       <a class="hollow large button" href="http://myhome.freddiemac.com/">Find it</a>
      </div>
    </div>
  </div>
</div>
<div class="background-teal footer-promo">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="column large-8" data-equalizer-watch>
      <h3 class="callout-footer-title">Connect with us on LinkedIn</h3>
      <p>Get Multifamily news and updates on our LinkedIn<sup>®</sup> Showcase page.</p>
    </div>
    <div class="column large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="footer-promo-cta">
       <a class="hollow large button" href="#">Connect</a>
      </div>
    </div>
  </div>
</div>
```



# Footer

**Note:** The footer will automatically be inserted via the template - and will be unique for each of the 4 business lines. Do not include this code in your page.

---