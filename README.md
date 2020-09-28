# BranasAngularJs

FirstCommit:

The AngularJS application is defined by  ng-app="listaTelefonica". Create a "listaTelefonica" Module"
Register a "listaTelefonicaCtrl" and passing a function that receive by Dependency Injection $Scope, and
create some propoerties.

obs: Na Controler não se deve ler do scope diretamente.

ng-model: With the ng-model directive you can bind the value of an input field to a variable created in AngularJS.

ng-controller: AngularJS applications are controlled by controllers. The ng-controller directive defines the application controller.
A controller is a JavaScript Object, created by a standard JavaScript object constructor.

SecondCommit:

ng-style= The ngStyle directive allows you to set CSS style on an HTML element conditionally.

ng-options: The ngOptions attribute can be used to dynamically generate a list of <option> elements for the <select> element using the array or object obtained by evaluating the ngOptions comprehension expression.

ng-click: The ngClick directive allows you to specify custom behavior when an element is clicked.

ng-disabled: This directive sets the disabled attribute on the element (typically a form control, e.g. input, button, select etc.) if the expression inside ngDisabled evaluates to truthy.

ng-if: The ngIf directive removes or recreates a portion of the DOM tree based on an {expression}. If the expression assigned to ngIf evaluates to a false value then the element is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.

ng-class: The ngClass directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

TirthCommit:

$setPristine();
Sets the control to its pristine state. This method can be called to remove the ng-dirty class and set the control to its pristine state (ng-pristine class). A model is considered to be pristine when the control has not been changed from when first compiled. 

ng-pristine: The field has not been modified yet.

ng-dirty: The field has been modified.

FormController: keeps track of all its controls and nested forms as well as the state of them, such as being valid/invalid or dirty/pristine. Each form directive creates an instance of FormController.
$error(from FormController): Object: An object hash, containing references to controls or forms with failing validators, where:

