using Serenity.Navigation;
using MyPages = Sanctum.Community.Pages;

[assembly: NavigationMenu(20000, "Community", icon: "fa-church")]
[assembly: NavigationLink(20000, "Community/Area", typeof(MyPages.AreaController), icon: "fa-map-marked-alt")]
[assembly: NavigationLink(20000, "Community/Book Category", typeof(MyPages.BookCategoryController), icon: "fa-box")]
[assembly: NavigationLink(20000, "Community/Book Comment", typeof(MyPages.BookCommentController), icon: "fa-comment-slash")]
[assembly: NavigationLink(20000, "Community/Book Friend", typeof(MyPages.BookFriendController), icon: "fa-user-friends")]
[assembly: NavigationLink(20000, "Community/Book Friend Group", typeof(MyPages.BookFriendGroupController), icon: "fa-users-cog")]
[assembly: NavigationLink(20000, "Community/Bookshelf", typeof(MyPages.BookshelfController), icon: "fa-shekel-sign")]
[assembly: NavigationLink(20000, "Community/Borrow Apply", typeof(MyPages.BorrowApplyController), icon: "fa-american-sign-language-interpreting")]
[assembly: NavigationLink(20000, "Community/Borrow Record", typeof(MyPages.BorrowRecordController), icon: "fa-list-alt")]
[assembly: NavigationLink(20000, "Community/Borrow Requirement", typeof(MyPages.BorrowRequirementController), icon: "fa-building")]
[assembly: NavigationLink(20000, "Community/Donation Record", typeof(MyPages.DonationRecordController), icon: "fa-hand-holding-usd")]
[assembly: NavigationLink(20000, "Community/Personality Analysis", typeof(MyPages.PersonalityAnalysisController), icon: "fa-assistive-listening-systems")]
[assembly: NavigationLink(20000, "Community/Private Book", typeof(MyPages.PrivateBookController), icon: "fa-book")]
[assembly: NavigationLink(20000, "Community/Recommend Book", typeof(MyPages.RecommendBookController), icon: "fa-grin-stars")]
[assembly: NavigationLink(20000, "Community/Wei Xin User", typeof(MyPages.WeiXinUserController), icon: "fa-user-check")]