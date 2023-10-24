export const addTodo = (username,name,email,mobile) => {
    return {
        type: "ADD_TODO",
        username:username,
        name:name,
        email:email,
        mobile:mobile,
    };
};

export const editTodo = (id,username,name,email,mobile) => {
    return {
        type: "EDIT_TODO",
        id: id,
        username: username,
        name:name,
        email:email,
        mobile:mobile
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    };
};
