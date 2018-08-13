namespace Sanctum.Community {
    export interface BookCommentRow {
        Id?: number;
        BookId?: number;
        BookName?: string;
        CommentUserId?: number;
        CommentUserNickName?: string;
        ApprovalCount?: number;
        CommentContent?: string;
        ReplyCommentId?: number;
        CommentTime?: string;
    }

    export namespace BookCommentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CommentContent';
        export const localTextPrefix = 'Community.BookComment';

        export declare const enum Fields {
            Id = "Id",
            BookId = "BookId",
            BookName = "BookName",
            CommentUserId = "CommentUserId",
            CommentUserNickName = "CommentUserNickName",
            ApprovalCount = "ApprovalCount",
            CommentContent = "CommentContent",
            ReplyCommentId = "ReplyCommentId",
            CommentTime = "CommentTime"
        }
    }
}
