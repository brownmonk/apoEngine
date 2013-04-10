bandstock
=========

Bandstock Private repo



angular-phonecat is the official Angular tutorial. You can get it

 node --version  // >= v.08
 npm install -g testacular
 git clone git://github.com/angular/angular-phonecat.git



Things I've Learned to do in AngularJS (And other shit)


1)  LOOPING - Make a list of things based on a data source.

    This is accomplished by adding this code to index.html:

        <body ng-controller="PhoneListCtrl">
            <li ng-repeat="phone in phones">
                {{phone.name}}
                <p>
                    {{phone.snippet}}
                </p>
            </li>
        </body>

        This loops over phones[] and the binding syntax {{ }} lets the model link to the view, and the view modifies the DOM.
        Each element in phones results in an <li> being added to the dom, with the appropriate text in each. Not 100% on if this is
        done pre or post render.  I know there are other techniques within Angular if you start to get data flicker.

2) SCOPING - Create a scope and add an array to it

    'phones', an array, is accessible because it is in the 'PhoneListCtrl' scope.

    'PhoneListCtrl' scope is defined in app/js/controllers.js like this:

        function PhoneListCtrl($scope) {
          $scope.phones = [
            {"name": "Nexus S",
             "snippet": "Fast just got faster with Nexus S."},
            {"name": "Motorola XOOM™ with Wi-Fi",
             "snippet": "The Next, Next Generation tablet."},
            {"name": "MOTOROLA XOOM™",
             "snippet": "The Next, Next Generation tablet."}
          ];
        }


3) OBJECT CONTROL (theoretical) - how to maintain object integrity

    Angular has something called 2 way data binding.  The model, as defined in the controller, is bound to the view.
    So if a change happens on the model, the view is updated as well, which results in a change to the DOM (document object model).

    If the view is updated, the DOM is changed, but so is the model.  My question is, can changes to the DOM change the view?
    If so, this creates a situation where objects could conceivably be modified in the browser in unintended ways and
    the client's copy of the object would be changed.

    This is always a concern in browser security, and it is typically handled by having the server check incoming objects
    and ensure that the authenticated user has permission to perform such a transaction.

    One way to accomplish this is to have the server hash any outgoing objects so that objects can be marked 'dirty'.
    Noticing a dirty object is a useful.  By putting the object inside a wrapper when it arrives from the client, which
    can be labeled with metadata, such as the object's database id, object type, dirty flag, creation time, expiration time,
    trips taken, optional change history linking we are able to persist our objects and track them elegantly without compromising object
    integrity on the round trip. A changed object is taken to a queue where the change is investigated (who wants to change it,
    who has permission to do this, does anybody else need to agree for this transaction to happen.

    Just rambling ideas for now.  Does seem necessary?   Seems a system like this could provide a lot of value.

4) TEMPLATE DOCS - # angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains AngularJS libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball), start up
our (or yours) webserver and you are ready to develop and test your application.

The seed app doesn't do much, just shows how to wire two controllers and views together. You can
check it out by opening app/index.html in your browser (might not work file `file://` scheme in
certain browsers, see note below).

_Note: While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend hosting the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`._


## How to use angular-seed

Clone the angular-seed repository and start hacking...


### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


### Running the app in production

This really depends on how complex is your app and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere, where they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and a webserver(s).


### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Testacular](http://vojtajina.github.com/testacular/) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Testacular (`sudo npm install -g testacular`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Testacular server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/testacular.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Testacular](vojtajina.github.com/testacular) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`

### Continuous Integration

CloudBees have provided a CI/deployment setup:

<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/CloudBees-community/angular-js-clickstart/master/clickstart.json"><img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>

If you run this, you will get a cloned version of this repo to start working on in a private git repo, 
along with a CI service (in Jenkins) hosted that will run unit and end to end tests in both Firefox and Chrome.

### Receiving updates from upstream

When we upgrade angular-seed's repo with newer angular or testing library code, you can just
fetch the changes and merge them into your project with git.


## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/testacular.conf.js        --> config file for running unit tests with Testacular
    config/testacular-e2e.conf.js    --> config file for running e2e tests with Testacular

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Testacular (*nix)
      e2e-test.bat      --> runs end-to-end tests with Testacular (windows)
      test.bat          --> autotests unit tests with Testacular (windows)
      test.sh           --> autotests unit tests with Testacular (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/
