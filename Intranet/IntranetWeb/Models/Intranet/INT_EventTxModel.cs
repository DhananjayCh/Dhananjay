using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_EventTxModel
    {
        public int ID { get; set; }
        public string Event_Name { get; set; }
        public string Start_Date { get; set; }
        public string End_Date { get; set; }
        public bool All_Day_Event { get; set; }
        public bool Pinned_Event { get; set; }
        public bool Active { get; set; }
    }
}