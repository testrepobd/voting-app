/**
 * Created by Owner on 1/9/2017.
 */
import {setEntries,next,vote,INITIAL_STATE} from '../src/core';
export default function reducer(state=INITIAL_STATE,action){
    switch(action.type){
        case "SET_ENTRIES":
            return setEntries(state,action.entries);
        case "NEXT":
            return next(state);
        case "VOTE":
            return state.update("vote",(voteState)=>vote(voteState,action.entry));
        default:
            return state;
    }
}