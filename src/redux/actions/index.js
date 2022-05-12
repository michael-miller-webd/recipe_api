export const setCurrentScreen = (current_screen) => ({
    type: "SET_CURRENT_SCREEN",
    current_screen,
});


export const setRecipesRedux = (recipes) => ({
    type: "SET_RECIPES",
    recipes,
});


export const setSearch = (search) => ({
    type: "SET_SEARCH",
    payload: search,
});
