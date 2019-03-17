/**
 * Card structure
 */
export interface Card {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: number[];
    mtgo_id: number;
    mtgo_foil_id: number;
    tcgplayer_id: number;
    name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_uris: {
        small: string;
        normal: string;
        large: string;
        png: string;
        art_crop: string;
        border_crop: string;
    };
    mana_cost: string;
    cmc: number;
    type_line: string;
    oracle_text: string;
    colors: string[];
    color_identity: string[];
    legalities: {
        standard: string;
        future: string;
        frontier: string;
        modern: string;
        legacy: string;
        pauper: string;
        vintage: string;
        penny: string;
        commander: string;
        duel: string;
        oldschool: string;
    };
    games: string[];
    reserved: boolean;
    foil: boolean;
    nonfoil: boolean;
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    set: string;
    set_name: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    flavor_text: string;
    illustration_id: string;
    artist: string;
    border_color: string;
    frame: string;
    frame_effect: string;
    full_art: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    usd: string;
    eur: string;
    tix: string;
    prices: { usd: string; usd_foil: string; eur: string; tix: string };
    related_uris: {
        gatherer: string;
        tcgplayer_decks: string;
        edhrec: string;
        mtgtop8: string;
    };
    purchase_uris: {
        tcgplayer: string;
        cardmarket: string;
        cardhoarder: string;
    };
}
