export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: any[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  launch_site: Launchsite;
  launch_success: boolean;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
}

interface Launchsite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
