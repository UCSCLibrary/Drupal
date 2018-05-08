/* Spencer.js scripts */

jQuery( document ).ready(function() {
	
	//replace sidebar with link for mobile
	/*jQuery( '<h2 class="hours-link"><a href="http://guides.library.ucsc.edu/libraryhours">Today\'s Hours</a></h2>' ).insertBefore( 'body.front #block-multisearch-multisearch' );*/
	
	/*add link to password reset page on /user */
	jQuery( '<p><a href="https://libaccess.library.ucsc.edu/">Reset your password</a></p><p>This password reset will apply to Drupal, Omeka, and Artifacts</p>' ).insertAfter( "body.page-user form#user-login input.form-submit" );
	
	jQuery ( 'body.front #sidebar' ).addClass('hidden');
	jQuery ( 'body.front .navbar' ).addClass('hidden');
	var viewportWidth = jQuery(window).width();
	if (viewportWidth > 767) {
		jQuery( 'body.front #sidebar' ).removeClass('hidden');
		jQuery( 'body.front .navbar' ).removeClass('hidden');
		jQuery ( 'body.front h2.hours-link' ).addClass('hidden');
		jQuery('.view-news').addClass('view-news-767plus');
	}
	
	
	//add classes to body
	jQuery('body').addClass('mobile');
	
	// modify the html of the secondary menu
	
	var menuButton = '<div class="menubutton">Menu</div>';
	jQuery( menuButton  ).insertBefore( '.header-secondary-menu ul.menu' );
	jQuery('.menubutton').click(function (e) {
		e.preventDefault();
    	jQuery('.header-secondary-menu ul.menu').toggle();
	});
	jQuery('.menu-toggle').siblings('.mega-hook').hide();
	jQuery('.research.menu-toggle').click(function () {
    	jQuery('.header-secondary-menu .mega-research').toggle();
	});
	jQuery('.services.menu-toggle').click(function () {
    	jQuery('.header-secondary-menu .mega-services').toggle();
	});
	jQuery('.collections.menu-toggle').click(function () {
    	jQuery('.header-secondary-menu .mega-collections').toggle();
	});
	jQuery('.about.menu-toggle').click(function () {
    	jQuery('.header-secondary-menu .mega-about').toggle();
	});

	if (viewportWidth > 860) {
		
		jQuery('.view-news').addClass('view-news-860plus');
		
		//remove mobile class to body
		jQuery('body').removeClass('mobile');
		jQuery('body').addClass('notmobile');
		
		//modify secondary menu
		jQuery('.header-secondary-menu ul.menu a.mainlink').removeClass('menu-toggle');
		jQuery('div.mega-hook').addClass('mega-menu');
		jQuery('.header-secondary-menu a.research').html('<span>Research</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Tools &amp; Help');
		jQuery('.header-secondary-menu a.services').html('<span>Services</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Borrowing &amp; Spaces');
		jQuery('.header-secondary-menu a.collections').html('<span>Collections</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>&amp; Scholarly Communication');
		jQuery('.header-secondary-menu a.about').html('<span>About</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Visit &amp; Contact');
		
	}
	
	//modify the html of the site search text field
	//jQuery('.header-main-menu .form-type-textfield').html('<input type="text" id="edit-search-block-form--2" name="search_block_form" value="" size="15" maxlength="128" class="form-text" /><img class="search" src="https://library.ucsc.edu/sites/default/files/external/images/header-search.png">');
	
	// toggle the visibility of the site search text field when the spyglass graphic is clicked
	//jQuery ('.header-main-sitesearch form .form-text').addClass('form-hide');
	//jQuery('.header-main-sitesearch form .search').click(function (e) {
		//e.preventDefault();
    	//jQuery('.header-main-sitesearch form .form-text').toggle('fast');
	//});
	
	// collapse the sidebar on mobile
	  jQuery('[data-toggle=offcanvas]').click(function() {
    	jQuery('.row-offcanvas').toggleClass('active');
	  });
	
});


$(window).setBreakpoints({
	distinct: true,
	breakpoints: [
		767,
		860,
		1000,
		1350
	]
});

jQuery(window).bind('enterBreakpoint767',function() {
	jQuery('.view-news').addClass('view-news-767plus');
	
	jQuery( 'body.front #sidebar' ).removeClass('hidden');
	jQuery( 'body.front .navbar' ).removeClass('hidden');
	jQuery ( 'body.front h2.hours-link' ).addClass('hidden');
	
});

jQuery(window).bind('exitBreakpoint767',function() {
	//jQuery('.view-news').removeClass('view-news-767plus');
	jQuery ( 'body.front h2.hours-link' ).removeClass('hidden');
	
});


