
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BorrowRequirementRow))]
    public class BorrowRequirementController : Controller
    {
        [Route("Community/BorrowRequirement")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/BorrowRequirement/BorrowRequirementIndex.cshtml");
        }
    }
}