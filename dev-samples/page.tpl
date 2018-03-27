<?xml version="1.0" encoding="UTF-8"?>
<iw_pt name="page">
<iw_perl> <![CDATA[
use HTML::Entities;
use FreddieMac::Common;
my $dcr_name      = iwpt_get_dcr_name();
my $output_file   = iwpt_get_ofile_name();
my $description   = iwpt_dcr_value('dcr.record.description');
$description      = HTML::Entities::encode($description);
$description =~ s/&amp;/&/g;
my $title         = iwpt_dcr_value('dcr.record.browser_title');
my $browser_title = iwpt_dcr_value('dcr.record.browser_title');
my $grid_layout   = iwpt_dcr_value('dcr.record.grid_layout');
my $meta_image    = iwpt_dcr_value('dcr.record.meta_image');
my $body_class    = "";
my $language      = "en";

if($meta_image =~ m|^/|){
	$meta_image = "http://www.freddiemac.com".$meta_image;
}
if($grid_layout ne "one_col_grid"){
	$body_class = "grid-2col";
}
if($output_file =~ m/_es.html$/){
	$language = "es";
}
my $og_url = FreddieMac::Common::page_url_mapping($output_file);

if ($dcr_name =~ m|/default/main/MHAC|i) {
   $browser_title .= " - Freddie Mac" unless ($title =~ m|Freddie Mac|i);
} elsif ($dcr_name =~ m|/default/main/FreddieMac|i) {
   $browser_title .= " - Freddie Mac" unless ($title =~ m|Freddie Mac|i);
} else {
  # Add other branchwise conditions if/when needed
  # For now: No change in browser title
}
]]> </iw_perl>

<![CDATA[
<!doctype html>

<html class="no-js" lang="<iw_value name='$language'/>">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="x-ua-compatible" content="ie=edge"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title><iw_value name='$browser_title'/></title>
	<meta property="og:title" content="<iw_value name='$title'/>"/>
	<meta name="twitter:title" content="<iw_value name='$title'/>"/>
	<meta property="og:locale" content="en_US">
	<meta property="og:url" content="<iw_value name='$og_url'/>"/>
	<meta property="og:type" content="website" />
	<meta property="og:description" content="<iw_value name='$description'/>" />
	<meta name="twitter:description" content="<iw_value name='$description'/>" />
	<meta name="Description" content="<iw_value name='$description'/>" />
	<meta property="og:image" content="<iw_value name='$meta_image'/>" />
	<meta name="twitter:image" content="<iw_value name='$meta_image'/>" />
]]>
	<iw_if expr='{iw_value name="dcr.record.meta_image"} ne ""'>
		<iw_then>
			<meta name="twitter:card" content="summary_large_image" />
                </iw_then>
		<iw_else>
			<meta name="twitter:card" content="summary" />
		</iw_else>
	</iw_if>
