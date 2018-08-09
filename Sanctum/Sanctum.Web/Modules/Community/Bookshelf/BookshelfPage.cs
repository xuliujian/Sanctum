
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BookshelfRow))]
    public class BookshelfController : Controller
    {
        [Route("Community/Bookshelf")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/Bookshelf/BookshelfIndex.cshtml");
        }
    }
}