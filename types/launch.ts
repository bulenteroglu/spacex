export interface Launch {
  flight_number: number;
  mission_name: string;

  launch_date_utc: string;
  rocket: Rocket;
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
