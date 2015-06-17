# GA-Custom-JavaScript

There are four distinct levels of aggregation that are not exposed via the API, even though I think they should:

Hit timestamp – You can’t query for the exact timestamp of a Google Analytics hit via the API. You can’t get it in your custom reports, either. However, this might be very meaningful information, especially if you want to verify data integrity

Session ID – Hits are grouped together into sessions. However, using the API alone, you will not be able to easily identify if two distinct hits belong to the same session

Client ID – Sessions are bunched under a Client ID. Every instance of the _ga cookie gets a unique Client ID, which is how the Google Analytics backend knows that the same “User” has visited the site multiple times. This Client ID is not exposed in any dimension you can query via the API
