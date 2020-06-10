using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_ArticleTxModel
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Article_Title { get; set; }
        public string Description { get; set; }
        public bool Pinned_Article { get; set; }
        public bool Active { get; set; }

    }
}