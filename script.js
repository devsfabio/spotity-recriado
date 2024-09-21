document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    {
      name: 'Henrique & Juliano',
      image: './assets/artista-henrique-juliano.jpg',
    },
    { name: 'Jorge & Mateus', image: './assets/artista-Jorge-mateus.jpg' },
    {
      name: 'Zé Neto & Cristiano',
      image: './assets/artista-ze-neto.jpg',
    },
    {
      name: 'Gusttavo Lima',
      image: './assets/artista-gustavo-limma.jpg',
    },
    {
      name: 'Luan Santana',
      image: './assets/artista-luan-santana.jpg',
    },
    {
      name: 'Matheus & Kauan',
      image: './assets/artista-mateus-kauan.jpg',
    },
  ];

  const albumsData = [
    {
      name: 'White Noise (Sleep & relaxation)',
      artist: 'StylePropertyMap',
      image: './assets/album-white-noise.jpg',
    },
    {
      name: 'o Céu explica',
      artist: 'Henrique & Juliano',
      image: './assets/album-ceu-explica.jpg',
    },
    {
      name: 'nada como um dia apos',
      artist: 'racionais',
      image: './assets/album-racionais.jpg',
    },
    {
      name: 'hit me hard',
      artist: 'bille',
      image: './assets/album-hit-me.jpg',
    },
    {
      name: 'caju',
      artist: 'liniker',
      image: './assets/album-caju.jpg',
    },
    {
      name: 'escandalo',
      artist: 'luisa sonza',
      image: './assets/album-escandalo.jpg',
    },
  ];

  const artistGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');

  artistsData.forEach((artists) => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML = `
    <img src="${artists.image}" alt="imagem do ${artists.name}">
    <div>
      <h3>${artists.name}</h3>
      <p>artista</p>
     </div>

    `;

    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card');

    albumCard.innerHTML = `
    <img src="${album.image}" alt="imagem do ${album.name}">
    <div>
      <h3>${album.name}</h3>
      <p>${album.artist}</p>
     </div>
    `;

    albumsGrid.appendChild(albumCard);
  });
});
