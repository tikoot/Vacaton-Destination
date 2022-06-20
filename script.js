let detailsForm = document.querySelector('#destination_details_form');
detailsForm.addEventListener('submit', handleForSubmit);

function handleForSubmit(event){
    event.preventDefault();
    //extract the value from each form field
    let destName = event.target.elements['name'].value;
    let destLocation = event.target.elements['location'].value;
    let destPhoto = event.target.elements['photo'].value;
    let destDescription = event.target.elements['description'].value;
    
    //clear out the form fields
    for (let i = 0; i < detailsForm.length; i++){
      detailsForm.elements[i].value = '';
    }
    let destCard = createDestinationCard(destName,destLocation,destPhoto,destDescription);
    let wishListContainer = document.getElementById('destinations_container');

    if(wishListContainer.children.length === 0){
        document.querySelector('#title').innerHTML = "My Wish List";
    }
    //if needed,change the header at the top of the destination list
    //add the card
    document.querySelector('#destinations_container').appendChild(destCard);
}


function createDestinationCard(name,location,photo,desc){
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);

    let constantPhotoUrl = 'images/signpost.jpg';

    if(photo.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    }
    else {
        img.setAttribute('src', photo);
    }

    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = 'card_body';

    let cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    let cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);
    
    if(desc.length !== 0){
        let cardText = document.createElement('p');
        cardText.className = 'card_text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Remove";

    deleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(deleteBtn);
    card.appendChild(cardBody);

    return card; 
}

function removeDestination(event){
    let card = event.target.parentElement.parentElement;
    card.remove();
}