<![CDATA[
	<meta name="twitter:site" content="@FreddieMac" />
	<meta name="author" content="<iw_value name='dcr.record.author'/>" />
	<meta name="keywords" content="<iw_value name='dcr.record.keywords'/>" />
	<meta name="date" scheme="RFC822" content="<iw_value name='dcr.record.date'/>" />
	<!--#include virtual="/include/responsive/corp-head.html" -->
	<iw_value name='dcr.record.script_options.custom_head_code'/>
	<style type="text/css"><iw_value name='dcr.record.script_options.custom_css_code'/></style>

<!--  
Template: Resp. Page
Version: 1.0
-->
</head>
<body class="<iw_value name='$body_class'/>">
	<!--#include virtual="/include/responsive/corp-content-header.html" -->
]]>
	<iw_if expr='{iw_value name="dcr.record.landing_page"} eq "Yes"'>
		<iw_then>
			<div class="{iw_value name='dcr.record.hero_section'} hero-blended">
				<div class="row">
					<div class="column hero-blended-content">
						<h1 class="hero-title"><iw_value name='dcr.record.page_title'/></h1>
						<iw_if expr='{iw_value name="dcr.record.subtitle"} ne ""'>
							<iw_then>
								<p><iw_value name='dcr.record.subtitle'/></p>
                					</iw_then>
        					</iw_if>
					</div>
				</div>
			</div>
                </iw_then>
		<iw_else>
			<div class="page-title">
				<div class="row column">
					<h1><iw_value name='dcr.record.page_title'/></h1>
					<iw_if expr='{iw_value name="dcr.record.subtitle"} ne ""'>
						<iw_then>
							<p class="page-subtitle"><iw_value name='dcr.record.subtitle'/></p>
						</iw_then>
					</iw_if>
				</div>
			</div>
		</iw_else>
        </iw_if>
	<iw_if expr='{iw_value name="$grid_layout"} eq "one_col_grid"'>
		<iw_then>
			<div class="content-band">
				<div class="row column">
					<iw_iterate list='dcr.record.main_content' var='main' iteration='iter'>
						<iw_value name='main.content'/>
						<iw_value name='main.pass_through'/>
					</iw_iterate>
					<iw_if expr='$og_url =~ /\/research\// or $og_url =~ /\/pmms\//'>
						<iw_then>
							<!--#include virtual="/include/disclaimer/research.html" -->
						</iw_then>
					</iw_if>
				</div>
			</div>
                </iw_then>
		<iw_else>
			<div class="two-column-layout">
				<div class="row two-column-row"> 
					<main class="column">
						<iw_iterate list='dcr.record.main_content' var='main' iteration='iter'>
							<iw_value name='main.content'/>
							<iw_value name='main.pass_through'/>
						</iw_iterate>
						<iw_if expr='$og_url =~ /\/research\// or $og_url =~ /\/pmms\//'>
							<iw_then>
								<!--#include virtual="/include/disclaimer/research.html" -->
							</iw_then>
						</iw_if>
					</main>
					<aside class="column">  
						 <iw_if expr='{iw_value name="$grid_layout"} eq "two_col_nav_grid" and {iw_value name="dcr.record.tertiary_nav"/} ne ""'>
							<iw_then>
								<!--#include virtual="<iw_value name='dcr.record.tertiary_nav'/>" -->
                					</iw_then>
        					</iw_if>
						<iw_iterate list='dcr.record.side_content' var='side' iteration='iter'>
							<iw_value name='side.content'/>
							<iw_value name='side.pass_through'/>
						</iw_iterate>
					</aside>
				</div>
			</div>
		</iw_else>
        </iw_if>
	<iw_value name='dcr.record.cross_promo'/>
<![CDATA[
	<!--#include virtual="/include/responsive/share-widget.html" -->
]]>
	<iw_if expr='{iw_value name="dcr.record.footer_promo"} ne ""'>
		<iw_then>
			<!--#include virtual="<iw_value name='dcr.record.footer_promo'/>" -->
               	</iw_then>
       	</iw_if>
<![CDATA[
	<!--#include virtual="/include/responsive/corp-footer.html" -->
	<!--#include virtual="/include/responsive/corp-js.html" -->
	<iw_value name='dcr.record.script_options.custom_js_code'/>
]]>
	<iw_if expr='{iw_value name="dcr.record.page_type"/} ne "None"'>
		<iw_then>
			<script>
				$('#nav-{iw_value name="dcr.record.page_type"/}').children('a').addClass('active');
				$('#subnav-{iw_value name="dcr.record.page_type"/}').addClass('on').find('.no-bullet').removeClass('hide');
				<iw_if expr='{iw_value name="dcr.record.category_name"/} ne "none"'>
					<iw_then>
						$('#subnav-{iw_value name="dcr.record.category_name"/}').addClass('active');
					</iw_then>
				</iw_if>
			</script>
		</iw_then>
	</iw_if>
<![CDATA[
</body>
</html>
]]>
</iw_pt>
