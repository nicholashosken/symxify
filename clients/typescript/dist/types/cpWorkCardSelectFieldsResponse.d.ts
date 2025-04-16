import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardSelectFieldsResponse {
    cpWorkCard: CpWorkCard;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
