import { Pledge } from "./pledge";
import { VersionType } from "./versionType";

export interface PledgePagedListSelectFieldsResponse {
    pledge: Pledge[];
    token: string;
    version1: VersionType;
    messageId: string;
}