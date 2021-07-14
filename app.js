console.log("working");

// This function is makein register page appear when clicked on button
function create() {
    let element = document.querySelector('.register-box');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.add('show-body');
    element.style.visibility = "visible";
}

// and this function is making them disappear again when clicked on cross icon
function remove() {
    let element = document.querySelector('.register-box');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.remove('show-body');
    element.style.visibility = "hidden";
}

//-----------------------------------
// this is for login page

function bringLogin() {
    let change = document.querySelector('.login-page');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.add('show-body');
    change.style.opacity = 1;
}

function removeLogin() {
    let change = document.querySelector('.login-page');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.remove('show-body');
    change.style.opacity = 0;
}

//-----------------------------------

// payment method 

function toggleUPI() {
    cc = document.querySelector('.cc-form');
    upi = document.getElementById('upi-box');
    upiLabel = document.querySelector('#upi');
    ccLabel = document.querySelector('#cc');

    cc.style.display = 'none';
    upi.classList.remove('upi-display-toggle');
    
    upiLabel.style.backgroundColor = 'black';
    upiLabel.style.color = '#efefef';
    
    ccLabel.style.backgroundColor = '#efefef';
    ccLabel.style.color = 'black';
}

function toggleCC() {
    let cc = document.querySelector('.cc-form');
    let upi = document.getElementById('upi-box');
    upiLabel = document.querySelector('#upi');
    ccLabel = document.querySelector('#cc');

    upi.classList.add('upi-display-toggle');
    cc.style.display = '';
    
    upiLabel.style.backgroundColor = '#efefef';
    upiLabel.style.color = 'black';
    
    ccLabel.style.backgroundColor = 'black';
    ccLabel.style.color = '#efefef';
}


//-------------------------------------------------------------------------

//getting input and showing output in payment page

function showOutput() {
    let ul = document.getElementById('ul');
    let div = document.createElement('div');

    // this function is counting the number of getter
    // classes in html code
    
    function countGetters() {
        let getter = document.getElementsByClassName('getter');
        var result = getter.length;

        return result;
    }

    const getters = (countGetters() + 1);

    // fuction to check whether input field in empty or not

    function empty() {
        var fullname = document.getElementById('full-name').value;
        var age = document.getElementById('age').value;
        var aadhar = document.getElementById('aadhar-num').value;

        if (fullname == "" || age == "" || aadhar == "") {
            return true;
        } else {
            return false;
        }
    }

        //-----------------------------------------------
    //creating div with getter classname and unique id

    if (empty() == false) {
        div.classList.add('getter');
        div.setAttribute('id', 'getterID-' + (getters));

        ul.appendChild(div);

    } else {
        alert('Enter details to add guest');
    }

    console.log('executing-1');

    //------------------------------------
    // now time for nested up and down divs

        let selectGetter = document.getElementById( 'getterID-' + (getters) ); 
            upDiv = document.createElement('div');

                upDiv.classList.add('up');
                upDiv.setAttribute('id','upID-' + getters);

                selectGetter.appendChild(upDiv);

            console.log('executed up');

            //---------------------------------------------

            downDiv = document.createElement('div');

                downDiv.classList.add('down');
                downDiv.setAttribute('id','downID-' + getters);

                selectGetter.appendChild(downDiv);

            console.log('executed down');


        //---------------------------------------
        // Now showing output values

        let up = document.getElementById('upID-' + getters);
            nameDiv = document.createElement('div');
            ageDiv = document.createElement('div');
            genderDiv = document.createElement('div');

            spanDiv = document.createElement('span');
            spanDiv2 = document.createElement('span');

                nameDiv.setAttribute('id', 'nameout-' + getters);
                up.appendChild(nameDiv);

                spanDiv.setAttribute('id', 'seperator-1');
                up.appendChild(spanDiv);

                ageDiv.setAttribute('id', 'ageout-' + getters);
                up.appendChild(ageDiv);

                spanDiv2.setAttribute('id', 'seperator-2');
                up.appendChild(spanDiv2);

                genderDiv.setAttribute('id', 'genderout-' + getters);
                up.appendChild(genderDiv);

        console.log('up is done');

        //-------------------------------------

        let down = document.getElementById('downID-' + getters);
            aadharDiv = document.createElement('div');
            iconDiv = document.createElement('div');

                aadharDiv.setAttribute('id', 'aadharout-' + getters);
                down.appendChild(aadharDiv);

                iconDiv.setAttribute('id', 'icon-' + getters);
                down.appendChild(iconDiv);

        console.log('down is done');


        let close = document.getElementById('icon-' + getters);
            closeDiv = document.createElement('i');

                closeDiv.setAttribute('class', 'fa fa-times-circle');
                close.appendChild(closeDiv);

        console.log('close icon is working');

        //-------------------------

        var fullname = document.getElementById('full-name').value;
        var age = document.getElementById('age').value;
        var aadhar = document.getElementById('aadhar-num').value;

        let nameout = document.getElementById('nameout-' + getters);
        let ageout = document.getElementById('ageout-' + getters);
        let genderout = document.getElementById('genderout-' + getters);
        let aadharout = document.getElementById('aadharout-' + getters);

        let seperate = document.getElementById('seperator-1');
        let seperate1 = document.getElementById('seperator-2');

        seperate.innerText = ' | ';
        seperate1.innerText = ' | ';
        nameout.innerText = fullname;
        ageout.innerText = age;
        genderout.innerText = 'Female';
        aadharout.innerText = aadhar;
}

function rooms() {
    let room = document.getElementById('totalroom').value;
    let totalAmount = document.getElementById('total-amount');
    
    var total = (('Rs. ') + (room * 1000) + ' only');
    totalAmount.innerHTML = total;
}





