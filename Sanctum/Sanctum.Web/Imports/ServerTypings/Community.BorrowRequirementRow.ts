namespace Sanctum.Community {
    export interface BorrowRequirementRow {
        Id?: number;
        Publisher?: number;
        BookName?: string;
        BookCategory?: string;
        IsPaid?: boolean;
        Status?: number;
        ViewCount?: number;
        PublishTime?: string;
    }

    export namespace BorrowRequirementRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BookName';
        export const localTextPrefix = 'Community.BorrowRequirement';

        export declare const enum Fields {
            Id = "Id",
            Publisher = "Publisher",
            BookName = "BookName",
            BookCategory = "BookCategory",
            IsPaid = "IsPaid",
            Status = "Status",
            ViewCount = "ViewCount",
            PublishTime = "PublishTime"
        }
    }
}
