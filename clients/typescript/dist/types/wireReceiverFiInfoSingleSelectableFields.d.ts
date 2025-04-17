import { WireReceiverFiInfoFields } from "./wireReceiverFiInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireReceiverFiInfoSingleSelectableFields {
    includeAllWireReceiverFiInfoFieldsValue: boolean;
    includeAllWireReceiverFiInfoFieldsValueSpecified: boolean;
    includeAllWireReceiverFiInfoFields: boolean | null;
    wireReceiverFiInfoFields: WireReceiverFiInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
