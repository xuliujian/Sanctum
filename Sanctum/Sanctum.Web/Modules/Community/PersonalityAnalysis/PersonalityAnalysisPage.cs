
namespace Sanctum.Community.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PersonalityAnalysisRow))]
    public class PersonalityAnalysisController : Controller
    {
        [Route("Community/PersonalityAnalysis")]
        public ActionResult Index()
        {
            return View("~/Modules/Community/PersonalityAnalysis/PersonalityAnalysisIndex.cshtml");
        }
    }
}