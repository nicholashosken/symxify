import { Imaging } from "./imaging";

export interface ImagingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    imaging: Imaging[];
    imagingSpecified: boolean;
}