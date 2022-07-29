export interFace Interface{
    mission_name: string,
    launch_date_local: string,
    launch_site: string,
    site_name_long: string,
    links: string,
    article_link: boolean,
    video_link: string,
    rocket: string,
    rocket_name: string,
    first_stage: string,
    cores: string,
    flight: number,
    core: string,
    reuse_count: number,
    status: string,
    second_stage: string,
    payloads: string,
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs:number
}

export interface IUser{
    name: string,
    age: number,
    gender:string
}