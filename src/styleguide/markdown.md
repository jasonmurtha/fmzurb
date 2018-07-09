<title class="hide">Styleguide Markdown</title><br>

# Writing Markdown 

The styleguides are all written in markdown language, and the files are stored locally using extension **.md**.  The following guide should help you write documetnation using Markdown.



# Headings

Headings from `h1` through `h6` are constructed with a `#` for each level:

``` markdown
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```
Renders to:

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading



# Horizontal Rules

The HTML `<hr>` element is for creating a "thematic break" between paragraph-level elements. In markdown, you can create a `<hr>` with any of the following:

* `___`: three consecutive underscores
* `---`: three consecutive dashes
* `***`: three consecutive asterisks

renders to:

___

---

***



# Body Copy 

Body copy written as normal, plain text will be wrapped with `<p></p>` tags in the rendered HTML.

So this body copy:

``` markdown
Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. 

Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. 

Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.
```
renders to this HTML:

Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. 

Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. 

Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.



# Emphasis

## Bold
For emphasizing a snippet of text with a heavier font-weight.

The following snippet of text is **rendered as bold text**.

``` markdown
This text is **rendered as bold text**
```
renders to:

This text is **rendered as bold text**

## Italics
For emphasizing a snippet of text with italics.

The following snippet of text is _rendered as italicized text_.

``` markdown
This text is _rendered as italicized text_
```

renders to:

This text is _rendered as italicized text_

## strikethrough
In Markdown you can do strikethroughs. 

``` markdown
This text is ~~rendered with strike through~~
```
Which renders to:

This text is ~~rendered with strike through~~



# Blockquotes

For quoting blocks of content from another source within your document.

Add `>` before any text you want to quote. 

``` markdown
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
```

Renders to:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

To add footers to blockquotes, you will need to add in HTML markup:

``` markdown
> Cowards die many times before their deaths; the <strong>valiant</strong> never taste of death but once.
<footer><cite>William Shakespeare</cite> in <cite>King Henry the Fifth</cite></footer>
```

Renders to:

> Cowards die many times before their deaths; the <strong>valiant</strong> never taste of death but once.
<footer><cite>William Shakespeare</cite> in <cite>King Henry the Fifth</cite></footer> 

Blockquotes can also be nested:

``` markdown
> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. 
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi. 
>> Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor 
odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
```

Renders to:

> Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. 
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi. 
>> Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor 
odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.



# Lists

## Unordered

A list of items in which the order of the items does not explicitly matter.

You may use any of the following symbols to denote bullets for each list item: `+`, `-`, `*`, and to nest bullets, jsut indent them with 2 spaces.

For example
``` markdown
+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem
```
Renders to:

+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem


## Ordered

A list of items in which the order of items does explicitly matter.

``` markdown
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
```
Renders to:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem


**TIP**: If you are concerned that you'll need to rearrange list items, just use `1.` for each number. StyleSherpa will **automatically** number each item. For example:

``` markdown
1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem
```

Renders to:

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem



# Code Samples

## Inline code
Wrap inline snippets of code with `` ` ``.

For example, `<span></span>` should be displayed as inline code.

``` html
For example, `<span></span>` should be displayed as inline code.
```

## Block code "fences"

Use "fences"  ```` ``` ````  to block in multiple lines of code. 

<pre>
```html
Sample text here...
```
</pre>

```
Sample text here...
```

### Block Code with Syntax Highlighting

StyleSherpa supports syntax highlighting for **dozens** of languages: html, javascript, css, scss, xml, perl, json, handlebars, markdown, coffeescript, bash, dos, fortran, sql, ruby, python, php, less, java, etc.

