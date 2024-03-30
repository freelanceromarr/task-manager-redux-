const StatusList = () => {
    return (
        <select class="lws-status">
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="complete" selected>Completed</option>
        </select>
    );
}

export default StatusList;