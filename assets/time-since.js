(function(app) {

  /**
   * Returns years, months, days since a provided date
   * @returns {string}
   */
  app.timeSince = function(sYear, sMonth, sDay) {
    // Default to 2013-09-01
    sYear = typeof sYear !== 'undefined' ?  sYear : 2013;
    sMonth = typeof sMonth !== 'undefined' ?  sMonth - 1: 9 - 1; //JS counts month from 0 to 11
    sDay = typeof sDay !== 'undefined' ?  sDay : 1;

    var dayUnit = 1000 * 60 * 60 * 24;
    var today = new Date();
    var sinceDate = new Date(sYear,sMonth,sDay); //
    
    // Calc
    var diff = Math.floor(today.getTime() - sinceDate.getTime());
    var spanInDays = Math.floor(diff/dayUnit);
    var yearsUgly = spanInDays/365.25;
    var years = Math.floor(yearsUgly);
    var monthsUgly = (yearsUgly - years) * 12;
    var months = Math.floor(monthsUgly);
    var daysUgly = (monthsUgly - months) * 30.42;
    var days = Math.floor(daysUgly);

    // Output readable span time in spanish
    var timeSpan = "";
    if(years>0) { timeSpan += years + " año"; }
    if(years>1) { timeSpan += "s"; }
    if(!days>0 && months>0 && years>0) { timeSpan += " y "; }
    else if(days>0 && months>0 && years>0) { timeSpan += ", "; }
    if(months>0) { timeSpan += months + " mes"; }
    if(months>1) { timeSpan += "es"; }
    if(days>0 && (months>0 || years>0)) { timeSpan += " y "; }
    if(days>0) { timeSpan += days + " día"; }
    if(days>1) { timeSpan += "s"; }

    return timeSpan;
  }

})(window.app || (window.app = {}));