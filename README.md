API Project: URL Shortener Microservice

User Story:
User can POST a URL to [project_url]/api/shorturl/new and he/she will receive a shortened URL in the JSON response.

Example : {"original_url":"www.google.com","short_url":1}

If user pass an invalid URL that doesn't follow the www.example.com(/more/routes) format, the JSON response will contain an error like {"error":"invalid URL"}

When user visit the shortened URL, it will redirect me to my original link.
        
Short URL Creation : 
example: POST [project_url]/api/shorturl/new-www.google.com

Example Usage:
        [this_project_url]/api/shorturl/{generatedurl}

Will Redirect to: Your original URL