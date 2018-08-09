
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BookFriendGroupRow))]
    public class BookFriendGroupController : Controller
    {
        [Route("Community/BookFriendGroup")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BookFriendGroup/BookFriendGroupIndex.cshtml");
        }
    }
}