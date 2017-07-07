		//然后，创建两个组件构造器circle和information：
		var circle = Vue.extend({
			template: '#circle',
			data: function() {
				return {
					msg: 'Hello, vue router!'
				}
			}
		})

		var information = Vue.extend({
			template: '#information'
		})
		var service = Vue.extend({
			template: '#service'
		})
		var my = Vue.extend({
			template: '#my'
		})

		//第二步 调用构造器VueRouter，创建一个路由器实例router。
		var router = new VueRouter()
		
//第三步： 调用router的map方法映射路由，每条路由以key-value的形式存在，key是路径，value是组件。
// 例如：'/circle'是一条路由的key，它表示路径；{component: circle}则表示该条路由映射的组件。
		router.map({
			'/circle': {
				component: circle
			},
			'/information': {
				component: information
			},
			'/service': {
				component: service
			},
			'/my': {
				component: my
			}

		})
// 应用在首次运行时右侧是一片空白，应用通常都会有一个首页，例如：circle页。
// 使用router.redirect方法将根路径重定向到/circle路径：
		router.redirect({
			'/': '/circle'
		})

		/*第六步： 启动路由  */
		var App = Vue.extend({})
		router.start(App, '#app');