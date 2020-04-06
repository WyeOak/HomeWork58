'use strict';


function hideSplashScreen() {
	document.getElementById('page-splash').hidden = true;
	document.body.classList.remove('no-scroll');
}

function showSplashScreen() {
	document.getElementById('page-splash').hidden = false;
	document.body.classList.add('no-scroll');
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


const post = new Post(1, user.id, "image.img", "news/news", 0, "11.11.1111");

const user2 = new User(2, "gena@gena.com", false);
authorize(user2);

const comment = new Comment(user2.id, post.id, "long text", "23.01.2019");

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