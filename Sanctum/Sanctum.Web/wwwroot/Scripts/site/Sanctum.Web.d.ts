/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Sanctum.Administration {
}
declare namespace Sanctum.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Sanctum.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Sanctum.Administration {
}
declare namespace Sanctum.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Sanctum.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Sanctum.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Sanctum.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Sanctum.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Sanctum.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Sanctum.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Sanctum.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace Sanctum.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace Sanctum.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace Sanctum.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace Sanctum.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace Sanctum.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace Sanctum.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Sanctum.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Sanctum.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Sanctum.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Sanctum.Administration {
}
declare namespace Sanctum.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Sanctum.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Sanctum.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Sanctum.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Sanctum.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Sanctum.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Sanctum.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Sanctum.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Sanctum.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Sanctum.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Sanctum.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Sanctum.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Sanctum.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Sanctum.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Sanctum.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Sanctum.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Sanctum.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface AreaForm {
        Pid: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        FullName: Serenity.StringEditor;
        Level: Serenity.IntegerEditor;
        PinYin: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        FirstChar: Serenity.StringEditor;
        Longitude: Serenity.DecimalEditor;
        Latitude: Serenity.DecimalEditor;
    }
    class AreaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface AreaRow {
        Id?: string;
        Pid?: string;
        ShortName?: string;
        Name?: string;
        FullName?: string;
        Level?: number;
        PinYin?: string;
        Code?: string;
        ZipCode?: string;
        FirstChar?: string;
        Longitude?: number;
        Latitude?: number;
    }
    namespace AreaRow {
        const idProperty = "Id";
        const nameProperty = "Id";
        const localTextPrefix = "Community.Area";
        const enum Fields {
            Id = "Id",
            Pid = "Pid",
            ShortName = "ShortName",
            Name = "Name",
            FullName = "FullName",
            Level = "Level",
            PinYin = "PinYin",
            Code = "Code",
            ZipCode = "ZipCode",
            FirstChar = "FirstChar",
            Longitude = "Longitude",
            Latitude = "Latitude"
        }
    }
}
declare namespace Sanctum.Community {
    namespace AreaService {
        const baseUrl = "Community/Area";
        function Create(request: Serenity.SaveRequest<AreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/Area/Create",
            Update = "Community/Area/Update",
            Delete = "Community/Area/Delete",
            Retrieve = "Community/Area/Retrieve",
            List = "Community/Area/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BookCategoryForm {
        CategoryName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
        Remark: Serenity.StringEditor;
        IsEnable: Serenity.BooleanEditor;
        Creator: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
        Modifier: Serenity.IntegerEditor;
        ModifiedTime: Serenity.DateEditor;
    }
    class BookCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BookCategoryRow {
        Id?: number;
        CategoryName?: string;
        ParentId?: number;
        Remark?: string;
        IsEnable?: boolean;
        Creator?: number;
        CreatedTime?: string;
        Modifier?: number;
        ModifiedTime?: string;
    }
    namespace BookCategoryRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Community.BookCategory";
        const enum Fields {
            Id = "Id",
            CategoryName = "CategoryName",
            ParentId = "ParentId",
            Remark = "Remark",
            IsEnable = "IsEnable",
            Creator = "Creator",
            CreatedTime = "CreatedTime",
            Modifier = "Modifier",
            ModifiedTime = "ModifiedTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace BookCategoryService {
        const baseUrl = "Community/BookCategory";
        function Create(request: Serenity.SaveRequest<BookCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BookCategory/Create",
            Update = "Community/BookCategory/Update",
            Delete = "Community/BookCategory/Delete",
            Retrieve = "Community/BookCategory/Retrieve",
            List = "Community/BookCategory/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BookCommentForm {
        BookId: Serenity.IntegerEditor;
        CommentUserId: Serenity.IntegerEditor;
        ApprovalCount: Serenity.IntegerEditor;
        CommentContent: Serenity.StringEditor;
        ReplyCommentId: Serenity.IntegerEditor;
        CommentTime: Serenity.DateEditor;
    }
    class BookCommentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BookCommentRow {
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
    namespace BookCommentRow {
        const idProperty = "Id";
        const nameProperty = "CommentContent";
        const localTextPrefix = "Community.BookComment";
        const enum Fields {
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
declare namespace Sanctum.Community {
    namespace BookCommentService {
        const baseUrl = "Community/BookComment";
        function Create(request: Serenity.SaveRequest<BookCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookCommentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookCommentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BookComment/Create",
            Update = "Community/BookComment/Update",
            Delete = "Community/BookComment/Delete",
            Retrieve = "Community/BookComment/Retrieve",
            List = "Community/BookComment/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BookFriendForm {
        GroupId: Serenity.IntegerEditor;
        MemberId: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        ActiveLevel: Serenity.DecimalEditor;
        JoinTime: Serenity.DateEditor;
    }
    class BookFriendForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BookFriendGroupForm {
        GroupName: Serenity.StringEditor;
        OwnerId: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
    }
    class BookFriendGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BookFriendGroupRow {
        Id?: number;
        GroupName?: string;
        OwnerId?: number;
        OwnerNickName?: string;
        CreatedTime?: string;
    }
    namespace BookFriendGroupRow {
        const idProperty = "Id";
        const nameProperty = "GroupName";
        const localTextPrefix = "Community.BookFriendGroup";
        const enum Fields {
            Id = "Id",
            GroupName = "GroupName",
            OwnerId = "OwnerId",
            OwnerNickName = "OwnerNickName",
            CreatedTime = "CreatedTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace BookFriendGroupService {
        const baseUrl = "Community/BookFriendGroup";
        function Create(request: Serenity.SaveRequest<BookFriendGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookFriendGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookFriendGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookFriendGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BookFriendGroup/Create",
            Update = "Community/BookFriendGroup/Update",
            Delete = "Community/BookFriendGroup/Delete",
            Retrieve = "Community/BookFriendGroup/Retrieve",
            List = "Community/BookFriendGroup/List"
        }
    }
}
declare namespace Sanctum.Community {
    interface BookFriendRow {
        Id?: number;
        GroupId?: number;
        GroupName?: string;
        MemberId?: number;
        MemberNickName?: string;
        Status?: number;
        ActiveLevel?: number;
        JoinTime?: string;
    }
    namespace BookFriendRow {
        const idProperty = "Id";
        const localTextPrefix = "Community.BookFriend";
        const enum Fields {
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
declare namespace Sanctum.Community {
    namespace BookFriendService {
        const baseUrl = "Community/BookFriend";
        function Create(request: Serenity.SaveRequest<BookFriendRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookFriendRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookFriendRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookFriendRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BookFriend/Create",
            Update = "Community/BookFriend/Update",
            Delete = "Community/BookFriend/Delete",
            Retrieve = "Community/BookFriend/Retrieve",
            List = "Community/BookFriend/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BookshelfForm {
        BookshelfName: Serenity.StringEditor;
        AdornBackground: Serenity.StringEditor;
        Introduction: Serenity.StringEditor;
        Creator: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
        Modifier: Serenity.IntegerEditor;
        ModifiedTime: Serenity.DateEditor;
    }
    class BookshelfForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BookshelfRow {
        Id?: number;
        BookshelfName?: string;
        AdornBackground?: string;
        Introduction?: string;
        Creator?: number;
        CreatedTime?: string;
        Modifier?: number;
        ModifiedTime?: string;
    }
    namespace BookshelfRow {
        const idProperty = "Id";
        const nameProperty = "BookshelfName";
        const localTextPrefix = "Community.Bookshelf";
        const enum Fields {
            Id = "Id",
            BookshelfName = "BookshelfName",
            AdornBackground = "AdornBackground",
            Introduction = "Introduction",
            Creator = "Creator",
            CreatedTime = "CreatedTime",
            Modifier = "Modifier",
            ModifiedTime = "ModifiedTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace BookshelfService {
        const baseUrl = "Community/Bookshelf";
        function Create(request: Serenity.SaveRequest<BookshelfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookshelfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookshelfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookshelfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/Bookshelf/Create",
            Update = "Community/Bookshelf/Update",
            Delete = "Community/Bookshelf/Delete",
            Retrieve = "Community/Bookshelf/Retrieve",
            List = "Community/Bookshelf/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BorrowApplyForm {
        ApplyBookId: Serenity.IntegerEditor;
        Applier: Serenity.IntegerEditor;
        ApplyTime: Serenity.DateEditor;
        ApplyStatus: Serenity.IntegerEditor;
    }
    class BorrowApplyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BorrowApplyRow {
        Id?: number;
        ApplyBookId?: number;
        BookName?: string;
        Applier?: number;
        ApplierNickName?: string;
        ApplyTime?: string;
        ApplyStatus?: number;
    }
    namespace BorrowApplyRow {
        const idProperty = "Id";
        const localTextPrefix = "Community.BorrowApply";
        const enum Fields {
            Id = "Id",
            ApplyBookId = "ApplyBookId",
            BookName = "BookName",
            Applier = "Applier",
            ApplierNickName = "ApplierNickName",
            ApplyTime = "ApplyTime",
            ApplyStatus = "ApplyStatus"
        }
    }
}
declare namespace Sanctum.Community {
    namespace BorrowApplyService {
        const baseUrl = "Community/BorrowApply";
        function Create(request: Serenity.SaveRequest<BorrowApplyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BorrowApplyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BorrowApplyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BorrowApplyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BorrowApply/Create",
            Update = "Community/BorrowApply/Update",
            Delete = "Community/BorrowApply/Delete",
            Retrieve = "Community/BorrowApply/Retrieve",
            List = "Community/BorrowApply/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BorrowRecordForm {
        DebitUserId: Serenity.IntegerEditor;
        BorrowTime: Serenity.DateEditor;
        BookId: Serenity.IntegerEditor;
        BorrowRequirementId: Serenity.IntegerEditor;
        BorrowApplyId: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        AcceptTime: Serenity.DateEditor;
        RevertTime: Serenity.DateEditor;
        DebitRemarkContent: Serenity.StringEditor;
        DebitRemarkTime: Serenity.DateEditor;
        RenterRemarkContent: Serenity.StringEditor;
        RenterRemarkTime: Serenity.DateEditor;
    }
    class BorrowRecordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BorrowRecordRow {
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
    namespace BorrowRecordRow {
        const idProperty = "Id";
        const nameProperty = "DebitRemarkContent";
        const localTextPrefix = "Community.BorrowRecord";
        const enum Fields {
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
declare namespace Sanctum.Community {
    namespace BorrowRecordService {
        const baseUrl = "Community/BorrowRecord";
        function Create(request: Serenity.SaveRequest<BorrowRecordRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BorrowRecordRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BorrowRecordRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BorrowRecordRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BorrowRecord/Create",
            Update = "Community/BorrowRecord/Update",
            Delete = "Community/BorrowRecord/Delete",
            Retrieve = "Community/BorrowRecord/Retrieve",
            List = "Community/BorrowRecord/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface BorrowRequirementForm {
        PublisherID: Serenity.IntegerEditor;
        BookName: Serenity.StringEditor;
        BookCategory: Serenity.StringEditor;
        IsPaid: Serenity.BooleanEditor;
        Status: Serenity.IntegerEditor;
        ViewCount: Serenity.IntegerEditor;
        PublishTime: Serenity.DateEditor;
    }
    class BorrowRequirementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface BorrowRequirementRow {
        Id?: number;
        PublisherID?: number;
        PublisherNickName?: string;
        BookName?: string;
        BookCategory?: string;
        IsPaid?: boolean;
        Status?: number;
        ViewCount?: number;
        PublishTime?: string;
    }
    namespace BorrowRequirementRow {
        const idProperty = "Id";
        const nameProperty = "BookName";
        const localTextPrefix = "Community.BorrowRequirement";
        const enum Fields {
            Id = "Id",
            PublisherID = "PublisherID",
            PublisherNickName = "PublisherNickName",
            BookName = "BookName",
            BookCategory = "BookCategory",
            IsPaid = "IsPaid",
            Status = "Status",
            ViewCount = "ViewCount",
            PublishTime = "PublishTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace BorrowRequirementService {
        const baseUrl = "Community/BorrowRequirement";
        function Create(request: Serenity.SaveRequest<BorrowRequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BorrowRequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BorrowRequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BorrowRequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/BorrowRequirement/Create",
            Update = "Community/BorrowRequirement/Update",
            Delete = "Community/BorrowRequirement/Delete",
            Retrieve = "Community/BorrowRequirement/Retrieve",
            List = "Community/BorrowRequirement/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface DonationRecordForm {
        DonateUserId: Serenity.IntegerEditor;
        DonatedTime: Serenity.DateEditor;
        BookId: Serenity.IntegerEditor;
        DonationStyle: Serenity.IntegerEditor;
        Comment: Serenity.StringEditor;
        IsReceived: Serenity.BooleanEditor;
        Receiver: Serenity.StringEditor;
        Charger: Serenity.StringEditor;
        ReceivedTime: Serenity.DateEditor;
    }
    class DonationRecordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface DonationRecordRow {
        Id?: number;
        DonateUserId?: number;
        DonateNickName?: string;
        DonatedTime?: string;
        BookId?: number;
        BookName?: string;
        DonationStyle?: number;
        Comment?: string;
        IsReceived?: boolean;
        Receiver?: string;
        Charger?: string;
        ReceivedTime?: string;
    }
    namespace DonationRecordRow {
        const idProperty = "Id";
        const nameProperty = "Comment";
        const localTextPrefix = "Community.DonationRecord";
        const enum Fields {
            Id = "Id",
            DonateUserId = "DonateUserId",
            DonateNickName = "DonateNickName",
            DonatedTime = "DonatedTime",
            BookId = "BookId",
            BookName = "BookName",
            DonationStyle = "DonationStyle",
            Comment = "Comment",
            IsReceived = "IsReceived",
            Receiver = "Receiver",
            Charger = "Charger",
            ReceivedTime = "ReceivedTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace DonationRecordService {
        const baseUrl = "Community/DonationRecord";
        function Create(request: Serenity.SaveRequest<DonationRecordRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DonationRecordRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DonationRecordRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DonationRecordRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/DonationRecord/Create",
            Update = "Community/DonationRecord/Update",
            Delete = "Community/DonationRecord/Delete",
            Retrieve = "Community/DonationRecord/Retrieve",
            List = "Community/DonationRecord/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface PersonalityAnalysisForm {
        FeatureName: Serenity.StringEditor;
        FeatureDecription: Serenity.StringEditor;
        MatchCategories: Serenity.StringEditor;
        Creator: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
        Modifier: Serenity.IntegerEditor;
        ModifiedTime: Serenity.DateEditor;
    }
    class PersonalityAnalysisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface PersonalityAnalysisRow {
        Id?: number;
        FeatureName?: string;
        FeatureDecription?: string;
        MatchCategories?: string;
        Creator?: number;
        CreatedTime?: string;
        Modifier?: number;
        ModifiedTime?: string;
    }
    namespace PersonalityAnalysisRow {
        const idProperty = "Id";
        const nameProperty = "FeatureName";
        const localTextPrefix = "Community.PersonalityAnalysis";
        const enum Fields {
            Id = "Id",
            FeatureName = "FeatureName",
            FeatureDecription = "FeatureDecription",
            MatchCategories = "MatchCategories",
            Creator = "Creator",
            CreatedTime = "CreatedTime",
            Modifier = "Modifier",
            ModifiedTime = "ModifiedTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace PersonalityAnalysisService {
        const baseUrl = "Community/PersonalityAnalysis";
        function Create(request: Serenity.SaveRequest<PersonalityAnalysisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PersonalityAnalysisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PersonalityAnalysisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PersonalityAnalysisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/PersonalityAnalysis/Create",
            Update = "Community/PersonalityAnalysis/Update",
            Delete = "Community/PersonalityAnalysis/Delete",
            Retrieve = "Community/PersonalityAnalysis/Retrieve",
            List = "Community/PersonalityAnalysis/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface PrivateBookForm {
        BookName: Serenity.StringEditor;
        BookCategories: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        Publisher: Serenity.StringEditor;
        CoverImage: Serenity.StringEditor;
        RecommendLevel: Serenity.DecimalEditor;
        Insight: Serenity.StringEditor;
        Summary: Serenity.StringEditor;
        NeedPaid: Serenity.BooleanEditor;
        BookshelfId: Serenity.IntegerEditor;
        OffShelves: Serenity.BooleanEditor;
        Status: Serenity.IntegerEditor;
        Uploader: Serenity.IntegerEditor;
        UploadTime: Serenity.DateEditor;
    }
    class PrivateBookForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface PrivateBookRow {
        Id?: number;
        BookName?: string;
        BookCategories?: string;
        Author?: string;
        Price?: number;
        Publisher?: string;
        CoverImage?: string;
        RecommendLevel?: number;
        Insight?: string;
        Summary?: string;
        NeedPaid?: boolean;
        BookshelfId?: number;
        BookshelfName?: string;
        OffShelves?: boolean;
        Status?: number;
        Uploader?: number;
        UploaderNickName?: string;
        UploadTime?: string;
    }
    namespace PrivateBookRow {
        const idProperty = "Id";
        const nameProperty = "BookName";
        const localTextPrefix = "Community.PrivateBook";
        const enum Fields {
            Id = "Id",
            BookName = "BookName",
            BookCategories = "BookCategories",
            Author = "Author",
            Price = "Price",
            Publisher = "Publisher",
            CoverImage = "CoverImage",
            RecommendLevel = "RecommendLevel",
            Insight = "Insight",
            Summary = "Summary",
            NeedPaid = "NeedPaid",
            BookshelfId = "BookshelfId",
            BookshelfName = "BookshelfName",
            OffShelves = "OffShelves",
            Status = "Status",
            Uploader = "Uploader",
            UploaderNickName = "UploaderNickName",
            UploadTime = "UploadTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace PrivateBookService {
        const baseUrl = "Community/PrivateBook";
        function Create(request: Serenity.SaveRequest<PrivateBookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PrivateBookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrivateBookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrivateBookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/PrivateBook/Create",
            Update = "Community/PrivateBook/Update",
            Delete = "Community/PrivateBook/Delete",
            Retrieve = "Community/PrivateBook/Retrieve",
            List = "Community/PrivateBook/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface RecommendBookForm {
        BookName: Serenity.StringEditor;
        BookCategory: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        Exponent: Serenity.DecimalEditor;
        BookRemark: Serenity.StringEditor;
        Instroduction: Serenity.StringEditor;
        ViewCount: Serenity.IntegerEditor;
        HeatLevel: Serenity.DecimalEditor;
        Referrer: Serenity.IntegerEditor;
        ReferTime: Serenity.DateEditor;
    }
    class RecommendBookForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface RecommendBookRow {
        Id?: number;
        BookName?: string;
        BookCategory?: string;
        Author?: string;
        Exponent?: number;
        BookRemark?: string;
        Instroduction?: string;
        ViewCount?: number;
        HeatLevel?: number;
        Referrer?: number;
        ReferrerNickName?: string;
        ReferTime?: string;
    }
    namespace RecommendBookRow {
        const idProperty = "Id";
        const nameProperty = "BookName";
        const localTextPrefix = "Community.RecommendBook";
        const enum Fields {
            Id = "Id",
            BookName = "BookName",
            BookCategory = "BookCategory",
            Author = "Author",
            Exponent = "Exponent",
            BookRemark = "BookRemark",
            Instroduction = "Instroduction",
            ViewCount = "ViewCount",
            HeatLevel = "HeatLevel",
            Referrer = "Referrer",
            ReferrerNickName = "ReferrerNickName",
            ReferTime = "ReferTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace RecommendBookService {
        const baseUrl = "Community/RecommendBook";
        function Create(request: Serenity.SaveRequest<RecommendBookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RecommendBookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RecommendBookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RecommendBookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/RecommendBook/Create",
            Update = "Community/RecommendBook/Update",
            Delete = "Community/RecommendBook/Delete",
            Retrieve = "Community/RecommendBook/Retrieve",
            List = "Community/RecommendBook/List"
        }
    }
}
declare namespace Sanctum.Community {
}
declare namespace Sanctum.Community {
    interface WeiXinUserForm {
        OpenId: Serenity.StringEditor;
        NickName: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Province: Serenity.StringEditor;
        City: Serenity.StringEditor;
        HeaderImage: Serenity.ImageUploadEditor;
        Mobile: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        HonourRank: Serenity.DecimalEditor;
        KnowledgeRank: Serenity.DecimalEditor;
        PersonalityEval: Serenity.StringEditor;
        HobbyCategory: Serenity.StringEditor;
        ActiveLongitude: Serenity.DecimalEditor;
        ActiveLatitude: Serenity.DecimalEditor;
        LastActiveTime: Serenity.DateEditor;
    }
    class WeiXinUserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Community {
    interface WeiXinUserRow {
        ID?: number;
        OpenId?: string;
        NickName?: string;
        Country?: string;
        Province?: string;
        City?: string;
        HeaderImage?: string;
        Mobile?: string;
        Address?: string;
        HonourRank?: number;
        KnowledgeRank?: number;
        PersonalityEval?: string;
        HobbyCategory?: string;
        ActiveLongitude?: number;
        ActiveLatitude?: number;
        LastActiveTime?: string;
    }
    namespace WeiXinUserRow {
        const idProperty = "ID";
        const nameProperty = "OpenId";
        const localTextPrefix = "Community.WeiXinUser";
        const enum Fields {
            ID = "ID",
            OpenId = "OpenId",
            NickName = "NickName",
            Country = "Country",
            Province = "Province",
            City = "City",
            HeaderImage = "HeaderImage",
            Mobile = "Mobile",
            Address = "Address",
            HonourRank = "HonourRank",
            KnowledgeRank = "KnowledgeRank",
            PersonalityEval = "PersonalityEval",
            HobbyCategory = "HobbyCategory",
            ActiveLongitude = "ActiveLongitude",
            ActiveLatitude = "ActiveLatitude",
            LastActiveTime = "LastActiveTime"
        }
    }
}
declare namespace Sanctum.Community {
    namespace WeiXinUserService {
        const baseUrl = "Community/WeiXinUser";
        function Create(request: Serenity.SaveRequest<WeiXinUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WeiXinUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WeiXinUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WeiXinUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Community/WeiXinUser/Create",
            Update = "Community/WeiXinUser/Update",
            Delete = "Community/WeiXinUser/Delete",
            Retrieve = "Community/WeiXinUser/Retrieve",
            List = "Community/WeiXinUser/List"
        }
    }
}
declare namespace Sanctum {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Sanctum {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Sanctum {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Sanctum {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Sanctum.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Sanctum.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Sanctum.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Sanctum.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Sanctum.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Sanctum.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Sanctum {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Sanctum.LanguageList {
    function getValue(): string[][];
}
declare namespace Sanctum.ScriptInitialization {
}
declare namespace Sanctum.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Sanctum.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Sanctum.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Sanctum.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Sanctum.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace Sanctum.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Sanctum.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Sanctum.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Sanctum.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Sanctum.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Sanctum.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Sanctum.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Sanctum {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Sanctum.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Sanctum.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Sanctum.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Sanctum.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Sanctum.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Sanctum.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Sanctum {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Sanctum.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Sanctum.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Sanctum.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Sanctum.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Sanctum.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Sanctum.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Sanctum.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Sanctum.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Sanctum.Community {
    class AreaDialog extends Serenity.EntityDialog<AreaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AreaForm;
    }
}
declare namespace Sanctum.Community {
    class AreaGrid extends Serenity.EntityGrid<AreaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AreaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BookCategoryDialog extends Serenity.EntityDialog<BookCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BookCategoryForm;
    }
}
declare namespace Sanctum.Community {
    class BookCategoryGrid extends Serenity.EntityGrid<BookCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookCategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BookCommentDialog extends Serenity.EntityDialog<BookCommentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BookCommentForm;
    }
}
declare namespace Sanctum.Community {
    class BookCommentGrid extends Serenity.EntityGrid<BookCommentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookCommentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BookFriendDialog extends Serenity.EntityDialog<BookFriendRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: BookFriendForm;
    }
}
declare namespace Sanctum.Community {
    class BookFriendGrid extends Serenity.EntityGrid<BookFriendRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookFriendDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BookFriendGroupDialog extends Serenity.EntityDialog<BookFriendGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BookFriendGroupForm;
    }
}
declare namespace Sanctum.Community {
    class BookFriendGroupGrid extends Serenity.EntityGrid<BookFriendGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookFriendGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BookshelfDialog extends Serenity.EntityDialog<BookshelfRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BookshelfForm;
    }
}
declare namespace Sanctum.Community {
    class BookshelfGrid extends Serenity.EntityGrid<BookshelfRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookshelfDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BorrowApplyDialog extends Serenity.EntityDialog<BorrowApplyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: BorrowApplyForm;
    }
}
declare namespace Sanctum.Community {
    class BorrowApplyGrid extends Serenity.EntityGrid<BorrowApplyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BorrowApplyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BorrowRecordDialog extends Serenity.EntityDialog<BorrowRecordRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BorrowRecordForm;
    }
}
declare namespace Sanctum.Community {
    class BorrowRecordGrid extends Serenity.EntityGrid<BorrowRecordRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BorrowRecordDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class BorrowRequirementDialog extends Serenity.EntityDialog<BorrowRequirementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BorrowRequirementForm;
    }
}
declare namespace Sanctum.Community {
    class BorrowRequirementGrid extends Serenity.EntityGrid<BorrowRequirementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BorrowRequirementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class DonationRecordDialog extends Serenity.EntityDialog<DonationRecordRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DonationRecordForm;
    }
}
declare namespace Sanctum.Community {
    class DonationRecordGrid extends Serenity.EntityGrid<DonationRecordRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DonationRecordDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class PersonalityAnalysisDialog extends Serenity.EntityDialog<PersonalityAnalysisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PersonalityAnalysisForm;
    }
}
declare namespace Sanctum.Community {
    class PersonalityAnalysisGrid extends Serenity.EntityGrid<PersonalityAnalysisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonalityAnalysisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class PrivateBookDialog extends Serenity.EntityDialog<PrivateBookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PrivateBookForm;
    }
}
declare namespace Sanctum.Community {
    class PrivateBookGrid extends Serenity.EntityGrid<PrivateBookRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PrivateBookDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class RecommendBookDialog extends Serenity.EntityDialog<RecommendBookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RecommendBookForm;
    }
}
declare namespace Sanctum.Community {
    class RecommendBookGrid extends Serenity.EntityGrid<RecommendBookRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RecommendBookDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Community {
    class WeiXinUserDialog extends Serenity.EntityDialog<WeiXinUserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WeiXinUserForm;
    }
}
declare namespace Sanctum.Community {
    class WeiXinUserGrid extends Serenity.EntityGrid<WeiXinUserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WeiXinUserDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Sanctum.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Sanctum.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
