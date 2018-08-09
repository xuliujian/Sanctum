﻿namespace Sanctum.Community {
    export interface BookFriendGroupRow {
        Id?: number;
        GroupName?: string;
        OwnerId?: number;
        CreatedTime?: string;
    }

    export namespace BookFriendGroupRow {
        export const idProperty = 'Id';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Community.BookFriendGroup';

        export declare const enum Fields {
            Id = "Id",
            GroupName = "GroupName",
            OwnerId = "OwnerId",
            CreatedTime = "CreatedTime"
        }
    }
}
