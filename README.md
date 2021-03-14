# Angular elements

## Attribute directives

* Modify <b>appeareance</b> and <b>behavior</b> of another directive, an element or a component.

<i> Directly added at the HTML Tag</i>


## Structural directives

* Modify page's structure  by <b>adding</b> and  <b>removing</b> elements from DOM.

*<i> Directly added at the HTML Tag with * character before</i>*

## Property binding

* In a HTML element of Directive, the [target property] - which is a DOM property - will search for the value received in a declared class. 

<i> Demands the use of [] character </i>

HTML tag:
```
<img [src]="itemImageUrl">
```
Part of the component referred: 
```
itemImageUrl = '../assets/phone.png';
```

## Event binding

* A (target event) listen user's actions and search for a template statement with the response. 

<i> Demands the use of ( ) character </i>
```
<button (click)="onSave()">Save</button>
```

## One-way data binding

* The data changed at the component automatically changes the html, but the inverse does not occur.

## Two-way data binding

* The data changes bidirectionally, from the component and vice versa.

<i>Demands the use of [(ngModel)]</i>

```
<input [(ngModel)] ="name">
```


## Router

* At the mapping between the route itself and the component there is the router outlet. After the user click to be redirected to another page, the routes list is verified, the router outlet receives the component and then redirection occurs.

## Pipes

* The data inside the interpolation {{ }} is interpretaded and returned with a <b>transformed value</b>.

<i> It can receive a singl parameter or in chain</i>

```
<p>
    {{ product.price | currency: 'BRL' }}
</p>
```