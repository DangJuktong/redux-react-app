import initialState from '../states/courseTabList'

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COURSE_FIELD':
            return {
                ...state,
                curField: action.field
            }
        default: 
            return state
    }
}