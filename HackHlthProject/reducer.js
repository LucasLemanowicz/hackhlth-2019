const INITIAL_STATE = {
    points: 998,
    isChecked: { "walking": false, "lunch": false, "sleep": false, "parking": false },
    isShown: { "walking": true, "lunch": true, "sleep": true, "parking": false },
    selectedAction: "walking"
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

