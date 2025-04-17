import { DeviceInformation } from "./deviceInformation";

export interface EcaaBaseRequest {
    deviceInformation: DeviceInformation;
    messageId: string;
}