# air
### **Task**

Write an HTTP service which concatenates two video files into one. The service should write the resulting video file to a configurable destination (this can be local or remote). 

As a user, I should be able to:

- Send an HTTP request to the service with paths to two publicly accessible input MP4 files
- Receive a link to the outputted MP4 file once the job has completed

For the purposes of this assignment, don’t worry about handling concurrent requests or robust error handling. No UI is required — a server-side implementation is all that's expected (but see [extensions](https://www.notion.so/aircamera/Coding-challenge-0cf23a80a7324a8daf2e8ee12c9ff6ad#813d278388c146deb69ce92e9228a66e) below for more info).

You can use any languages, packages, frameworks, and libraries you’d like to complete the assignment. Please cite any code you copy from other sources, like StackOverflow or Github.


### What You Need

Fluent Ffmpeg - npm install fluent-ffmpeg
Ffmpeg Contat fmpeg-concat 

let url1 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
let url2 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
