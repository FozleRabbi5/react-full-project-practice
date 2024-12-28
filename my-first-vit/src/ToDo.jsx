export default function Todo({taskName, isDone}){
    return (
        <h1>Task is { isDone ? 'Done': 'Work on'}</h1>
    )
};

