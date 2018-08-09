namespace Sanctum.Community {
    export interface DonationRecordRow {
        Id?: number;
        DonateUserId?: number;
        DonatedTime?: string;
        BookId?: number;
        DonationStyle?: number;
        Comment?: string;
        IsReceived?: boolean;
        Receiver?: string;
        Charger?: string;
        ReceivedTime?: string;
    }

    export namespace DonationRecordRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'Community.DonationRecord';

        export declare const enum Fields {
            Id = "Id",
            DonateUserId = "DonateUserId",
            DonatedTime = "DonatedTime",
            BookId = "BookId",
            DonationStyle = "DonationStyle",
            Comment = "Comment",
            IsReceived = "IsReceived",
            Receiver = "Receiver",
            Charger = "Charger",
            ReceivedTime = "ReceivedTime"
        }
    }
}
