import { Imaging } from "./imaging";

export interface ImagingList {
    hasReachedMaximumListSize: boolean | null;
    imaging: Imaging[];
}