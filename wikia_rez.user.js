// ==UserScript==
// @name        Wikia AVP Rez
// @namespace   wikia_avp_rez
// @description Set appearance for smaller resolutions (less than 1024px width).
// @updateURL https://github.com/juneyourtech/wikia/raw/master/wikia_rez.user.js
// @include     *.wikia.com/wiki/*
// @include     *.fandom.com/wiki/*
// @version     0.2
// @grant       GM_addStyle
// ==/UserScript==
/* 4567890123456789023456789012345678901234567890123456789012345678901234567 */

/* HEADER TOP */
GM_addStyle("DIV.wds-global-navigation-wrapper {width:100%; max-height:33px;}");
/* 19.10.2019.: Removed max-width:768px; */

GM_addStyle("DIV.wds-global-navigation {width:100%; max-height:55px; padding-right:0px; padding-left:0px; flex-wrap:unset; background-color:transparent;}");
/* 19.10.2019.: Removed max-width:768px; added overflow-y:auto; then removed
left padding for an element inside should be 5px.
*/

GM_addStyle("DIV.wds-global-navigation__content-bar-left, DIV.wds-global-navigation__content-bar-right {display:inline-flex; height:33px;}");
/* 19.10.2019. TOP BAR */

/* navigation bar: left */
GM_addStyle("DIV.wds-global-navigation__content-bar-left {flex-grow:1; height:27px; align-items:flex-start; overflow:visible;}");
/* 19.10.2019. align-items:flex-start places items to the top of the 
flexbox.
• overflow:visible is really important here, as it allows for drop-down 
menus to be visible. */

/* Fandom logo */
GM_addStyle("A.wds-global-navigation__logo {transition:none; background-color:#002A32;}");
/* 19.10.2019. */

/* navlinks dropdown */
GM_addStyle("DIV.wds-global-navigation NAV.wds-global-navigation__links, DIV.wds-global-navigation .wds-global-navigation__dropdown-controls {background-color:#002A32;}");
/* 19.10.2019. */

/* navlinks */
GM_addStyle("DIV.wds-global-navigation NAV.wds-global-navigation__links {display:inline-flex; flex-grow:1;}");
/* 19.10.2019. */

/* navlinks (top) */
GM_addStyle("A.wds-global-navigation__link, .wds-global-navigation__start-a-wiki {margin-left:0px; margin-right:18px;}");
/* 19.10.2019. */

/* navlinks dropdown link (top) */
GM_addStyle("DIV.wds-global-navigation__link {margin-left:0px;}");
/* 19.10.2019. */
GM_addStyle("DIV.wds-global-navigation__content-bar-right {background-color:#002A32; flex-grow:unset;"); /* search icon & user/login icon; 19.10.2019. */

/* rightside control: search & user/login dropdown. */
GM_addStyle("DIV.wds-global-navigation__dropdown-controls {height:31px;}")

/* Search icon: luup/looking glass*/
GM_addStyle("FORM.wds-global-navigation__search-container {margin-left:0px;}");
/* L., 19.10.2019. */

/* Search icon: LUUP / Looking glass */
GM_addStyle(".wds-global-navigation__search-toggle-icon {margin-right:0px; padding:0px 9px;}");
/* */

/* USER icon (top right) */
GM_addStyle("DIV.wds-global-navigation__user-menu {margin-left:0px;}");
/* L., 19.10.2019. */

/* HEADER NEXT */
GM_addStyle("HEADER.wds-community-header {width:100%;}");
/* 19.10.2019: removed max-width:770px; */

/* AFTER HEADER */
GM_addStyle("DIV#TOP_LEADERBOARD_AB {width:100%; max-width:718px;}");
/* overflow-x:scroll; */

/* HEADER MENU UNIVERSE */
GM_addStyle("UL.wds-tabs, .pi-section-navigation {display:inline-block; align-items:unset;}"); /* inline or inline-block */
GM_addStyle("LI.wds-tabs__tab, .pi-section-tab {float:left; display:inline;}");

/* CONTENT */
GM_addStyle("SECTION.WikiaPage {width:100%; padding-left:0px; padding-right:0px; border-left:none; border-right:none;}");
/* 19.10.2019: max-width:718px; */

/* CONTENT After article title */
/* GM_addStyle("ARTICLE.WikiaMainContent {:;}"); */
/* L., 19.10.2019. */

/* CONTENT AFTER article title, BEFORE Categories */
GM_addStyle("SECTION.WikiaPage DIV.WikiaArticle {padding-left:5px; padding-right:5px;}");
/* L., 19.10.2019. */

/* BOTTOM CONTENT: "Recent Wiki activity" + "Popular pages" (in columns.) */
GM_addStyle("DIV.WikiaRail, DIV#WikiaRailWrapper {background-color:inherit; overflow-x:auto; padding-top:0px; padding-left:0px; padding-right:0px;}");
/* L., 19.10.2019. These two selectors are on one and the element. */

