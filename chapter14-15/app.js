// 1. Declare an empty array using JS literal notation to store
// student names in future.
var stdName = ['string 1','string2'];
// 2. Declare an empty array using JS object notation to store
// student names in future.
var studName = {name:"",};
// 3. Declare and initialize a strings array.
var strArray = [];
// 4. Declare and initialize a numbers array
var iniArray = [1,2,3]

// 5. Declare and initialize a boolean array
var bolArray = [true,false];

// 6. Declare and initialize a mixed array.
var mixArray = ["string", 25 ,true , "srtring2"];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser
var qualifications = ['SSC', 'HSC', 'BCS',
    'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
    document.write("1)"+qualifications[0]);
    document.write("<br>2)" +qualifications[1]);
    document.write("<br>3)"+ qualifications[2]);
    document.write("<br>4)"+ qualifications[3]);
    document.write("<br>5)"+qualifications[4]);
    document.write("<br>6)"+qualifications[5]);
    document.write("<br>7)"+qualifications[6],"<br>8)"+qualifications[7]);
    // alse can do this
    document.write("<h1>Qualifications</h1>","1)"+qualifications[0],"<br>2)"+qualifications[1],"<br>3)"+qualifications[2],"<br>4)"+qualifications[3],"<br>5)"+qualifications[4],"<br>6)"+qualifications[5],"<br>7)"+qualifications[6],"<br>8)"+qualifications[7]);


//  8.   Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students
var studentName = ['Michael','john','Tony'];
var stdScore = [320, 230,480];
var totalMarks=[500];
document.write("<br><br><br> Score of  "+studentName[0]+"  is  "+stdScore[0]+"  percentage  "+(stdScore[0]/totalMarks)*100+"%",
"<br> Score of  "+studentName[1]+"  is  "+stdScore[1]+"  percentage  "+ ((stdScore[1]/totalMarks)*100 +"%"),
"<br> Score of  "+studentName[2]+ "  is  "+stdScore[2]+"  Percentage  "+ ((stdScore[2]/totalMarks)*100 + "%"));



