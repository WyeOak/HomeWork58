'use strict';


function hideSplashScreen() {
	document.getElementById('page-splash').hidden = true;
	document.body.classList.remove('no-scroll');
}

function showSplashScreen() {
	document.getElementById('page-splash').hidden = false;
	document.body.classList.add('no-scroll');
}

function createCommentElement(comment) {
	let elem = document.createElement('div');
	elem.classList.add('py-2');
	elem.classList.add('pl-3');
	elem.innerHTML = '<a href="#" class="muted">'  + comment.comentator + '</a>' + 
	'<p>' + comment.comment + '</p>';
	return elem;
}


function createPostElement(post) {
	let elem = document.createElement('div');
	elem.classList.add('card');
	elem.classList.add('my-3');
	elem.innerHTML = 
	'<div>' +
		'<img class="d-block w-100" src="' + post.image + '" alt="Post image">' +
 	'</div>' +
  	'<div class="px-4 py-3">' +
		'<div class="d-flex justify-content-around">' +
		  '<span class="h1 mx-2 text-danger">' +
			'<i class="fas fa-heart"></i>' +
		  '</span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="far fa-heart"></i>' +
		  '</span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="far fa-comment"></i>' +
		  '</span>' +
		  '<span class="mx-auto"></span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="far fa-bookmark"></i>' +
		  '</span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="fas fa-bookmark"></i>' +
		  '</span>' +
		'</div>' +
	'<hr>' +
	'<div>' +
	  '<p>' + post.descriprtion + '</p>' +
	'</div>' +
	'<hr>' +
	'<div id="comments">' +
	'<div class="py-2 pl-3">' +
				  '<a href="#" class="muted">' + 'Kural:' + '</a>' +
				  '<p>' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + '</p>' +
				'</div>' +
	'</div>' + '</div>';
	return elem;
}
hideSplashScreen();

function addPost(commentElem) {
	document.getElementById('posts-container').append(commentElem);
}


class User {
	constructor(id, name, email, isAuthorised) {
		this.id = id,
		this.name = name,
		this.email = email,
		this.isAuthorised = isAuthorised;
	}
};

//when creating a post, we take id from an authorized user and transfer it to the backend for adding to the database 
class Post {
	constructor(id, userId, image, descriprtion, likes, date) {
		this.id = id,
		this.userId = userId,
		this.image = image,
		this.descriprtion = descriprtion,
		this.likes = likes;
		this.date = date
	}
};


class Comment {
	constructor(commentator, commentFor, comment, date) {
		this.comentator = commentator,
		this.commentFor = commentFor,
		this.comment = comment,
		this.date = date
	}
};

//methods for authorization, creating new posts, output and for like

function newPost(i) {
	return new Post(i+2, user.id, "image" + i + ".img", "text" + i, 0, "2" + i + ".01.2019");
};

//function for like or unlike post
function like (post, postId, isLiked) {
	if(post.id === postId) {
		isLiked ? post.likes++ : post.likes--;
		console.log(post);
	};
};

//function for print posts
function toPrint(post) {
	console.log(post);
};


// function for auth
function authorize(user) {
	user.isAuthorised = true;
}
const user = new User(1, "Vasya", "vas@vas.com", false);
authorize(user);


const post = new Post(1, user.id, "https://www.meme-arsenal.com/memes/753f0b3407ee91d34463cf8808f3904e.jpg", "", 0, "11.11.1111");

const user2 = new User(2, "helpme@please.com", false);
authorize(user2);


const comment = new Comment(user2.name, post.id, "xD", "11.11.1111");
let cont = createPostElement(post);
addPost(cont);
document.getElementById('comments').append(createCommentElement(comment));

console.log(user);
console.log(post);
console.log(user2);
console.log(comment);


let posts = [];

for(let i = 0; 6 > i; i++) {
	posts[i] = newPost(i);
};


posts.forEach(toPrint);


let postId = 4;

let isLiked = true;

for(let i = 0; i < posts.length; i++) {
	like(posts[i], postId, isLiked);
};