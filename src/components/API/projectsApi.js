import favorite from '../../assets/projects/favorite.png';
import newL from '../../assets/projects/new.png';
import recent from '../../assets/projects/recent.png';

import cover1 from '../../assets/projects/flackyChat.png';
import cover2 from '../../assets/projects/weather.png';
import cover3 from '../../assets/projects/netflix.png';
import cover4 from '../../assets/projects/facebook.png';
import cover5 from '../../assets/projects/twitter.png';
import cover6 from '../../assets/projects/mail.png';
import cover7 from '../../assets/projects/blogger-gram.png';
import cover8 from '../../assets/projects/book-review.png';
import cover9 from '../../assets/projects/trading.png';
import cover10 from '../../assets/projects/future-world.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PreviewIcon from '@mui/icons-material/Preview';

const flackyChatContent = (
  <>
    <strong>React</strong> Real-Time Chat App connected with firebase database.
    Sign in through your google account and start messaging! You can also add
    different rooms to chat andchange <strong>Themes</strong>!
  </>
);
const weatherContent = (
  <>
    <strong>Vue.js weather application</strong>. Uses open source API's from{' '}
    <a href='https://openweathermap.org/'>https://openweathermap.org/</a> to
    fetch the current weather & forecast for 5 days ahead. Front End side such
    us all animations, transitions and displaying the data was build in Vue.js
  </>
);
const netflixContent = (
  <>
    <strong>React app</strong> Netflix home page front end clone.{' '}
    <strong>TMBD API</strong> used to fetch netflix movies. Movie trailer is
    used for automatic searching movies trailers and fetching is succeeded from
    YouTube.
  </>
);
const facebookContent = (
  <>
    <strong>Django application</strong> also Facebook clone, this website will
    allow you to <strong>Login</strong> /<strong>Register</strong> as a user.
    <strong>Post</strong> /<strong>Like</strong> / <strong>UnLike</strong> /
    <strong>Comment</strong> / <strong>Edit</strong> /<strong>Delete</strong>{' '}
    Posts.
    <strong>See friends online.</strong>
    <strong>Edit</strong> Cover Photo / Profile Photo / Public Information.{' '}
    <strong>Sending</strong> Friend Requests /<strong>Canceling</strong> Friend
    Requests /<strong>Deleting</strong> existing friend and
    <strong>many other things!</strong>
  </>
);
const twitterContent = (
  <>
    Twitter like network with Python Dango allows you to Register your
    mailbox(user@example.com) and select an avatar. User can post posts on the
    main page, follow users and like posts. Also user can only view following
    posts as well as open the profile of any other user and see thi user's posts
  </>
);
const mailContent = (
  <>
    The mail app built with <strong>Python Dango</strong> allows you to Register
    your mailbox(user@example.com) and send out emails to other email adresses
    in the system. The app does not send emails out of its own{' '}
    <strong>database</strong>. Features as Send/Read/Archive/Compose and Reply
    are available to use
  </>
);
const bloggerContent = (
  <>
    A small one page instagram clone, allowing user to register and login. Using
    <strong>SQLite database</strong>
    to store comments likes and user detalis such as nickname and password.
    Features available: you can scroll down the images,{' '}
    <strong>like them and leave comments</strong>
  </>
);
const bookContent = (
  <>
    One of my favorite apps. A gentle copy of goodreads.com. Allows user to
    register login and review one of the 5000 books in our collection. Using the{' '}
    <strong>API</strong> from goodreads to display the reviewing book's
    credentials, once user leaves a star and posts a review, a
    <strong>new API</strong> now of our website is now generated for future
    access
  </>
);
const tradingContent = (
  <>
    <strong>Trading app</strong>, allows user to Sign in/Register and buy or
    sell stocks with not real money (delault when registered: $10000). Using the
    <strong>API</strong> to get the
    <strong>real-time data</strong>
    about current stocks. Features available: Quote for a stock price / Buy
    shares of any stock available / Sell one of multiple stocks and shares /
    History to keep a track on your buys and sells / And the main page to track
    your current
    <strong>stock prices</strong>
  </>
);
const futureContent = (
  <>
    <strong>A Vue app</strong>. Main purpose of this app is to tell about one of
    the world problems, the global warming and suggest some solutions for it
    such as switching gasoline cars to electric or hybrid. Created json file for
    future API requests for Electric Cars & Hybrid Cars links.
    <strong>The API</strong> is being use to get data for
    Price/Title/Image/Youtube Review link and more
  </>
);