To activate it, simply add the file extension of the language you want to use directly after the first code "fence", ` ``` html `, and syntax highlighting will automatically be applied in the rendered HTML. For example, to apply syntax highlighting to JavaScript code:

<pre>
``` javascript
grunt.initConfig({
  assemble: {
    options: {
      assets: 'docs/assets',
      data: 'src/data/*.{json,yml}',
      helpers: 'src/custom-helpers.js',
      partials: ['src/partials/**/*.{hbs,md}']
    },
    pages: {
      options: {
        layout: 'default.hbs'
      },
      files: {
        './': ['src/templates/pages/index.hbs']
      }
    }
  }
};
```
</pre>

Renders to:

``` javascript
grunt.initConfig({
  assemble: {
    options: {
      assets: 'docs/assets',
      data: 'src/data/*.{json,yml}',
      helpers: 'src/custom-helpers.js',
      partials: ['src/partials/**/*.{hbs,md}']
    },
    pages: {
      options: {
        layout: 'default.hbs'
      },
      files: {
        './': ['src/templates/pages/index.hbs']
      }
    }
  }
};
```

### Block Code Example with Rendered Version (All-in-One)

Instead of `html`, add `html_example` directly after the first code "fence", ` ``` `.
Syntax highlighting will automatically be applied in the sample code and then the markdown will also be rendered as HTML.

<pre>
```html_example
&lt;div class="callout background-green"&gt;Sample text here...&lt;/div&gt;
```

</pre>

Renders to this code sample and markup example all-in-one:

```html_example
<div class="callout background-green">Sample text here...</div>
```



# Tables
Tables are created by adding pipes as dividers between each cell, and by adding a line of dashes (also separated by bars) beneath the header. 
Note that the pipes do not need to be vertically aligned, and text is left-aligned by default.


``` markdown
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

Renders to:

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Right aligned text in a column

Adding a colon on the right side of the dashes below any heading will right align text for that column.

``` markdown
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Centered text in a column

Adding a colon on the left and right side of the dashes below any heading will center align text for that column.

``` markdown
| Option | Description |
| :-----:|: ----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

| Option | Description |
| :-----:|: ----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |



# Links

## Basic link

``` markdown
Visit [Freddie Mac](http://www.freddiemac.com)
```

Renders to (hover over the link, there is no tooltip):

Visit [Freddie Mac](http://www.freddiemac.com)

## Add a title

``` markdown
Visit [Freddie Mac](http://www.freddiemac.com "We Make Home Possible!")
```

Renders to (hover over the link, there should be a tooltip):

Visit [Freddie Mac](http://www.freddiemac.com "We Make Home Possible!")

## Named Anchors

Named anchors enable you to jump to the specified anchor point on the same page. For example, each of these chapters:

```markdown
# Table of Contents
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)
```
will jump to these sections:

```markdown
## Chapter 1 <a id="chapter-1"></a>
Content for chapter one.

## Chapter 2 <a id="chapter-2"></a>
Content for chapter one.

## Chapter 3 <a id="chapter-3"></a>
Content for chapter one.
```
**NOTE** that specific placement of the anchor tag seems to be arbitrary. They are placed inline here since it seems to be unobtrusive, and it works.



# Images

Images have a similar syntax to links but include a preceding exclamation point.  Text in brackets is the alt text for the image.

**Note:** If you are writing a code sample for users to copy/paste from, just use standard `<img>` markup.

``` markdown
![Photo of Yellow Flowers](/special/styleguide/files/plant1.jpg)
```
Renders to:

![Photo of Yellow Flowers](/special/styleguide/files/plant1.jpg)

## Add a title tag

``` markdown
![Closeup of Pink Flower](/special/styleguide/files/plant2.jpg "Petal details")
```
Renders to (hover over the link, there should be a tooltip):

![Closeup of Pink Flower](/special/styleguide/files/plant2.jpg "Petal details")


## Alternate Footnote Syntax

Create a reference id and associate it with the image's alt text using `![Alt Text][Ref id]`.


``` markdown
![Blue Flower][blue]
```

Then later in the document define the image reference ids that were used in the content using `[Ref id]: URL Title`.

``` markdown
[blue]: /special/styleguide/files/plant3.jpg  "I'm feeling allergic"
```

![Blue Flower][blue]

[blue]: /special/styleguide/files/plant3.jpg  "I'm feeling allergic"
