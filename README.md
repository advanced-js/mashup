# Mashup project

This project is open-ended! Requirements:

* Build a site that uses data from at least one external API in an interesting, interactive way.
* Replace this README with a description of the project.
* You are welcome to use any 3rd-party libraries/frameworks – just load them from a CDN (e.g. [cdnjs](http://cdnjs.com)), or put them under the [`vendor/`](vendor/) folder.

The JS code should be **non-trivial**. That being said... start simple! (Just get the data to show up on the page.) No server-side coding is required, but feel free to create a backend in whatever language if you like, if you need one.

* [AJAX demos](https://github.com/advanced-js/deck/tree/gh-pages/demos/ajax)
* [inspiration?](http://www.programmableweb.com/mashups)

## Finding an API

A couple things to look for in an API (or at least the endpoints you're using) for this project:

* Make sure it doesn't require authentication (e.g. [OAuth](http://oauth.net/)).
    * You need a server to do this.
* If the API doesn't support cross-domain requests (JSONP or CORS), you will need to use [JSONProxy](https://jsonp.afeld.me/).

Here is a [list of API suggestions](https://gist.github.com/afeld/4952991).

## V1

First pass.

## V2

Iterate!

* Refactor
* Add a new feature

## Bonus points

* automated tests
    * [Sinon.js fakeServer](http://sinonjs.org/docs/#fakeServer) may be helpful
* fancy interactivity/animations
