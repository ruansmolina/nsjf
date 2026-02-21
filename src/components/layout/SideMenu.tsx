import { NavLink } from "react-router"

interface optionsType {
  name: string,
  nav: string,
  children?: optionsType[]
}
function SideMenu() {
  const options: optionsType[] = [
    {
      name: 'Painel',
      nav: '/dashboard'
    },
    {
      name: 'Produtos',
      nav: '/products'
    }, {
      name: 'Vendas',
      nav: '/sales',
      children: [{
        name: 'Calcular venda',
        nav: '/calc'
      }, {
        name: 'Historico',
        nav: '/hystory'
      }]
    }

  ]
  const generateLinks = () => {
    return options.map((opt) => {
      if (opt.children) {
        return <li>
          <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> {opt.name} </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              {opt.children.map((child) => {
                return <li>
                  <NavLink to={opt.nav + child.nav} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    {child.name}
                  </NavLink>
                </li>
              })}
            </ul>
          </details>
        </li>
      } else {
        return <li>
          <NavLink to={opt.nav} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            {opt.name}
          </NavLink>
        </li>
      }
    })
  }
  return (
    <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>

        <ul className="mt-6 space-y-1">
          {generateLinks()}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img alt="" src="https://picsum.photos/200/300" className="size-10 rounded-full object-cover" />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Name Example</strong>

              <span> name@example.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>);
}

export default SideMenu;