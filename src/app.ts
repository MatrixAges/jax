class App {
	test: number

	constructor () {
		this.test = 1
	}

	private a (): number {
		const number: number = 1

		return number
	}

	public b (): number {
		return this.a()
	}
}
