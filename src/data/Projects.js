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
import kanarysGallery8 from '@/assets/img/kanarys/gallery-8.webm'
import kanarysGallery9 from '@/assets/img/kanarys/gallery-9.webm'

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
                text: 'Kanarys is an american tech startup that aims to create more diverse and inclusive workplaces. It takes the form of a social plateform that encourages employees to speak up and rate their company according to several criterias.'
            },
            {
                id: 1,
                layout: 'text-column',
                subtitle: '02. my role',
                title: 'Lead front-end developer',
                image: null,
                text: 'I was in charge of all the front-end architecture which is designed in reusable components, inspired by the Atomic Design Methodology. I took the initiative of creating a styleguide to avoid potential duplicates as I worked with two other front-end developers on this project.'
            },
            {
                id: 2,
                layout: 'image-center',
                image: kanarysChallenges0,
                bgColor: '#356dff',
                textColor: '#ffffff',
                subtitle: '03. challenges',
                title: 'An evolving social platform',
                text: `The platform is designed to be used by both employees and companies. It means that both types of user navigate the same routes, but don’t have access to the same features.<br><br>The platform’s features are meant to constantly evolve which is why it was critical to design clean and versatile components. `
            },
            {
                id: 3,
                layout: 'gallery',
                bgColor: '#f5f5f5',
                textColor: '#000000',
                title: 'Gallery',
                galleryItems: [
                    { id: 0, image: kanarysGallery0 },
                    { id: 4, image: kanarysGallery4 },
                    { id: 1, image: kanarysGallery1 },
                    { id: 9, image: kanarysGallery9, video: true },
                    { id: 2, image: kanarysGallery2 },
                    { id: 3, image: kanarysGallery3 },
                    { id: 5, image: kanarysGallery5 },
                    { id: 8, image: kanarysGallery8, video: true },
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
                image: imageLeft0,
                title: 'VueJs + ES6',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                id: 1,
                layout: 'text-column',
                title: 'Une navigation dynamique',
                image: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                id: 2,
                layout: 'image-center',
                image: imageCenter0,
                bgColor: '#356dff',
                textColor: '#ffffff',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
        ]
    },
    {
        id: 3,
        slug: 'portfolio-2019',
        title: 'Portfolio 2019',
        baseline: 'code with passion, design with purpose, work with creativity',
        image: tempProjectMain4,
        baseColor: '#ffeb7d',
        highlightColor: '#ff9968',
        content: [
        ]
    },
    {
        id: 1,
        slug: 'superprof',
        title: 'Superprof',
        baseline: 'Trouvez le professeur parfait',
        image: tempProjectMain2,
        baseColor: '#fa6d8b',
        highlightColor: '#ff2b51',
        content: [
            {
                id: 0,
                layout: 'image-left',
                image: imageLeft0,
                title: 'Inclusive work cultures',
                text: 'Kanarys is an american tech startup that aims to create more diverse and inclusive workplaces. It takes the form of a social plateform that encourages employees to speak up and rate their company according to several criterias.'
            },
            {
                id: 1,
                layout: 'text-column',
                title: 'Une navigation dynamique',
                image: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                id: 2,
                layout: 'image-center',
                image: imageCenter0,
                bgColor: '#356dff',
                textColor: '#ffffff',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                id: 3,
                layout: 'gallery',
                bgColor: '#f5f5f5',
                textColor: '#000000',
                title: 'Gallery',
                galleryItems: [
                    { id: 1, title: 'Lorem', image: tempGallery0 },
                    { id: 2, title: 'Lorem', image: tempGallery1 },
                    { id: 3, title: 'Lorem', image: tempGallery2 },
                    { id: 4, title: 'Lorem', image: tempGallery3 },
                    { id: 5, title: 'Lorem', image: tempGallery4 },
                    { id: 6, title: 'Lorem', image: tempGallery1 },
                    { id: 7, title: 'Lorem', image: tempVideo0, video: true },
                    { id: 8, title: 'Lorem', image: imageLeft0 },
                    { id: 9, title: 'Lorem', image: tempGallery2 }
                ]
            }
        ]
    }
]