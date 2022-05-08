const general = (state = [], action) => {
    if (action.type == "SET_RECIPES") {
        console.log("the action is: ", action);
    }

    switch (action.type) {
        case "SET_CURRENT_SCREEN":
            return {
                ...state,
                current_screen: action.current_screen,
            };

        case "SET_RECIPES":
            return {
                ...state,
                recipes: action.recipes,
            };

        default:
            return state;
    }
};

export default general;
