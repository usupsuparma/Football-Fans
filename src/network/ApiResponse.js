export interface ApiResponse<DataT> {
  rawResponse: Response;
  body: Body<DataT>;
}
export interface Body<T> {
  success: boolean;
  message: string;
  data: T;
}
