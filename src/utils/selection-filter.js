export default function selectionFilter({ series, films } = []) {
    return {
      series: [
        { title: 'Science-Fiction', data: series?.filter((item) => item.genre === 'Science-Fiction') },
        { title: 'Comédie', data: series?.filter((item) => item.genre === 'Comédie') },
        { title: 'Enfants', data: series?.filter((item) => item.genre === 'Enfants') },
        { title: 'Policier', data: series?.filter((item) => item.genre === 'Policier') },
        { title: 'Humour-Décalé', data: series?.filter((item) => item.genre === 'Humour-Décalé') },
      ],
      films: [
        { title: 'Action', data: films?.filter((item) => item.genre === 'Action') },
        { title: 'Thriller', data: films?.filter((item) => item.genre === 'Thriller') },
        { title: 'Enfants', data: films?.filter((item) => item.genre === 'Enfants') },
        { title: 'Suspense', data: films?.filter((item) => item.genre === 'Suspense') },
        { title: 'Romantique', data: films?.filter((item) => item.genre === 'Romantique') },
      ],
    };
  }