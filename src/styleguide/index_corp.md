
# Framework 

<p class="lead">The corporate site utilizes the same framework as the <a href="styleguide_fm.html#framework">FM Global template</a>. The corporate template currently has these Foundation components enabled, disabled, and customized. You should familiarize yourself with the enabled and customized components.</p>

<ul class="accordion-pointer" data-accordion role="tablist">
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#panel1" id="panel1-heading" aria-controls="panel1" role="tab">Enabled Components</a>
    <div class="accordion-content" data-tab-content id="panel1" aria-labelledby="panel1-heading" role="tabpanel">
      <a href="http://foundation.zurb.com/sites/docs/accordion-menu.html">accordionMenu</a><br>
      <a href="http://foundation.zurb.com/sites/docs/button-group.html">button-group</a><br>
      <a href="http://foundation.zurb.com/sites/docs/card.html">card</a><br>
      <a href="http://foundation.zurb.com/sites/docs/close-button.html">close-button</a><br>
      <a href="http://foundation.zurb.com/sites/docs/equalizer.html">equalizer</a><br>
      <a href="http://foundation.zurb.com/sites/docs/float-classes.html">float-classes</a><br>
      <a href="http://foundation.zurb.com/sites/docs/forms.html">forms</a><br>
      <a href="http://foundation.zurb.com/sites/docs/menu.html">menu</a><br>
      <a href="http://foundation.zurb.com/sites/docs/motion-ui.html">motion-ui</a><br>
      <a href="http://foundation.zurb.com/sites/docs/responsive-embed.html">responsive-embed</a><br>
      <a href="http://foundation.zurb.com/sites/docs/responsive-navigation.html#responsive-toggle">responsive title-bar</a><br>
      <a href="http://foundation.zurb.com/sites/docs/toggler.html">toggler</a><br>
      <a href="http://foundation.zurb.com/sites/docs/tooltip.html">tooltip</a><br>
      <a href="http://foundation.zurb.com/sites/docs/top-bar.html">top-bar</a><br>
      <a href="http://foundation.zurb.com/sites/docs/typography-helpers.html">typography helpers</a><br>
      <a href="http://foundation.zurb.com/sites/docs/visibility.html">visibility classes</a><br>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#panel2" id="panel2-heading" aria-controls="panel2" role="tab">Customized Components</a>
    <div class="accordion-content" data-tab-content id="panel2" aria-labelledby="panel2-heading" role="tabpanel">
      abide (custom routines and patterns, see <a href="abide.html">abide</a>)<br>
      accordion	(styles are different, see <a href="styleguide_fm.html#accordions">accordions</a> and <a href="styleguide_fm.html#faqs">FAQs</a>)<br>
      buttons	(styles are different, see <a href="styleguide_fm.html#buttons">buttons</a>)<br>
      callout	(styles are different, see <a href="styleguide_fm.html#callouts">callouts</a>)<br>
      grid (the outermost row/column is inserted by <a href="styleguide_fm.html#the-templates">the template</a>)<br>
      media-object	(styles are different, see <a href="styleguide_fm.html#media-objects">media objects</a>)<br>
      orbit	(buttons and slide nav is automated for you, see <a href="orbit.html">carousels</a>) <br>
      reveal (buttons are automated for you, see <a href="reveal.html">modals</a>)<br>
      switch	<br>
      tabs (styles are different, see <a href="styleguide_fm.html#tabs">tabs</a>)<br>
      table	(styles are different, see <a href="#data-tables">data tables</a>)
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#panel3" id="panel3-heading" aria-controls="panel3" role="tab">Disabled Components</a>
    <div class="accordion-content" data-tab-content id="panel3" aria-labelledby="panel3-heading" role="tabpanel">
      <div class="callout background-concrete small">
        <p>If you need to have a currently disabled component enabled, contact Sherry and Jon so that it can be added to the script bundle and properly styled.</p>
      </div>  
      drilldown	<br>
      drilldown-menu	<br>
      dropdown	<br>
      dropdown-menu	<br>
      flex-video<br>
      interchange	<br>
      label	<br>
      magellan	<br>
      offcanvas	<br>
      pagination	<br>
      progress-bar	<br>
      progress-element 	<br>
      range-input	<br>
      responsiveMenu	<br>
      responsiveToggle	<br>
      slider	<br>
      sticky	<br>
      thumbnail	
    </div>
  </li>
