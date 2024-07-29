import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import '@testing-library/jest-dom';
import { of } from 'rxjs/internal/observable/of';
import { MediaService } from './media.service';

const moviesResult = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
      genre_ids: [16, 10751, 12, 35, 18],
      id: 1022789,
      original_language: 'en',
      original_title: 'Inside Out 2',
      overview:
        "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      popularity: 8656.535,
      poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
      release_date: '2024-06-11',
      title: 'Inside Out 23',
      video: false,
      vote_average: 7.708,
      vote_count: 1578,
    },
    {
      adult: false,
      backdrop_path: '/zYdVEWpZyG1S1BtMEdOl2W36I7A.jpg',
      genre_ids: [16, 10751, 35, 28],
      id: 519182,
      original_language: 'en',
      original_title: 'Despicable Me 4',
      overview:
        'Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.',
      popularity: 6517.251,
      poster_path: '/wWba3TaojhK7NdycRhoQpsG0FaH.jpg',
      release_date: '2024-06-20',
      title: 'Despicable Me 4',
      video: false,
      vote_average: 7.613,
      vote_count: 173,
    },
    {
      adult: false,
      backdrop_path: '/fqv8v6AycXKsivp1T5yKtLbGXce.jpg',
      genre_ids: [878, 12, 28],
      id: 653346,
      original_language: 'en',
      original_title: 'Kingdom of the Planet of the Apes',
      overview:
        "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
      popularity: 2650.607,
      poster_path: '/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
      release_date: '2024-05-08',
      title: 'Kingdom of the Planet of the Apes',
      video: false,
      vote_average: 7.005,
      vote_count: 1523,
    },
    {
      adult: false,
      backdrop_path: '/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
      genre_ids: [28, 12, 878],
      id: 786892,
      original_language: 'en',
      original_title: 'Furiosa: A Mad Max Saga',
      overview:
        'As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.',
      popularity: 2616.641,
      poster_path: '/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
      release_date: '2024-05-22',
      title: 'Furiosa: A Mad Max Saga',
      video: false,
      vote_average: 7.683,
      vote_count: 1985,
    },
    {
      adult: false,
      backdrop_path: '/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg',
      genre_ids: [28, 35, 80],
      id: 280180,
      original_language: 'en',
      original_title: 'Beverly Hills Cop: Axel F',
      overview:
        'Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.',
      popularity: 1675.379,
      poster_path: '/zszRKfzjM5jltiq8rk6rasKVpUv.jpg',
      release_date: '2024-06-20',
      title: 'Beverly Hills Cop: Axel F',
      video: false,
      vote_average: 6.96,
      vote_count: 422,
    },
    {
      adult: false,
      backdrop_path: '/buawWBeKYjYfeiPoS2jIcjOrghZ.jpg',
      genre_ids: [27, 53],
      id: 1214509,
      original_language: 'en',
      original_title: 'In a Violent Nature',
      overview:
        'The enigmatic resurrection, rampage, and retribution of an undead monster in a remote wilderness unleashes an iconic new killer after a locket is removed from a collapsed fire tower that entombed its rotting corpse.',
      popularity: 1754.927,
      poster_path: '/hPfWHgq07nXbeldwEGxWB4JqwtE.jpg',
      release_date: '2024-05-31',
      title: 'In a Violent Nature',
      video: false,
      vote_average: 5.795,
      vote_count: 78,
    },
    {
      adult: false,
      backdrop_path: '/gRApXuxWmO2forYTuTmcz5RaNUV.jpg',
      genre_ids: [28, 80, 53, 35],
      id: 573435,
      original_language: 'en',
      original_title: 'Bad Boys: Ride or Die',
      overview:
        'After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.',
      popularity: 1332.888,
      poster_path: '/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg',
      release_date: '2024-06-05',
      title: 'Bad Boys: Ride or Die',
      video: false,
      vote_average: 7.023,
      vote_count: 527,
    },
    {
      adult: false,
      backdrop_path: '/P82NAcEsLIYgQtrtn36tYsj41m.jpg',
      genre_ids: [16, 35, 10751, 12],
      id: 748783,
      original_language: 'en',
      original_title: 'The Garfield Movie',
      overview:
        'Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.',
      popularity: 1109.646,
      poster_path: '/xYduFGuch9OwbCOEUiamml18ZoB.jpg',
      release_date: '2024-04-30',
      title: 'The Garfield Movie',
      video: false,
      vote_average: 7.07,
      vote_count: 273,
    },
    {
      adult: false,
      backdrop_path: '/jvPMJ2zM92jfXxVEFsqP1MMrLaO.jpg',
      genre_ids: [878, 28, 12],
      id: 823464,
      original_language: 'en',
      original_title: 'Godzilla x Kong: The New Empire',
      overview:
        'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      popularity: 998.994,
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      release_date: '2024-03-27',
      title: 'Godzilla x Kong: The New Empire',
      video: false,
      vote_average: 7.205,
      vote_count: 3121,
    },
    {
      adult: false,
      backdrop_path: '/iTWrsOVsUqcwYSxrpINNs3hG2nC.jpg',
      genre_ids: [53, 27, 28, 9648],
      id: 1001311,
      original_language: 'fr',
      original_title: 'Sous la Seine',
      overview:
        'In order to save Paris from an international bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.',
      popularity: 966.783,
      poster_path: '/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg',
      release_date: '2024-06-04',
      title: 'Under Paris',
      video: false,
      vote_average: 6.091,
      vote_count: 870,
    },
    {
      adult: false,
      backdrop_path: '/aATi2PtaOQCVAquCym6OU0Z4FjY.jpg',
      genre_ids: [28, 80, 53],
      id: 704673,
      original_language: 'en',
      original_title: 'Trigger Warning',
      overview:
        "A Special Forces commando uncovers a dangerous conspiracy when she returns to her hometown looking for answers into her beloved father's death.",
      popularity: 707.739,
      poster_path: '/lJN24nn28s5afC1UnLPYRgYOp1K.jpg',
      release_date: '2024-06-20',
      title: 'Trigger Warning',
      video: false,
      vote_average: 5.88,
      vote_count: 295,
    },
    {
      adult: false,
      backdrop_path: '/upk042Tms2EBfIzJf13OtOej0sd.jpg',
      genre_ids: [10752, 28, 18],
      id: 929590,
      original_language: 'en',
      original_title: 'Civil War',
      overview:
        'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.',
      popularity: 751.248,
      poster_path: '/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg',
      release_date: '2024-04-10',
      title: 'Civil War',
      video: false,
      vote_average: 6.999,
      vote_count: 1849,
    },
    {
      adult: false,
      backdrop_path: '/6XjMwQTvnICBz6TguiDKkDVHvgS.jpg',
      genre_ids: [27, 878, 53],
      id: 762441,
      original_language: 'en',
      original_title: 'A Quiet Place: Day One',
      overview:
        'As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive.',
      popularity: 748.48,
      poster_path: '/yrpPYKijwdMHyTGIOd1iK1h0Xno.jpg',
      release_date: '2024-06-26',
      title: 'A Quiet Place: Day One',
      video: false,
      vote_average: 6.892,
      vote_count: 365,
    },
    {
      adult: false,
      backdrop_path: '/5Aks5cCqHG8xFLoUSLsfGdVfIC.jpg',
      genre_ids: [14, 9648, 53, 27],
      id: 1086747,
      original_language: 'en',
      original_title: 'The Watchers',
      overview:
        'A young artist gets stranded in an extensive, immaculate forest in western Ireland, where, after finding shelter, she becomes trapped alongside three strangers, stalked by mysterious creatures each night.',
      popularity: 639.185,
      poster_path: '/vZVEUPychdvZLrTNwWErr9xZFmu.jpg',
      release_date: '2024-06-06',
      title: 'The Watchers',
      video: false,
      vote_average: 6.6,
      vote_count: 439,
    },
    {
      adult: false,
      backdrop_path: '/fZv4EldEPurSz0d2uVIoL4Sng8x.jpg',
      genre_ids: [28, 18, 53],
      id: 1016346,
      original_language: 'bn',
      original_title: 'MR-9: Do or Die',
      overview:
        'Masud Rana is a Secret Agent with code name MR-9 of the Bangladesh Counter Intelligence Agency',
      popularity: 635.086,
      poster_path: '/yF2g3MDacpZTMywh97qghW6Y0H4.jpg',
      release_date: '2023-08-25',
      title: 'MR-9: Do or Die',
      video: false,
      vote_average: 6.551,
      vote_count: 107,
    },
    {
      adult: false,
      backdrop_path: '/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg',
      genre_ids: [16, 10751, 12, 18, 35],
      id: 150540,
      original_language: 'en',
      original_title: 'Inside Out',
      overview:
        'When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.',
      popularity: 669.609,
      poster_path: '/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg',
      release_date: '2015-06-17',
      title: 'Inside Out',
      video: false,
      vote_average: 7.915,
      vote_count: 21140,
    },
    {
      adult: false,
      backdrop_path: '/yHEFwHkU2NqRxBrAoGBfuhuqIL1.jpg',
      genre_ids: [35, 28],
      id: 1143019,
      original_language: 'fr',
      original_title: 'Les Infaillibles',
      overview:
        'When a gang of robbers provokes chaos in Paris and humiliates the police, the Minister of the Interior wants new blood at the helm of the investigation: Alia is from Marseille, fiery-tempered and unmanageable, Hugo is Parisian, valedictorian and meticulous. In short, they have every reason to hate each other. A forced alliance, for better or for worse, or maybe blossoming into something else?',
      popularity: 647.762,
      poster_path: '/7PoIAvL3Io5v0HyBliXfXZruQTi.jpg',
      release_date: '2024-06-20',
      title: 'The Infallibles',
      video: false,
      vote_average: 5.844,
      vote_count: 45,
    },
    {
      adult: false,
      backdrop_path: '/3ffPx9jqg0yj9y1KWeagT7D20CB.jpg',
      genre_ids: [16, 28, 10751, 35, 14],
      id: 1011985,
      original_language: 'en',
      original_title: 'Kung Fu Panda 4',
      overview:
        'Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.',
      popularity: 628.092,
      poster_path: '/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
      release_date: '2024-03-02',
      title: 'Kung Fu Panda 4',
      video: false,
      vote_average: 7.13,
      vote_count: 2249,
    },
    {
      adult: false,
      backdrop_path: '/g5Ha2DhXIuxsUl4gaDnbw3jOAlo.jpg',
      genre_ids: [28],
      id: 1115623,
      original_language: 'en',
      original_title: 'The Last Kumite',
      overview:
        'When Karate champion Michael Rivers wins the last tournament of his career, shady businessman Ron Hall offers him the opportunity to fight in an illegal Kumite in Bulgaria against the world’s best martial artists.  When Michael declines, Hall has his daughter kidnapped and, in order to rescue her, Rivers is left with no choice but to compete in the deadly tournament. Arriving in Bulgaria, he finds out that he is not the only fighter whose loved one was taken. Rivers enlists the help of trainers Master Loren, and Julie Jackson but will it be enough for him to win the tournament and save his daughter’s life?',
      popularity: 502.766,
      poster_path: '/zDkaJgsPoSqa2cMe2hW2HAfyWwO.jpg',
      release_date: '2024-05-09',
      title: 'The Last Kumite',
      video: false,
      vote_average: 7.087,
      vote_count: 75,
    },
    {
      adult: false,
      backdrop_path: '/vblTCXOWUQGSc837vgbhDRi4HSc.jpg',
      genre_ids: [28, 80, 35, 53],
      id: 955555,
      original_language: 'ko',
      original_title: '범죄도시 3',
      overview:
        'Detective Ma Seok-do changes his affiliation from the Geumcheon Police Station to the Metropolitan Investigation Team, in order to eradicate Japanese gangsters who enter Korea to commit heinous crimes.',
      popularity: 536.691,
      poster_path: '/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg',
      release_date: '2023-05-31',
      title: 'The Roundup: No Way Out',
      video: false,
      vote_average: 7.273,
      vote_count: 355,
    },
  ],
  total_pages: 45059,
  total_results: 901177,
};

describe('MediaService', () => {
  it('should get a response from the fetch request', async () => {
    TestBed.configureTestingModule({
      providers: [
        MediaService,
        { provide: HttpClient, useValue: { get: () => of(moviesResult) } },
      ],
    });

    const http: HttpClient = TestBed.inject(HttpClient);

    const moviesService = new MediaService(http);

    moviesService.getPopularMovies().subscribe((results) => {
      expect(moviesResult.results[0].title).toBe(results.media[0].title);
      expect(moviesResult.results[0].release_date).toBe(
        results.media[0].release_date
      );
    });
  });
});
