const foldersReducer = (state = { showContact: true, showProjects: false, showLinks: false }, action) => {
  switch(action.type) {
    case 'OPEN_CONTACT':
      console.log('contacts')
      return {
        ...state,
        showContact: true,
        showProjects: false,
        showLinks: false
      }
    case 'OPEN_PROJECTS':
      console.log('projects')
      return {
        ...state,
        showContact: false,
        showProjects: true,
        showLinks: false
      }
      case 'OPEN_LINKS':
        console.log('links')
      return {
        ...state,
        showContact: false,
        showProjects: false,
        showLinks: true
      }
    default:
      return state;
  }
}
 
export default foldersReducer;