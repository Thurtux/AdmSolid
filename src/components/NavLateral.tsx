import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

function NavLateral() {
    const [isOpen, setIsOpen] = createSignal(false);
  
    return (
        <div class="flex">
        <div class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
          <nav class="p-4">
            <h1 class="text-xl font-semibold text-indigo-400">Admin Center</h1>
            <br />
            <button class="btn">Dashboard</button>
            <br/>
            <br/>
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1">Produtos</div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Adicionar</a></li>
            <li><a>Inspecionar</a></li>
            <li><a>Editar</a></li>
            </ul>
            </div>

            
            
            
          </nav>
        </div>

      </div>
    );
  }
  
  export default NavLateral;