import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/AddProject.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/add',
		name: 'add',
		component: AddProject
	},
	{
		path: '/edit/:id',
		name: 'edit',
		component: () => import('../views/EditProject.vue'),
		props: true
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
