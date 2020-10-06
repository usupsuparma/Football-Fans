export class NonSuccessHttpError extends Error {
  response: Response;
  code: number;
  constructor(message: string, resp: Response, code: number) {
    super(message);
    this.name = 'NonSuccessHttpError';
    this.response = resp;
    this.code = code;
  }
}
