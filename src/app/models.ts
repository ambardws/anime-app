export interface Anime {
    anilist_id: number;
    banner_image: string;
    cover_color: string;
    cover_image: string;
    description: any;
    end_date: Date;
    episode_duration: number;
    episode_count: number;
    format: number;
    genres: any;
    has_cover_image: boolean;
    id: number;
    mal_id: number;
    nsfw: boolean;
    score: number;
    season_period: number;
    season_year: number;
    start_date: Date;
    status: number;
    titles: any;
    tmdb_id: number;
    trailer_url: string;
}

export interface ResponseModel {
    data: {
        current_page: number,
        count: number,
        documents : Array<Anime>;
        last_page: number
    } 
}
