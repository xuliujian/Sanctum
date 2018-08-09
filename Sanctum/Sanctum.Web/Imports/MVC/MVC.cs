using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Community
        {
            public static class Area
            {
                public const string AreaIndex = "~/Modules/Community/Area/AreaIndex.cshtml";
            }

            public static class BookCategory
            {
                public const string BookCategoryIndex = "~/Modules/Community/BookCategory/BookCategoryIndex.cshtml";
            }

            public static class BookComment
            {
                public const string BookCommentIndex = "~/Modules/Community/BookComment/BookCommentIndex.cshtml";
            }

            public static class BookFriend
            {
                public const string BookFriendIndex = "~/Modules/Community/BookFriend/BookFriendIndex.cshtml";
            }

            public static class BookFriendGroup
            {
                public const string BookFriendGroupIndex = "~/Modules/Community/BookFriendGroup/BookFriendGroupIndex.cshtml";
            }

            public static class Bookshelf
            {
                public const string BookshelfIndex = "~/Modules/Community/Bookshelf/BookshelfIndex.cshtml";
            }

            public static class BorrowApply
            {
                public const string BorrowApplyIndex = "~/Modules/Community/BorrowApply/BorrowApplyIndex.cshtml";
            }

            public static class BorrowRecord
            {
                public const string BorrowRecordIndex = "~/Modules/Community/BorrowRecord/BorrowRecordIndex.cshtml";
            }

            public static class BorrowRequirement
            {
                public const string BorrowRequirementIndex = "~/Modules/Community/BorrowRequirement/BorrowRequirementIndex.cshtml";
            }

            public static class DonationRecord
            {
                public const string DonationRecordIndex = "~/Modules/Community/DonationRecord/DonationRecordIndex.cshtml";
            }

            public static class PersonalityAnalysis
            {
                public const string PersonalityAnalysisIndex = "~/Modules/Community/PersonalityAnalysis/PersonalityAnalysisIndex.cshtml";
            }

            public static class PrivateBook
            {
                public const string PrivateBookIndex = "~/Modules/Community/PrivateBook/PrivateBookIndex.cshtml";
            }

            public static class RecommendBook
            {
                public const string RecommendBookIndex = "~/Modules/Community/RecommendBook/RecommendBookIndex.cshtml";
            }

            public static class WeiXinUser
            {
                public const string WeiXinUserIndex = "~/Modules/Community/WeiXinUser/WeiXinUserIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
