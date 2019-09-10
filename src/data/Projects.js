import tempProjectMain0 from '@/assets/img/temp/project-main-0.png'
import tempProjectMain1 from '@/assets/img/temp/project-main-1.png'
import tempProjectMain2 from '@/assets/img/temp/project-main-2.png'
import tempProjectMain3 from '@/assets/img/temp/project-main-3.png'
import tempProjectMain4 from '@/assets/img/temp/project-main-4.png'

import imageLeft0 from '@/assets/img/temp/project-left.jpg'
import imageCenter0 from '@/assets/img/temp/project-center.jpg'

export default [
    {
        id: 0,
        slug: 'kanarys',
        title: 'Kanarys',
        baseline: 'Find workplaces where you belong',
        image: tempProjectMain0,
        baseColor: '#ffe3bc',
        highlightColor: '#ffc551',
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
            {
                id: 3,
                layout: 'gallery',
                bgColor: '#f5f5f5',
                textColor: '#000000',
                title: 'Gallery',
                galleryItems: [
                    { id: 1, title: 'Lorem', image: imageLeft0 },
                    { id: 2, title: 'Lorem', image: imageLeft0 },
                    { id: 3, title: 'Lorem', image: imageLeft0 },
                    { id: 4, title: 'Lorem', image: imageLeft0 },
                    { id: 5, title: 'Lorem', image: imageLeft0 },
                    { id: 6, title: 'Lorem', image: imageLeft0 },
                    { id: 7, title: 'Lorem', image: imageLeft0 },
                    { id: 8, title: 'Lorem', image: imageLeft0 },
                    { id: 9, title: 'Lorem', image: imageLeft0 }
                ]
            }
        ]
    }
]