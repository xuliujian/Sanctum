﻿var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var AreaForm = /** @class */ (function (_super) {
            __extends(AreaForm, _super);
            function AreaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AreaForm.init) {
                    AreaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(AreaForm, [
                        'Pid', w0,
                        'ShortName', w0,
                        'Name', w0,
                        'FullName', w0,
                        'Level', w1,
                        'PinYin', w0,
                        'Code', w0,
                        'ZipCode', w0,
                        'FirstChar', w0,
                        'Longitude', w2,
                        'Latitude', w2
                    ]);
                }
                return _this;
            }
            AreaForm.formKey = 'Community.Area';
            return AreaForm;
        }(Serenity.PrefixedContext));
        Community.AreaForm = AreaForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var AreaRow;
        (function (AreaRow) {
            AreaRow.idProperty = 'Id';
            AreaRow.nameProperty = 'Id';
            AreaRow.localTextPrefix = 'Community.Area';
        })(AreaRow = Community.AreaRow || (Community.AreaRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var AreaService;
        (function (AreaService) {
            AreaService.baseUrl = 'Community/Area';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AreaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AreaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AreaService = Community.AreaService || (Community.AreaService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCategoryForm = /** @class */ (function (_super) {
            __extends(BookCategoryForm, _super);
            function BookCategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BookCategoryForm.init) {
                    BookCategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(BookCategoryForm, [
                        'CategoryName', w0,
                        'ParentId', w1,
                        'Remark', w0,
                        'IsEnable', w2,
                        'Creator', w1,
                        'CreatedTime', w3,
                        'Modifier', w1,
                        'ModifiedTime', w3
                    ]);
                }
                return _this;
            }
            BookCategoryForm.formKey = 'Community.BookCategory';
            return BookCategoryForm;
        }(Serenity.PrefixedContext));
        Community.BookCategoryForm = BookCategoryForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCategoryRow;
        (function (BookCategoryRow) {
            BookCategoryRow.idProperty = 'Id';
            BookCategoryRow.nameProperty = 'CategoryName';
            BookCategoryRow.localTextPrefix = 'Community.BookCategory';
        })(BookCategoryRow = Community.BookCategoryRow || (Community.BookCategoryRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCategoryService;
        (function (BookCategoryService) {
            BookCategoryService.baseUrl = 'Community/BookCategory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BookCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(BookCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BookCategoryService = Community.BookCategoryService || (Community.BookCategoryService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCommentForm = /** @class */ (function (_super) {
            __extends(BookCommentForm, _super);
            function BookCommentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BookCommentForm.init) {
                    BookCommentForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BookCommentForm, [
                        'BookId', w0,
                        'CommentUserId', w0,
                        'ApprovalCount', w0,
                        'CommentContent', w1,
                        'ReplyCommentId', w0,
                        'CommentTime', w2
                    ]);
                }
                return _this;
            }
            BookCommentForm.formKey = 'Community.BookComment';
            return BookCommentForm;
        }(Serenity.PrefixedContext));
        Community.BookCommentForm = BookCommentForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCommentRow;
        (function (BookCommentRow) {
            BookCommentRow.idProperty = 'Id';
            BookCommentRow.nameProperty = 'CommentContent';
            BookCommentRow.localTextPrefix = 'Community.BookComment';
        })(BookCommentRow = Community.BookCommentRow || (Community.BookCommentRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCommentService;
        (function (BookCommentService) {
            BookCommentService.baseUrl = 'Community/BookComment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BookCommentService[x] = function (r, s, o) {
                    return Q.serviceRequest(BookCommentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BookCommentService = Community.BookCommentService || (Community.BookCommentService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendForm = /** @class */ (function (_super) {
            __extends(BookFriendForm, _super);
            function BookFriendForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BookFriendForm.init) {
                    BookFriendForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BookFriendForm, [
                        'GroupId', w0,
                        'MemberId', w0,
                        'Status', w0,
                        'ActiveLevel', w1,
                        'JoinTime', w2
                    ]);
                }
                return _this;
            }
            BookFriendForm.formKey = 'Community.BookFriend';
            return BookFriendForm;
        }(Serenity.PrefixedContext));
        Community.BookFriendForm = BookFriendForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendGroupForm = /** @class */ (function (_super) {
            __extends(BookFriendGroupForm, _super);
            function BookFriendGroupForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BookFriendGroupForm.init) {
                    BookFriendGroupForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BookFriendGroupForm, [
                        'GroupName', w0,
                        'OwnerId', w1,
                        'CreatedTime', w2
                    ]);
                }
                return _this;
            }
            BookFriendGroupForm.formKey = 'Community.BookFriendGroup';
            return BookFriendGroupForm;
        }(Serenity.PrefixedContext));
        Community.BookFriendGroupForm = BookFriendGroupForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendGroupRow;
        (function (BookFriendGroupRow) {
            BookFriendGroupRow.idProperty = 'Id';
            BookFriendGroupRow.nameProperty = 'GroupName';
            BookFriendGroupRow.localTextPrefix = 'Community.BookFriendGroup';
        })(BookFriendGroupRow = Community.BookFriendGroupRow || (Community.BookFriendGroupRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendGroupService;
        (function (BookFriendGroupService) {
            BookFriendGroupService.baseUrl = 'Community/BookFriendGroup';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BookFriendGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(BookFriendGroupService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BookFriendGroupService = Community.BookFriendGroupService || (Community.BookFriendGroupService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendRow;
        (function (BookFriendRow) {
            BookFriendRow.idProperty = 'Id';
            BookFriendRow.localTextPrefix = 'Community.BookFriend';
        })(BookFriendRow = Community.BookFriendRow || (Community.BookFriendRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendService;
        (function (BookFriendService) {
            BookFriendService.baseUrl = 'Community/BookFriend';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BookFriendService[x] = function (r, s, o) {
                    return Q.serviceRequest(BookFriendService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BookFriendService = Community.BookFriendService || (Community.BookFriendService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookshelfForm = /** @class */ (function (_super) {
            __extends(BookshelfForm, _super);
            function BookshelfForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BookshelfForm.init) {
                    BookshelfForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BookshelfForm, [
                        'BookshelfName', w0,
                        'AdornBackground', w0,
                        'Introduction', w0,
                        'Creator', w1,
                        'CreatedTime', w2,
                        'Modifier', w1,
                        'ModifiedTime', w2
                    ]);
                }
                return _this;
            }
            BookshelfForm.formKey = 'Community.Bookshelf';
            return BookshelfForm;
        }(Serenity.PrefixedContext));
        Community.BookshelfForm = BookshelfForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookshelfRow;
        (function (BookshelfRow) {
            BookshelfRow.idProperty = 'Id';
            BookshelfRow.nameProperty = 'BookshelfName';
            BookshelfRow.localTextPrefix = 'Community.Bookshelf';
        })(BookshelfRow = Community.BookshelfRow || (Community.BookshelfRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookshelfService;
        (function (BookshelfService) {
            BookshelfService.baseUrl = 'Community/Bookshelf';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BookshelfService[x] = function (r, s, o) {
                    return Q.serviceRequest(BookshelfService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BookshelfService = Community.BookshelfService || (Community.BookshelfService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowApplyForm = /** @class */ (function (_super) {
            __extends(BorrowApplyForm, _super);
            function BorrowApplyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BorrowApplyForm.init) {
                    BorrowApplyForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(BorrowApplyForm, [
                        'ApplyBookId', w0,
                        'Applier', w0,
                        'ApplyTime', w1,
                        'ApplyStatus', w0
                    ]);
                }
                return _this;
            }
            BorrowApplyForm.formKey = 'Community.BorrowApply';
            return BorrowApplyForm;
        }(Serenity.PrefixedContext));
        Community.BorrowApplyForm = BorrowApplyForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowApplyRow;
        (function (BorrowApplyRow) {
            BorrowApplyRow.idProperty = 'Id';
            BorrowApplyRow.localTextPrefix = 'Community.BorrowApply';
        })(BorrowApplyRow = Community.BorrowApplyRow || (Community.BorrowApplyRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowApplyService;
        (function (BorrowApplyService) {
            BorrowApplyService.baseUrl = 'Community/BorrowApply';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BorrowApplyService[x] = function (r, s, o) {
                    return Q.serviceRequest(BorrowApplyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BorrowApplyService = Community.BorrowApplyService || (Community.BorrowApplyService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRecordForm = /** @class */ (function (_super) {
            __extends(BorrowRecordForm, _super);
            function BorrowRecordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BorrowRecordForm.init) {
                    BorrowRecordForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(BorrowRecordForm, [
                        'DebitUserId', w0,
                        'BorrowTime', w1,
                        'BookId', w0,
                        'BorrowRequirementId', w0,
                        'BorrowApplyId', w0,
                        'Status', w0,
                        'AcceptTime', w1,
                        'RevertTime', w1,
                        'DebitRemarkContent', w2,
                        'DebitRemarkTime', w1,
                        'RenterRemarkContent', w2,
                        'RenterRemarkTime', w1
                    ]);
                }
                return _this;
            }
            BorrowRecordForm.formKey = 'Community.BorrowRecord';
            return BorrowRecordForm;
        }(Serenity.PrefixedContext));
        Community.BorrowRecordForm = BorrowRecordForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRecordRow;
        (function (BorrowRecordRow) {
            BorrowRecordRow.idProperty = 'Id';
            BorrowRecordRow.nameProperty = 'DebitRemarkContent';
            BorrowRecordRow.localTextPrefix = 'Community.BorrowRecord';
        })(BorrowRecordRow = Community.BorrowRecordRow || (Community.BorrowRecordRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRecordService;
        (function (BorrowRecordService) {
            BorrowRecordService.baseUrl = 'Community/BorrowRecord';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BorrowRecordService[x] = function (r, s, o) {
                    return Q.serviceRequest(BorrowRecordService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BorrowRecordService = Community.BorrowRecordService || (Community.BorrowRecordService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRequirementForm = /** @class */ (function (_super) {
            __extends(BorrowRequirementForm, _super);
            function BorrowRequirementForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BorrowRequirementForm.init) {
                    BorrowRequirementForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(BorrowRequirementForm, [
                        'PublisherID', w0,
                        'BookName', w1,
                        'BookCategory', w1,
                        'IsPaid', w2,
                        'Status', w0,
                        'ViewCount', w0,
                        'PublishTime', w3
                    ]);
                }
                return _this;
            }
            BorrowRequirementForm.formKey = 'Community.BorrowRequirement';
            return BorrowRequirementForm;
        }(Serenity.PrefixedContext));
        Community.BorrowRequirementForm = BorrowRequirementForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRequirementRow;
        (function (BorrowRequirementRow) {
            BorrowRequirementRow.idProperty = 'Id';
            BorrowRequirementRow.nameProperty = 'BookName';
            BorrowRequirementRow.localTextPrefix = 'Community.BorrowRequirement';
        })(BorrowRequirementRow = Community.BorrowRequirementRow || (Community.BorrowRequirementRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRequirementService;
        (function (BorrowRequirementService) {
            BorrowRequirementService.baseUrl = 'Community/BorrowRequirement';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BorrowRequirementService[x] = function (r, s, o) {
                    return Q.serviceRequest(BorrowRequirementService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BorrowRequirementService = Community.BorrowRequirementService || (Community.BorrowRequirementService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var DonationRecordForm = /** @class */ (function (_super) {
            __extends(DonationRecordForm, _super);
            function DonationRecordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DonationRecordForm.init) {
                    DonationRecordForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(DonationRecordForm, [
                        'DonateUserId', w0,
                        'DonatedTime', w1,
                        'BookId', w0,
                        'DonationStyle', w0,
                        'Comment', w2,
                        'IsReceived', w3,
                        'Receiver', w2,
                        'Charger', w2,
                        'ReceivedTime', w1
                    ]);
                }
                return _this;
            }
            DonationRecordForm.formKey = 'Community.DonationRecord';
            return DonationRecordForm;
        }(Serenity.PrefixedContext));
        Community.DonationRecordForm = DonationRecordForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var DonationRecordRow;
        (function (DonationRecordRow) {
            DonationRecordRow.idProperty = 'Id';
            DonationRecordRow.nameProperty = 'Comment';
            DonationRecordRow.localTextPrefix = 'Community.DonationRecord';
        })(DonationRecordRow = Community.DonationRecordRow || (Community.DonationRecordRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var DonationRecordService;
        (function (DonationRecordService) {
            DonationRecordService.baseUrl = 'Community/DonationRecord';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DonationRecordService[x] = function (r, s, o) {
                    return Q.serviceRequest(DonationRecordService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DonationRecordService = Community.DonationRecordService || (Community.DonationRecordService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PersonalityAnalysisForm = /** @class */ (function (_super) {
            __extends(PersonalityAnalysisForm, _super);
            function PersonalityAnalysisForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PersonalityAnalysisForm.init) {
                    PersonalityAnalysisForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(PersonalityAnalysisForm, [
                        'FeatureName', w0,
                        'FeatureDecription', w0,
                        'MatchCategories', w0,
                        'Creator', w1,
                        'CreatedTime', w2,
                        'Modifier', w1,
                        'ModifiedTime', w2
                    ]);
                }
                return _this;
            }
            PersonalityAnalysisForm.formKey = 'Community.PersonalityAnalysis';
            return PersonalityAnalysisForm;
        }(Serenity.PrefixedContext));
        Community.PersonalityAnalysisForm = PersonalityAnalysisForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PersonalityAnalysisRow;
        (function (PersonalityAnalysisRow) {
            PersonalityAnalysisRow.idProperty = 'Id';
            PersonalityAnalysisRow.nameProperty = 'FeatureName';
            PersonalityAnalysisRow.localTextPrefix = 'Community.PersonalityAnalysis';
        })(PersonalityAnalysisRow = Community.PersonalityAnalysisRow || (Community.PersonalityAnalysisRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PersonalityAnalysisService;
        (function (PersonalityAnalysisService) {
            PersonalityAnalysisService.baseUrl = 'Community/PersonalityAnalysis';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PersonalityAnalysisService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonalityAnalysisService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonalityAnalysisService = Community.PersonalityAnalysisService || (Community.PersonalityAnalysisService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PrivateBookForm = /** @class */ (function (_super) {
            __extends(PrivateBookForm, _super);
            function PrivateBookForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PrivateBookForm.init) {
                    PrivateBookForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(PrivateBookForm, [
                        'BookName', w0,
                        'BookCategories', w0,
                        'Author', w0,
                        'Price', w1,
                        'Publisher', w0,
                        'CoverImage', w0,
                        'RecommendLevel', w1,
                        'Insight', w0,
                        'Summary', w0,
                        'NeedPaid', w2,
                        'BookshelfId', w3,
                        'OffShelves', w2,
                        'Status', w3,
                        'Uploader', w3,
                        'UploadTime', w4
                    ]);
                }
                return _this;
            }
            PrivateBookForm.formKey = 'Community.PrivateBook';
            return PrivateBookForm;
        }(Serenity.PrefixedContext));
        Community.PrivateBookForm = PrivateBookForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PrivateBookRow;
        (function (PrivateBookRow) {
            PrivateBookRow.idProperty = 'Id';
            PrivateBookRow.nameProperty = 'BookName';
            PrivateBookRow.localTextPrefix = 'Community.PrivateBook';
        })(PrivateBookRow = Community.PrivateBookRow || (Community.PrivateBookRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PrivateBookService;
        (function (PrivateBookService) {
            PrivateBookService.baseUrl = 'Community/PrivateBook';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PrivateBookService[x] = function (r, s, o) {
                    return Q.serviceRequest(PrivateBookService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PrivateBookService = Community.PrivateBookService || (Community.PrivateBookService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var RecommendBookForm = /** @class */ (function (_super) {
            __extends(RecommendBookForm, _super);
            function RecommendBookForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RecommendBookForm.init) {
                    RecommendBookForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(RecommendBookForm, [
                        'BookName', w0,
                        'BookCategory', w0,
                        'Author', w0,
                        'Exponent', w1,
                        'BookRemark', w0,
                        'Instroduction', w0,
                        'ViewCount', w2,
                        'HeatLevel', w1,
                        'Referrer', w2,
                        'ReferTime', w3
                    ]);
                }
                return _this;
            }
            RecommendBookForm.formKey = 'Community.RecommendBook';
            return RecommendBookForm;
        }(Serenity.PrefixedContext));
        Community.RecommendBookForm = RecommendBookForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var RecommendBookRow;
        (function (RecommendBookRow) {
            RecommendBookRow.idProperty = 'Id';
            RecommendBookRow.nameProperty = 'BookName';
            RecommendBookRow.localTextPrefix = 'Community.RecommendBook';
        })(RecommendBookRow = Community.RecommendBookRow || (Community.RecommendBookRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var RecommendBookService;
        (function (RecommendBookService) {
            RecommendBookService.baseUrl = 'Community/RecommendBook';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RecommendBookService[x] = function (r, s, o) {
                    return Q.serviceRequest(RecommendBookService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RecommendBookService = Community.RecommendBookService || (Community.RecommendBookService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var WeiXinUserForm = /** @class */ (function (_super) {
            __extends(WeiXinUserForm, _super);
            function WeiXinUserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WeiXinUserForm.init) {
                    WeiXinUserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(WeiXinUserForm, [
                        'OpenId', w0,
                        'NickName', w0,
                        'Country', w0,
                        'Province', w0,
                        'City', w0,
                        'HeaderImage', w1,
                        'Mobile', w0,
                        'Address', w0,
                        'HonourRank', w2,
                        'KnowledgeRank', w2,
                        'PersonalityEval', w0,
                        'HobbyCategory', w0,
                        'ActiveLongitude', w2,
                        'ActiveLatitude', w2,
                        'LastActiveTime', w3
                    ]);
                }
                return _this;
            }
            WeiXinUserForm.formKey = 'Community.WeiXinUser';
            return WeiXinUserForm;
        }(Serenity.PrefixedContext));
        Community.WeiXinUserForm = WeiXinUserForm;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var WeiXinUserRow;
        (function (WeiXinUserRow) {
            WeiXinUserRow.idProperty = 'ID';
            WeiXinUserRow.nameProperty = 'OpenId';
            WeiXinUserRow.localTextPrefix = 'Community.WeiXinUser';
        })(WeiXinUserRow = Community.WeiXinUserRow || (Community.WeiXinUserRow = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var WeiXinUserService;
        (function (WeiXinUserService) {
            WeiXinUserService.baseUrl = 'Community/WeiXinUser';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WeiXinUserService[x] = function (r, s, o) {
                    return Q.serviceRequest(WeiXinUserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WeiXinUserService = Community.WeiXinUserService || (Community.WeiXinUserService = {}));
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Sanctum.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Sanctum.LanguageList || (Sanctum.LanguageList = {}));
})(Sanctum || (Sanctum = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Sanctum;
(function (Sanctum) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Sanctum');
        Serenity.EntityDialog.defaultLanguageList = Sanctum.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Sanctum.ScriptInitialization || (Sanctum.ScriptInitialization = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Sanctum.Administration || (Sanctum.Administration = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Sanctum.BasicProgressDialog = BasicProgressDialog;
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Sanctum.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Sanctum.DialogUtils || (Sanctum.DialogUtils = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Sanctum.StaticTextBlock = StaticTextBlock;
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Sanctum.Common || (Sanctum.Common = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var AreaDialog = /** @class */ (function (_super) {
            __extends(AreaDialog, _super);
            function AreaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.AreaForm(_this.idPrefix);
                return _this;
            }
            AreaDialog.prototype.getFormKey = function () { return Community.AreaForm.formKey; };
            AreaDialog.prototype.getIdProperty = function () { return Community.AreaRow.idProperty; };
            AreaDialog.prototype.getLocalTextPrefix = function () { return Community.AreaRow.localTextPrefix; };
            AreaDialog.prototype.getNameProperty = function () { return Community.AreaRow.nameProperty; };
            AreaDialog.prototype.getService = function () { return Community.AreaService.baseUrl; };
            AreaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AreaDialog);
            return AreaDialog;
        }(Serenity.EntityDialog));
        Community.AreaDialog = AreaDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var AreaGrid = /** @class */ (function (_super) {
            __extends(AreaGrid, _super);
            function AreaGrid(container) {
                return _super.call(this, container) || this;
            }
            AreaGrid.prototype.getColumnsKey = function () { return 'Community.Area'; };
            AreaGrid.prototype.getDialogType = function () { return Community.AreaDialog; };
            AreaGrid.prototype.getIdProperty = function () { return Community.AreaRow.idProperty; };
            AreaGrid.prototype.getLocalTextPrefix = function () { return Community.AreaRow.localTextPrefix; };
            AreaGrid.prototype.getService = function () { return Community.AreaService.baseUrl; };
            AreaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AreaGrid);
            return AreaGrid;
        }(Serenity.EntityGrid));
        Community.AreaGrid = AreaGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCategoryDialog = /** @class */ (function (_super) {
            __extends(BookCategoryDialog, _super);
            function BookCategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BookCategoryForm(_this.idPrefix);
                return _this;
            }
            BookCategoryDialog.prototype.getFormKey = function () { return Community.BookCategoryForm.formKey; };
            BookCategoryDialog.prototype.getIdProperty = function () { return Community.BookCategoryRow.idProperty; };
            BookCategoryDialog.prototype.getLocalTextPrefix = function () { return Community.BookCategoryRow.localTextPrefix; };
            BookCategoryDialog.prototype.getNameProperty = function () { return Community.BookCategoryRow.nameProperty; };
            BookCategoryDialog.prototype.getService = function () { return Community.BookCategoryService.baseUrl; };
            BookCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BookCategoryDialog);
            return BookCategoryDialog;
        }(Serenity.EntityDialog));
        Community.BookCategoryDialog = BookCategoryDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCategoryGrid = /** @class */ (function (_super) {
            __extends(BookCategoryGrid, _super);
            function BookCategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            BookCategoryGrid.prototype.getColumnsKey = function () { return 'Community.BookCategory'; };
            BookCategoryGrid.prototype.getDialogType = function () { return Community.BookCategoryDialog; };
            BookCategoryGrid.prototype.getIdProperty = function () { return Community.BookCategoryRow.idProperty; };
            BookCategoryGrid.prototype.getLocalTextPrefix = function () { return Community.BookCategoryRow.localTextPrefix; };
            BookCategoryGrid.prototype.getService = function () { return Community.BookCategoryService.baseUrl; };
            BookCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BookCategoryGrid);
            return BookCategoryGrid;
        }(Serenity.EntityGrid));
        Community.BookCategoryGrid = BookCategoryGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCommentDialog = /** @class */ (function (_super) {
            __extends(BookCommentDialog, _super);
            function BookCommentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BookCommentForm(_this.idPrefix);
                return _this;
            }
            BookCommentDialog.prototype.getFormKey = function () { return Community.BookCommentForm.formKey; };
            BookCommentDialog.prototype.getIdProperty = function () { return Community.BookCommentRow.idProperty; };
            BookCommentDialog.prototype.getLocalTextPrefix = function () { return Community.BookCommentRow.localTextPrefix; };
            BookCommentDialog.prototype.getNameProperty = function () { return Community.BookCommentRow.nameProperty; };
            BookCommentDialog.prototype.getService = function () { return Community.BookCommentService.baseUrl; };
            BookCommentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BookCommentDialog);
            return BookCommentDialog;
        }(Serenity.EntityDialog));
        Community.BookCommentDialog = BookCommentDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookCommentGrid = /** @class */ (function (_super) {
            __extends(BookCommentGrid, _super);
            function BookCommentGrid(container) {
                return _super.call(this, container) || this;
            }
            BookCommentGrid.prototype.getColumnsKey = function () { return 'Community.BookComment'; };
            BookCommentGrid.prototype.getDialogType = function () { return Community.BookCommentDialog; };
            BookCommentGrid.prototype.getIdProperty = function () { return Community.BookCommentRow.idProperty; };
            BookCommentGrid.prototype.getLocalTextPrefix = function () { return Community.BookCommentRow.localTextPrefix; };
            BookCommentGrid.prototype.getService = function () { return Community.BookCommentService.baseUrl; };
            BookCommentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BookCommentGrid);
            return BookCommentGrid;
        }(Serenity.EntityGrid));
        Community.BookCommentGrid = BookCommentGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendDialog = /** @class */ (function (_super) {
            __extends(BookFriendDialog, _super);
            function BookFriendDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BookFriendForm(_this.idPrefix);
                return _this;
            }
            BookFriendDialog.prototype.getFormKey = function () { return Community.BookFriendForm.formKey; };
            BookFriendDialog.prototype.getIdProperty = function () { return Community.BookFriendRow.idProperty; };
            BookFriendDialog.prototype.getLocalTextPrefix = function () { return Community.BookFriendRow.localTextPrefix; };
            BookFriendDialog.prototype.getService = function () { return Community.BookFriendService.baseUrl; };
            BookFriendDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BookFriendDialog);
            return BookFriendDialog;
        }(Serenity.EntityDialog));
        Community.BookFriendDialog = BookFriendDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendGrid = /** @class */ (function (_super) {
            __extends(BookFriendGrid, _super);
            function BookFriendGrid(container) {
                return _super.call(this, container) || this;
            }
            BookFriendGrid.prototype.getColumnsKey = function () { return 'Community.BookFriend'; };
            BookFriendGrid.prototype.getDialogType = function () { return Community.BookFriendDialog; };
            BookFriendGrid.prototype.getIdProperty = function () { return Community.BookFriendRow.idProperty; };
            BookFriendGrid.prototype.getLocalTextPrefix = function () { return Community.BookFriendRow.localTextPrefix; };
            BookFriendGrid.prototype.getService = function () { return Community.BookFriendService.baseUrl; };
            BookFriendGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BookFriendGrid);
            return BookFriendGrid;
        }(Serenity.EntityGrid));
        Community.BookFriendGrid = BookFriendGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendGroupDialog = /** @class */ (function (_super) {
            __extends(BookFriendGroupDialog, _super);
            function BookFriendGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BookFriendGroupForm(_this.idPrefix);
                return _this;
            }
            BookFriendGroupDialog.prototype.getFormKey = function () { return Community.BookFriendGroupForm.formKey; };
            BookFriendGroupDialog.prototype.getIdProperty = function () { return Community.BookFriendGroupRow.idProperty; };
            BookFriendGroupDialog.prototype.getLocalTextPrefix = function () { return Community.BookFriendGroupRow.localTextPrefix; };
            BookFriendGroupDialog.prototype.getNameProperty = function () { return Community.BookFriendGroupRow.nameProperty; };
            BookFriendGroupDialog.prototype.getService = function () { return Community.BookFriendGroupService.baseUrl; };
            BookFriendGroupDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BookFriendGroupDialog);
            return BookFriendGroupDialog;
        }(Serenity.EntityDialog));
        Community.BookFriendGroupDialog = BookFriendGroupDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookFriendGroupGrid = /** @class */ (function (_super) {
            __extends(BookFriendGroupGrid, _super);
            function BookFriendGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            BookFriendGroupGrid.prototype.getColumnsKey = function () { return 'Community.BookFriendGroup'; };
            BookFriendGroupGrid.prototype.getDialogType = function () { return Community.BookFriendGroupDialog; };
            BookFriendGroupGrid.prototype.getIdProperty = function () { return Community.BookFriendGroupRow.idProperty; };
            BookFriendGroupGrid.prototype.getLocalTextPrefix = function () { return Community.BookFriendGroupRow.localTextPrefix; };
            BookFriendGroupGrid.prototype.getService = function () { return Community.BookFriendGroupService.baseUrl; };
            BookFriendGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BookFriendGroupGrid);
            return BookFriendGroupGrid;
        }(Serenity.EntityGrid));
        Community.BookFriendGroupGrid = BookFriendGroupGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookshelfDialog = /** @class */ (function (_super) {
            __extends(BookshelfDialog, _super);
            function BookshelfDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BookshelfForm(_this.idPrefix);
                return _this;
            }
            BookshelfDialog.prototype.getFormKey = function () { return Community.BookshelfForm.formKey; };
            BookshelfDialog.prototype.getIdProperty = function () { return Community.BookshelfRow.idProperty; };
            BookshelfDialog.prototype.getLocalTextPrefix = function () { return Community.BookshelfRow.localTextPrefix; };
            BookshelfDialog.prototype.getNameProperty = function () { return Community.BookshelfRow.nameProperty; };
            BookshelfDialog.prototype.getService = function () { return Community.BookshelfService.baseUrl; };
            BookshelfDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BookshelfDialog);
            return BookshelfDialog;
        }(Serenity.EntityDialog));
        Community.BookshelfDialog = BookshelfDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BookshelfGrid = /** @class */ (function (_super) {
            __extends(BookshelfGrid, _super);
            function BookshelfGrid(container) {
                return _super.call(this, container) || this;
            }
            BookshelfGrid.prototype.getColumnsKey = function () { return 'Community.Bookshelf'; };
            BookshelfGrid.prototype.getDialogType = function () { return Community.BookshelfDialog; };
            BookshelfGrid.prototype.getIdProperty = function () { return Community.BookshelfRow.idProperty; };
            BookshelfGrid.prototype.getLocalTextPrefix = function () { return Community.BookshelfRow.localTextPrefix; };
            BookshelfGrid.prototype.getService = function () { return Community.BookshelfService.baseUrl; };
            BookshelfGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BookshelfGrid);
            return BookshelfGrid;
        }(Serenity.EntityGrid));
        Community.BookshelfGrid = BookshelfGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowApplyDialog = /** @class */ (function (_super) {
            __extends(BorrowApplyDialog, _super);
            function BorrowApplyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BorrowApplyForm(_this.idPrefix);
                return _this;
            }
            BorrowApplyDialog.prototype.getFormKey = function () { return Community.BorrowApplyForm.formKey; };
            BorrowApplyDialog.prototype.getIdProperty = function () { return Community.BorrowApplyRow.idProperty; };
            BorrowApplyDialog.prototype.getLocalTextPrefix = function () { return Community.BorrowApplyRow.localTextPrefix; };
            BorrowApplyDialog.prototype.getService = function () { return Community.BorrowApplyService.baseUrl; };
            BorrowApplyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BorrowApplyDialog);
            return BorrowApplyDialog;
        }(Serenity.EntityDialog));
        Community.BorrowApplyDialog = BorrowApplyDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowApplyGrid = /** @class */ (function (_super) {
            __extends(BorrowApplyGrid, _super);
            function BorrowApplyGrid(container) {
                return _super.call(this, container) || this;
            }
            BorrowApplyGrid.prototype.getColumnsKey = function () { return 'Community.BorrowApply'; };
            BorrowApplyGrid.prototype.getDialogType = function () { return Community.BorrowApplyDialog; };
            BorrowApplyGrid.prototype.getIdProperty = function () { return Community.BorrowApplyRow.idProperty; };
            BorrowApplyGrid.prototype.getLocalTextPrefix = function () { return Community.BorrowApplyRow.localTextPrefix; };
            BorrowApplyGrid.prototype.getService = function () { return Community.BorrowApplyService.baseUrl; };
            BorrowApplyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BorrowApplyGrid);
            return BorrowApplyGrid;
        }(Serenity.EntityGrid));
        Community.BorrowApplyGrid = BorrowApplyGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRecordDialog = /** @class */ (function (_super) {
            __extends(BorrowRecordDialog, _super);
            function BorrowRecordDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BorrowRecordForm(_this.idPrefix);
                return _this;
            }
            BorrowRecordDialog.prototype.getFormKey = function () { return Community.BorrowRecordForm.formKey; };
            BorrowRecordDialog.prototype.getIdProperty = function () { return Community.BorrowRecordRow.idProperty; };
            BorrowRecordDialog.prototype.getLocalTextPrefix = function () { return Community.BorrowRecordRow.localTextPrefix; };
            BorrowRecordDialog.prototype.getNameProperty = function () { return Community.BorrowRecordRow.nameProperty; };
            BorrowRecordDialog.prototype.getService = function () { return Community.BorrowRecordService.baseUrl; };
            BorrowRecordDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BorrowRecordDialog);
            return BorrowRecordDialog;
        }(Serenity.EntityDialog));
        Community.BorrowRecordDialog = BorrowRecordDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRecordGrid = /** @class */ (function (_super) {
            __extends(BorrowRecordGrid, _super);
            function BorrowRecordGrid(container) {
                return _super.call(this, container) || this;
            }
            BorrowRecordGrid.prototype.getColumnsKey = function () { return 'Community.BorrowRecord'; };
            BorrowRecordGrid.prototype.getDialogType = function () { return Community.BorrowRecordDialog; };
            BorrowRecordGrid.prototype.getIdProperty = function () { return Community.BorrowRecordRow.idProperty; };
            BorrowRecordGrid.prototype.getLocalTextPrefix = function () { return Community.BorrowRecordRow.localTextPrefix; };
            BorrowRecordGrid.prototype.getService = function () { return Community.BorrowRecordService.baseUrl; };
            BorrowRecordGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BorrowRecordGrid);
            return BorrowRecordGrid;
        }(Serenity.EntityGrid));
        Community.BorrowRecordGrid = BorrowRecordGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRequirementDialog = /** @class */ (function (_super) {
            __extends(BorrowRequirementDialog, _super);
            function BorrowRequirementDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.BorrowRequirementForm(_this.idPrefix);
                return _this;
            }
            BorrowRequirementDialog.prototype.getFormKey = function () { return Community.BorrowRequirementForm.formKey; };
            BorrowRequirementDialog.prototype.getIdProperty = function () { return Community.BorrowRequirementRow.idProperty; };
            BorrowRequirementDialog.prototype.getLocalTextPrefix = function () { return Community.BorrowRequirementRow.localTextPrefix; };
            BorrowRequirementDialog.prototype.getNameProperty = function () { return Community.BorrowRequirementRow.nameProperty; };
            BorrowRequirementDialog.prototype.getService = function () { return Community.BorrowRequirementService.baseUrl; };
            BorrowRequirementDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BorrowRequirementDialog);
            return BorrowRequirementDialog;
        }(Serenity.EntityDialog));
        Community.BorrowRequirementDialog = BorrowRequirementDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var BorrowRequirementGrid = /** @class */ (function (_super) {
            __extends(BorrowRequirementGrid, _super);
            function BorrowRequirementGrid(container) {
                return _super.call(this, container) || this;
            }
            BorrowRequirementGrid.prototype.getColumnsKey = function () { return 'Community.BorrowRequirement'; };
            BorrowRequirementGrid.prototype.getDialogType = function () { return Community.BorrowRequirementDialog; };
            BorrowRequirementGrid.prototype.getIdProperty = function () { return Community.BorrowRequirementRow.idProperty; };
            BorrowRequirementGrid.prototype.getLocalTextPrefix = function () { return Community.BorrowRequirementRow.localTextPrefix; };
            BorrowRequirementGrid.prototype.getService = function () { return Community.BorrowRequirementService.baseUrl; };
            BorrowRequirementGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BorrowRequirementGrid);
            return BorrowRequirementGrid;
        }(Serenity.EntityGrid));
        Community.BorrowRequirementGrid = BorrowRequirementGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var DonationRecordDialog = /** @class */ (function (_super) {
            __extends(DonationRecordDialog, _super);
            function DonationRecordDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.DonationRecordForm(_this.idPrefix);
                return _this;
            }
            DonationRecordDialog.prototype.getFormKey = function () { return Community.DonationRecordForm.formKey; };
            DonationRecordDialog.prototype.getIdProperty = function () { return Community.DonationRecordRow.idProperty; };
            DonationRecordDialog.prototype.getLocalTextPrefix = function () { return Community.DonationRecordRow.localTextPrefix; };
            DonationRecordDialog.prototype.getNameProperty = function () { return Community.DonationRecordRow.nameProperty; };
            DonationRecordDialog.prototype.getService = function () { return Community.DonationRecordService.baseUrl; };
            DonationRecordDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DonationRecordDialog);
            return DonationRecordDialog;
        }(Serenity.EntityDialog));
        Community.DonationRecordDialog = DonationRecordDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var DonationRecordGrid = /** @class */ (function (_super) {
            __extends(DonationRecordGrid, _super);
            function DonationRecordGrid(container) {
                return _super.call(this, container) || this;
            }
            DonationRecordGrid.prototype.getColumnsKey = function () { return 'Community.DonationRecord'; };
            DonationRecordGrid.prototype.getDialogType = function () { return Community.DonationRecordDialog; };
            DonationRecordGrid.prototype.getIdProperty = function () { return Community.DonationRecordRow.idProperty; };
            DonationRecordGrid.prototype.getLocalTextPrefix = function () { return Community.DonationRecordRow.localTextPrefix; };
            DonationRecordGrid.prototype.getService = function () { return Community.DonationRecordService.baseUrl; };
            DonationRecordGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DonationRecordGrid);
            return DonationRecordGrid;
        }(Serenity.EntityGrid));
        Community.DonationRecordGrid = DonationRecordGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PersonalityAnalysisDialog = /** @class */ (function (_super) {
            __extends(PersonalityAnalysisDialog, _super);
            function PersonalityAnalysisDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.PersonalityAnalysisForm(_this.idPrefix);
                return _this;
            }
            PersonalityAnalysisDialog.prototype.getFormKey = function () { return Community.PersonalityAnalysisForm.formKey; };
            PersonalityAnalysisDialog.prototype.getIdProperty = function () { return Community.PersonalityAnalysisRow.idProperty; };
            PersonalityAnalysisDialog.prototype.getLocalTextPrefix = function () { return Community.PersonalityAnalysisRow.localTextPrefix; };
            PersonalityAnalysisDialog.prototype.getNameProperty = function () { return Community.PersonalityAnalysisRow.nameProperty; };
            PersonalityAnalysisDialog.prototype.getService = function () { return Community.PersonalityAnalysisService.baseUrl; };
            PersonalityAnalysisDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonalityAnalysisDialog);
            return PersonalityAnalysisDialog;
        }(Serenity.EntityDialog));
        Community.PersonalityAnalysisDialog = PersonalityAnalysisDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PersonalityAnalysisGrid = /** @class */ (function (_super) {
            __extends(PersonalityAnalysisGrid, _super);
            function PersonalityAnalysisGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonalityAnalysisGrid.prototype.getColumnsKey = function () { return 'Community.PersonalityAnalysis'; };
            PersonalityAnalysisGrid.prototype.getDialogType = function () { return Community.PersonalityAnalysisDialog; };
            PersonalityAnalysisGrid.prototype.getIdProperty = function () { return Community.PersonalityAnalysisRow.idProperty; };
            PersonalityAnalysisGrid.prototype.getLocalTextPrefix = function () { return Community.PersonalityAnalysisRow.localTextPrefix; };
            PersonalityAnalysisGrid.prototype.getService = function () { return Community.PersonalityAnalysisService.baseUrl; };
            PersonalityAnalysisGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonalityAnalysisGrid);
            return PersonalityAnalysisGrid;
        }(Serenity.EntityGrid));
        Community.PersonalityAnalysisGrid = PersonalityAnalysisGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PrivateBookDialog = /** @class */ (function (_super) {
            __extends(PrivateBookDialog, _super);
            function PrivateBookDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.PrivateBookForm(_this.idPrefix);
                return _this;
            }
            PrivateBookDialog.prototype.getFormKey = function () { return Community.PrivateBookForm.formKey; };
            PrivateBookDialog.prototype.getIdProperty = function () { return Community.PrivateBookRow.idProperty; };
            PrivateBookDialog.prototype.getLocalTextPrefix = function () { return Community.PrivateBookRow.localTextPrefix; };
            PrivateBookDialog.prototype.getNameProperty = function () { return Community.PrivateBookRow.nameProperty; };
            PrivateBookDialog.prototype.getService = function () { return Community.PrivateBookService.baseUrl; };
            PrivateBookDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PrivateBookDialog);
            return PrivateBookDialog;
        }(Serenity.EntityDialog));
        Community.PrivateBookDialog = PrivateBookDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var PrivateBookGrid = /** @class */ (function (_super) {
            __extends(PrivateBookGrid, _super);
            function PrivateBookGrid(container) {
                return _super.call(this, container) || this;
            }
            PrivateBookGrid.prototype.getColumnsKey = function () { return 'Community.PrivateBook'; };
            PrivateBookGrid.prototype.getDialogType = function () { return Community.PrivateBookDialog; };
            PrivateBookGrid.prototype.getIdProperty = function () { return Community.PrivateBookRow.idProperty; };
            PrivateBookGrid.prototype.getLocalTextPrefix = function () { return Community.PrivateBookRow.localTextPrefix; };
            PrivateBookGrid.prototype.getService = function () { return Community.PrivateBookService.baseUrl; };
            PrivateBookGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PrivateBookGrid);
            return PrivateBookGrid;
        }(Serenity.EntityGrid));
        Community.PrivateBookGrid = PrivateBookGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var RecommendBookDialog = /** @class */ (function (_super) {
            __extends(RecommendBookDialog, _super);
            function RecommendBookDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.RecommendBookForm(_this.idPrefix);
                return _this;
            }
            RecommendBookDialog.prototype.getFormKey = function () { return Community.RecommendBookForm.formKey; };
            RecommendBookDialog.prototype.getIdProperty = function () { return Community.RecommendBookRow.idProperty; };
            RecommendBookDialog.prototype.getLocalTextPrefix = function () { return Community.RecommendBookRow.localTextPrefix; };
            RecommendBookDialog.prototype.getNameProperty = function () { return Community.RecommendBookRow.nameProperty; };
            RecommendBookDialog.prototype.getService = function () { return Community.RecommendBookService.baseUrl; };
            RecommendBookDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RecommendBookDialog);
            return RecommendBookDialog;
        }(Serenity.EntityDialog));
        Community.RecommendBookDialog = RecommendBookDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var RecommendBookGrid = /** @class */ (function (_super) {
            __extends(RecommendBookGrid, _super);
            function RecommendBookGrid(container) {
                return _super.call(this, container) || this;
            }
            RecommendBookGrid.prototype.getColumnsKey = function () { return 'Community.RecommendBook'; };
            RecommendBookGrid.prototype.getDialogType = function () { return Community.RecommendBookDialog; };
            RecommendBookGrid.prototype.getIdProperty = function () { return Community.RecommendBookRow.idProperty; };
            RecommendBookGrid.prototype.getLocalTextPrefix = function () { return Community.RecommendBookRow.localTextPrefix; };
            RecommendBookGrid.prototype.getService = function () { return Community.RecommendBookService.baseUrl; };
            RecommendBookGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RecommendBookGrid);
            return RecommendBookGrid;
        }(Serenity.EntityGrid));
        Community.RecommendBookGrid = RecommendBookGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var WeiXinUserDialog = /** @class */ (function (_super) {
            __extends(WeiXinUserDialog, _super);
            function WeiXinUserDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Community.WeiXinUserForm(_this.idPrefix);
                return _this;
            }
            WeiXinUserDialog.prototype.getFormKey = function () { return Community.WeiXinUserForm.formKey; };
            WeiXinUserDialog.prototype.getIdProperty = function () { return Community.WeiXinUserRow.idProperty; };
            WeiXinUserDialog.prototype.getLocalTextPrefix = function () { return Community.WeiXinUserRow.localTextPrefix; };
            WeiXinUserDialog.prototype.getNameProperty = function () { return Community.WeiXinUserRow.nameProperty; };
            WeiXinUserDialog.prototype.getService = function () { return Community.WeiXinUserService.baseUrl; };
            WeiXinUserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WeiXinUserDialog);
            return WeiXinUserDialog;
        }(Serenity.EntityDialog));
        Community.WeiXinUserDialog = WeiXinUserDialog;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Community;
    (function (Community) {
        var WeiXinUserGrid = /** @class */ (function (_super) {
            __extends(WeiXinUserGrid, _super);
            function WeiXinUserGrid(container) {
                return _super.call(this, container) || this;
            }
            WeiXinUserGrid.prototype.getColumnsKey = function () { return 'Community.WeiXinUser'; };
            WeiXinUserGrid.prototype.getDialogType = function () { return Community.WeiXinUserDialog; };
            WeiXinUserGrid.prototype.getIdProperty = function () { return Community.WeiXinUserRow.idProperty; };
            WeiXinUserGrid.prototype.getLocalTextPrefix = function () { return Community.WeiXinUserRow.localTextPrefix; };
            WeiXinUserGrid.prototype.getService = function () { return Community.WeiXinUserService.baseUrl; };
            WeiXinUserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WeiXinUserGrid);
            return WeiXinUserGrid;
        }(Serenity.EntityGrid));
        Community.WeiXinUserGrid = WeiXinUserGrid;
    })(Community = Sanctum.Community || (Sanctum.Community = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Sanctum.Authorization || (Sanctum.Authorization = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
var Sanctum;
(function (Sanctum) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Sanctum.Membership || (Sanctum.Membership = {}));
})(Sanctum || (Sanctum = {}));
//# sourceMappingURL=Sanctum.Web.js.map