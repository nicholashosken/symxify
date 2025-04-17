import { WireIntermedFiAdv } from "./wireIntermedFiAdv";

export interface WireIntermedFiAdvList {
    hasReachedMaximumListSize: boolean | null;
    wireIntermedFiAdv: WireIntermedFiAdv[];
}