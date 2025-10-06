// Need a default project that auto opens when the app is run

export const createProject = () => {
    return {
        projectTitle,
        projectDescription,
        projectDueDate,
        projectPriority,
        projectToDos: [],
        isDefault: false,
        addToDo(/* Pass in object to add to projectToDos array */) {
            
        }
    }
}