namespace Sanctum.Community {
    export interface BookFriendRow {
        Id?: number;
        GroupId?: number;
        MemberId?: number;
        Status?: number;
        ActiveLevel?: number;
        JoinTime?: string;
    }

    export namespace BookFriendRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Community.BookFriend';

        export declare const enum Fields {
            Id = "Id",
            GroupId = "GroupId",
            MemberId = "MemberId",
            Status = "Status",
            ActiveLevel = "ActiveLevel",
            JoinTime = "JoinTime"
        }
    }
}
