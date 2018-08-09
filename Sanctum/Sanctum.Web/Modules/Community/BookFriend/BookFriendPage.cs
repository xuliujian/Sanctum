
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BookFriendRow))]
    public class BookFriendController : Controller
    {
        [Route("Community/BookFriend")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BookFriend/BookFriendIndex.cshtml");
        }
    }
}