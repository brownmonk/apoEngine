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

4)






