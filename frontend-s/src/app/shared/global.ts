const host = "http://localhost:8080/"
export  class EndPoint  {

    public static allUsers                  = "http://localhost:3000/allUsers";
    public static register                  = "http://localhost:3000/register";
    public static authenticate              = "http://localhost:3000/authenticate";
    public static profile                   = "http://localhost:3000/profile";
    public static getJournal                = "http://localhost:3000/journal";
    public static getJournalById            = "http://localhost:3000/journal/";
    public static getBookmarkCount          = "http://localhost:3000/bookmark/journal/count/";
    public static getSupportersCount        = "http://localhost:3000/getSupportersCount/journal/";
    public static checkJournalSupportstatus = "http://localhost:3000/checkJournalSupportstatus";
    public static bookmark                  = "http://localhost:3000/bookmarkJournal";
    public static getBookmarkByGenjouristId = "http://localhost:3000/getBookmarkByGenjouristId/";
}