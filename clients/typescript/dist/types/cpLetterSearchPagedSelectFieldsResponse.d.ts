import { CpLetter } from "./cpLetter";
import { VersionType } from "./versionType";
export interface CpLetterSearchPagedSelectFieldsResponse {
    cpLetter: CpLetter[];
    token: string;
    version1: VersionType;
    messageId: string;
}
