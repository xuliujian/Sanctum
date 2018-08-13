namespace Sanctum.Community {
    export interface BookFriendRow {
        Id?: number;
        GroupId?: number;
        GroupName?: string;
        MemberId?: number;
        MemberNickName?: string;
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
            GroupName = "GroupName",
            MemberId = "MemberId",
            MemberNickName = "MemberNickName",
            Status = "Status",
            ActiveLevel = "ActiveLevel",
            JoinTime = "JoinTime"
        }
    }
}
