// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//SHARE

const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})


//for Liking pictures
const heartDOM = document.querySelector('.js-heart');
// initialized like to false when user hasn't selected
let liked = false;

// create a onclick listener
heartDOM.onclick = (event) => {
	//check if liked
	liked = !liked;                      // toggle the like ( flipping the variable)
	
	// this is what we clicked on
	const target = event.currentTarget;
	
	if (liked) {
		 //remove empty heart if liked and add the full heart
		target.classList.remove('far');
		target.classList.add('fas', 'pulse');
	} else {
		// remove full heart if unliked and add empty heart
		target.classList.remove('fas');
		target.classList.add('far');
	}
}

heartDOM.addEventListener('animationend', (event) => {
	event.currentTarget.classList.remove('pulse');
})

// COPY TEXT

function copyText() {      
    navigator.clipboard.writeText
        ("https://stackoverflow.com/");
}


// ==================  SIDEBAR  ====================

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications . notification-count').style.display = 'none';
        }
    })
})

// ==================  MESSAGES  ====================

// SEARCHES CHATS
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

// SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is cliked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// ==================  FRIEND REQUESTS  ====================

let body = document.body;
const followButtons = document.querySelectorAll(".follow-button");

followButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});

function followUnFollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow") button.innerText = "Unfollow";
  else button.innerText = "Follow";
}

// ==================  CREATE POST  ====================
function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }