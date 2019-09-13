import tempProjectMain0 from '@/assets/img/temp/project-main-0.png'
import tempProjectMain1 from '@/assets/img/temp/project-main-1.png'
import tempProjectMain2 from '@/assets/img/temp/project-main-2.png'
import tempProjectMain3 from '@/assets/img/temp/project-main-3.png'
import tempProjectMain4 from '@/assets/img/temp/project-main-4.png'

import tempGallery0 from '@/assets/img/temp/gallery-0.png'
import tempGallery1 from '@/assets/img/temp/gallery-1.png'
import tempGallery2 from '@/assets/img/temp/gallery-2.png'
import tempGallery3 from '@/assets/img/temp/gallery-3.png'
import tempGallery4 from '@/assets/img/temp/gallery-4.png'

import tempVideo0 from '@/assets/img/temp/video-0.mp4'

import imageLeft0 from '@/assets/img/temp/project-left.jpg'
import imageCenter0 from '@/assets/img/temp/project-center.jpg'

import kanarysPitch0 from '@/assets/img/kanarys/pitch-0.jpg'
import kanarysChallenges0 from '@/assets/img/kanarys/challenges-0.jpg'
import kanarysGallery0 from '@/assets/img/kanarys/gallery-0.jpg'
import kanarysGallery1 from '@/assets/img/kanarys/gallery-1.jpg'
import kanarysGallery2 from '@/assets/img/kanarys/gallery-2.jpg'
import kanarysGallery3 from '@/assets/img/kanarys/gallery-3.jpg'
import kanarysGallery4 from '@/assets/img/kanarys/gallery-4.jpg'
import kanarysGallery5 from '@/assets/img/kanarys/gallery-5.jpg'
import kanarysGallery6 from '@/assets/img/kanarys/gallery-6.jpg'
import kanarysGallery7 from '@/assets/img/kanarys/gallery-7.jpg'
import kanarysGallery8 from '@/assets/img/kanarys/gallery-8.mp4'
import kanarysGallery9 from '@/assets/img/kanarys/gallery-9.mp4'

import portfolioPitch0 from '@/assets/img/portfolio/pitch-0.jpg'
import portfolioTech0 from '@/assets/img/portfolio/tech-0.jpg'

import wandiPitch0 from '@/assets/img/wandi/pitch-0.jpg'
import wandiGallery0 from '@/assets/img/wandi/gallery-0.mp4'
import wandiGallery1 from '@/assets/img/wandi/gallery-1.mp4'
import wandiGallery2 from '@/assets/img/wandi/gallery-2.mp4'
import wandiGallery3 from '@/assets/img/wandi/gallery-3.mp4'
import wandiGallery4 from '@/assets/img/wandi/gallery-4.jpg'
import wandiGallery5 from '@/assets/img/wandi/gallery-5.jpg'
import wandiGallery6 from '@/assets/img/wandi/gallery-6.jpg'
import wandiGallery7 from '@/assets/img/wandi/gallery-7.jpg'
import wandiGallery8 from '@/assets/img/wandi/gallery-8.mp4'

import superprofPitch0 from '@/assets/img/superprof/pitch-0.jpg'
import superprofChallenge0 from '@/assets/img/superprof/challenge-0.jpg'
import superprofGallery0 from '@/assets/img/superprof/gallery-0.mp4'
import superprofGallery1 from '@/assets/img/superprof/gallery-1.mp4'
import superprofGallery2 from '@/assets/img/superprof/gallery-2.mp4'
import superprofGallery3 from '@/assets/img/superprof/gallery-3.mp4'
import superprofGallery4 from '@/assets/img/superprof/gallery-4.jpg'
import superprofGallery5 from '@/assets/img/superprof/gallery-5.jpg'
import superprofGallery6 from '@/assets/img/superprof/gallery-6.jpg'

