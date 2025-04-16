import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PledgeSingleSelectableFields } from "./pledgeSingleSelectableFields";
import { PledgeSearchFilter } from "./pledgeSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PledgeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PledgeSingleSelectableFields;
    searchFilter: PledgeSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