</ul>



# Heros

<p class="lead">There are several different hero styles, depending upon page type.  For pages that aren't landing pages or relying on a blog-like format, you should use a [page title](styleguide_fm.html#page-title) instead of a hero.</p>

---

## Landing Page Heros

Landing Pages are those pages that are linked from the primary navigation. Add one of the following classes to the `.hero-blended` container to specify the background for a particular landing page: `.perspectives-landing-hero`, `.research-landing-hero`, `.blog-landing-hero`, `.media-landing-hero`, `.about-landing-hero`.


```html_example
<div class="hero-blended about-landing-hero">
  <div class="row">
    <div class="column hero-blended-content">
      <h1 class="hero-title">About Us</h1>
      <p>Our statutory mission is to provide liquidity, stability and affordability to the U.S. housing market.</p>
    </div>
  </div>
</div>
```

---

## Blog Detail Heros

Use this hero on Blog article pages.  Elements inside the hero include the date, the title, and the blog category.  The class name (and thus the background image) should change based on the blog category chosen. (this example is homeownership)

```html
<div class="hero-blended blog-detail-hero-homeownership">
  <div class="row">
    <div class="column hero-blended-content">
      <div class="hero-date">May 9, 2016</div>
      <h1 class="hero-title">Take the Anxiety Out of Your First Home Offer</h1>
      <div><a href="#" class="hollow button small">Homeownership</a></div>
    </div>
	</div>
  <!-- and a share widget -->
</div>
```

<div class="grid-2col-blog">
  <div class="hero-blended blog-detail-hero-homeownership">
    <div class="row">
      <div class="column hero-blended-content">
        <div class="hero-date">May 9, 2016</div>
        <h1 class="hero-title">Take the Anxiety Out of Your First Home Offer</h1>
        <div><a href="#" class="hollow button small">Homeownership</a></div>
      </div>
    </div>
    <!-- and a share widget -->
  </div>
</div>

---

## Perspectives Heros

Use this hero on Perspectives article pages.  Elements include the label "Perspectives", the date, the title, the author's image, the author's name, and the author's title.

```html
<div class="perspectives-detail-hero hero-blended">
  <div class="row">
    <div class="column hero-blended-content">
      <div><strong>Perspectives</strong></div>
      <div class="hero-date">August 9, 2016</div>
      <h1 class="hero-title">Three Reasons Why Baby Boomer Homeowners are a Market to Watch</h1>
      <figure class="avatar">
        <div>
          <img src="files/exec_david_brickman.jpg" alt="Avatar img" />
        </div>
        <div>
          <figcaption class="reduce">By<br><strong>David Brickman, EVP Multifamily Business</strong></figcaption>
        </div>
      </figure>
    </div>
	</div>
  <!-- and a share widget -->
</div>
```

<div class="grid-2col-blog">
  <div class="perspectives-detail-hero hero-blended">
    <div class="row">
      <div class="column hero-blended-content">
        <div><strong>Perspectives</strong></div>
        <div class="hero-date">August 9, 2016</div>
        <h1 class="hero-title">Three Reasons Why Baby Boomer Homeowners are a Market to Watch</h1>
        <figure class="avatar">
          <div>
            <img src="files/exec_david_brickman.jpg" alt="Avatar img" />
          </div>
          <div>
            <figcaption class="reduce">By<br><strong>David Brickman, EVP Multifamily Business</strong></figcaption>
          </div>
        </figure>
      </div>
    </div>
    <!-- and a share widget -->
  </div>
</div>



# Cards

<p class="lead">Cards are a are a popular and flexible UI component, typically used to group article entries. </p>

<p>A card is just an element with a `.card` class applied. You can put any kind of content inside.
Make sure you wrap your content in a `.card-section` element in order to achieve the traditional card look.</p>
<p>A card container has no padding, allowing you to place full-bleed images inside. Use the `.card-divider` and `.card-section` classes to sub-divide a card. To center the text content (for people cards, for example) simply add class `.text-center` to the `.card-section` container.</p>

