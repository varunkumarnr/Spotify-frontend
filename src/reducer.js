export const initialState = {
    user: null,
    playlists : [],
    playing : false,
    item : null,
    //remove after build
    token: "BQDe6Sx4pBLvrp3XC1fQhMOk1gVt0Y466XuW1BT4iVd-opmd_FFDR7BaDo4Ky9beeCSUdTEIK3NaFkHbt6hj2YtAaSmL8dHGm2wBEyMmc3JIx2IigG2J63h17GjxT39CS2PHixROnPIpEtNwEsK_26TGZWf1TJs",
};
export const reducer = (state,action) => {
    //console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
            case 'SET_TOKEN':
                return{
                    ...state,
                    token : action.token
                }
                case 'SET_PLAYLISTS':
                    return{
                        ...state,
                        playlists : action.playlists
                    }
        default: 
        return state;
    }
};