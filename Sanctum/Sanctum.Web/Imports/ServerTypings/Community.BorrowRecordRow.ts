namespace Sanctum.Community {
    export interface BorrowRecordRow {
        Id?: number;
        DebitUserId?: number;
        DebitUserNickName?: string;
        BorrowTime?: string;
        BookId?: number;
        BookName?: string;
        BorrowRequirementId?: number;
        BorrowApplyId?: number;
        Status?: number;
        AcceptTime?: string;
        RevertTime?: string;
        DebitRemarkContent?: string;
        DebitRemarkTime?: string;
        RenterRemarkContent?: string;
        RenterRemarkTime?: string;
    }

    export namespace BorrowRecordRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DebitRemarkContent';
        export const localTextPrefix = 'Community.BorrowRecord';

        export declare const enum Fields {
            Id = "Id",
            DebitUserId = "DebitUserId",
            DebitUserNickName = "DebitUserNickName",
            BorrowTime = "BorrowTime",
            BookId = "BookId",
            BookName = "BookName",
            BorrowRequirementId = "BorrowRequirementId",
            BorrowApplyId = "BorrowApplyId",
            Status = "Status",
            AcceptTime = "AcceptTime",
            RevertTime = "RevertTime",
            DebitRemarkContent = "DebitRemarkContent",
            DebitRemarkTime = "DebitRemarkTime",
            RenterRemarkContent = "RenterRemarkContent",
            RenterRemarkTime = "RenterRemarkTime"
        }
    }
}
