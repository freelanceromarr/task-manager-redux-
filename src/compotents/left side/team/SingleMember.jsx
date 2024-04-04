const SingleMember = ({team}) => {
    const {id, name, avatar} = team || {};
    return (
        <div class="checkbox-container">
            <img src={avatar} class="team-avater" alt="team" />
            <p class="label">{name}</p>
        </div>
    );
}

export default SingleMember;