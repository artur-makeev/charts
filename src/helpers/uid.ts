function makeUid(): () => number {
	let id = 0;
	return function getUniqueId() {
		return id++;
	};
}

export const uid = makeUid();
