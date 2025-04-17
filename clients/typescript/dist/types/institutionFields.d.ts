import { VersionType } from "./versionType";
export interface InstitutionFields {
    branch: boolean | null;
    cfpbWebAddress1: boolean | null;
    cfpbWebAddress2: boolean | null;
    city: boolean | null;
    countryCode: boolean | null;
    ctrApprover: boolean | null;
    ctrApproverTitle: boolean | null;
    ctrContact: boolean | null;
    ctrContactPhone: boolean | null;
    ctrContactPhoneExt: boolean | null;
    ctrPreparer: boolean | null;
    ein: boolean | null;
    extraAddress: boolean | null;
    fiEmail: boolean | null;
    fiPhone: boolean | null;
    hudPhone: boolean | null;
    hudWebAddress1: boolean | null;
    hudWebAddress2: boolean | null;
    name: boolean | null;
    routingNumber: boolean | null;
    state: boolean | null;
    street: boolean | null;
    telephone: boolean | null;
    websiteAddr: boolean | null;
    zipCode: boolean | null;
    version1: VersionType;
}
