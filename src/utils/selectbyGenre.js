export default function selectByGenre({ series, films } = []) {
    return {
         series: [
            {
                title: 'Comedies',
                data: series?.filter(item => item.genre === 'comedies')
            },
            {
                title: 'Feel Good',
                data: series?.filter(item => item.genre === 'feel-good')
            },
            {
                title: 'Crime',
                data: series?.filter(item => item.genre === 'crime')
            },
            {
                title: 'Children',
                data: series?.filter(item => item.genre === 'children')
            },
            {
                title: 'Documentaries',
                data: series?.filter(item => item.genre === 'comedies')
            },
        ],
        films: [

            {
                title: 'Drama',
                data: films?.filter(item => item.genre === 'drama')
            },
            {
                title: 'Thriller',
                data: films?.filter(item => item.genre === 'thriller')
            },
            {
                title: 'Romance',
                data: films?.filter(item => item.genre === 'romance')
            },
            {
                title: 'Suspence',
                data: films?.filter(item => item.genre === 'suspence')
            },
            {
                title: 'Children',
                data: films?.filter(item => item.genre === 'children')
            },
        ]
    }
}