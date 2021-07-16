


const playerReducer = (state = { isAuthenticated: false }, action)=> {
    switch (action.type) {
        case "login": return {
            isAuthenticated: true
        }
        case "logout" : return {
            isAuthenticated:false
        }
        default: return state
    }
}

export default playerReducer