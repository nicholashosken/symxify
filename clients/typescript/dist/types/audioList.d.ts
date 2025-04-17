import { Audio } from "./audio";
export interface AudioList {
    hasReachedMaximumListSize: boolean | null;
    audio: Audio[];
}
