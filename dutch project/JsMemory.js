


/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the memory hall page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */

/* //////////////////////////////////////////// */
/* *********The code below is working* **********/
/* //////////////////////////////////////////// */

var ToggleButton = document.getElementById("ToggleButton");
var ToggleTarget = document.getElementById("ToggleTarget");
ToggleTarget.style.display = "none";

function ToggleDisplayFunction(){
    if (ToggleTarget.style.display === "none") {
        ToggleTarget.style.display = "block";
    } else {
        ToggleTarget.style.display = "none";
    }
}

ToggleButton.addEventListener("click", ToggleDisplayFunction);





/* //////////////////////////////////////////// */
/* *********The code above is working* **********/
/* //////////////////////////////////////////// */

/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the memory hall page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */









/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the memory hall page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */

/* //////////////////////////////////////////// */
/* *********The code below is working* **********/
/* //////////////////////////////////////////// */



function selectedRow() {

    let index,
        tableHallOfFame = document.getElementById("hall-of-fame-tableID");

    for (let i = 1; i < tableHallOfFame.rows.length; i++) {
        tableHallOfFame.rows[i].onclick = function () {
            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(index);
        };

    }

}


selectedRow();



/* //////////////////////////////////////////// */
/* *********The code above is working* **********/
/* //////////////////////////////////////////// */

/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the memory hall page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */








/* *************************************************
function h1_style() {
        document.querySelector("h1").classList.toggle("tr_onclick");
    }



let h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener('click', function (){
    h1_style();
});
**************************************************** */

/* ***************************************************

function trStyle() {
    document.querySelector("tr").classList.toggle("tr_onclick");
}


let styleTr = document.getElementsByTagName("tr")[0];

styleTr.addEventListener('click', function () {
    trStyle();
})
****************************************************** */

/**************************************************************/
/**************************************************************/
/**************************************************************/

/*

let tr_style = document.querySelectorAll("tr")[0]; /* this is working only on the first element, how to choose all the elements??? *///
/* tr_style.className = "tr_onclick"; */                          /*how to access the whole array??*/


/*

 let tr_style2 = document.getElementsByTagName("tr")[1]; /* this is working the same*/
 /* tr_style2.className = "tr_onclick2"; */




/* function to change the background color of a row by clicking on it */
    
   /* function selectedRow() {

    var index,
        tableHallOfFame = document.getElementById("hall-of-fame-tableID");

    for(var i =0; i < tableHallOfFame.rows.length; i++)
    {
        tableHallOfFame.rows[i].onclick = function ()
        {
            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(index)
        }
    }

}
selectedRow();
*/











/* //////////////////////////////////////////// */
/* *********The code below is working* **********/
/* //////////////////////////////////////////// */

/*

let tr_style2 = document.getElementsByTagName("tr")[2];
tr_style2.className = "selected";

*/

/* //////////////////////////////////////////// */
/* *********The code above is working* **********/
/* //////////////////////////////////////////// */










/* //////////////////////////////////////////// */
/* *********The code below is working* **********/
/* //////////////////////////////////////////// */

/*

function h1_style() {
    document.querySelector("h1").classList.toggle("tr_onclick");
}

let h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener('click', function (){
    h1_style();
});

*/

/* //////////////////////////////////////////// */
/* *********The code above is working* **********/
/* //////////////////////////////////////////// */







/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the memory hall page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */

/* //////////////////////////////////////////// */
/* *********The code below is working* **********/
/* //////////////////////////////////////////// */

/*

var ToggleButton = document.getElementById("ToggleButton");
var ToggleTarget = document.getElementById("ToggleTarget");
ToggleTarget.style.display = "none";

function ToggleDisplayFunction(){
    if (ToggleTarget.style.display === "none") {
        ToggleTarget.style.display = "block";
    } else {
        ToggleTarget.style.display = "none";
    }
}
ToggleButton.addEventListener("click", ToggleDisplayFunction);

 */

/* //////////////////////////////////////////// */
/* *********The code above is working* **********/
/* //////////////////////////////////////////// */

/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the memory hall page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */






/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the main page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */

/* //////////////////////////////////////////// */
/* *********The code below is working* **********/
/* //////////////////////////////////////////// */

/*

function selectedRow() {

    var index,
        tableHallOfFame = document.getElementById("hall-of-fame-tableID");

    for(var i =0; i < tableHallOfFame.rows.length; i++)
    {
        tableHallOfFame.rows[i].onclick = function ()
        {
            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(index)
        }
    }

}
selectedRow();

 */

/* //////////////////////////////////////////// */
/* *********The code above is working* **********/
/* //////////////////////////////////////////// */

/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */
/* *After this code, code that come after don't work properly on the main page */
/* ////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////ERROR////////// */