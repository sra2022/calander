const n_months = [31,28,31,30,31,30,31,31,30,31,30,31];
const rows = ["a","b","c","d","e","f"];
let year;
let month;

function leap_year() {
  if(year%400==0)
    return true;
  else if(year%100==0)
    return false;
  else if(year%4==0)
    return true;
  else
    return false;
}

function get_odd_days() {
  let years = year%400-1;
  let odd_days = (Math.floor(years/4)-Math.floor(years/100))*2+(years-(Math.floor(years/4)-Math.floor(years/100)));
  for ( let months = 0;months<month-1;months++)
  {
    odd_days+=n_months[months];
    if (months==1 && leap_year())
    {
      odd_days+=1;
    }
  }
  odd_days+=1;
  return(odd_days%7)
}

function cleanup() {
  let row = 0;
  while(row<6)
  {
    let column = 0;
    while (column<7)
    {
      document.getElementById(rows[row]+column).innerHTML = " ";
      column++;
    }
    row++;
  }
}

function print_calander() {
  cleanup();
  let odd_days = get_odd_days();
  let date = 1;
  while(odd_days<7)
  {
    document.getElementById("a"+odd_days).innerHTML = date;
    date++;
    odd_days++;
  }
  let week = 1;
  let month_days;
  if(leap_year() && month==2)
    month_days = 29;
  else
    month_days = n_months[month-1];
  while (date<month_days+1)
  {
    let odd_days = 0;
    while (date<month_days+1 && odd_days<7)
    {
      document.getElementById(rows[week]+odd_days).innerHTML = date;
      date++;
      odd_days++;
    }
    week++;
  }
}

function valid() {
  if (year<1 || month<1 || month>12)
    return false;
  else
    return true;
}

function raise_error() {
  alert("തീയതി കൃത്യമായി നൽകുക!");
  cleanup();
}

function calculate() {
  year=parseInt(document.getElementById("year").value);
  month=parseInt(document.getElementById("month").value);
  if (valid())
    print_calander();
  else
    raise_error();
}
