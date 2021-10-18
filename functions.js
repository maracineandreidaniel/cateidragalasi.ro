let createCard=(obj)=>{
    let card=document.createElement('section');
    card.className="caine";
    let name=document.createElement('h3');
    name.innerText=obj.nume;
    name.className="nume";
    let hr=document.createElement('hr');
    let hr2=document.createElement('hr');
    let email=document.createElement('p');
    email.className="email";
    email.innerText=obj.email;
    let data=document.createElement('p');
    data.innerText=obj.dataAdoptie;
    data.className="dataAdoptie";
    card.appendChild(name);
    card.appendChild(hr);
    card.appendChild(email);
    card.appendChild(hr2);
    card.appendChild(data);
    return card;
};

let ataseazaCarduri=(arr)=>{
    let caini=document.querySelector('.caini');
    caini.innerHTML="";
    for(let i=0;i<arr.length;i++)
        caini.appendChild(createCard(arr[i]));
};

let carduriPagina=(nrCarduri,pagina,arr)=>{
    let carduri=[];
    for(let i=(pagina-1)*nrCarduri;i<=(pagina*nrCarduri)-1;i++)
        carduri.push(arr[i]);
    return carduri;
};


let ataseazaCarduriButon=(width,buton,arr)=>{
    if(width<720){
        ataseazaCarduri(carduriPagina(3,buton,arr));
    }
    else if(width<901){
        ataseazaCarduri(carduriPagina(9,buton,arr));
    }
    else{
        ataseazaCarduri(carduriPagina(12,buton,arr));
    }
};

let ataseazaNrButoane=(nr)=>{
    let butoane=document.querySelector('.butoane');
    for(let i=1;i<=nr;i++){
        let buton=document.createElement('a');
        buton.href="#";
        buton.className="buton";
        buton.innerText=i;
        butoane.appendChild(buton);
    }
};



