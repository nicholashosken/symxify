import { WireMiscFields } from "./wireMiscFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireMiscSingleSelectableFields {
    includeAllWireMiscFieldsValue: boolean;
    includeAllWireMiscFieldsValueSpecified: boolean;
    includeAllWireMiscFields: boolean | null;
    wireMiscFields: WireMiscFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
