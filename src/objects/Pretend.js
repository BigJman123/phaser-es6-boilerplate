export default {

	direction: {
		left: false,
        right: false,
        up: false,
        down: false,
	},

	move(dir, at, duration) {
		setTimeout(() => {this.direction[dir] = true;}, at);
        setTimeout(() => {this.direction[dir] = false;}, at + duration);			
	},

	fire(at) {
		setTimeout(() => shootBullet(), at);
	},

}
