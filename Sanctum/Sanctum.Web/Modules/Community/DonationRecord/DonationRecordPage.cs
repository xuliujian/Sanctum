
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DonationRecordRow))]
    public class DonationRecordController : Controller
    {
        [Route("Community/DonationRecord")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/DonationRecord/DonationRecordIndex.cshtml");
        }
    }
}