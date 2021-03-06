function User (name='xMan', email='N/A', photoURL) {
    var avatars = [
	    "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
	    "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
	    "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
	    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
	    "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
	    "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
	    "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
	    "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
    ]

	var getAvatar = function () {
		return  avatars[Math.round(Math.random()*(avatars.length-1))]
	}
	this._name = name
	this._email = email
	this._photoURL = (photoURL) ? photoURL : getAvatar()

}

User.admin = {
	_photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
	name: "admin"
}

User.prototype.messageBox = document.body.appendChild(document.createElement('div'))
User.prototype.messageBox.classList.add('messageBoxStyle')
User.prototype.write = function (message='I can see you dude') {
	let icon_ = document.createElement('img')
	icon_.classList.add('icon')
	icon_.src = (arguments[1]) ? arguments[1]._photoURL : this._photoURL
	let msg = document.createElement('p')
	let __name = msg.appendChild(document.createElement('span'))
	__name.classList.add("nameStyle")
	__name.appendChild(document.createTextNode( (arguments[1]) ? arguments[1].name : this._name))
	msg.appendChild(document.createElement('br'))
	msg.appendChild(document.createTextNode(message))
	let msgBox = document.createElement('div')
	msgBox.classList.add('messageStyle')
	msgBox.appendChild(icon_)
	msgBox.appendChild(msg)
	User.prototype.messageBox.appendChild(msgBox)
	User.prototype.messageBox.scrollTop = User.prototype.messageBox.scrollHeight
}


var adminInputBox = document.body.appendChild(document.createElement('textarea'))
adminInputBox.classList.add('adminInputBox')
adminInputBox.rows =4

adminInputBox.onkeypress = function (event) {
	if(event.key === 'Enter' && !event.shiftKey) {
		event.preventDefault()
		User.prototype.write(event.target.value, User.admin)
		event.target.value=''
	}
}
