import { CpLetter } from "./cpLetter";

export interface CpLetterList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cpLetter: CpLetter[];
    cpLetterSpecified: boolean;
}