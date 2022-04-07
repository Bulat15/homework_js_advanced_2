const wordElement = document.querySelector('#word-form');
const likeElemnt = document.querySelector('#true');
const dizlikeElement = document.querySelector('#false');


let likes = Number(localStorage.getItem("likes"));
let dizlike = Number(localStorage.getItem("dizlikes"));

dizlikeElement.innerText = 'Отменено ' + JSON.stringify(Number(localStorage.getItem("dizlike")));
likeElemnt.innerText = 'Сделано ' + JSON.stringify(Number(localStorage.getItem("likes")));

let rootElem = document.querySelector("#cards");
rootElem.innerHTML = localStorage.getItem("cards");

// rootElem = JSON.parse(localStorage.getItem('rootElem'));

class Post {

    constructor(word, text) {
        this.word = word;
        this.text = text;
    }
    get(config) {
        const { tag, classList } = config;
        const rootElem = document.createElement(tag);
        classList && rootElem.classList.add(...classList);
        const wordElem = document.createElement('p');
        const textElem = document.createElement('p');
        const allText = document.createElement('div');
        const closeElem = document.createElement('div');
        const agreeElem = document.createElement('div');
        wordElem.innerText = this.word;
        wordElem.classList.add('text');
        textElem.innerText = this.text;
        textElem.classList.add('text');
        closeElem.classList.add('close');
        closeElem.innerHTML = '<i class="fa fa-times"></i>';
        agreeElem.classList.add('agree');
        agreeElem.innerHTML = '<i class="fa fa-check"></i>';

        allText.append(wordElem, textElem);
        rootElem.append(allText, closeElem, agreeElem);

        // closeElem.addEventListener('click', () => {
        //     dizlike++;
        //     localStorage.setItem("dizlike", dizlike);
        //     dizlikeElement.innerText = 'Отменено ' + JSON.stringify(Number(localStorage.getItem("dizlike")));
        //     rootElem.remove();
        // })

        // agreeElem.addEventListener('click', () => {
        //     likes++;
        //     localStorage.setItem("likes", likes);
        //     likeElemnt.innerText = 'Сделано ' + JSON.stringify(Number(localStorage.getItem("likes")));
        //     rootElem.remove();
        // })

        // localStorage.setItem('rootElem', JSON.stringify(rootElem));
        // JSON.parse(localStorage.getItem('rootElem'));
        return rootElem
    }


}

wordElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const postsPost = new Post(this.word.value, this.text.value);
    const postPostPost = postsPost.get({ tag: "div", classList: ['card'] });
    rootElem.append(postPostPost);

    var cards = rootElem.innerHTML;
    localStorage.setItem("cards", cards);
});

document.addEventListener('click', function (e) {
    e = e || window.event;
    target = e.target || e.currentTarget;

    if (target.classList.contains('close')) {
        dizlike++;
        localStorage.setItem("dizlike", dizlike);
        dizlikeElement.innerText = 'Отменено ' + JSON.stringify(Number(localStorage.getItem("dizlike")));
        target.parentNode.remove();
    } else if (target.classList.contains('agree')) {
        likes++;
        localStorage.setItem("likes", likes);
        likeElemnt.innerText = 'Сделано ' + JSON.stringify(Number(localStorage.getItem("likes")));
        target.parentNode.remove();
    }

    var cards = rootElem.innerHTML;
    localStorage.setItem("cards", cards);
}, false); 
