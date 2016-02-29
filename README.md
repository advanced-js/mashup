# Mashup project

This project is open-ended! Requirements:

* Build a site that uses data from at least one external API in an interesting, interactive way.
* Replace this README with a description of the project.
* You are welcome to use any 3rd-party libraries/frameworks – just load them from a CDN (e.g. [cdnjs](http://cdnjs.com)), or put them under the [`vendor/`](vendor/) folder.
* **Do not commit the `client_secret` (or anything else from an API that says "token" or "secret")**, as a hacker could use this to make requests on behalf of you.

The JS code should be **non-trivial**. That being said... start simple! (Just get the data to show up on the page.) No server-side coding is required, but feel free to create a backend in whatever language if you like, if you need one.

* [AJAX demos](https://github.com/advanced-js/deck/tree/gh-pages/demos/ajax)
* [inspiration?](http://www.programmableweb.com/mashups)

## Finding an API

A couple things to look for in an API (or at least the endpoints you're using) for this project:

* Make sure it doesn't require authentication/authorization (e.g. [OAuth](http://oauth.net/)) - at least for the endpoints that you want to use - so that you don't need a server.
* If the API doesn't support cross-domain requests (JSONP or CORS), you will need to use [JSONProxy](https://jsonp.afeld.me/).

Here is a [list of API suggestions](https://gist.github.com/afeld/4952991).

## V1

Get the data to show up on the page.

## V2

First pass. Get your main feature working in the simplest way possible.

## V3

Iterate!

* Refactor
* Add a new feature

## Bonus points

* build in an object-oriented way
* automated tests
    * [Sinon.js fakeServer](http://sinonjs.org/docs/#fakeServer) may be helpful
* fancy interactivity/animations