// console.log("working");

// // This function is makein register page appear when clicked on button
// function create() {
//     let element = document.querySelector('.register-box');
//     let bodyelement = document.getElementById('first-section');

//     bodyelement.classList.add('show-body');
//     element.style.visibility = "visible";
// }

// // and this function is making them disappear again when clicked on cross icon
// function remove() {
//     let element = document.querySelector('.register-box');
//     let bodyelement = document.getElementById('first-section');

//     bodyelement.classList.remove('show-body');
//     element.style.visibility = "hidden";
// }

// //-----------------------------------
// // this is for login page

// function bringLogin() {
//     let change = document.querySelector('.login-page');
//     let bodyelement = document.getElementById('first-section');

//     bodyelement.classList.add('show-body');
//     change.style.opacity = 1;
// }

// function removeLogin() {
//     let change = document.querySelector('.login-page');
//     let bodyelement = document.getElementById('first-section');

//     bodyelement.classList.remove('show-body');
//     change.style.opacity = 0;
// }

// //-----------------------------------

// // payment method 

// function toggleUPI() {
//     cc = document.querySelector('.cc-form');
//     upi = document.getElementById('upi-box');
//     upiLabel = document.querySelector('#upi');
//     ccLabel = document.querySelector('#cc');

//     cc.style.display = 'none';
//     upi.classList.remove('upi-display-toggle');
    
//     upiLabel.style.backgroundColor = 'black';
//     upiLabel.style.color = '#efefef';
    
//     ccLabel.style.backgroundColor = '#efefef';
//     ccLabel.style.color = 'black';
// }

// function toggleCC() {
//     let cc = document.querySelector('.cc-form');
//     let upi = document.getElementById('upi-box');
//     upiLabel = document.querySelector('#upi');
//     ccLabel = document.querySelector('#cc');

//     upi.classList.add('upi-display-toggle');
//     cc.style.display = '';
    
//     upiLabel.style.backgroundColor = '#efefef';
//     upiLabel.style.color = 'black';
    
//     ccLabel.style.backgroundColor = 'black';
//     ccLabel.style.color = '#efefef';
// }


// //-------------------------------------------------------------------------

// //getting input and showing output in payment page

// function showOutput() {
//     let ul = document.getElementById('ul');
//     let div = document.createElement('div');

//     // this function is counting the number of getter
//     // classes in html code
    
//     function countGetters() {
//         let getter = document.getElementsByClassName('getter');
//         var result = getter.length;

//         return result;
//     }

//     const getters = (countGetters() + 1);

//     // fuction to check whether input field in empty or not

//     function empty() {
//         var fullname = document.getElementById('full-name').value;
//         var age = document.getElementById('age').value;
//         var aadhar = document.getElementById('aadhar-num').value;

//         if (fullname == "" || age == "" || aadhar == "") {
//             return true;
//         } else {
//             return false;
//         }
//     }

//         //-----------------------------------------------
//     //creating div with getter classname and unique id

//     if (empty() == false) {
//         div.classList.add('getter');
//         div.setAttribute('id', 'getterID-' + (getters));

//         ul.appendChild(div);

//     } else {
//         alert('Enter details to add guest');
//     }

//     console.log('executing-1');

//     //------------------------------------
//     // now time for nested up and down divs

//         let selectGetter = document.getElementById( 'getterID-' + (getters) ); 
//             upDiv = document.createElement('div');

//                 upDiv.classList.add('up-' + getters);
//                 upDiv.setAttribute('id','upID-' + getters);

//                 selectGetter.appendChild(upDiv);

//             console.log('executed up');

//             //---------------------------------------------

//             downDiv = document.createElement('div');

//                 downDiv.classList.add('down-' + getters);
//                 downDiv.setAttribute('id','downID-' + getters);

//                 selectGetter.appendChild(downDiv);

//             console.log('executed down');


//         //---------------------------------------
//         // Now showing output values

//         let up = document.getElementById('upID-' + getters);
//             nameDiv = document.createElement('div');
//             ageDiv = document.createElement('div');
//             genderDiv = document.createElement('div');

//                 nameDiv.setAttribute('id', 'nameout-' + getters);
//                 up.appendChild(nameDiv);

//                 ageDiv.setAttribute('id', 'ageout-' + getters);
//                 up.appendChild(ageDiv);

//                 genderDiv.setAttribute('id', 'genderout-' + getters);
//                 up.appendChild(genderDiv);

//         console.log('up is done');

//         //-------------------------------------

//         let down = document.getElementById('downID-' + getters);
//             aadharDiv = document.createElement('div');
//             iconDiv = document.createElement('div');

//                 aadharDiv.setAttribute('id', 'aadharout-' + getters);
//                 down.appendChild(aadharDiv);

//                 iconDiv.setAttribute('id', 'icon-' + getters);
//                 down.appendChild(iconDiv);

//         console.log('down is done');


//         let close = document.getElementById('icon-' + getters);
//             closeDiv = document.createElement('i');

//                 closeDiv.setAttribute('class', 'fa fa-times-circle');
//                 close.appendChild(closeDiv);

//         console.log('close icon is working');

//         //-------------------------

//         var fullname = document.getElementById('full-name').value;
//         var age = document.getElementById('age').value;
//         var aadhar = document.getElementById('aadhar-num').value;

//         let nameout = document.getElementById('nameout-' + getters);
//         let ageout = document.getElementById('ageout-' + getters);
//         let genderout = document.getElementById('genderout-' + getters);
//         let aadharout = document.getElementById('aadharout-' + getters);

//         nameout.innerText = fullname;
//         ageout.innerText = age;
//         genderout.innerText = 'Female';
//         aadharout.innerText = aadhar;
// }
