import { CpWorkCard } from "./cpWorkCard";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardSelectFieldsFilterChildrenResponse {
    cpWorkCard: CpWorkCard;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
