
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.WeiXinUser")]
    [BasedOnRow(typeof(Entities.WeiXinUserRow), CheckNames = true)]
    public class WeiXinUserForm
    {
        public String OpenId { get; set; }
        public String NickName { get; set; }
        public String Country { get; set; }
        public String Province { get; set; }
        public String City { get; set; }
        public String HeaderImage { get; set; }
        public String Mobile { get; set; }
        public String Address { get; set; }
        public Double HonourRank { get; set; }
        public Double KnowledgeRank { get; set; }
        public String PersonalityEval { get; set; }
        public String HobbyCategory { get; set; }
        public Decimal ActiveLongitude { get; set; }
        public Decimal ActiveLatitude { get; set; }
        public DateTime LastActiveTime { get; set; }
    }
}