import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardPagedListSelectFieldsResponse {
    cpWorkCard: CpWorkCard[];
    cpWorkCardSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
