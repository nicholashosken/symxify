import { DocTypeDefault } from "./docTypeDefault";
import { VersionType } from "./versionType";
export interface DocTypeDefaultSearchPagedSelectFieldsResponse {
    docTypeDefault: DocTypeDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
