<title>Styleguide: Scripts</title>

# Scripts

This page provides details on existing JavaScript functions and variables that are part of the responsive template.  In addition to the code detailed below, Foundation includes numerous [javascript utilities](http://foundation.zurb.com/sites/docs/javascript-utilities.html) that you should become familiar with.



# Global Variables and Functions

There are two globally-scoped variables that are set in fmGlobals.js and one globally scoped function set in appCorp.js.

| Name        | Type     | Value or Description |
|-------------|----------|----------------------|
| QueryParam  | object   | a JavaScript object that associates all key=value pairs from the query string, where QueryParam['key'] returns 'value' |
| getWidth()  | function | function that returns the current width of the viewport  |
| Foundation  | object   | a JavaScript object used by the Foundation plugin and all of the Foundation scripts |
| FM          | object   | a JavaScript object used to store all Freddie Mac custom variables and functions, named **FM** to avoid collisions with other plugins |

## QueryParam Usage

Test to see if string exists in query.

```javascript
//assume that page url is something like yogurt.html?type=greek&flavor=strawberry
if(QueryParam['type']){
  console.log("type is defined");
}
```

Set a variable equal to the value of a query string item. 

```javascript
//assume that page url is something like yogurt.html?type=greek&flavor=strawberry
var flavor = QueryParam['flavor'] || '';
if(flavor !== '') { 
  console.log("The flavor is " + flavor); 
}
```

---

## getWidth() Usage

Use to first test the page's curent width before executing some other code, for use when you need to execute code at a screen width that is not one of our breakpoints.
- Foundation provides built in methods for [accessing breakpoints](http://foundation.zurb.com/sites/docs/media-queries.html#javascript). 

Syntax:
- getWidth()

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| n/a          | Returns integer representing width of page in pixels.|


Example:

```javascript
if (getWidth() > 500) { 
  // then execute additional code
}
```

---

## Foundation Usage

Refer to [Foundation JavaScript](http://foundation.zurb.com/sites/docs/javascript.html) for details on the Foundation plugin.

For the corporate template, the plugin is initialized with these settings.

| Name                                        | Applies to     | Value |
|---------------------------------------------|----------------|-------|
| Foundation.Accordion.defaults.multiExpand   | accordions     | true  |
| Foundation.Accordion.defaults.allowAllClosed| accordions     | true  |
| Foundation.Reveal.deepLink                  | carousels      | true  |
| Foundation.Reveal.fullScreen                | carousels      | true  |
| Foundation.Reveal.resetOnClose              | carousels      | true  |
| Foundation.Reveal.vOffset                   | carousels      | 0     |
| Foundation.Tabs.defaults.deepLink           | tabs           | true  |
| Foundation.Tabs.defaults.updateHistory      | tabs           | true  |
| Foundation.Tabs.defaults.deepLinkSmudge     | tabs           | true  |
| Foundation.Tabs.matchHeight                 | tabs           | true only if (getWidth() > 569) |
| Foundation.Abide.defaults.patterns          | form validation| ['digits_dashes'] = /^[0-9-]*$/ |
| Foundation.Abide.defaults.patterns          | form validation| ['tel'] = /^\(?\d{3}\)?[\s+&#x7c;-]?\d{3}[\s+&#x7c;-]?\d{4}/ |
| Foundation.Abide.defaults                   | form validation| function to validatate form inputs with `checked_required` attribute |

--

## FM Usage

All global variables and functions are defined as properties of [FM.form](#fm-form). 

If you are writing other JavaScript plugins, you can utilize additional namespacing parallel to FM.form.  For example:

```javascript
FM.newThing = {  	 
  property1 : true,
  property2 : 0,
  property3 : function(){ alert("Hello World"); },
  property4 : "Chocolate"
}
```



# FM.form 

FM.form's properties store numerous variables and functions.
 
| Name               | Description     | Value                                |
|--------------------|-----------------|--------------------------------------|
| FM.form.domain     | string          | hard-coded to 'http://www.freddiemac.com' |	
| FM.form.protocol   | string          | returns location.protocol: https |
| FM.form.hostname   | string          | returns location.hostname: extcstage.fhlmc.com (no port)|
| FM.form.pathname   | string          | returns location.pathname of current page's URL: /path/file.html |
| FM.form.hash       | string          | returns the location.hash, which is part of the URL after a hash: #part2 or returns empty string when no hash exists |
| FM.form.href       | string          | returns location.href, which is the entire URL of the current page |
| FM.form.querystr   | string          | returns location.search, which is the query string: ?f=try&g=it  or returns empty string when no hash exists |
| FM.form.referrer   | string          | returns document.referrer, if available, or empty string |
| FM.form.fmTimer    | string          | initialized with value of 0. Used when setting a timer via FM.form.setTimer(). |
| FM.form.pathElements | array         | returns array of path sections, such as 'singlefamily', 'factsheets', 'service'; if no path, FM.form.pathElements[0] = "" |
| FM.form.QueryPairs | array           | array of all a=b pairs in the query string to make them available to QueryParam(). |
| FM.form.setCookie  | function        | sets a cookie. no return value |
| FM.form.getCookie  | function        | returns value of requested cookie, or empty string |
| FM.form.deleteCookie | function      | deletes a cookie. no return value |
| FM.form.limitText  | function        | limits characters in a text field, can show a countdown of characters left. For best results, run it on events "keydown keyup blur change". no return value |
| FM.form.trimWhiteSpace | function    | returns string trimmed of leading and trailing whitespace and converts all interior double spaces to single spaces - automatically runs for input fields of type text, search, or email |
| FM.form.forceGlobalLinks | function  | converts a local url to a prod url, returns modified url |
| FM.form.useOmni    | function        | returns false if url omniture code not defined, or if page is loaded in TeamSite or localhost; otherwise returns true. |
| FM.form.setTimer   | function        | clears timer and sets it to run a routine after a delay. no return value |
| FM.form.resetReveal | function       | clears `.is-reveal-open` class once reveals are closed (fix for Foundation Issue that causes loss of scroll bar) |
| FM.form.offsetReveal | function      | shifts top location of modals. no return value. (fix for Foundation Issue that causes full screen modals to shift downward) |
| FM.form.omniNavLink | function       | routine that tracks and names navigation clicks. no return value. |

---

## FM.form.setCookie

Syntax:
- FM.form.setCookie(cookieName, cookieValue)
- FM.form.setCookie(cookieName, cookieValue, daysTilExpired)
- FM.form.setCookie(cookieName, cookieValue, daysTilExpired, sitePath)

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| cookieName     | Required. The name of the cookie you want to set. |
| cookieValue    | Required. The value of the cookie you want to set.|
| daysTilExpired | Optional. Default value is 0.5 (half a day)       |
| cookiePath     | Optional. Default value is "/" (sidewide cookie)  |

Example:

```javascript
// set a cookie named 'yogurt' to a value of 'lowfat'
FM.form.setCookie('yogurt','lowfat'); 

// same cookie name/value, set to expire in 3 hours (1/8 of a day)
FM.form.setCookie('yogurt','lowfat', 0.125); 

// same cookie name/value, set to expire in 7 days, limit path to /singlefamily
FM.form.setCookie('yogurt','lowfat', 7, '/singlefamily'); 
```

---

## FM.form.getCookie

Syntax:
- FM.form.getCookie(cookieName)

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| cookieName     | Required. The name of the cookie you want to set  Will return empty string if cookie is not set.|

Example:

```javascript
// read a cookie named 'yogurt' and log value
var myVar = FM.form.getCookie('yogurt');
console.log('yogurt cookie was set to "' + myVar + '".');
```

---

## FM.form.deleteCookie

Syntax:
- FM.form.deleteCookie(cookieName)

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| cookieName     | Required. The name of the cookie you want to delete.|
| cookiePath     | Optional. Default value is "/" (sidewide cookie)    |

Example:

```javascript
// delete a cookie named 'yogurt'
  FM.form.deleteCookie('yogurt'); 

// delete a cookie named 'yogurt' from path of /singlefamily
  FM.form.deleteCookie('yogurt','/singlefamily'); 
```

---

## FM.form.limitText

Syntax:
- FM.form.limitText('#fieldId', '#noticeId', max)
- FM.form.limitText('#fieldId', '#null', max)

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| fieldId      | Required. The `id` of the form field.|
| noticeId     | Optional. The `id` of the element that will display a countdown notice. |
| max          | Required. Maximum number of characters allowed in the field.  |

Example: 

```javascript
// limit number of characters that can be typed into field with id="feedback" to 250, and display the remaining characters left in a field with id="fbcounter".
$("#feedback").on("keydown keyup blur change",function(){FM.form.limitText('#feedback','#fbcounter',250);});

// Variation, if you do not wish to display remaining characters, pass through #null as second variable. 
$("#feedback").on("keydown keyup blur change",function(){FM.form.limitText('#Feedback','#null',250);});
 
```

---

## FM.form.trimWhiteSpace

Syntax:
- FM.form.trimWhiteSpace(value)

| Parameter   | Value                                       |
|-------------|---------------------------------------------|
| value       | Required. String that you want trimmed. <br/>(Remember, this automatically runs for input fields of type text, search, or email ) |

Example: 

```javascript
// limit a password field on events change and mouseleave so that value is trimmed of whitespaces.
$("input[type='password']").on("mouseleave change",function(){var v = $(this).val();$(this).val(FM.form.trimWhiteSpace(v));});
```

---

## FM.form.forceGlobalLinks

Syntax:
- FM.form.forceGlobalLinks(href)

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| href         | Required. Local url that is to be converted to production url. |

Example:

```javascript
// if page is behind https, convert all local links in header-nav and footer to production links.
if(FM.form.protocol === 'https:') {		
  $('#header-nav,.footer').find('a[href^="/"]').each(
    function(){
	    $(this).attr('href', FM.form.forceGlobalLinks( $(this).attr('href') ));
    }
  );		
};
```

---

## FM.form.useOmni

Syntax:
- FM.form.useOmni()

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| n/a          | Returns false if a page is viewed on 'localhost', inside teamSite, or if Omniture code is missing, otherwise returns true. |


Example:

```javascript
if (FM.form.useOmni()){ 
  \\ custom omniture code here
}
```

---

## FM.form.setTimer

A namespaced timer designed to not interfere with timers generated by Foundation code [such as orbit](http://foundation.zurb.com/sites/docs/javascript-utilities.html#timer-images-loaded).

Syntax:
- FM.form.setTimer(routine,delay)

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| routine      | Required. Name of function you want to run after delay |
| delay        | Required. Length of delay in milliseconds |

Example:

```javascript
// run FM.form.offsetReveal 300 milliseconds after zurb-foundation resize is triggered. 
$(window).on('resizeme.zf.trigger', function() { 
    FM.form.setTimer = setTimeout(FM.form.offsetReveal, 300);  
});
```

---

## FM.form.resetReveal

Syntax:
- FM.form.resetReveal()

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| n/a          | no value returned |

Example:

```javascript
// run FM.form.resetReveal on close of a modal.  
$(window).on('closed.zf.reveal', function() {
    FM.form.resetReveal;
});
```

---

## FM.form.offsetReveal

Syntax:
- FM.form.offsetReveal()

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| n/a          | no value returned |

Example:

```javascript
// run FM.form.offsetReveal 350 milliseconds after opening a modal.  
$(window).on('open.zf.reveal', function() { 
  FM.form.setTimer = setTimeout(FM.form.offsetReveal, 350);  
});
```

---

## FM.form.omniNavLink

Syntax:
- FM.form.omniNavLink()

| Parameter    | Value                                       |
|--------------|---------------------------------------------|
| n/a          | no value returned |

Example:

```javascript
// track click events in Omniture if FM.form.useOmni is true.  
if (FM.form.useOmni()){ 
  $(document).on("click",FM.form.omniNavLink); 
}
```

---