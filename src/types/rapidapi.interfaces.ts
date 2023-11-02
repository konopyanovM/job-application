export interface RapidApiResponse<T> {
  data: T;
  parameters: RapidApiParameters;
  request_id: string;
  status: string;
}

export interface RapidApiParameters {
  query: string;
  page: number;
  num_pages: number;
}