//changes to secondary menu
jQuery(window).bind('enterBreakpoint860',function() {
	
	jQuery('.view-news').addClass('view-news-860plus');
	
	jQuery( 'body.front #sidebar' ).removeClass('hidden');
	jQuery( 'body.front .navbar' ).removeClass('hidden');
	jQuery ( 'body.front h2.hours-link' ).addClass('hidden');
	
	//remove mobile class from body
		jQuery('body').removeClass('mobile');
	jQuery('body').addClass('notmobile');
	
	//changes to secondary menu
	jQuery('.header-secondary-menu ul.menu a.mainlink').removeClass('menu-toggle');
	jQuery('div.mega-hook').addClass('mega-menu');
	jQuery( '.header-secondary-menu ul' ).show();
	jQuery('.header-secondary-menu a.research').html('<span>Research</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Tools &amp; Help');
		jQuery('.header-secondary-menu a.services').html('<span>Services</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Borrowing &amp; Spaces');
		jQuery('.header-secondary-menu a.collections').html('<span>Collections</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>&amp; Scholarly Communication');
		jQuery('.header-secondary-menu a.about').html('<span>About</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Visit &amp; Contact');
	
});

jQuery(window).bind('enterBreakpoint1000',function() {
	jQuery( 'body.front #sidebar' ).removeClass('hidden');
	jQuery( 'body.front .navbar' ).removeClass('hidden');
	jQuery ( 'body.front h2.hours-link' ).addClass('hidden');
		//remove mobile class from body
		jQuery('body').removeClass('mobile');
	jQuery('body').addClass('notmobile');
	
	//changes to secondary menu
	jQuery('.header-secondary-menu ul.menu a.mainlink').removeClass('menu-toggle');
	jQuery('div.mega-hook').addClass('mega-menu-mid');
	jQuery('div.mega-hook').removeClass('mega-menu-wide');
	jQuery('div.mega-hook').addClass('mega-menu');
	jQuery( '.header-secondary-menu ul' ).show();
	jQuery('.header-secondary-menu a.research').html('<span>Research</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Tools &amp; Help');
		jQuery('.header-secondary-menu a.services').html('<span>Services</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Borrowing &amp; Spaces');
		jQuery('.header-secondary-menu a.collections').html('<span>Collections</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>&amp; Scholarly Communication');
		jQuery('.header-secondary-menu a.about').html('<span>About</span><img src="https://library.ucsc.edu/sites/default/files/external/images/header-menu-arrow.png" alt="navigation arrow"><br>Visit &amp; Contact');
});

jQuery(window).bind('exitBreakpoint1000',function() {
	jQuery('.view-news').addClass('view-news-860plus');
	jQuery('div.mega-hook').removeClass('mega-menu-mid');
	
});
	
jQuery(window).bind('exitBreakpoint860',function() {
	jQuery('.view-news').removeClass('view-news-860plus');
	jQuery('div.mega-hook').removeClass('mega-menu-mid');
	
	//add mobile class to body
	jQuery('body').addClass('mobile');
	jQuery('body').removeClass('notmobile');
	
	//mega menu scripts
	jQuery('.mega-research').hide();
	jQuery('.mega-services').hide();
	jQuery('.mega-collections').hide();
	jQuery('.mega-about').hide();

//changes to secondary menu
	jQuery('.header-secondary-menu ul.menu a.mainlink').addClass('menu-toggle');
	jQuery('div.mega-hook').removeClass('mega-menu');
	jQuery('.header-secondary-menu ul.menu').hide();
	jQuery('.header-secondary-menu a.research').html('Research');
	jQuery('.header-secondary-menu a.services').html('Services');
	jQuery('.header-secondary-menu a.collections').html('Collections');
	jQuery('.header-secondary-menu a.about').html('About');
	
});

jQuery(window).bind('enterBreakpoint1350',function() {
	jQuery('.view-news').addClass('view-news-860plus');
	jQuery('div.mega-hook').removeClass('mega-menu-mid');
	jQuery('div.mega-hook').addClass('mega-menu-wide');
});

jQuery(window).bind('exitBreakpoint1350',function() {
});

jQuery( document ).ready(function() {
	
	
					//mega-menu scripts
	jQuery( "li.research" ).mouseover(function() {
		if ($('body').hasClass('notmobile')) {
			jQuery('.mega-research').show();
		}
	});
	jQuery( "li.services" ).mouseover(function() {
		if ($('body').hasClass('notmobile')) {
			jQuery('.mega-services').show();
		}
	});
	jQuery( "li.collections" ).mouseover(function() {
		if ($('body').hasClass('notmobile')) {
			jQuery('.mega-collections').show();
		}
	});
	jQuery( "li.about" ).mouseover(function() {
		if ($('body').hasClass('notmobile')) {
			jQuery('.mega-about').show();
		}
	});
	
});

$(window).bind("load", function () {
	$('.research-tools .databases-dropdown select.form-control').SumoSelect({search: true, searchText: 'Start typing a database name…'})
	$('.research-tools .guides-dropdown select.form-control').SumoSelect({search: true, searchText: 'Start typing a topic…'})
});