# Scroll-reactive Directive
Directive for make elements to response to body scroll event using ngMaterial over Angular5.

## Requirements
First you need to use the [CDK ScrollDispatcherModule of Angular Material](https://material.angular.io/cdk/scrolling/apicrollDispatcher)

## Usage
```<div scrollReactive="bottom" speed="0.3"><div>```
The declaration attribute references the property to being modified during the scroll event. This property will be increased on scroll to bottom and decreased on scroll to top movements.

The **optional** speed attributes defines the speed during the scroll (default to 20% of scroll speed)

## Example
*Plunker example is comming*
