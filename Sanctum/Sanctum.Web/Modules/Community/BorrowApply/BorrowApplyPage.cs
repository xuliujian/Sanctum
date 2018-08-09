
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BorrowApplyRow))]
    public class BorrowApplyController : Controller
    {
        [Route("Community/BorrowApply")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BorrowApply/BorrowApplyIndex.cshtml");
        }
    }
}