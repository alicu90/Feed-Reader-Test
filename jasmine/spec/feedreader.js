/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('name and not empty', function() {
            allFeeds.forEach(function(feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });
    });

    // A new test named The menu
        describe('The menu', function(){
            it('should hide the menu', function () {
                expect($('body').hasClass('menu-hiden')).toBe(true);
            });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

            it('should show the menu on click', function() {
                $('a.menu-icon-link').trigger('click'); // show menu
                expect($('body').hasClass('menu-hidden')).toBe(false);
                $('a.menu-icon-link').trigger('click'); // hide menu
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    // A new test named Initial Entries

        describe('Initial Entries', function() {
            // run before testing
            beforeEach(function(done) {
                loadFeed(0, done);
            });

            it('should loadFeed and render the entry and feed', function(){
                expect($('.feed .entry').length).toBeGreaterThan(0);
            });
        });

        // A new test named New Feed Selection
        describe('New Feed Selection', function(){
            var testfeed;

            // when a new feed is loaded

            beforeEach(function(done) {
                loadFeed(0, function(){
                    testfeed = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            // Check the html to not be the same as previous
            it('should load new feed', function(){
                expect($('.feed').html()).not.toEqual(testfeed);
            });
        });
}());
