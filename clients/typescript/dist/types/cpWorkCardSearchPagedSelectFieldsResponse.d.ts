import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardSearchPagedSelectFieldsResponse {
    cpWorkCard: CpWorkCard[];
    cpWorkCardSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
