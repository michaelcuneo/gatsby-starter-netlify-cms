/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title ' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title , .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title , .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );
// basic setting
	//footer text
	wp.customize( 'eight_sec_footer_setting_footer_copyright_text', function( value ) {
		value.bind( function( to ) {
			$( 'footer .site-info .copyright span:first-child' ).text( to );
		} );
	} );

// homepage setting
	//about section

	wp.customize( 'eight_sec_homepage_setting_about_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_about_section' ).text( to );
		} );
	} );	

	//portfolio section	
	wp.customize( 'eight_sec_homepage_setting_portfolio_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_portfolio_section' ).text( to );
		} );
	} );

	wp.customize( 'eight_sec_homepage_setting_portfolio_section_viewall', function( value ) {
		value.bind( function( to ) {
			$( '.portfolio-viewall.bttn' ).text( to );
		} );
	} );

	//blog section	
	
	wp.customize( 'eight_sec_homepage_setting_blog_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_blog_section' ).text( to );
		} );
	} );

	wp.customize( 'eight_sec_homepage_setting_blog_section_viewall', function( value ) {
		value.bind( function( to ) {
			$( '.blog-viewall.bttn' ).text( to );
		} );
	} );
	

	//cta section		
	wp.customize( 'eight_sec_homepage_setting_cta_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_cta_section' ).text( to );
		} );
	} );

	wp.customize( 'eight_sec_homepage_setting_cta_section_button_text', function( value ) {
		value.bind( function( to ) {
			$( '.bttn.cta-readmore' ).text( to );
		} );
	} );

	//team section	
	wp.customize( 'eight_sec_homepage_setting_team_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_team_section' ).text( to );
		} );
	} );

	wp.customize( 'eight_sec_homepage_setting_team_section_viewall', function( value ) {
		value.bind( function( to ) {
			$( '.team-viewall.bttn' ).text( to );
		} );
	} );

	

	//testimonial section			
	wp.customize( 'eight_sec_homepage_setting_testimonial_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_testimonial_section' ).text( to );
		} );
	} );

	

	//contact section	
	wp.customize( 'eight_sec_homepage_setting_contact_section_menu_title_text', function( value ) {
		value.bind( function( to ) {
			$( '.menu_contact_section' ).text( to )
		} );
	} );

	//header setting
	wp.customize( 'eight_sec_header_setting_search_placeholder', function( value ) {
		value.bind( function( to ) {
			$( '.ed-search-wrap .search-field' ).attr('placeholder',to);
		} );
	} );
	wp.customize( 'eight_sec_header_setting_search_button_text', function( value ) {
			value.bind( function( to ) {
				$( '.ed-search-wrap .search-submit' ).val( to )
			} );
		} );
	
	
} )( jQuery );
