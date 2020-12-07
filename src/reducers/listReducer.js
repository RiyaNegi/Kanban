const InitialState = [
    {
        title: "To-do",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Bring milk from grocery store"
            },
            {
                id: 1,
                text: "Bring fruits from grocery store"
            }
        ]
    },
    {
        title: "Doing",
        id: 1,
        cards: [
            {
                id: 0,
                text: "Study for the mock unit test and practical exams coming this weekend before the deadline"
            }
        ]
    },
    {
        title: "Done",
        id: 2,
        cards: [
            {
                id: 0,
                text: "Review project thesis"
            },
            {
                id: 1,
                text: "Push all project codes on Git"
            },
            {
                id: 2,
                text: "Fix light bulb"
            },
            {
                id: 3,
                text: "Be awesome ;)"
            }
        ]
    }
]

const listReducer = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listReducer;