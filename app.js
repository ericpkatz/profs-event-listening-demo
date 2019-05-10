let things = [
  {
    id: 1,
    name: 'Foo'
  },
  {
    id: 2,
    name: 'Bar'
  },
  {
    id: 33,
    name: 'Bazz',
    favorite: true
  },
];

const callback = function(){
  console.log('document click');
}
document.addEventListener('click', callback);

setTimeout(function(){
  document.removeEventListener('click', callback);
}, 3000);

const thingList = document.querySelector('#things');
thingList.addEventListener('click', function(ev){
  ev.stopPropagation();
  console.log('click');
  if(ev.target.tagName === 'LI'){
    const id = ev.target.id;
    things = things.map(function(thing){
      if(thing.id === id*1){
        thing.favorite = !thing.favorite;
      }
      return thing;
    });
    render();
  }
});


function render(){
  const html = `
    ${
      things.map(function(thing){
        return `
          <li id='${thing.id}' class='${ thing.favorite ? "favorite" : ""}'>${ thing.name}</li>
        `;
      }).join('')
    }
  `;
  thingList.innerHTML = html;
}

render();
