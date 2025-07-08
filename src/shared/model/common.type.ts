export type YesOrNo = "Y" | "N";

export interface ResponseType<T> {
  data: T;
  success: boolean;
  error: {
    code: string;
    message: string;
  } | null;
}
