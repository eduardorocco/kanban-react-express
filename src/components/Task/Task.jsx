export default function Task({ dataTask }) {
    const { task } = dataTask
    return (
        <div>
            <p>{task}</p>
        </div>
    )
}