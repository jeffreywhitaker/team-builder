import React, {useState} from 'react';

export default function Form(props) {
    const [member, setMember] = useState({Name: "", Email: "", Role: ""});
    const changeHandler = event => {
        console.log(event.target.value);
        setMember({ ...member, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({Name: "", Email: "", Role: "" })
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Member Name</label>
            <input
                type="text"
                name="name"
                placeholder="member name"
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor="birthday">Member Birthday</label>
            <input
                type="text"
                name="birthday"
                placeholder="member birthday"
                value={member.birthday}
                onChange={changeHandler}
            />
            <label htmlFor="email">Member Email</label>
            <input
                type="text"
                name="email"
                placeholder="member email"
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">Member Role</label>
            <input
                type="text"
                name="role"
                placeholder="member role"
                value={member.role}
                onChange={changeHandler}
            />
            <label htmlFor="occupation">Member Occupation</label>
            <input
                type="text"
                name="occupation"
                placeholder="member occupation"
                value={member.occupation}
                onChange={changeHandler}
            />
            <label htmlFor="location">Member Location</label>
            <input
                type="text"
                name="location"
                placeholder="member location"
                value={member.location}
                onChange={changeHandler}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}