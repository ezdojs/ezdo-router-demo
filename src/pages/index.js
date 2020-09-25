import ez from 'ezdo'
import './index.css'
// import Router from 'ezdo-router'
import Router from 'aut-router'

class Page1 extends ez.Node
{
    constructor()
    {
        super()
        
        this.addClass('test-router')
        this.text = '点我切换到 Page2'
        this.on('click', this.onclick, this)
    }

    onclick()
    {
        ez.router.path = '/a'
    }
}

class Page2 extends ez.Node
{
    constructor()
    {
        super()

        this.addClass('test-router')
        this.text = '点我切换到 Page1'
        this.on('click', this.onclick, this)
    }

    onclick()
    {
        ez.router.path = '/'
    }
}

class Home extends ez.Node {
    constructor() {
        super()

        this.addClass('home')

        this.text = ''
        for(var i = 0; i < 2; i++) {
            let bar = new ez.Node()
            let utype = i % 2 === 0 
            bar.text = utype
                ? `编号00${i}向您报道` 
                : `收到，归队，官方文档抄100遍`
            bar.addClass(utype ? 'soldier': 'senior')
            bar.addClass('bar')
            this.add(bar)
        }

        // 来这里抄 ezdojs.github.io

        let router = new Router({
            view: this,
            routes: [
                { path: '/', class: Page1 },
                { path: '/a', class: Page2 }
            ]
        })

        router.path = '/'

        ez.use(router)
    }
}


export default Home