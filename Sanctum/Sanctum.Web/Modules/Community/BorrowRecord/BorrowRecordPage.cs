
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BorrowRecordRow))]
    public class BorrowRecordController : Controller
    {
        [Route("Community/BorrowRecord")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BorrowRecord/BorrowRecordIndex.cshtml");
        }
    }
}