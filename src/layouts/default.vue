<template>
  <div class="layout-wrapper layout-news-active">
    <div class="layout-topbar">
      <a class="menu-button"><i class="pi pi-bars"></i></a
      ><a href="#/" class="logo"
        ><img alt="logo" src="http://placehold.it/150x30"
      /></a>
      <ul class="topbar-menu">
        <li><a href="#/setup" class="">Get Started</a></li>
      </ul>
    </div>
    <div class="layout-sidebar">
      <a href="#/" class="logo"
        ><img alt="logo" src="http://placehold.it/150x30"
      /></a>
      <div class="layout-menu">
        <div class="menu-category">
          LOREM
          <!---->
        </div>
        <div class="menu-items">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/about">A propos</RouterLink>
          <RouterLink to="/offers">Offres</RouterLink>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <div>
        <div class="content-section documentation">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-size: 14px;
}
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5rem 0 1rem 0;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.2;
  color: inherit;
}
h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child {
  margin-top: 0;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}
p {
  line-height: 1.5;
  margin: 0 0 1rem 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@-webkit-keyframes pulse {
  0% {
    background-color: hsla(0, 0%, 64.7%, 0.1);
  }
  50% {
    background-color: hsla(0, 0%, 64.7%, 0.3);
  }
  to {
    background-color: hsla(0, 0%, 64.7%, 0.1);
  }
}
@keyframes pulse {
  0% {
    background-color: hsla(0, 0%, 64.7%, 0.1);
  }
  50% {
    background-color: hsla(0, 0%, 64.7%, 0.3);
  }
  to {
    background-color: hsla(0, 0%, 64.7%, 0.1);
  }
}
pre[class*="language-"]:after,
pre[class*="language-"]:before {
  display: none !important;
}
pre[class*="language-"] code {
  border-left: 10px solid var(--surface-d) !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  background: var(--surface-e) !important;
  margin: 1em 0;
  color: var(--text-color);
  font-size: 14px;
}
pre[class*="language-"] code .token.attr-name,
pre[class*="language-"] code .token.attr-string,
pre[class*="language-"] code .token.keyword,
pre[class*="language-"] code .token.tag {
  color: #2196f3 !important;
}
pre[class*="language-"] code .token.attr-value {
  color: #4caf50 !important;
}
pre[class*="language-"] code .token.punctuation {
  color: var(--text-color);
}
pre[class*="language-"] code .token.operator,
pre[class*="language-"] code .token.string {
  background: transparent;
}
.p-toast.p-toast-topleft,
.p-toast.p-toast-topright {
  top: 100px;
}
.action-button {
  font-weight: 700;
  text-align: center;
  color: #fff !important;
  background-color: #455c71;
  padding: 10px 24px 9px 24px;
  border-radius: 3px;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}
.action-button:hover {
  background-color: #576c7f;
  color: #fff;
  text-decoration: none !important;
}
.layout-topbar {
  background-color: var(--surface-a);
  padding: 0;
  height: 70px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid var(--surface-d);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 35px;
  margin-left: 250px;
}
.layout-topbar .logo {
  display: none;
}
.layout-topbar .menu-button {
  display: none;
  color: var(--text-color);
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  cursor: pointer;
}
.layout-topbar .menu-button:hover {
  background-color: var(--surface-c);
}
.layout-topbar .menu-button i {
  font-size: 24px;
  line-height: inherit;
}
.layout-topbar .app-theme {
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 0.5rem;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  width: 39px;
  height: 39px;
}
.layout-topbar .app-theme img {
  width: 25px;
}
.layout-topbar .topbar-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  margin-left: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.layout-topbar .topbar-menu > li {
  height: 70px;
  line-height: 70px;
}
.layout-topbar .topbar-menu > li > a {
  text-decoration: none;
  color: var(--text-color);
  min-width: 120px;
  font-size: 16px;
  display: block;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 68px;
  border-bottom: 2px solid transparent;
  -webkit-transition: border-bottom-color 0.2s;
  transition: border-bottom-color 0.2s;
  cursor: pointer;
}
.layout-topbar .topbar-menu > li > a:focus,
.layout-topbar .topbar-menu > li > a:hover {
  border-bottom-color: var(--primary-color);
}
.layout-topbar .topbar-menu > li > a:focus {
  z-index: 1;
  outline: 0 none;
  -webkit-transition: -webkit-box-shadow 0.2s;
  transition: -webkit-box-shadow 0.2s;
  transition: box-shadow 0.2s;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  -webkit-box-shadow: inset 0 0 0 0.2em #bbdefb;
  box-shadow: inset 0 0 0 0.2em #bbdefb;
}
.layout-topbar .topbar-menu > li.topbar-submenu {
  position: relative;
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul {
  position: absolute;
  -webkit-transform-origin: top;
  transform-origin: top;
  top: 70px;
  right: 0;
  z-index: 2;
  width: 275px;
  max-height: 400px;
  background-color: var(--surface-f);
  -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  overflow: auto;
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  border-radius: 3px;
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul > li {
  line-height: 1;
}
.layout-topbar
  .topbar-menu
  > li.topbar-submenu
  > ul
  > li.topbar-submenu-header {
  display: block;
  color: var(--text-color-secondary);
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 1.5rem 0 1rem 0;
  font-size: 0.857rem;
  text-transform: uppercase;
}
.layout-topbar
  .topbar-menu
  > li.topbar-submenu
  > ul
  > li.topbar-submenu-header:first-child {
  padding-top: 1rem;
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul a {
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 3px;
  cursor: pointer;
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul a:hover {
  background-color: var(--surface-c);
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul a span {
  margin-left: 0.5rem;
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul a i {
  font-size: 18px;
  color: var(--text-color-secondary);
}
.layout-topbar .topbar-menu > li.topbar-submenu > ul a img {
  width: 32px;
  margin-right: 0.5rem;
}
.layout-topbar .topbar-menu .theme-badge {
  padding: 2px 4px;
  vertical-align: middle;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  font-size: 11px;
  position: relative;
  top: -1px;
}
.layout-topbar .topbar-menu .theme-badge.material {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#2196f3),
    to(#2196f3)
  );
  background: linear-gradient(180deg, #2196f3, #2196f3);
}
.layout-topbar .topbar-menu .theme-badge.bootstrap {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#563d7c),
    to(#966bd8)
  );
  background: linear-gradient(180deg, #563d7c, #966bd8);
}
.layout-topbar .topbar-menu .theme-badge.darkmode {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#141d26),
    to(#5a6067)
  );
  background: linear-gradient(180deg, #141d26, #5a6067);
}
.layout-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: var(--surface-a);
  width: 250px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99),
    -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.layout-sidebar,
.layout-sidebar .logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.layout-sidebar .logo {
  min-height: 70px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid var(--surface-d);
  z-index: 1;
  border-right: 1px solid var(--surface-d);
}
.layout-sidebar .logo img {
  width: 180px;
}
.layout-sidebar .logo:focus {
  outline: 0 none;
  -webkit-transition: -webkit-box-shadow 0.2s;
  transition: -webkit-box-shadow 0.2s;
  transition: box-shadow 0.2s;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  -webkit-box-shadow: 0 0 0 0.2rem #bbdefb;
  box-shadow: 0 0 0 0.2rem #bbdefb;
}
.layout-sidebar .layout-menu {
  padding: 0 1rem;
  overflow-y: auto;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-right: 1px solid var(--surface-d);
}
.layout-sidebar .layout-menu .menu-category {
  display: block;
  color: var(--text-color-secondary);
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 1.5rem 0 1rem 0;
  font-size: 0.857rem;
  text-transform: uppercase;
  border-top: 1px solid var(--surface-d);
}
.layout-sidebar .layout-menu .menu-category:first-child {
  border-top: 0 none;
  padding-top: 1rem;
}
.layout-sidebar .layout-menu .menu-items {
  padding: 0 0 1rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.layout-sidebar .layout-menu .menu-items a {
  color: var(--text-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
}
.layout-sidebar .layout-menu .menu-items a:hover {
  background-color: var(--surface-c);
}
.layout-sidebar .layout-menu .menu-items a:focus {
  z-index: 1;
  outline: 0 none;
  -webkit-transition: -webkit-box-shadow 0.2s;
  transition: -webkit-box-shadow 0.2s;
  transition: box-shadow 0.2s;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  -webkit-box-shadow: 0 0 0 0.2em #bbdefb;
  box-shadow: 0 0 0 0.2em #bbdefb;
}
.layout-sidebar .layout-menu .menu-items a.router-link-exact-active {
  font-weight: 700;
}
.layout-sidebar .layout-menu .menu-items a .p-tag {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  margin-left: 0.5rem;
}
.layout-sidebar .layout-menu .menu-items.menu-banner a {
  padding: 0;
}
.layout-sidebar .layout-menu .menu-items.menu-banner a:hover {
  background-color: transparent;
}
.layout-sidebar .layout-menu .menu-items.menu-banner a:hover img {
  background-color: var(--surface-c);
}
.layout-sidebar .layout-menu .menu-items.menu-banner a:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.layout-sidebar .layout-menu .menu-items div.router-link-exact-active > a {
  font-weight: 700;
}

/* ADDED */
.layout-content {
  margin-left: 250px;
}
.layout-content .content-section.documentation {
  background-color: var(--surface-b);
  color: var(--text-color);
}
</style>
