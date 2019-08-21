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
            <label htmlFor="email">Member Email</label>
            <input
                type="text"
                name="email"
                placeholder="member email"
                value="member.email"
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
        </form>
    )
}