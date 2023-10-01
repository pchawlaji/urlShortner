# urlShortner
This is a url shortner service which intakes a url of a website and returns a shortened URL.
If a user visits the short URL, the service redirects the user to the originally provided URL.

The service also records the site visits done by a user.

#Architechture:
1. MongoDB to store the urls and analytics
2. Express for develop Routes
