interface SimiliarMovie {
    id: number;
    name: string | null;
    alternativeName: string | null;
    enName: string | null;
    type: string | null;
    poster: {
        url: string | null;
        previewUrl: string | null;
    };
}

interface SequelsAndPrequels extends SimiliarMovie {
    raiting: Record<string, number | null>;
    year: number | null;
}

interface MovieSearchedByName {
    status:
        | null
        | "filming"
        | "pre-production"
        | "completed"
        | "announced"
        | "post-production";
    externalId: {
        imdb: string | null;
        kpHD: string | null;
        tmdb: number | null;
    };
    rating: {
        kp: number | null;
        imdb: number | null;
        tmdb: number | null;
        filmCritics: number | null;
        russianFilmCritics: number | null;
        await: number | null;
    };
    votes: {
        kp: number | null;
        imdb: number | null;
        tmdb: number | null;
        filmCritics: number | null;
        russianFilmCritics: number | null;
        await: number | null;
    };
    backdrop: {
        url: string | null;
        previewUrl: string | null;
    };
    movieLength: number | null;
    id: number | null;
    type:
        | "movie"
        | "tv-series"
        | "cartoon"
        | "anime"
        | "animated-series"
        | "tv-show"
        | null;
    name: string | null;
    description: string | null;
    year: number | null;
    poster: {
        url: string | null;
        previewUrl: string | null;
    };
    genres: {
        name: string;
    }[];
    countries: {
        name: string;
    }[];
    typeNumber: 1 | 2 | 3 | 4 | 5 | 6 | null;
    alternativeName: string | null;
    enName: string | null;
    names:
        | {
              name: string;
              language?: string | null;
              type?: string | null;
          }[]
        | null;
    ageRating: number | null;
    ratingMpaa: string | null;
    shortDescription: string | null;
    ticketsOnSale: boolean | null;
    logo: {
        url: string | null;
    };
    top10: null | number;
    top250: null | number;
    isSeries: boolean | null;
    seriesLength: null | number;
    totalSeriesLength: null | number;
    releaseYears: {
        start: number | true;
        end: number | true;
    }[];
}

//by id
export interface MovieSearchedDefault extends MovieSearchedByName {
    fees: Record<string, { value: number; currency: string }>;
    images: {
        framesCount: number;
    };
    productionCompanies: {
        name: string;
        url: string | null;
        previewUrl: string | null;
    }[];
    spokenLanguages: {
        name: string;
        nameEn: string;
    }[];
    distributors: { distributor: string | null; distributorRelease: string };
    premiere: {
        country: string | null;
        world: string | null;
        russia: string | null;
        digital: string | null;
        dvd: string | null;
        cinema: string | null;
        bluray: string | null;
    };
    slogan: string | null;
    budget: {
        value: number | null;
        currency: string | null;
    };
    facts:
        | {
              value: string;
              type: string | null;
              spoiler: boolean | null;
          }[]
        | null;
    seasonsInfo:
        | {
              number: number | null;
              episodeCount: number | null;
          }[]
        | null;
    persons: {
        id: number;
        photo: string | null;
        name: string | null;
        enName: string | null;
        description: string | null;
        profession: string | null;
        enProfession: string | null;
    }[];
    lists: string[] | null;
    updatedAt: string | null;
    technology: Record<string, boolean>;
    reviewInfo?: {
        count: number | null;
        positiveCount: number | null;
        percentage: string | null;
    };
    sequelsAndPrequels: SequelsAndPrequels[] | null;
    similarMovies: SimiliarMovie[] | null;
    watchability: {
        items:
            | [
                  {
                      name: string | null;
                      logo: {
                          url: string | null;
                      };
                      url: string;
                  }
              ]
            | [];
    };
    audience: {
        count: number | null;
        country: string | null;
    }[];
    deletedAt: null | string;
    networks: {
        items: {
            name: string | null;
            logo: {
                url: string | null;
            };
        }[];
    } | null;
    videos: {
        trailers: [
            {
                url: string | null;
                name: string | null;
                site: string | null;
                size?: number | null;
                type: string | null;
            }
        ];
    };
    createdAt: string | null;
}

//searching
export interface MoviesSearchedByName {
    docs: MovieSearchedByName[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

//home page, popular movies
export interface MoviesSearchedDefault {
    docs: MovieSearchedDefault[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}
type SearchType =
    | "movie"
    | "tv-series"
    | "cartoon"
    | "anime"
    | "animated-series";

export interface MoviesSearchedDefaultParams {
    type: SearchType;
    isSeries: boolean;
    year: number;
    ratingKp: string;
    page?: number;
    limit?: number;
}
