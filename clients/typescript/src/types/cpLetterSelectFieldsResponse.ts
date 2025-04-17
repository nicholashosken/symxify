import { CpLetter } from "./cpLetter";
import { VersionType } from "./versionType";

export interface CpLetterSelectFieldsResponse {
    cpLetter: CpLetter;
    version1: VersionType;
    messageId: string;
}