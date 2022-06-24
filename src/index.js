import displayNewPoem from "./displayNewPoem";
import './styles/reset.scss';
import './styles/main.scss';
import book from './images/book.svg';


const bookImg = document.getElementById('image');

bookImg.src = book


const poemBtn = document.getElementById('poemBtn')
poemBtn.addEventListener('click', displayNewPoem)

displayNewPoem()