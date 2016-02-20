# proj6-Gcal
Snarf appointment data from a selection of a user's Google calendars and display the busy times during the given window

## Author

Megan McMillan

### Location on ix

http://ix.cs.uoregon.edu/~mcmillan/htbin/cis399/proj5-mongo/

## Get your google key

You'll need a 'client secret' file of your own called '.goog_app_key.json'. Obtain a developer key from Google, see
https://auth0.com/docs/connections/social/google and
https://developers.google.com/identity/protocols/OAuth2 .
The applicable scenario for us is 'Web server applications' (since
we're doing this in Flask).  

Your client secret will have to be registered for the URLs used for
the oauth2 'callback' in the authorization protocol.  This URL includes
the port on which your application is running, so you you will need to
use the same port each time you run your application.  I suggest you
generate one random port in the range 5000-8000 and stick with it for the
remainder of the term (unless someone else randomly draws the same port).


## Setup

* Download the repository
* (Optional): Modify the pyenv version to 3.4 or 3.5 based on the compatible version in your environment
* Run ```make install```
* Copy CONFIG.base.py to CONFIG.py and configure it to your current setup and Google license key
* Run ```. env/bin/activate```
* Compile the dependencies ```make all```
* Run the program: ```python3 main.py```
* Navigate to 'localhost:5000' (or the specific host:port address you are using) in the browser
