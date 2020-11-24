
### How to Use

This app requires a few tools:
<ul>
<li>Express - npm install express</li>
<li>bodyParser - npm install bodyParser</li>
<li>Ffmpeg - npm install ffmpeg</li>
<li>Ffmpeg-fluent - npm install ffmpeg-fluent</li>
<li>Node-Ffprobe -  npm install node-ffprob</li>
</ul>

### Install 

1. Fork & Clone this repo 
2. CD into the directory ('Air')
3. Run 'npm install'
4. Run 'node index.js' and 'open form.html'
5. Input your files to concatenate. Note: Ffmpeg can handle more than 3 files, but I was (very) short on time.
6. When you submit, the process will begin and your completed file will appear as finalVid.mp4 in the directory.
7. Enjoy your amazingly stitched together video! 

### Notes From A Junior Programmer

First - thank you so much for the opportunity to work on this problem. It was engaging, fun, challenging as heck and I hope it's okay to say, but I'm proud of how far I got with this challenge, although I freely admit to some shortcomings. 

Before I talk about them - a little bit about my choices. I went with a Node backend because I felt like it was easier/quicker to get started with vs Rails. And I didn't need anything complex, just a server to receive my requests from. I used a dead simple HTML form with some inline CSS for the (basic)styling and to allow the user to input their files. I used Ffmpeg for video concatenation. It was the most widely used and had plenty of resources for me to work with! 

To actually implement the video concatenation, I decided to execute the code via shell commands using a node feature (child_process), because the examples in the ffmpeg docs were not working as expected. After many trials and errors, I decided the best way was to utilize the shell commands they gave as another option. Ffmpeg works with a .txt file, containing the filenames of the videos you want to concat. So, my functions take in the filenames, create that text file and add to it, and then concat the videos. 

Okay - onto the shortcomings. The first is that ffmpeg does not accept URLs of videos to concatenate, only local paths. Had I more time, I would have worked on having the urls saved and turned into local files. Instead, I went with giving them to you in this repo so you will unfortunately have to copy the local paths into the form to use them. They will be ForBiggerMeltdowns.mp4 and ForBiggerJoyrides.mp4. 

Should you need the original URLs - they are below: 
<ul>
<li>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4</li>
<li>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4</li>
</ul>

The second is that my frontend UI is not the most visually stimulating thing. I decided to make it silly and 90's like due to time constraints. If I had more time, I would have liked to make it prettier (like the Air site), or even lean in more to the 90's ness of it.  


### Credit
What do the people at StackOverflow do when they need help? :) Many thanks to the wonderful programmers out there who wrote these helpful docs and articles to help me get to the finish line. 

https://trac.ffmpeg.org/wiki/Concatenate
https://stackabuse.com/executing-shell-commands-with-node-js/
https://superuser.com/questions/1059245/ffmpeg-join-two-mp4-files-with-ffmpeg-on-command-line
https://stackoverflow.com/questions/52675257/how-to-send-data-from-html-to-node-js/52675577