GM_addStyle("DIV.WikiaRail, .main-page-tag-rcs {width:100%;}");

/* "Recent"/"Popular" columns */
GM_addStyle("DIV.WikiaRail SECTION.rail-module, .main-page-tag-rcs .rail-module {width:100%; max-width:330px; margin-right:0px; margin-left:0px; margin-bottom:0px;}");
/* L., 19.10.2019.: Added margins. */

/* "Recent" column contents: padding below header*/
GM_addStyle("UL.activity-items {padding-left:5px;}");
/* L., 19.10.2019. */

/* "Recent" links */
GM_addStyle("DIV.WikiaRail .activity-module .page-title {overflow:initial; text-overflow:initial; white-space:normal;}");
/* L., 19.10.2019. */

/* "Recent" bottom: "Help us grow..." */
GM_addStyle("SECTION.community-page-rail-module .description {padding-left:5px;}");
/* L., 19.10.2019. */

/* "Popular" items */
GM_addStyle("DIV.WikiaRail .premium-recirculation-rail LI {margin-bottom:5px;}");
/* L., 19.10.2019. */

GM_addStyle("DIV.banner-notifications-placeholder {width:100%;}");

/* FOOTER */
GM_addStyle("FOOTER.WikiaFooter {padding-top:0px; margin-bottom:0px;}");
/* L., 19.10.2019. */

/* GLOBAL FOOTER (the dark gray one) */
GM_addStyle("FOOTER.wds-global-footer {width:auto; margin-top:20px; margin-left:23px; margin-right:23px;}");
/* L., 19.10.2019: +margin-top; 
first, centered with auto margins, then decided on 23px on either side. 
set width to auto;
removed max-width:768px; */

/* GLOBAL FOOTER TITLE ("FANDOM") */
GM_addStyle("H2.wds-global-footer__header {padding-top:20px;}");
/* L., 19.10.2019. */

/* GLOBAL FOOTER MAIN before "what this wiki is" */
GM_addStyle("DIV.wds-global-footer__main {max-width:unset; padding-bottom:6px;}");
/* L., 19.10.2019. padding-bottom was: 20px; is now 6.
Unset max-width.*/

/* GLOBAL FOOTER COLUMNS */
GM_addStyle("DIV.wds-global-footer__column {display:inline-flex; flex-direction:column; width:auto; margin-right:20px;}");
/* L., 19.10.2019. 
later: removed: display:inline-block; float:left;*/

/* GLOBAL FOOTER LAST COLUMN*/
GM_addStyle("DIV.wds-global-footer__column + .wds-global-footer__column:last-child {display:inline-flex; float:none; clear:both; margin-right:0px;}");
/* L., 19.10.2019. */

/* The first item container of FANDOM properties ("Explore properties") */
GM_addStyle("SECTION.wds-global-footer__section:first-child {margin-top:5px;}");
/* L., 19.10.2019. */

/* "Explore properties" individual items (after title header) */
GM_addStyle("LI.wds-global-footer__links-list-item {margin-bottom:5px;}");
/* L., 19.10.2019. */

/* GLOBAL FOOTER: "Follow us" (image links to Fandom social accounts) */
GM_addStyle("SECTION.wds-global-footer__section + .wds-global-footer__section {margin-top:20px; margin-bottom:15px;}");
/* L., 19.10.2019. */

/* GLOBAL FOOTER: "Fandom apps" */
GM_addStyle("SECTION.wds-global-footer__section.wds-is-fandom-apps {margin-top:20px;}");
/* L., 19.10.2019. */

/* GLOBAL FOOTER "FANDOM APPS" last child: "D&D Beyond" */
GM_addStyle("DIV.wds-global-footer__column:last-child > .wds-global-footer__section:last-child {margin-top:0px; margin-bottom:0px;}");
/* L., 19.10.2019. */

/* GLOBAL FOOTER: "xxxx Wiki is a Fandom Lifestyle Community". */
GM_addStyle("DIV.wds-global-footer__bottom-bar {min-height:25px;}");
GM_addStyle("DIV.wds-global-footer__bottom-bar-row.wds-has-padding {padding:5px 0px;}");
/* L., 19.10.2019. */

GM_addStyle("DIV#mixed-content-footer {margin-top:0px; margin-right:0px; margin-bottom:0px; margin-left:0px; padding-top:5px; padding-bottom:0px;}");

/* VERY BOTTOM, with ads */
GM_addStyle("DIV.WikiaBarWrapper .wikia-bar {width:100%; max-width:770px; height:26px; margin:0px; padding:0px;}");
/* height:71px */

GM_addStyle("DIV.WikiaBarCollapseWrapper.hidden {width:auto; bottom:0px; transition:none;}");
/* bottom:-7px; */
