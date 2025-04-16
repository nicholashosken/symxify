import { Audio } from "./audio";
export interface AudioList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    audio: Audio[];
    audioSpecified: boolean;
}
