import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisPlanSingleSelectableFields } from "./analysisPlanSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AnalysisPlanSelectFieldsRequest {
    analysisPlanIndexAnalysisPlanValue: number;
    analysisPlanIndexAnalysisPlanValueSpecified: boolean;
    analysisPlanIndexAnalysisPlan: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AnalysisPlanSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
