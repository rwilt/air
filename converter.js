const ffmpeg = require('fluent-ffmpeg');
const ffmpeg2 = require('ffmpeg');
const ffprobe = require('ffprobe');
const probe = require('node-ffprobe');
const { create } = require('domain');

//these are just the live URLs - we don't need them in the code, but here they are if you need to see them! 
let url1 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
let url2 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'

//our function executes a shell command to create our text file. using the files we passed in.
function createFileDoc(file1,file2, file3){
    const { exec } = require("child_process");

    exec(`touch files.txt && echo file ${file1} >> files.txt && echo file ''${file2}'' >> files.txt && echo file ''${file3}'' >> files.txt` , (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        // console.log(`stdout: ${stdout}`);
        // console.log(`Your file - finalVid.mp4 is now available in this directory and will now open. Enjoy!`)
    });
    
    
    }

//our converter function uses that text file to give us our video. This video appears in our directory once complete.
function convert() {
const { exec } = require("child_process");

exec("ffmpeg -f concat -i files.txt -c copy finalVid.mp4", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    // console.log(`stdout: ${stdout}`);
    // console.log(`Your file - finalVid.mp4 is now available in this directory and will now open. Enjoy!`)
});


}


module.exports = {
convert,
createFileDoc
}