
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BookCommentRow))]
    public class BookCommentController : Controller
    {
        [Route("Community/BookComment")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BookComment/BookCommentIndex.cshtml");
        }
    }
}