export default [
    {
        id: 0,
        slug: 'kanarys',
        title: 'Kanarys',
        baseline: 'Find workplaces where you belong',
        image: tempProjectMain0,
        baseColor: '#ffe3bc',
        highlightColor: '#ffc551',
        link: 'https://app.kanarys.com/company-compare/browse',
        content: [
            {
                id: 0,
                layout: 'image-left',
                image: kanarysPitch0,
                subtitle: '01. the pitch',
                title: 'Inclusive work cultures',
                text: 'Kanarys is an american tech startup that aims to create more diverse and inclusive workplaces. It takes the form of a social platform that encourages employees to speak up and score their company according to several criterias.'
            },
            {
                id: 1,
                layout: 'text-column',
                subtitle: '02. my role',
                title: 'Lead front-end developer',
                image: null,
                text: 'I was in charge of all the front-end architecture which is designed in reusable components, inspired by the Atomic Design Methodology. I took the initiative of creating a styleguide to avoid any potential duplicates as I worked with two other front-end developers on this project.'
            },
            {
                id: 2,
                layout: 'image-center',
                image: kanarysChallenges0,
                bgColor: '#356dff',
                textColor: '#ffffff',
                subtitle: '03. challenges',
                title: 'An evolving social platform',
                text: `The platform is designed to be used by both employees and companies alike. It means that both types of users navigate the same routes, but don’t have access to the same features.<br><br>The platform is meant to constantly evolve which is why it was critical to design clean, versatile and reusable components. `
            },
            {
                id: 3,
                layout: 'gallery',
                bgColor: '#eaeaea',
                textColor: '#000000',
                title: 'Components gallery',
                galleryItems: [
                    { id: 0, image: kanarysGallery0 },
                    { id: 4, image: kanarysGallery4 },
                    { id: 1, image: kanarysGallery1 },
                    { id: 9, image: kanarysGallery9, video: { x: 980, y: 680 } },
                    { id: 2, image: kanarysGallery2 },
                    { id: 3, image: kanarysGallery3 },
                    { id: 5, image: kanarysGallery5 },
                    { id: 8, image: kanarysGallery8, video: { x: 248, y: 506 } },
                    { id: 7, image: kanarysGallery7 },
                    { id: 6, image: kanarysGallery6 },
                ]
            }
        ]
    },
    {
        id: 2,
        slug: 'agence-wandi',
        title: 'Agence Wandi',
        baseline: 'Sérieux, sans se prendre au sérieux',
        image: tempProjectMain1,
        baseColor: '#5931d4',
        highlightColor: '#be41f2',
        content: [
            {
                id: 0,
                layout: 'image-left',
                image: wandiPitch0,
                subtitle: '01. the pitch',
                title: 'Serious & fun',
                text: `Wandi is where I had the chance to start my career as a front-end developer. It's a small, yet packed with talent, agency in Paris. They pride themselves with a no-bullshit-mindset that let them get shit done in record time.`
            },
            {
                id: 1,
                layout: 'text-column',
                subtitle: '02. my role',
                title: 'Lead front-end developer',
                image: null,
                text: 'I worked on this project as the only front-end developer, from all the interfaces to the animations. The website is entirely designed with VueJS.'
            },
            {
                id: 2,
                layout: 'gallery',
                bgColor: '#eaeaea',
                textColor: '#000000',
                title: 'Components gallery',
                galleryItems: [
                    { id: 2, image: wandiGallery2, video: { x: 1200, y: 569 } },
                    { id: 0, image: wandiGallery0, video: { x: 810, y: 486 } },
                    { id: 5, image: wandiGallery5 },
                    { id: 6, image: wandiGallery6 },
                    { id: 7, image: wandiGallery7 },
                    { id: 1, image: wandiGallery1, video: { x: 600, y: 690 } },
                    { id: 4, image: wandiGallery4 },
                    /* { id: 3, image: wandiGallery3, video: true }, */
                    { id: 8, image: wandiGallery8, video: { x: 780, y: 400 } }
                ]
            }
        ]
    },
    {
        id: 3,
        slug: 'portfolio-2019',
        title: 'Portfolio 2019',
        baseline: 'Code with passion, design with purpose, work with creativity',
        image: tempProjectMain4,
        baseColor: '#ffeb7d',
        highlightColor: '#ff9968',
        content: [
            {
                id: 0,
                layout: 'image-left',
                image: portfolioPitch0,
                subtitle: '01. the pitch',
                title: 'Me, myself and I',
                text: `I consider my portfolio to be something very personal that's meant to evolve with my own perception of life. I wanted something really simple at first sight, but packed with details and animations.`
            },
            {
                id: 1,
                layout: 'text-column',
                subtitle: '02. my role',
                title: 'Designer & developer',
                image: null,
                text: `Even though I'm not specialized in web design, I wanted to have fine control over everything : from design to code. I feel like it's harder than you think to have total freedom over what you can make, you truly start from a blank page.`
            },
            {
                id: 2,
                layout: 'image-center',
                image: portfolioTech0,
                bgColor: '#356dff',
                textColor: '#ffffff',
                subtitle: '03. technology',
                title: 'VueJS',
                text: `The website is 100% developed in VueJS. As of right now, there is no back-end yet. I'm planning to develop it with ExpressJS, whenever I find a bit of time to do so.`
            }
        ]
    },
    {
        id: 1,
        slug: 'superprof',
        title: 'Superprof',
        baseline: 'Find the perfect teacher',
        image: tempProjectMain2,
        baseColor: '#fa6d8b',
        link: 'https://www.superprof.fr',
        highlightColor: '#ff2b51',
        content: [
            {
                id: 0,
                layout: 'image-left',
                image: superprofPitch0,
                subtitle: '01. pitch',
                title: 'French leader for private teachers',
                text: 'Superprof is a french start-up launched in 2013. It aims to connect teachers and students, in various subjects from maths to cuisine. It counts more that 8 million registered teachers accross the country.'
            },
            {
                id: 2,
                layout: 'image-center',
                image: superprofChallenge0,
                bgColor: '#356dff',
                textColor: '#ffffff',
                subtitle: '02. my role',
                title: 'Homepage & teacher profiles visual rework',
                text: 'As a front-end developer, I was given responsibility for the total rework of the homepage & teacher profiles,  two most visited pages of the platform. I had to use the already existing stack (Jquery), so no fancy modern frameworks here.'
            },
            {
                id: 3,
                layout: 'gallery',
                bgColor: '#eaeaea',
                textColor: '#000000',
                title: 'Gallery',
                galleryItems: [
                    { id: 1, image: superprofGallery1, video: { x: 406, y: 655 } },
                    { id: 4, image: superprofGallery4 },
                    { id: 3, image: superprofGallery3, video: { x: 813, y: 660 } },
                    { id: 2, image: superprofGallery2, video: { x: 856, y: 462 } },
                    { id: 0, image: superprofGallery0, video: { x: 1000, y: 420 } },
                    { id: 6, image: superprofGallery6 },
                    { id: 5, image: superprofGallery5 },
                ]
            }
        ]
    }
]