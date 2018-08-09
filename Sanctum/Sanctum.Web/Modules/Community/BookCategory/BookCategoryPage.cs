
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BookCategoryRow))]
    public class BookCategoryController : Controller
    {
        [Route("Community/BookCategory")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BookCategory/BookCategoryIndex.cshtml");
        }
    }
}