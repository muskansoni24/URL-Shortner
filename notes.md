# URL SHORTENER

Design a url shortener that takes a valid URL and returns a shorten URL
and redirects the user to the original URL

Also, keep track of total visits/clicks on the URL

Routes

POST/URL : Generates a new short URL and returns the
           shortened URL in the format example.com/random-id

GET/:id  : Redirects the user to the original URL

GET/URL/analytics/:id : Returns the clicks for the provided short id

