export interface IFilme {
    opening_crawl: string;
    director: string;
    edited: Date;
    episode_id: number;
    producer: string;
    title: string;
    created: Date;
    release_date: Date;

    // URLs para novas chamadas
    url: string;
    characters: string[];
    vehicles: string[];
    starships: string[];
    planets: string[];
    species: string[];
}

export interface IFilmes {
    results: IFilme[];
    count: number;
}

// export interface ICharacter {

// }
