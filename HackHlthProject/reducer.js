const INITIAL_STATE = {
    points: 9998,
    isChecked: { "biking": false, "lunch": false, "sleep": false, "swimming": false },
    isShown: { "biking": true, "lunch": true, "sleep": true, "swimming": false },
    selectedAction: ""
};

const updateHomeState = partialHomeState => (
    {
        type: 'UPDATE_HOME_STATE',
        payload: partialHomeState,
    }
);

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_HOME_STATE':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export { homeReducer, updateHomeState };

