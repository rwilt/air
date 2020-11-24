
### How to Use

This app requires a few tools:
<ul>
<li>Express - npm install express</li>
<li>bodyParser - npm install bodyParser</li>
<li>Ffmpeg - npm install ffmpeg</li>
<li>Ffmpeg-fluent - npm install ffmpeg-fluent</li>
<li>Node-Ffprobe -  npm install node-ffprob</li>
</ul>

1. Fork & Clone this repo 
2. CD into the directory ('Air)
3. Run 'npm install'
4. Run 'node index.js' and 'open form.html'
5. Input your files to concatenate. Note: Ffmpeg can handle more than 3 files, but I was (very) short on time.
6. When you submit, the process will begin and your completed file will appear as finalVid.mp4 in the directory.

### Notes From A Junior Programmer

First - thank you so much for the opportunity to work on this problem. It was engaging, fun, challenging as heck and I hope it's okay to say, but I'm proud of how far I got with this challenge, although I freely admit to some shortcomings. 

The first is that ffmpeg does not accept URLs of videos to concatenate, only local paths. Had I more time, I would have worked on having the urls saved and turned into local files. Instead, I went with giving them to you in this repo so you will unfortunately have to copy the local paths into the form to use them. They will be ForBiggerMeltdowns.mp4 and ForBiggerJoyrides.mp4. 

Should you need the original URLs - they are below: 
http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4
http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4


### Credit
<h2>(Also commented in the code where needed)</h2>

https://trac.ffmpeg.org/wiki/Concatenate
https://stackabuse.com/executing-shell-commands-with-node-js/
https://superuser.com/questions/1059245/ffmpeg-join-two-mp4-files-with-ffmpeg-on-command-line
https://stackoverflow.com/questions/52675257/how-to-send-data-from-html-to-node-js/52675577
