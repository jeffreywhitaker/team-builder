import React, {useState, useEffect} from 'react';

export default function Form(props) {
    const [member, setMember] = useState({name: "", email: "", role: ""});
    const changeHandler = event => {
        console.log(event.target.value);
        setMember(
            { 
                ...member, 
                [event.target.name]: event.target.value
            }
        );
    };
    const submitForm = event => {
        event.preventDefault();
        if (props.memberToEdit){
            props.editMember(member);
        } else {
            const newMember = {
                ...member,
                id: Date.now()
            };
            props.addNewMember(newMember);
        }
        setMember({name: "", email: "", role: "" })
    };

    useEffect(() => {
        console.log('ASFDAFFDS' + props.memberToEdit)
        if (props.memberToEdit) {
            setMember(props.memberToEdit)
        } else {
            console.log('clearing');
            setMember({name: "", email: "", role: "" })
        }
      }, [props.memberToEdit]);

      console.log(member);
    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="name">Member Name</label>
            <input
                type="text"
                name="name"
                placeholder="name"
                value={member.name || ''}
                onChange={changeHandler}
                autoComplete="off"
            />
            <label htmlFor="birthday">Member Birthday</label>
            <input
                type="text"
                name="birthday"
                placeholder="birthday"
                value={member.birthday || ''}
                onChange={changeHandler}
                autoComplete="off"
            />
            <label htmlFor="email">Member Email</label>
            <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={member.email || ''}
                onChange={changeHandler}
                autoComplete="off"
            />
            <label htmlFor="role">Member Role</label>
            <input
                type="text"
                name="role"
                placeholder="role"
                value={member.role || ''}
                onChange={changeHandler}
                autoComplete="off"
            />
            <label htmlFor="occupation">Member Occupation</label>
            <input
                type="text"
                name="occupation"
                placeholder="occupation"
                value={member.occupation || ''}
                onChange={changeHandler}
                autoComplete="off"
            />
            <label htmlFor="location">Member Location</label>
            <input
                type="text"
                name="location"
                placeholder="location"
                value={member.location || ''}
                onChange={changeHandler}
                autoComplete="off"
            />
            <button className="button" type="submit">{
                props.memberToEdit ? 'Edit' : 'Add'
            } Team Member</button>
        </form>
    )
}