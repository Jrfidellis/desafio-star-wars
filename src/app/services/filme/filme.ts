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

export interface IPlaneta {
    diameter: number;
    name: string;
    population: number;

    // TODO: mapear como enums
    climate: string;
    terrain: string;
}

export interface INave {
    cargo_capacity: number;
    consumables: string;
    cost_in_credits: number;
    crew: number;
    length: number;
    manufacturer: string;
    model: string;
    name: string;
    passengers: number;
    starship_class: string;
}

export interface IPersonagem {
    name: string;
}