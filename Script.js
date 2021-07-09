// const user = {
//     name: 'Raphael',
//     username: 'raphael123',
//     email: 'emefeke@gmail.com',
//     age: 35,
//     blog: ['this post','go well','swift move'],
//     greet(){
//         console.log(`Hello ${this.name}`);
//         //console.log(`$`)
//     },
//     login(){
//         console.log(`${this.name} is logged in`);
//     },
//     logout(){
//         console.log(`You are logged out`);
//     }
// }
// class user{
    
// }
const htmlBody = document.getElementById('body');
const ul = document.createElement('ul');
//const uii = document.getElementById('ul')
fetch('https://randomuser.me/api/?results=10')
.then((res) => {
    return res.json();
})
.then((data) => {
    let users = data.results
    return users.map((user) => {
        const li =document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');

        htmlBody.appendChild(ul);
        ul.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
        let firstName = user.name.first;
        let lastName = user.name.last;
        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
    });
    //console.log(data.results);
})
.catch((error) =>  {
    console.log(error);
}
)