export const api = [
  {
    labelClass: 'favorite_project',
    label: favorite,
    name: 'FlackyChat',
    desc: 'React + Firebase',
    img: cover1,
    languages: [
      { name: 'scss', width: '58.2%', summary: 'SCSS 58.2%' },
      { name: 'js', width: '35.3%', summary: 'JavaScript 35.3%' },
      { name: 'html', width: '5.4%', summary: 'HTML 5.4%' },
      { name: 'css', width: '1.1%', summary: 'CSS 1.1%' },
    ],
    content: flackyChatContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/flacky-chat',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'Website',
        url: 'https://flacky-chat.netlify.app/',
        icon: <PreviewIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/watch?v=Q8chuGwnHvk&t=18s',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    labelClass: 'new_project',
    label: newL,
    name: 'Vue Weather',
    desc: 'Vue.js',
    img: cover2,
    languages: [
      { name: 'vue', width: '92.1%', summary: 'Vue.js 92.1%' },
      { name: 'html', width: '6.1%', summary: 'HTML 6.1%' },
      { name: 'js', width: '1.8%', summary: 'JavaScript 1.8%' },
    ],
    content: weatherContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/weather',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'Website',
        url: 'https://ymmy-weather.netlify.app/',
        icon: <PreviewIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/Ll_VLD3JJnM',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    labelClass: 'recent_project',
    label: recent,
    name: 'React Netflix',
    desc: 'React',
    img: cover3,
    languages: [
      { name: 'js', width: '65.1%', summary: 'JavaScript 65.1%' },
      { name: 'css', width: '19.7%', summary: 'CSS 19.7%' },
      { name: 'html', width: '15.2%', summary: 'HTML 15.2%' },
    ],
    content: netflixContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/netflix-clone',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'Website',
        url: 'https://netflix-ymmy-clone.web.app/',
        icon: <PreviewIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/f7AdwJH-IWs',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'Facebook Clone',
    desc: 'Django',
    img: cover4,
    languages: [
      { name: 'html', width: '44.5%', summary: 'HTML 44.5%' },
      { name: 'scss', width: '30.2%', summary: 'SCSS 30.2%' },
      { name: 'py', width: '18.6%', summary: 'Python 18.6%' },
      { name: 'js', width: '6.7%', summary: 'JavaScript 6.7%' },
    ],
    content: facebookContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/facebook',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/YUxv7zD3H3M',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'Twitter-Like Django App',
    desc: 'Django',
    img: cover5,
    languages: [
      { name: 'py', width: '41.1%', summary: 'Python 41.1%' },
      { name: 'html', width: '40.9%', summary: 'HTML 40.9%' },
      { name: 'css', width: '12%', summary: 'CSS 12.0%' },
      { name: 'js', width: '6%', summary: 'JavaScript 6.0%' },
    ],
    content: twitterContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/network',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/s70A5L4SdbU',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'Django Mail App',
    desc: 'Django',
    img: cover6,
    languages: [
      { name: 'py', width: '32.5%', summary: 'Python 32.5%' },
      { name: 'js', width: '30.1%', summary: 'JavaScript 30.1%' },
      { name: 'css', width: '28.3%', summary: 'CSS 28.3%' },
      { name: 'html', width: '9.1%', summary: 'HTML 9.1%' },
    ],
    content: mailContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/mail',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/watch?v=tqNhI5HGPsk',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'BloggerGram',
    desc: 'SQLite',
    img: cover7,
    languages: [
      { name: 'html', width: '59.8%', summary: 'HTML 59.8%' },
      { name: 'py', width: '29.7%', summary: 'Python 29.7%' },
      { name: 'css', width: '24.7%', summary: 'CSS 10.5%' },
    ],
    content: bloggerContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/BloggerGram',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/ErZqklvnL-I',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'Book Review',
    desc: 'PostgreSQL',
    img: cover8,
    languages: [
      { name: 'py', width: '42.5%', summary: 'Python 42.5%' },
      { name: 'html', width: '34.3%', summary: 'HTML 34.3%' },
      { name: 'css', width: '23.2%', summary: 'CSS 23.2%' },
    ],
    content: bookContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/book-review',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/-tfpc1wXBzM',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'CS50 Trading App',
    desc: 'PostgreSQL',
    img: cover9,
    languages: [
      { name: 'py', width: '51%', summary: 'Python 51.0%' },
      { name: 'html', width: '46.7%', summary: 'HTML 46.7%' },
      { name: 'css', width: '2.3%', summary: 'CSS 2.3%' },
    ],
    content: tradingContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/finance',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/DS4GYnYPHaw',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
  {
    name: 'Future World',
    desc: 'Vue',
    img: cover10,
    languages: [
      { name: 'vue', width: '92.6%', summary: 'Vue 92.6%' },
      { name: 'js', width: '7.4%', summary: 'JavaScript 7.4%' },
    ],
    content: futureContent,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ymmy1/Future_World',
        icon: <GitHubIcon size='medium' />,
      },
      {
        name: 'Website',
        url: 'https://future-world.netlify.com/',
        icon: <PreviewIcon size='medium' />,
      },
      {
        name: 'YouTube',
        url: 'https://youtu.be/zk5ik1IuRaI',
        icon: <YouTubeIcon size='medium' />,
      },
    ],
  },
];
