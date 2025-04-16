import { EpisysDbExtractFields } from "./episysDbExtractFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EpisysDbExtractSingleSelectableFields {
    includeAllEpisysDbExtractFieldsValue: boolean;
    includeAllEpisysDbExtractFieldsValueSpecified: boolean;
    includeAllEpisysDbExtractFields: boolean | null;
    episysDbExtractFields: EpisysDbExtractFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}