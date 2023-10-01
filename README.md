# urlShortner service
This is a url shortner service which intakes a url of a website and returns a shortened URL.
If a user visits the short URL, the service redirects the user to the originally provided URL.

The service also records the site visits done by a user.

# Architechture:
1. MongoDB to store the urls and analytics
2. Express for develop Routes

# Routes:
1. /url
Method: POST
Description: Generates a new short URL and returns the shortend URL

2. /:id
Method: GET
Description: Redirects the user to the original url

3. /analytics/:id
Method: GET
Description: Fetches the traffic data on a particular website