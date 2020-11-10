# AsianCuisine
Individual Demonstration


> What is meant by Custom HTML Element ?

Custom HTML Element means defining our own element.

> How can we define our own element ?

We need to use customElements.define() to register our component,

so the browser can understand and render HTML Element

customElements.define() has three argument 

1.Name of the Component

2.our Component (i.e Class)

3.An optional object if we are trying to extend another HTML tag.

> Life Cycle hooks for Custom HTML Element :

Constructor() 

connectedCallback()

disconnectedCallback()

attributeChangedCallback(name,oldValue,newValue)

adoptedCallback()



## Contributor :

<img src="vasu.png" alt="drawing" width="150" style="border-radius:50%" />

[Sri Vasavi Vipparla](https://github.com/Srivasavi-vipparla)  
  



> References

* [Information about life cycle hooks](https://ultimatecourses.com/blog/lifecycle-hooks-in-web-components) 

* [Example](https://medium.com/recraftrelic/what-are-html-custom-elements-c6ffea9c4244) 

* [creating-a-custom-element-from-scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/)

* [Fundamentals for Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements)

* [WebComponents](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)

