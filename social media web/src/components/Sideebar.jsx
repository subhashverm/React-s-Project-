const Sidebar=({selecttab ,setselecttab})=>{
    return (
    <>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar " 
    style={{width: "280px"}}> 
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> <svg class="bi pe-none me-2" width="40" height="32" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg> <span class="fs-4">Sidebar</span> </a> <hr/> <ul class="nav nav-pills flex-column mb-auto">
             <li class="nav-item" onClick={()=>setselecttab("Home")}> 
            <a href="#" class={`nav-link link-body-emphasis ${selecttab==="Home"&& "active"}`} aria-current="page"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#home"></use></svg>
Home
</a> </li> <li class="nav-item" onClick={()=>setselecttab("Create Post")}>
    <a href="#" class={`nav-link link-body-emphasis ${selecttab==="Create Post" && "active"}`}> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#speedometer2"></use></svg>
Create Post
</a> </li> <li> </li> <li> </li> <li>  </li> </ul> <hr/> <div class="dropdown"> <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/> <strong>mdo</strong> </a> <ul class="dropdown-menu text-small shadow"> <li><a class="dropdown-item" href="#">New project...</a></li> <li><a class="dropdown-item" href="#">Settings</a></li> <li><a class="dropdown-item" href="#">Profile</a></li> <li><hr class="dropdown-divider"/></li> <li><a class="dropdown-item" href="#">Sign out</a></li> </ul>
 </div>
  </div>
    </>
    );
}
export default Sidebar;