## Perspective Cards

This style of card is used for Perspectives articles. 

- If the cards should have a different background than the container they are in, add a [background color class](#colors).

```html
<div class="column">
  <div class="card background-concrete">
    <div class="card-divider" data-equalizer-watch>
      <div class="article-date">August 13, 2016</div>
      <h3 class="card-title-large"><a href="#">Multifamily Is On a Roll</a></h3>
      <p class="card-blurb-large">2016 was a very good year. Freddie Mac Multifamily is on track to purchase approximately $55 billion and securitize over $50 billion in loans – both new records. Barring any surprises, we believe the multifamly industry – and our business -- can grow another five to ten percent next year. </p>
      <figure class="avatar">
        <div>
          <img src="files/brickman-sm.jpg" alt="David Brickman" />
        </div>
        <div>
          <figcaption class="reduce"><strong class="uppercase">David Brickman</strong><br>EVP Multifamily Business</figcaption>
        </div>
      </figure>
    </div>
  </div>
</div>
```

<div class="row medium-up-2 large-up-3 xlarge-up-4 perspectives" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">August 13, 2016</div>
        <h3 class="card-title-large"><a href="#">Multifamily Is On a Roll</a></h3>
        <p class="card-blurb-large">2016 was a very good year. Freddie Mac Multifamily is on track to purchase approximately $55 billion and securitize over $50 billion in loans – both new records. Barring any surprises, we believe the multifamly industry – and our business -- can grow another five to ten percent next year. </p>
        <figure class="avatar">
          <div>
            <img src="files/brickman-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">David Brickman</strong><br>EVP Multifamily Business</figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">June 27, 2016</div>
        <h3 class="card-title-large"><a href="#">Homeownership: Where We Are Now, Where We Are Headed</a></h3>
        <p class="card-blurb-large">The second half of the 20th century brought with it remarkable growth in homeownership.  For the first four decades of the century, homeownership rates were relatively stable and remained below 50 percent, dropping as low as 44 percent in 1940. </p>
        <figure class="avatar">
          <div>
            <img src="files/gilmore-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">Yvette Gilmore</strong><br>VP Single-Family Servicer Performance Management </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">May 13, 2016</div>
        <h3 class="card-title-large"><a href="#">This is the Week to Learn About Mortgage Fraud</a></h3>
        <p class="card-blurb-large">Fraud continues to threaten homebuyers, renters and the mortgage industry. The latest report from CoreLogic, a real estate information company, says fraud is on an upward trajectory and estimates that some 13,000 mortgage applications made during the second quarter had indications of fraud.</p>
        <figure class="avatar">
          <div>
            <img src="files/layton-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">Donald H. Layton</strong><br>CEO</figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card background-concrete">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">April 30, 2016</div>
        <h3 class="card-title-large"><a href="#">Freddie Mac Reports Another Quarter of Solid Financial Results</a></h3>
        <p class="card-blurb-large">Today Freddie  Mac reported net income and comprehensive income of $2.3 billion for the third quarter  of 2016. Our results strongly reflect our improving business fundamentals and  competitiveness &ndash; higher purchase volumes.</p>
        <figure class="avatar">
          <div>
            <img src="files/hanson-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">Mark Hanson</strong><br>SVP Securitization</figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
</div>

---    

## Blog Cards

This style of card is used for Blog articles. 

- If the cards should have a different background than the container they are in, add a [background color class](#colors).

```html
<div class="column">
  <div class="card" data-equalizer-watch>
    <a class="overlay" href="#">
      <img src="files/blog-2.jpg" alt="Blog Img" />
    </a>
    <div class="card-section">
      <p class="article-date">May 13, 2016</p>
      <h3 class="card-title"><a href="#">Down Payments: There's Help for That</a></h3>
      <p class="article-category">Homeownership</p>
      <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
    </div>
  </div>
</div>
```

<div class="row small-up-2 medium-up-3 large-up-4" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="#">
        <img src="files/blog-2.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">May 13, 2016</p>
        <h3 class="card-title"><a href="#">Down Payments: There's Help for That</a></h3>
        <p class="article-category">Homeownership</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="#">
        <img src="files/blog-3.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">May 27, 2016</p>
        <h3 class="card-title"><a href="#">Dear Seller, Pick Me</a></h3>
        <p class="article-category">Notable</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="#">
        <img src="files/blog-1.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">May 30, 2016</p>
        <h3 class="card-title"><a href="#">Try, Try Again: Responding to a Counteroffer</a></h3>
        <p class="article-category">Notable</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="#">
        <img src="files/blog-4.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">June 2, 2016</p>
        <h3 class="card-title"><a href="#">Outlook 2016: More Apartments, Low Vacancy Rates, Higher Rent</a></h3>
        <p class="article-category">Research &amp; Analysis</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
</div>



# Featured Posts

## Featured Blogs

On the blog landing page, the first 2 entries are featured with large images and different styling to make them more prominent.  The featured posts are generated dynamically.

```html_example
<div class="row large-up-2">
  <div class="column">
    <div class="card feature-block">
      <a href="#" class="overlay overlay-dark">
        <img src="files/feature-1.jpg" alt="Blog Img"/>
        <div class="overlay-contents">
          <div class="article-date-lg">October 18, 2016</div>
          <h3 class="subtitle">Baby Boomer Myths: Up-Close and Personal with Sean Becketti, Chief Economist</h3>
          <div class="article-category">Research &amp; Analysis</div>
        </div>
      </a>
    </div>
  </div>
  <div class="column">
    <div class="card feature-block">
      <a href="#" class="overlay overlay-dark">
        <img src="files/feature-2.jpg" alt="Blog Img"/>
        <div class="overlay-contents">
          <div class="article-date-lg">Oct 13, 2016</div>
          <h3 class="subtitle">Don't Be Spoofed</h3>
          <div class="article-category">Notable</div>
        </div>
      </a>
    </div>
  </div>
</div>
```

---

## Featured Perspectives

On the perspectives landing page, the first 2 entries are featured with large images and different styling to make them more prominent. The featured posts are generated dynamically.

```html_example
<div class="row xlarge-up-2">
  <div class="column">
    <div class="card feature-block">
      <a href="#" class="overlay overlay-gradient">
        <img src="files/gilmore-lg.jpg" alt="Yvette Gilmore"/>
        <div class="overlay-contents">
          <div class="article-date-lg">August 22, 2016</div>
          <h3 class="subtitle">The New Normal: Servicing in a Post-Crisis World</h3>
          <p class="article-blurb-lg">In the years since the crisis we’ve made important strides in making the servicing industry stronger, more efficient and better able to help struggling borrowers. Today servicers have broadly delegated authority...</p>
          <div class="article-byline"><strong class="uppercase">Yvette Gilmore</strong><br><span class="reduce">VP Single-Family Servicer Performance Management</span></div>
        </div>
      </a>
    </div>
  </div>
  <div class="column">
    <div class="card feature-block">
      <a href="#" class="overlay overlay-gradient">
        <img src="files/hanson-lg.jpg" alt="Mark Hanson"/>
        <div class="overlay-contents">
          <div class="article-date-lg">Jul 11, 2016</div>
          <h3 class="subtitle">The Single Security: Testing the Pipes</h3>
          <p class="article-blurb-lg">Borrowers such as step-rate mortgages and partial principal forbearance. In addition, we’ve made it possible for them to modify loans without documentation through our streamlined modification program.</p>
          <div class="article-byline"><strong class="uppercase">Mark Hanson</strong><br><span class="reduce">Senior Vice President Securitization</span></div>
        </div>
      </a>
    </div>
  </div>
</div>
```    



# Data Tables

<p class="lead">Standard tables should follow the <a href="styleguide_fm.html#data-tables">FM Global table design</a>.</p>

---

## Research Sidebar Tables

Research landing page has custom styled tables, which can be achieved by applying class `.research-table` to the table.

```html
<section class="sidebar background-concrete">
  <div class="row">
    <div class="column">
      <ul class="list-divided no-bullet">
        <li>
          <table class="research-table">
            <thead>
              <tr>
                <th colspan="2" class="text-center uppercase"><span class="weight-light">Full Year YYYY</span> as of Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"><span class="reduce">30-Yr FRM</span><br>
                  <span class="stat-sm">4.2%</span><br>
                </td>
                <td class="text-center"><span class="reduce">Originations</span><br>
                  <span class="stat-sm">1,505 ($B)</span><br>
                </td>
              </tr>
              <tr>
                <td class="text-center"><span class="reduce">Home Sales</span><br>
                  <span class="stat-sm">5.75 (M)</span><br>
                </td>
                <td class="text-center"><span class="reduce">House Price Growth</span><br>
                  <span class="stat-sm">4.7%</span><br>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <table class="research-table">
            <thead>
              <tr>
                <th colspan="3" class="text-center uppercase"><span class="weight-light">Average Rates</span> as of Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <span class="reduce">30-Yr FRM</span><br>
                  <span class="stat-sm">4.19%</span><br>
                  <span class="reduce"><strong>0.5</strong> Fees/<wbr>Points</wbr></span>
                </td>
                <td class="text-center">
                  <span class="reduce">15-Yr FRM</span><br>
                  <span class="stat-sm">3.41%</span><br>
                  <span class="reduce"><strong>0.5</strong> Fees/<wbr>Points</wbr></span>
                </td>
                <td class="text-center">
                  <span class="reduce">5/1-Yr ARM</span><br>
                  <span class="stat-sm">3.23%</span><br>
                  <span class="reduce"><strong>0.4</strong> Fees/<wbr>Points</wbr></span>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </div>
</section>
```

<div class="row">  
  <div class="large-5">  
    <section class="sidebar background-concrete">
      <div class="row">
        <div class="column">
          <ul class="list-divided no-bullet">
            <li>
              <table class="research-table">
                <thead>
                  <tr>
                    <th colspan="2" class="text-center uppercase"><span class="weight-light">Full Year YYYY</span> as of Month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center"><span class="reduce">30-Yr FRM</span><br>
                      <span class="stat-sm">4.2%</span><br>
                    </td>
                    <td class="text-center"><span class="reduce">Originations</span><br>
                      <span class="stat-sm">1,505 ($B)</span><br>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center"><span class="reduce">Home Sales</span><br>
                      <span class="stat-sm">5.75 (M)</span><br>
                    </td>
                    <td class="text-center"><span class="reduce">House Price Growth</span><br>
                      <span class="stat-sm">4.7%</span><br>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <table class="research-table">
                <thead>
                  <tr>
                    <th colspan="3" class="text-center uppercase"><span class="weight-light">Average Rates</span> as of Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">
                      <span class="reduce">30-Yr FRM</span><br>
                      <span class="stat-sm">4.19%</span><br>
                      <span class="reduce"><strong>0.5</strong> Fees/<wbr>Points</wbr></span>
                    </td>
                    <td class="text-center">
                      <span class="reduce">15-Yr FRM</span><br>
                      <span class="stat-sm">3.41%</span><br>
                      <span class="reduce"><strong>0.5</strong> Fees/<wbr>Points</wbr></span>
                    </td>
                    <td class="text-center">
                      <span class="reduce">5/1-Yr ARM</span><br>
                      <span class="stat-sm">3.23%</span><br>
                      <span class="reduce"><strong>0.4</strong> Fees/<wbr>Points</wbr></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>



# Footer

**Note:** The footer will automatically be inserted via the template - and will be unique for each of the 4 business lines. Do not include this code in your page.

<footer class="footer row-wrapper hide-for-print">
	<div class="row">
    <div class="column">
      <div class="footer-top">
          <ul class="no-bullet enlarge">
            <li><a href="https://www.freddiemac.jobs/">Careers</a></li>
            <li><a href="/investors/">Investor Relations</a></li>
            <li><a href="/about/people/suppliers.html">Suppliers</a></li>
            <li><a href="/about/contact-us.html">Contact Us</a></li>
            <li><span class="show-for-sr">Follow us on social media</span>
              <a aria-label="YouTube" href="https://www.youtube.com/freddiemac" class="connect-link"><svg aria-hidden="true" viewBox="8 8 125 125" xmlns="http://www.w3.org/2000/svg"><path d="M72 14.2C40.1 14.2 14.2 40.1 14.2 72c0 31.9 25.9 57.8 57.8 57.8 31.9 0 57.8-25.9 57.8-57.8C129.9 40.1 104 14.2 72 14.2zM104.4 85c0 4.4-3.6 8.1-8 8.1 0 0-6.9 1-24.7 1 -18 0-24.3-1-24.3-1 -4.4 0-8.1-3.6-8.1-8V58.5c0-4.4 3.6-8 8.1-8 0 0 6.3-1 24.3-1 17.9 0 24.8 1 24.8 1 4.4 0 8 3.6 8 8.1V85z" fill="#fff"/><polygon points="62 84.5 84 71.8 62 59.1 " fill="#fff"/></svg></a>
              <a aria-label="Facebook" href="https://www.facebook.com/FreddieMac" class="connect-link"><svg aria-hidden="true" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M29.8 50.3h6.7V34h4.5l0.6-5.6h-5.1l0-2.8c0-1.5 0.1-2.3 2.2-2.3h2.8V17.7h-4.5c-5.4 0-7.3 2.7-7.3 7.3v3.4h-3.4v5.6h3.4V50.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/3140" class="connect-link"><svg aria-hidden="true" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M50.8 48.1V36.4c0-6.3-3.3-9.2-7.8-9.2 -3.6 0-5.2 2-6.1 3.4V27.7h-6.8c0.1 1.9 0 20.4 0 20.4h6.8V36.7c0-0.6 0-1.2 0.2-1.7 0.5-1.2 1.6-2.5 3.5-2.5 2.5 0 3.4 1.9 3.4 4.6v10.9H50.8zM23 24.9c2.4 0 3.8-1.6 3.8-3.5 0-2-1.5-3.5-3.8-3.5s-3.8 1.5-3.8 3.5c0 2 1.5 3.5 3.8 3.5H23zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64zM26.4 48.1V27.7h-6.8v20.4H26.4z" fill="#fff"/></svg></a>
              <a aria-label="Twitter" href="https://twitter.com/FreddieMac" class="connect-link"><svg aria-hidden="true" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M38.2 22.3c-2.6 1-4.3 3.4-4.1 6.1l0.1 1 -1-0.1c-3.8-0.5-7.1-2.1-10-4.9l-1.4-1.4 -0.4 1c-0.8 2.3-0.3 4.7 1.3 6.3 0.8 0.9 0.6 1-0.8 0.5 -0.5-0.2-0.9-0.3-1-0.2 -0.1 0.1 0.4 2.1 0.8 2.8 0.5 1.1 1.7 2.1 2.9 2.7l1 0.5 -1.2 0c-1.2 0-1.2 0-1.1 0.5 0.4 1.4 2.1 2.8 3.9 3.5l1.3 0.4 -1.1 0.7c-1.7 1-3.6 1.5-5.6 1.6C20.8 43.3 20 43.3 20 43.4c0 0.2 2.6 1.4 4 1.9 4.5 1.4 9.8 0.8 13.7-1.6 2.8-1.7 5.7-5 7-8.2 0.7-1.7 1.4-4.9 1.4-6.4 0-1 0.1-1.1 1.2-2.3 0.7-0.7 1.3-1.4 1.5-1.6 0.2-0.4 0.2-0.4-0.9 0 -1.8 0.6-2 0.6-1.2-0.4 0.6-0.7 1.4-1.9 1.4-2.3 0-0.1-0.3 0-0.7 0.2 -0.4 0.2-1.2 0.5-1.8 0.7l-1.1 0.4 -1-0.7c-0.6-0.4-1.4-0.8-1.8-0.9C40.8 21.9 39.1 21.9 38.2 22.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
            </li>
          </ul>
      </div>
      <div class="footer-bottom reduce gutter-left gutter-right">
        <ul class="no-bullet">
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2018 Freddie Mac</li>
        </ul>
      </div>
    </div>
	</div>
</footer><div class="footer-bottom-edge"></div>

---