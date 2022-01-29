import { Character } from "./character.models";

export interface ListAPIResponse {
  info?: {
    count?: number,
    pages?: number,
    next?: string,
    prev?: string
  }
  results: Character[] | any[];
}
