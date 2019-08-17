import tempProjectMain0 from '@/assets/img/temp/project-main-0.png'
import tempProjectMain1 from '@/assets/img/temp/project-main-1.png'

import imageLeft0 from '@/assets/img/temp/project-left.jpg'

export default [
    {
        id: 0,
        slug: 'kanarys',
        title: 'Kanarys',
        baseline: 'Find workplaces where you belong',
        image: tempProjectMain0,
        color: 'yellow',
        baseColor: '#ffe3bc',
        highlightColor: '#ffc551',
        content: [
            {
                id: 0,
                layout: 'center',
                title: 'Une navigation dynamique',
                image: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            },
            {
                id: 1,
                layout: 'image-left',
                image: imageLeft0,
                title: 'VueJs + ES6',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            }
        ]
    }
]