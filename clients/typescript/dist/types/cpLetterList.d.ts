import { CpLetter } from "./cpLetter";
export interface CpLetterList {
    hasReachedMaximumListSize: boolean | null;
    cpLetter: CpLetter[];
}
