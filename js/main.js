var contacts = [];
var addButton = document.getElementById('addContact');
var editButton = document.getElementById('editContact');
var dontE = false;
var Eid;

editButton.addEventListener("click",function () {
    var genderSelect = document.getElementById("editGender");

    console.log(Eid);
    contacts[Eid].name = document.getElementById("editName").value;
    contacts[Eid].phone = document.getElementById("editPhone").value;
    contacts[Eid].gender = genderSelect.selectedIndex;
    contacts[Eid].email = document.getElementById("editEmail").value;
    contacts[Eid].address = document.getElementById("editAddress").value;
    UI();
    document.getElementById('editModal').style.display = "none";
});

addButton.addEventListener("click",function () {
    console.log(document.getElementById('contactName').value);
//   alert('jell');
    var genderSelect = document.getElementById("contactGender");
    var contact = {
        name : document.getElementById('contactName').value,
        gender : genderSelect.selectedIndex,
        phone : document.getElementById('contactPhone').value,
        email : document.getElementById('contactEmail').value,
        address : document.getElementById('contactAddress').value
    };
    contacts.push(contact);
    
    UI();
    clearInputs();
    document.getElementById('myModal').style.display = "none";
})
function UI(){
    document.getElementById("cards-container").innerHTML = "";
    for (let index = contacts.length - 1 ; index >= 0; index--) {
        const element = contacts[index];
        updateUI(element,index);
        
    }
}
function clearInputs() {
    document.getElementById('contactName').value = '';
    document.getElementById("contactGender").selectedIndex  = "0";
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactAddress').value = '';
}
document.onload = () => {
    showMessage();
    clearInputs();
}
function edit(index) {
    if(!dontE){
        console.log("edit"+index);
        dontE = false;
        Eid = index;
         console.log(contacts[index]);
        console.log("editGender"+contacts[index].gender);
        document.getElementById("editName").value = contacts[index].name;
        document.getElementById("editGender").selectedIndex = contacts[index].gender;
        document.getElementById("editPhone").value = contacts[index].phone;
        document.getElementById("editEmail").value = contacts[index].email;
        document.getElementById("editAddress").value = contacts[index].address;
        document.getElementById('editModal').style.display = "block";
    }
    dontE = false;
}
function updateUI(person,index) {
    var genderOptions = document.getElementById("contactGender").options;
    let removeBtn = document.createElement("span");
    let times = document.createTextNode("x");
    removeBtn.appendChild(times);
    var attr = "removeContact("+index+")";
    removeBtn.setAttribute("class","close")
    removeBtn.setAttribute("onclick",attr)
    let node = document.createElement("div");
    let cardImg = document.createElement("div");
    let cardDetails = document.createElement("div");
    let content = document.createTextNode('Name');
    let img = document.createElement("img");
    // let imgAtr = document.createAttribute('src');
    // imgAtr.value = 'images/icon.png';

    if(person.gender==2)
    img.setAttribute("src",'images/icon_female.png');
    else
    img.setAttribute("src",'images/icon_male.png');
    

    node.classList = 'card';
    node.setAttribute('onclick','edit('+index+')');
    cardImg.className = "card-img";
    cardDetails.className = 'card-details';

    cardDetails.appendChild(removeBtn);
    let details = document.createElement("p");
    let br = document.createElement("br");


    let nameD = document.createElement("div");
    let name = document.createElement("b");
    let nameP = document.createTextNode("Name: ");
    let nameT = document.createTextNode(person.name);
    name.appendChild(nameP);
    nameD.appendChild(name);
    nameD.appendChild(nameT);
    details.appendChild(nameD);


    
    let genderD = document.createElement("div");
    let gender = document.createElement("b");
    let genderP = document.createTextNode("Gender: ");
    let genderT = document.createTextNode(genderOptions[person.gender].text);
    gender.appendChild(genderP);
    genderD.appendChild(gender);
    genderD.appendChild(genderT);
    details.appendChild(genderD);


    
    let phoneD = document.createElement("div");
    let phone = document.createElement("b");
    let phoneP = document.createTextNode("Phone: ");
    let phoneT = document.createTextNode(person.phone);
    phone.appendChild(phoneP);
    phoneD.appendChild(phone);
    phoneD.appendChild(phoneT);
    details.appendChild(phoneD);

    let emailD = document.createElement("div");
    let email = document.createElement("b");
    let emailP = document.createTextNode("Email: ");
    let emailT = document.createTextNode(person.email);
    email.appendChild(emailP);
    emailD.appendChild(email);
    emailD.appendChild(emailT);
    details.appendChild(emailD);

    let addressD = document.createElement("div");
    addressD.setAttribute('text-align','justify');
    let address = document.createElement("b");
    let addressP = document.createTextNode("Address: ");
    let addressT = document.createTextNode(person.address);
    address.appendChild(addressP);
    addressD.appendChild(address);
    addressD.appendChild(addressT);
    details.appendChild(addressD);

    cardDetails.appendChild(details);

    cardImg.appendChild(img);
    node.appendChild(cardImg);
    node.appendChild(cardDetails);
    document.getElementById("cards-container").appendChild(node)
    showMessage();
}
function removeContact(id) {

   
    var confirmDelete = confirm("Are you sure you want to delete "+ contacts[id].name+" from your address book?");
    if (confirmDelete == true) {
        dontE = true;
    var contactsD = document.getElementById("cards-container");
    contactsD.removeChild(contactsD.childNodes[id]);
    //console.log("About to delete "+contacts[id].name);
    contacts.splice(id,1);

  
    document.getElementById("cards-container").innerHTML = "";
    for (let index = 0; index < contacts.length; index++) {
      
        const element = contacts[index];
        updateUI(element,index);
        
    }
    showMessage();
    } else{
        dontE = true;
    }
    
}

function showMessage() {

    var option = contacts.length;
    if(option > 0){
        document.getElementById("message").setAttribute('hidden','hidden');
    }else{
        document.getElementById("message").removeAttribute('hidden');
    }
}