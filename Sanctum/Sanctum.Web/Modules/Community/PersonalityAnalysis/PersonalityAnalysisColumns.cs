
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.PersonalityAnalysis")]
    [BasedOnRow(typeof(Entities.PersonalityAnalysisRow), CheckNames = true)]
    public class PersonalityAnalysisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String FeatureName { get; set; }
        public String FeatureDecription { get; set; }
        public String MatchCategories { get; set; }
        public Int32 Creator { get; set; }
        public DateTime CreatedTime { get; set; }
        public Int32 Modifier { get; set; }
        public DateTime ModifiedTime { get; set; }
    }
}