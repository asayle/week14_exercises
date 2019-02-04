const one = {
	template: `

	<div class='text-center'>
		<h3>This is an illustration by Agnes Ernoult</h3>
		<img class='img-fluid' src='img/agnes.jpg' alt='an illustration by Agnes Ernoult'>
	</div>`
}

const two = {
	template: `
	
	<div class='text-center'>
		<h3>This is an illustration by Bjorn von Schlippe</h3>
		<img class='img-fluid' src='img/bjorn.jpg' alt='an illustration by Bjorn von Schlippe'>
	</div>`
}

const three = {
	template: `
	
	<div class='text-center'>
		<h3>This is an illustration by Gary Taxali</h3>
		<img class='img-fluid' src='img/gary.jpg' alt='an illustration by Gary Taxali'>
	</div>`
}

const router = new VueRouter ({
	routes: [
		{
			path: '/one',
			component: one
		},
		{
			path: '/two',
			component: two
		},
		{
			path: '/three',
			component: three 
		},
	]
})

var routerTest= new Vue({
	router,
	el:'#app',
	data: {

	},
	methods: {

	}
}).$mount('#app')