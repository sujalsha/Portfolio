import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sujal",
    lastName: "Sharma",
    initials: "ss", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the INDIA'
        },
        {
            emoji: "💼",
            text: "Student at Christ University Bangalore"
        },
        {
            emoji: "📧",
            text: "sujals.node@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://instagram.com/_sujal.s",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/sujalsha",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/sujal-sharma-720a29220/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.leetcode.com/sujals",
            icon: "fa fa-leetcode",
            label: 'leetcode'
        }
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello I'm Sujal currently persuing my B-Tech in Computer Science and Engineering. I love to learn more and develop new software. I have a keen intrest in Web Development, Artificial Intellegence and Competetive programming. I like to solve problem with the help of computer and techonology. I'm open for web developer roles. You can hire me! ",
    skills:
        {
            proficientWith: ['javascript', 'Python', 'C', 'C++', 'Java', 'HTML', 'CSS', 'MySQL', ''],
            exposedTo: ['nodejs', 'ReactJS', 'Linux', 'MongoDB', 'PHP']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cricket',
            emoji: '🏏'
        },
        {
            label: 'Astronomy',
            emoji: '🌌'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Weather Application",
            live: "sujalsha.github.io/Weather-App/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/sujalsha/Weather-App.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Live Video background Changing using Python",
            live: "https://github.com/sujalsha/video_backgroung_change.git",
            source: "https://github.com/sujalsha/video_backgroung_change.git",
            image: mock2
        },
        {
            title: "Personal Portfolio",
            live: "sujalsha.github.io/Portfolio/",
            source: "https://github.com/sujalsha/Portfolio.git",
            image: mock3
        },
    
    ]
}