namespace Sanctum.Community {
    export interface BookCommentRow {
        Id?: number;
        BookId?: number;
        CommentUserId?: number;
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
            CommentUserId = "CommentUserId",
            ApprovalCount = "ApprovalCount",
            CommentContent = "CommentContent",
            ReplyCommentId = "ReplyCommentId",
            CommentTime = "CommentTime"
        }
    }
}
